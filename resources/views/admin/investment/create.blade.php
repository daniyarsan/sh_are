@extends('admin/layouts/main')


@section('content')
    <x-admin.breadcrumb title="Вклады">
        <li class="breadcrumb-item"><a href="{{route('admin.investment.index')}}">Список Вкладов</a></li>
        <li class="breadcrumb-item active"><a href="{{route('admin.investment.create')}}">Создать Вклад</a></li>
    </x-admin.breadcrumb>

    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <form class="form theme-form" action="{{ route('admin.investment.store') }}" method="post">
                            @csrf

                            @include('admin.investment._form')

                            <div class="row">
                                <div class="col">
                                    <div class="text-end">
                                        <a class="btn btn-danger" href="{{route('admin.investment.index')}}">Отмена</a>
                                        <button type="submit" class="btn btn-secondary me-3">Создать</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection


