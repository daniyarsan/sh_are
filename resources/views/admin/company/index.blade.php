@extends('admin/layouts/main')

@section('styles')
    <link rel="stylesheet" href="{{asset('/assets/admin/css/datatables.css')}}" />
@endsection
@section('scripts')
    <script src="{{asset('/assets/admin/js/datatable/datatables/jquery.dataTables.min.js')}}"></script>
    <script src="{{asset('/assets/admin/js/datatable/datatables/datatable.custom.js')}}"></script>
@endsection


@section('content')
    <x-admin.breadcrumb title="Участники">
        <li class="breadcrumb-item active"><a href="{{route('admin.company.index')}}">Список Участников</a></li>
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
                                <li class="nav-item"><a href="{{route('admin.company.index')}}" class="nav-link {{Route::current()->getName() == 'admin.company.index' ? 'active' : ''}}"><i class="fa fa-book"></i>Все</a></li>
                                <!-- todo: lists by app status -->
                                <li class="nav-item"><a href="{{route('admin.company.company')}}" class="nav-link {{Route::current()->getName() == 'admin.company.company' ? 'active' : ''}}"><i class="fa fa-building"></i>Компании</a></li>
                                <li class="nav-item"><a href="{{route('admin.company.individual')}}" class="nav-link {{Route::current()->getName() == 'admin.company.individual' ? 'active' : ''}}"><i class="fa fa-user"></i>Частные</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6 p-0">
                            <div class="form-group mb-0 me-0"></div><a class="btn btn-primary" href="{{route('admin.company.create')}}"> <i data-feather="plus-square"> </i>Новый Участник</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="display" id="company">
                                <thead>
                                <tr>
                                    <th>Название</th>
                                    <th>Кошелек</th>
                                    <th>Тип</th>
                                    <th>Создан</th>
                                    <th>Действие</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach ($companies as $company)
                                    <tr>
                                        <td>{{$company->name}}</td>
                                        <td>{{$company->wallet}}</td>
                                        <td>{{$company->type == 'company' ? 'Компания' : 'Частное лицо'}}</td>
                                        <td>{{$company->created_at}}</td>
                                        <td>
                                            <a href="{{route('admin.company.edit', $company->id)}}" class="btn btn-outline-primary btn-xs"><i class="fa fa-pencil"></i></a>

                                            <form style="display: inline;" action="{{route('admin.company.destroy', $company->id)}}" method="post">
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

