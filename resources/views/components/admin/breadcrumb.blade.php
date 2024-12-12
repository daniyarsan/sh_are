@props([
    'title' => 'text',
])

<div class="container-fluid">
    <div class="page-header">
        <div class="row">
            <div class="col-sm-6">
                <h3>{{$title}}</h3>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{route('admin.index')}}">Дашбоард</a></li>
                    {{$slot}}
                </ol>
            </div>

        </div>
    </div>
</div>
