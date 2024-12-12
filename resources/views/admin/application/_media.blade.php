@if($application->videos->count())
    <hr />

    <table class="table table-bordered mt-3">
        <thead>
        <tr>
            <th>Filename</th>
            <th>Filepath</th>
            <th>File Type</th>
            <th>Preview</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        @foreach ($application->videos as $video)
            <tr>
                <td>{{ $video->filename }}</td>
                <td>{{ $video->filepath }}</td>
                <td>{{ $video->type }}</td>
                <td>
                    @if($video->preview_path)
                        <form id="delete_preview_{{ $video->id }}" class="form-inline " action="{{route('admin.media.video.preview.destroy', $video->id)}}" method="post">
                            @csrf
                            <img style="height: 50px;" src="{{asset('/storage/videos/thumb/' . $video->preview_path)}}" class="mx-3 d-block" alt="" />
                            <input type="hidden" name="_method" value="DELETE">
                            <button type="submit" form="delete_preview_{{ $video->id }}" class="btn btn-outline-danger btn-md"><i class="fa fa-trash"></i></button>
                        </form>
                    @else
                        <form action="{{route('admin.media.video.preview.upload', $video->id)}}" class="form-inline" method="post" enctype="multipart/form-data">
                            @csrf
                            <div class="col-md-8"><input class="form-control" type="file" name="preview" value=""></div>
                            <div class="col-md-4"><button class="btn btn-outline-success btn-md" type="submit">Загрузить</button></div>
                        </form>
                        <hr>
                        <form id="generate_thumb_video_{{ $video->id }}"  class="form-inline" action="{{route('admin.media.video.generate.thumb', $video->id)}}" method="post">
                            @csrf
                            <div class="col-md-8"><button type="submit" form="generate_thumb_video_{{ $video->id }}" class="btn btn-outline-success btn-xs">Генерировать</button></div>
                        </form>
                    @endif

                </td>
                <td>
                    <form id="delete_video_{{ $video->id }}" style="display: inline;" action="{{route('admin.media.video.destroy', $video->id)}}" method="post">
                        @csrf
                        <input type="hidden" name="_method" value="DELETE">
                        <button type="submit" form="delete_video_{{ $video->id }}" class="btn btn-outline-danger btn-xs"><i class="fa fa-trash"></i></button>
                    </form>
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
@endif


@if($application->images->count())
    <hr />

    <table class="table table-bordered mt-3">
        <thead>
        <tr>
            <th>Filename</th>
            <th>Filepath</th>
            <th>File Type</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        @foreach ($application->images as $image)
            <tr>
                <td>{{ $image->filename }}</td>
                <td>{{ $image->filepath }}</td>
                <td>{{ $image->type }}</td>
                <td>
                    <form id="delete_video_{{ $image->id }}" style="display: inline;" action="{{route('admin.media.image.destroy', $image->id)}}" method="post">
                        @csrf
                        <input type="hidden" name="_method" value="DELETE">
                        <button type="submit" form="delete_video_{{ $image->id }}" class="btn btn-outline-danger btn-xs"><i class="fa fa-trash"></i></button>
                    </form>
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
@endif
