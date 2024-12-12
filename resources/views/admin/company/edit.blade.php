@extends('admin/layouts/main')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <form class="form theme-form" action="{{ route('admin.company.update', $company->id) }}" method="post" enctype="multipart/form-data">
                            @csrf
                            @method('PUT')

                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="mb-3">
                                        <label>Лого</label>
                                        @isset($company->image_path)
                                            <img style="width: 100px;" src="{{asset('/storage/images/' . $company->image_path)}}" class="mx-auto d-block" alt="" />
                                        @endisset
                                    </div>
                                    <div class="col-md-12">
                                        <input class="form-control" type="file" name="image">
                                    </div>
                                </div>
                            </div>

                            <hr />

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label>Название</label>
                                        <input class="form-control" type="text" placeholder="Название" name="name" value="{{$company->name}}" />
                                    </div>
                                </div>

                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label>Тип</label>
                                        <select name="industry_id" class="form-control">
                                            <option value="">Выберите Тип</option>
                                            @foreach ($types as $key => $type)
                                                <option value="{{$key}}" @if ($key == $company->type) selected="selected" @endif>{{$type}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col">
                                    <div class="mb-3">
                                        <label>Описание</label>
                                        <textarea class="form-control" name="description" rows="3">{{$company->description}}</textarea>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col">
                                    <div class="text-end">
                                        <a class="btn btn-danger" href="{{route('admin.company.index')}}">Отмена</a>
                                        <button type="submit" class="btn btn-secondary me-3">Редактировать</button>
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


