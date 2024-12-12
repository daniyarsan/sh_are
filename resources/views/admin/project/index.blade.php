@extends('admin/layouts/main')

@section('styles')
    <link rel="stylesheet" href="{{asset('/assets/admin/css/datatables.css')}}" />
@endsection
@section('scripts')
    <script src="{{asset('/assets/admin/js/datatable/datatables/jquery.dataTables.min.js')}}"></script>
    <script>
        $(document).ready(function () {
            $('#project').DataTable({ order: [[5, 'desc']] });
        });
    </script>
@endsection

@section('content')
    <x-admin.breadcrumb title="Проекты">
        <li class="breadcrumb-item"><a href="{{route('admin.project.index')}}">Список Проектов</a></li>
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
                                <li class="nav-item"><a href="{{route('admin.project.index')}}" class="nav-link {{Route::current()->getName() == 'admin.project.index' ? 'active' : ''}}"><i class="fa fa-book"></i>Все</a></li>
                                <li class="nav-item"><a href="{{route('admin.project.current')}}" class="nav-link {{Route::current()->getName() == 'admin.project.current' ? 'active' : ''}}"><i class="fa fa-gears"></i>В процессе</a></li>
                                <li class="nav-item"><a href="{{route('admin.project.finished')}}" class="nav-link {{Route::current()->getName() == 'admin.project.finished' ? 'active' : ''}}"><i class="fa fa-check"></i>Завершенные</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6 p-0">
                            <div class="form-group mb-0 me-0"></div><a class="btn btn-primary" href="{{route('admin.project.create')}}"> <i data-feather="plus-square"> </i>Новый проект</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="display" id="project">
                                <thead>
                                <tr>
                                    <th>Название</th>
                                    <th>Сумму собрать</th>
                                    <th>Голосов собрать</th>
                                    <th>Новый</th>
                                    <th>Завершенный</th>
                                    <th>Создан</th>
                                    <th>Действие</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach ($projects as $project)
                                    <tr>
                                        <td>{{$project['name']}}</td>
                                        <td>{{$project['cost']['formatted']}}</td>
                                        <td>{{$project['target_votes']}}</td>
                                        <td>{{$project['new'] ? 'Новый' : ''}}</td>
                                        <td>{{$project['finished'] ? 'Завершенный' : ''}}</td>
                                        <td>{{$project['created_at']}}</td>
                                        <td>
                                            <a href="{{route('admin.project.edit', $project['slug'])}}" class="btn btn-outline-primary btn-xs"><i class="fa fa-pencil"></i></a>

                                            <form style="display: inline;" action="{{route('admin.project.destroy', $project['slug'])}}" method="post">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-outline-danger btn-xs"><i class="fa fa-trash"></i></button>
                                            </form>
                                        </td>
                                    </tr>

                                @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
