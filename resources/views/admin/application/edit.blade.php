@extends('admin/layouts/main')

@section('content')
    <x-admin.breadcrumb title="{{$application->story_title}}">
        <li class="breadcrumb-item active"><a href="{{route('admin.application.index')}}">Список обращений</a></li>
        <li class="breadcrumb-item active"><a href="">Редактировать</a></li>
    </x-admin.breadcrumb>

    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        @include('admin.application._media')

                        <hr />

                        <form class="form theme-form"
                              action="{{ route('admin.application.update', $application->id) }}"
                              method="post" enctype="multipart/form-data">
                            @csrf
                            @method('PUT')

                            @include('admin.application._form')

                            <div class="row">
                                <div class="col">
                                    <div class="text-end">
                                        <a class="btn btn-danger" href="{{route('admin.application.index')}}">Отмена</a>
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
