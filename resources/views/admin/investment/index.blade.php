@extends('admin/layouts/main')

@section('styles')
    <link rel="stylesheet" href="{{asset('/assets/admin/css/datatables.css')}}" />
@endsection
@section('scripts')
    <script src="{{asset('/assets/admin/js/datatable/datatables/jquery.dataTables.min.js')}}"></script>
    <script src="{{asset('/assets/admin/js/datatable/datatables/datatable.custom.js')}}"></script>
@endsection

@section('content')
    <x-admin.breadcrumb title="Вклады">
        <li class="breadcrumb-item active"><a href="{{route('admin.investment.index')}}">Список Вкладов</a></li>
    </x-admin.breadcrumb>

    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 project-list">
                <div class="card">
                    <div class="row">
                        <div class="col-md-6 p-0">
                            <ul class="nav nav-tabs border-tab" id="top-tab" role="tablist">
{{--                                <li class="nav-item"><a href="{{route('admin.investment.index')}}" class="nav-link {{Route::current()->getName() == 'admin.investment.index' ? 'active' : ''}}"><i class="fa fa-book"></i>Все</a></li>--}}
{{--                                <li class="nav-item"><a href="{{route('admin.investment.company')}}" class="nav-link {{Route::current()->getName() == 'admin.investment.company' ? 'active' : ''}}"><i class="fa fa-building"></i>Компании</a></li>--}}
{{--                                <li class="nav-item"><a href="{{route('admin.investment.individual')}}" class="nav-link {{Route::current()->getName() == 'admin.investment.individual' ? 'active' : ''}}"><i class="fa fa-user"></i>Частные</a></li>--}}
                            </ul>
                        </div>
                        <div class="col-md-6 p-0">
                            <div class="form-group mb-0 me-0"></div><a class="btn btn-primary" href="{{route('admin.investment.create')}}"> <i data-feather="plus-square"> </i>Новый Вклад</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <div class="table-responsive">

                            <table class="display" id="investment">
                                <thead>
                                <tr>
                                    <th>Проект</th>
                                    <th>Компания</th>
                                    <th>Сумма</th>
                                    <th>Статус</th>
                                    <th>Создан</th>
                                    <th>Действие</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach ($investments as $investment)
                                    <tr>
                                        <td>{{$investment->project->name}}</td>
                                        <td>{{$investment->company->name}}</td>
                                        <td>{{$investment->amountPrice['formatted']}}</td>
                                        <td><span class="badge badge-info">{{$investment->status}}</span></td>
                                        <td>{{$investment->created_at}}</td>

                                        <td>
                                            <a href="{{route('admin.investment.edit', $investment->id)}}" class="btn btn-outline-primary btn-xs"><i class="fa fa-pencil"></i></a>

                                            <form style="display: inline;" action="{{route('admin.investment.destroy', $investment->id)}}" method="post">
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

