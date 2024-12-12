@extends('admin/layouts/main')

@section('content')
    <x-admin.breadcrumb title="Редактировать вклад">
        <li class="breadcrumb-item"><a href="{{route('admin.payment.index')}}">Список Вкладов</a></li>
        <li class="breadcrumb-item active">Редактировать вклад</li>
    </x-admin.breadcrumb>

    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <form class="form theme-form" action="{{ route('admin.payment.update', $payment->id) }}" method="post">
                            @csrf
                            @method('PUT')

                            @include('admin.payment._form')

                            <div class="row">
                                <div class="col">
                                    <div class="text-end">
                                        <a class="btn btn-danger" href="{{route('admin.payment.index')}}">Отмена</a>
                                        <button type="submit" name="action" value="save" class="btn btn-secondary me-3">Сохранить</button>
                                        <button type="submit" class="btn btn-primary me-3">Сохранить и закрыть</button>
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

