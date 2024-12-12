@extends('admin/layouts/main')

@section('content')
    <x-admin.breadcrumb title="Участники">
        <li class="breadcrumb-item"><a href="{{route('admin.company.index')}}">Список Участников</a></li>
        <li class="breadcrumb-item active"><a href="{{route('admin.company.create')}}">Создать участника</a></li>
    </x-admin.breadcrumb>

    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <form class="form theme-form" action="{{ route('admin.company.store') }}" method="post" enctype="multipart/form-data">
                            @csrf

                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="mb-3">
                                        <label>Лого</label>
                                        <input class="form-control" type="file" name="image">
                                    </div>
                                </div>
                            </div>

                            <hr />

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label>Название</label>
                                        <input class="form-control" type="text" placeholder="Название" name="name" />
                                    </div>
                                </div>

                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label>Тип</label>
                                        <select name="industry_id" class="form-control">
                                            <option value="">Выберите Тип</option>
                                            @foreach ($types as $key => $type)
                                                <option value="{{$key}}">{{$type}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col">
                                    <div class="mb-3">
                                        <label>Описание</label>
                                        <textarea class="form-control" name="description" rows="3"></textarea>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col">
                                    <div class="text-end">
                                        <a class="btn btn-danger" href="{{route('admin.company.index')}}">Отмена</a>
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

