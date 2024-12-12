@extends('admin/layouts/main')

@section('content')
    <x-admin.breadcrumb title="{{$entity['name']}}">
        <li class="breadcrumb-item"><a href="{{route('admin.project.index')}}">Список проектов</a></li>
        <li class="breadcrumb-item active">Редактировать проект</li>
    </x-admin.breadcrumb>

    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <form class="form theme-form" action="{{ route('admin.project.update', $entity['id']) }}" method="post" enctype="multipart/form-data">
                            @csrf
                            @method('PUT')

                            @include('admin.project._form')

                            <div class="row">
                                <div class="col">
                                    <div class="text-end">
                                        <a class="btn btn-danger" href="{{route('admin.project.index')}}">Отмена</a>
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

