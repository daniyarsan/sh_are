@extends('admin/layouts/main')

@section('styles')
    <link rel="stylesheet" href="{{asset('/assets/admin/css/datatables.css')}}" />
@endsection
@section('scripts')
    <script src="{{asset('/assets/admin/js/datatable/datatables/jquery.dataTables.min.js')}}"></script>
    <script>
        function deleteRecord(id) {
            if (confirm('Вы уверены, что хотите удалить эту запись?')) {
                $.ajax({
                    url: `/gentlemanager/application/delete/${id}`,
                    type: 'DELETE',
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') // CSRF токен
                    },
                    success: function(response) {
                        alert('Запись успешно удалена!');
                        $('#application').DataTable().ajax.reload(); // Обновляем таблицу
                    },
                    error: function(xhr) {
                        $('#application').DataTable().ajax.reload();
                    }
                });
            }
        }

        $(document).ready(function() {
            let filter = "{{ request()->get('filter') }}"; // Get the 'filter' parameter

            // Define your dynamic routes
            const newRoute = "{{ route('admin.application.api.new') }}";
            const finishedRoute = "{{ route('admin.application.api.finished') }}";
            const allRoute = "{{ route('admin.application.api.all') }}";

            // Dynamically choose the URL based on the filter
            let ajaxUrl = allRoute; // Default URL
            if (filter === 'new') {
                ajaxUrl = newRoute;
            } else if (filter === 'finished') {
                ajaxUrl = finishedRoute;
            }

            $('#application').dataTable({
                'ajax': {
                    'url': ajaxUrl,
                    'dataSrc': function (json) {
                        // DataTables ожидает массив, поэтому возвращаем json.data
                        return json.data || [];
                    }
                },
                'serverSide': true, // Включаем серверную обработку
                'processing': true, // Включаем отображение "загрузки"
                'columns': [
                    { 'data': 'id' },
                    { 'data': 'name' },
                    {
                        data: 'story_request', title: 'Story Request', 'render': function(data, type, row) {
                            if (type === 'display' && data) {
                                return data.length > 50 ? data.substring(0, 50) + '...' : data;
                            }
                            return data;
                        },
                    },
                    { data: 'invested.formatted', title: 'Invested' },
                    { data: 'status', title: 'Status' },
                    { data: 'created_at', title: 'Created At' },
                    {
                        'data': null, // Для кастомного поля
                        'title': 'Actions',
                        'orderable': false, // Отключаем сортировку
                        'render': function(data, type, row) {
                            return `
<a href="{{route('admin.application.edit', '')}}/${row.id}" class="btn btn-outline-success btn-xs"><i class="fa fa-pencil"></i></a>
       <button type="button" class="btn btn-outline-danger btn-xs" onclick="deleteRecord(${row.id})">
            <i class="fa fa-trash"></i>
        </button>

                    `;
                        },
                    },

                ],
                'paging': true,         // Включить пагинацию
                'pageLength': 10,       // Количество записей на странице
                'lengthChange': true,   // Позволяет пользователю менять количество записей на странице
                'searching': true,      // Включить поиск
                'ordering': true,       // Включить сортировку
                'info': true,           // Показывать информацию о количестве записей
                'autoWidth': false
            });
        });
    </script>
    {{--    <script src="{{asset('/assets/admin/js/datatable/datatables/datatable.custom.js')}}"></script>--}}
@endsection


@section('content')
    <x-admin.breadcrumb title="Applications">
        <li class="breadcrumb-item active"><a href="{{route('admin.application.index')}}">Список обращений</a></li>
    </x-admin.breadcrumb>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 project-list">
                <div class="card">
                    <div class="row">
                        <div class="col-md-6 p-0">
                            {{--                            {{dump(url()->current())}}--}}
                            {{--                            {{dump(url()->full())}}--}}
                            {{--                            {{dump(Request::path())}}--}}
                            {{--                            {{dump(Request::is('admin/project'))}}--}}
                            <ul class="nav nav-tabs border-tab" id="top-tab" role="tablist">
                                <li class="nav-item"><a href="{{route('admin.application.index')}}" class="nav-link {{!request()->get('filter') ? 'active' : ''}}"><i class="fa fa-book"></i>Все</a></li>
                                <li class="nav-item"><a href="{{route('admin.application.index')}}?filter=new" class="nav-link {{request()->get('filter') == 'new' ? 'active' : ''}}"><i class="fa fa-building"></i>Ожидают рассмотрения</a></li>
                                <li class="nav-item"><a href="{{route('admin.application.index')}}?filter=finished" class="nav-link {{request()->get('filter') == 'finished' ? 'active' : ''}}"><i class="fa fa-user"></i>Рассмотрены</a></li>
                            </ul>
                        </div>

                        <div class="col-md-6 p-0">
                            <div class="form-group mb-0 me-0"></div>
                            <a class="btn btn-primary" href="{{route('admin.application.create')}}"> <i data-feather="plus-square"> </i>Новая заявка</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="application" class="display">
                                <thead>
                                <tr>
                                    <td>Id</td>
                                    <td>Имя</td>
                                    <td>Story Request</td>
                                    <td>Инвестировано</td>
                                    <td>Статус</td>
                                    <td>Создано</td>
                                    <td>Действия</td>
                                </tr>
                                </thead>
                                <tbody></tbody>
                            </table>

                            <!-- Pagination controls -->
                            <div id="pagination-controls" class="pagination">
                                <!-- Pagination buttons will be dynamically injected based on server response -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

