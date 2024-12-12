@extends('admin/layouts/main')


@section('content')
    <x-admin.breadcrumb title="Создать новый платеж для Вклада">
        <li class="breadcrumb-item"><a href="{{route('admin.payment.index')}}">Список Вкладов</a></li>
        <li class="breadcrumb-item active"><a href="{{route('admin.payment.create')}}">Создать Вклад</a></li>
    </x-admin.breadcrumb>

    <div class="container-fluid">
        <div class="card">
            <div class="card-header pb-0">
                <h5>!!Внимание!!</h5>
            </div>
            <div class="card-body">
                <p>Платеж создается для существующих Вкладов со статусом "NEW". Если поле пустое, убедитесь что Вклад был создан пользователем из формы, или модератором <a href="{{route('admin.investment.create')}}"> на "Cтранице создания вклада"</a></p>
            </div>
        </div>


        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <form class="form theme-form" action="{{ route('admin.payment.store') }}" method="post">
                            @csrf

                            @include('admin.payment._form')

                            <div class="row">
                                <div class="col">
                                    <div class="text-end">
                                        <a class="btn btn-danger" href="{{route('admin.payment.index')}}">Отмена</a>
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


