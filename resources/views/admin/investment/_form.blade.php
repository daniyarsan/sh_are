<div class="row">
    <div class="col-sm-6">
        <div class="mb-3">
            <label>Компания</label>
            <select name="company_id" class="form-control">
                <option value="">Выберите компанию</option>
                @isset($investment->company_id)
                    @foreach ($companies as $company)
                        <option value="{{$company->id}}" @if ($investment->company_id == $company->id) selected="selected" @endif>{{$company->name}}</option>
                    @endforeach
                @else
                    @foreach ($companies as $company)
                        <option value="{{$company->id}}" @if (old('company_id') == $company->id) selected="selected" @endif>{{$company->name}}</option>
                    @endforeach
                @endisset
            </select>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="mb-3">
            <label>Проект</label>
            <select name="project_id" class="form-control">
                <option value="">Выберите проект</option>

                @isset($investment->company_id)
                    @foreach ($projects as $project)
                        <option value="{{$project->id}}" @if ($investment->company_id == $project->id) selected="selected" @endif>{{$project->name}}</option>
                    @endforeach
                @else
                    @foreach ($projects as $project)
                        <option value="{{$project->id}}" @if (old('project_id') == $project->id) selected="selected" @endif>{{$project->name}}</option>
                    @endforeach
                @endisset
            </select>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-sm-12">
        <div class="mb-3">
            <label>Сумма вклада</label>
            @isset($investment->amount)
                <input class="form-control" type="text" name="amount" value="{{$investment->amount ?? ''}}" />
            @else
                <input class="form-control" type="text" name="amount" value="{{ old('amount')}}" />
            @endisset

        </div>
    </div>
</div>
<div class="row">
    <div class="col-md-12">
        <div class="mb-3">
            <label>Статус</label>
            <select name="status" class="form-control">
                @isset($investment->status)
                    @foreach (\App\Models\Investment::STATUSES as $status)
                        <option value="{{$status}}" @if ($investment->status == $status) selected="selected" @endif>{{$status}}</option>
                    @endforeach
                @else
                    @foreach (\App\Models\Investment::STATUSES as $status)
                        <option value="{{$status}}" @if (old('status') == $status) selected="selected" @endif>{{$status}}</option>
                    @endforeach
                @endisset
            </select>
        </div>
    </div>
</div>
