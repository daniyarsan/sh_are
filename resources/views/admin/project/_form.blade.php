<div class="row">
    @isset($entity->image_path)
        <div class="col-sm-12">
            <div class="col-2">
                <img style="height: 100px;" src="{{asset('/storage/images/' . $entity->image_path)}}" class="mx-auto d-block" alt="" />
            </div>
        </div>
    @endisset
    <div class="col-sm-3">
        <div class="mb-3">
            <label>Баннер</label>
            <input class="form-control" type="file" name="image">
        </div>
    </div>
</div>

<div class="row">
    @isset($entity->mobile_image_path)
        <div class="col-sm-12">
            <div class="col-2">
                <img style="height: 100px;" src="{{asset('/storage/images/' . $entity->mobile_image_path)}}" class="mx-auto d-block" alt="" />
            </div>
        </div>
    @endisset
    <div class="col-sm-3">
        <div class="mb-3">
            <label>Баннер для мобильного вида</label>
            <input class="form-control" type="file" name="mobile_image">
        </div>
    </div>
</div>

<hr />

<div class="row">
    <div class="col-sm-6">
        <div class="mb-3">
            <label>Название проекта</label>
            <input class="form-control" type="text" value="{{$entity->name ?? ''}}" placeholder="Название проекта *" name="name" />
        </div>
    </div>

    <div class="col-sm-6">
        <div class="mb-3">
            <label>Индустрия</label>
            <select name="industry_id" class="form-control">
                <option value="">Выберите Индустрию</option>
                @isset($entity->industry_id)
                    @foreach ($industries as $item)
                        <option value="{{$item->id}}" @if ($entity->industry_id == $item->id) selected="selected" @endif>{{$item->name}}</option>
                    @endforeach
                @else
                    @foreach ($industries as $item)
                        <option value="{{$item->id}}" @if (old('industry_id') == $item->id) selected="selected" @endif>{{$item->name}}</option>
                    @endforeach
                @endisset
            </select>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-sm-6">
        <div class="mb-3">
            <label>Целевая стоимость</label>
            <input class="form-control" type="text" placeholder="Целевая стоимость проекта" name="cost" value="{{$entity->cost ?? ''}}">
        </div>
    </div>

    <div class="col-sm-6">
        <div class="mb-3">
            <label>Required</label>
            <input class="form-control" type="text" placeholder="Target" name="target_votes" value="{{$entity->target_votes ?? ''}}">
        </div>
    </div>
</div>

<div class="row">
    <div class="col">
        <div class="mb-3">
            <label>Содержание</label>
            <textarea class="form-control" name="content" rows="3">{{$entity->content ?? ''}}</textarea>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-sm-6">
        <div class="mb-3">
            <label>Урл для перенаправления</label>
            <input class="form-control" type="text" placeholder="Url" name="custom_url" value="{{$entity->custom_url ?? ''}}">
        </div>
    </div>
</div>

<div class="row">
    <div class="col">
        <div class="mb-3">
            <label>Завершено</label>
            <input type="checkbox" name="finished" @checked(old('finished', $entity->finished ?? false)) value="1" />
        </div>
    </div>
</div>
