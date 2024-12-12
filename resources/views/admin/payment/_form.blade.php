<div class="row">
    <div class="col-sm-12">
        <div class="mb-3">
            <label>Вклад</label>
            <select name="investment_id" class="form-control">
                <option value="">Выберите существующий "Вклад"</option>
                @isset($payment->investment->id)
                    @foreach ($investments as $investment)
                        <option value="{{$investment->id}}" @if ($payment->investment->id == $investment->id) selected="selected" @endif>Компания ({{$investment->company->name}}) в проект ({{$investment->project->name}})</option>
                    @endforeach
                @else
                    @foreach ($investments as $investment)
                        <option value="{{$investment->id}}" @if (old('investment_id') == $investment->id) selected="selected" @endif>Компания ({{$investment->company->name}}) в проект ({{$investment->project->name}})</option>
                    @endforeach
                @endisset
            </select>
        </div>
    </div>

    <div class="col-sm-6">
        <div class="mb-3">
            <label>Сумма к оплате</label>
            @isset($payment->amount)
                <input class="form-control" type="text" name="amount" value="{{$payment->amount ?? ''}}" />
            @else
                <input class="form-control" type="text" name="amount" value="{{ old('amount')}}" />
            @endisset

        </div>
    </div>

    <div class="col-sm-6">
        <div class="mb-3">
            <label>Валюта</label>
            <select name="currency_id" class="form-control">
                <option value="">Выберите</option>

                @isset($payment->currency->id)
                    @foreach ($currencies as $currency)
                        <option value="{{$currency->id}}" @if ($payment->currency->id == $currency->id) selected="selected" @endif>{{$currency->name}}</option>
                    @endforeach
                @else
                    @foreach ($currencies as $currency)
                        <option value="{{$currency->id}}" @if (old('currency_id') == $currency->id) selected="selected" @endif>{{$currency->name}}</option>
                    @endforeach
                @endisset

            </select>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-md-12">
        <div class="mb-3">
            <label>Статус</label>
            <select name="status" class="form-control">
                @isset($payment->status)
                    @foreach (\App\Models\Payment::STATUSES as $status)
                        <option value="{{$status}}" @if ($payment->status == $status) selected="selected" @endif>{{$status}}</option>
                    @endforeach
                @else
                    @foreach (\App\Models\Payment::STATUSES as $status)
                        <option value="{{$status}}" @if (old('status') == $status) selected="selected" @endif>{{$status}}</option>
                    @endforeach
                @endisset
            </select>
        </div>
    </div>
</div>

