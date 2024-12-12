@extends('admin/layouts/main')


@section('content')
    <x-admin.breadcrumb title="Новый проект">
        <li class="breadcrumb-item"><a href="{{route('admin.project.index')}}">Список Проектов</a></li>
        <li class="breadcrumb-item active"><a href="{{route('admin.project.create')}}">Создать проект</a></li>
    </x-admin.breadcrumb>

    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <form class="form theme-form" action="{{ route('admin.project.store') }}" method="post" enctype="multipart/form-data">
                            @csrf

                            @include('admin.project._form')

                            <div class="row">
                                <div class="col">
                                    <div class="text-end">
                                        <a class="btn btn-danger" href="{{route('admin.application.index')}}">Отмена</a>
                                        <button type="submit" class="btn btn-primary me-3">Сохранить</button>
                                        <button type="submit" name="action" value="create" class="btn btn-secondary me-3">Сохранить и создать</button>
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

@section('scripts')

@endsection

