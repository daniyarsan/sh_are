<div class="col">
    <div class="mb-3">
        <label>Компания</label>
        <select name="company_id" class="form-control">
            <option value="">Выберите Компанию</option>
            @isset($application->company_id)
                @foreach ($companies as $company)
                    <option value="{{$company->id}}" @if ($application->company_id == $company->id) selected="selected" @endif>{{$company->name}}</option>
                @endforeach
            @else
                @foreach ($companies as $company)
                    <option value="{{$company->id}}" @if (old('company_id') == $company->id) selected="selected" @endif>{{$company->name}}</option>
                @endforeach
            @endisset
        </select>
    </div>
</div>


<div class="row">
    <div class="col-sm-3">
        <div class="mb-3">
            <label>Аватар</label>
            <input class="form-control" type="file" name="avatar" value="">
        </div>
    </div>
    <div class="col-sm-9">
        @isset($application->avatar_path)
            <div class="col-2">
                <img style="width: 50%;" src="{{asset('/storage/images/' . $application->avatar_path)}}" class="mx-auto d-block" alt="" />
            </div>
        @endisset
    </div>

</div>


<div class="col">
    <div class="mb-3">
        <label>Видео</label>
        <input type="file" name="video_files[]" class=" form-control" multiple="multiple" value="">
    </div>
</div>

<div class="col">
    <div class="mb-3">
        <label>Фото</label>
        <input type="file" name="image_files[]" class=" form-control" multiple="multiple" value="">
    </div>
</div>

<hr />

<div class="row">
    <div class="col-sm-">
        <div class="mb-3">
            <label>Имя заявителя</label>
            <input class="form-control" type="text" name="name"
                   value="{{$application->name ?? ''}}" />
        </div>
    </div>
</div>

<div class="row">
    <div class="col-sm-12">
        <div class="mb-3">
            <label>Юзернейм</label>
            <input class="form-control" type="text" name="username" value="{{$application->username ?? ''}}" />
        </div>
    </div>
</div>

<hr />
<div class="row">
    <div class="col">
        <div class="mb-3">
            <label>Название истории</label>
            <input class="form-control" type="text" name="story_title"
                   value="{{$application->story_title ?? ''}}" />
        </div>
    </div>
</div>

<hr />

<div class="row">
    <div class="col">
        <label>Обращение</label>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item"><a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#story_brief_text_tab" role="tab" aria-controls="home" aria-selected="true">Текст</a></li>
            <li class="nav-item"><a class="nav-link" id="profile-tabs" data-bs-toggle="tab" href="#story_brief_image_tab" role="tab" aria-controls="profile" aria-selected="false">Картинка</a></li>
        </ul>
        <div class="tab-content">
            <div class="tab-pane fade show active" id="story_brief_text_tab" role="tabpanel">
                <div class="mt-3">
                    <textarea class="form-control" name="story_request" rows="3">{{$application->story_request ?? ''}}</textarea>
                </div>
            </div>
            <div class="tab-pane fade" id="story_brief_image_tab" role="tabpanel" aria-labelledby="contact-tab">
                <div class="mt-3">
                    @isset($application->story_request_path)
                        <div class="col-12 relative ">
                            <img class="img img-responsive" src="{{asset('/storage/images/' . $application->story_request_path)}}" class="mx-auto d-block" alt="" />
                            <button type="button" onclick="sendPost({{$application->id}})" style="position: absolute; right: 0; top: 0;" class="btn btn-outline-danger btn-xs"><i class="fa fa-trash"></i></button>
                        </div>
                    @else
                        <input class="form-control" type="file" name="story_brief_image" value="">
                    @endisset
                </div>
            </div>
        </div>
    </div>
</div>

<hr />


<div class="row">
    <div class="col">
        <div class="mb-3">
            <label>Запрос</label>
            <textarea class="form-control" name="story_brief" rows="3">{{$application->story_brief ?? ''}}</textarea>
        </div>
    </div>
</div>

<div class="row">
    <div class="col">
        <div class="mb-3">
            <label>Наша помощь</label>
            <textarea class="form-control" name="story_description"
                      rows="3">{{$application->story_description ?? ''}}</textarea>
        </div>
    </div>
</div>

<div class="row">
    <div class="col">
        <div class="mb-3">
            <label>Инвестировано средств</label>
            <input class="form-control" type="text" name="invested"
                   value="{{$application->invested ?? ''}}" />
        </div>
    </div>
</div>

<div class="row">
    <div class="col">
        <div class="mb-3">
            <label>Завершено</label>
            <input type="checkbox" name="finished" @checked(old('finished', $application->finished ?? false)) value="1" />
        </div>
    </div>
</div>

@section('scripts')
    <script>


        function sendPost(applicationId) {
            var url = '{{ route("admin.application.storyBrief.remove", ":id") }}';
            url = url.replace(':id', applicationId);

            $.ajax({
                type: 'DELETE',
                url: url,
                data: {
                    _token: '{{csrf_token()}}',
                },
                success: function(html) {
                    strReturn = html;
                    console.log(html)
                },
                async: false,
                error: function (xhr, ajaxOptions, thrownError) {
                    window.location.reload();
                }

            });
        }
    </script>

@endsection
