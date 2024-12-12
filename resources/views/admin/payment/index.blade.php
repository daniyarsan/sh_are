@extends('admin/layouts/main')

@section('styles')
    <link rel="stylesheet" href="{{asset('/assets/admin/css/datatables.css')}}" />
@endsection
@section('scripts')
    <script src="{{asset('/assets/admin/js/datatable/datatables/jquery.dataTables.min.js')}}"></script>
    <script src="{{asset('/assets/admin/js/datatable/datatables/datatable.custom.js')}}"></script>
@endsection

@section('content')
    <x-admin.breadcrumb title="Платежи">
        <li class="breadcrumb-item active"><a href="{{route('admin.payment.index')}}">Список Платежей</a></li>
    </x-admin.breadcrumb>

    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 project-list">
                <div class="card">
                    <div class="row">
                        <div class="col-md-9 p-0">
                            <ul class="nav nav-tabs border-tab" id="top-tab" role="tablist">
                                <li class="nav-item"><a href="{{route('admin.payment.index')}}" class="nav-link {{Route::current()->getName() == 'admin.payment.index' ? 'active' : ''}}"><i class="fa fa-list"></i>Все</a></li>
                                <li class="nav-item"><a href="{{route('admin.payment.new')}}" class="nav-link {{Route::current()->getName() == 'admin.payment.new' ? 'active' : ''}}"><i class="fa fa-book"></i>Новые</a></li>
                                <li class="nav-item"><a href="{{route('admin.payment.expired')}}" class="nav-link {{Route::current()->getName() == 'admin.payment.expired' ? 'active' : ''}}"><i class="fa fa-clock-o"></i>Просроченные</a></li>
                                <li class="nav-item"><a href="{{route('admin.payment.completed')}}" class="nav-link {{Route::current()->getName() == 'admin.payment.completed' ? 'active' : ''}}"><i class="fa fa-check"></i>Завершенные</a></li>
                                <li class="nav-item"><a href="{{route('admin.payment.canceled')}}" class="nav-link {{Route::current()->getName() == 'admin.payment.canceled' ? 'active' : ''}}"><i class="fa fa-close"></i>Отмененные</a></li>
                            </ul>
                        </div>
                        <div class="col-md-3 p-0">
                            <div class="form-group mb-0 me-0"></div><a class="btn btn-primary" href="{{route('admin.payment.create')}}"> <i data-feather="plus-square"> </i>Новый Платеж</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="display" id="investment">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Type ID</th>
                                    <th>TXID</th>
                                    <th>Адрес</th>
                                    <th>Сумма / Валюта</th>
                                    <th>Статус</th>
                                    <th>Создан</th>
                                    <th>Действие</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach ($entities as $payment)
                                    <tr>
                                        <td>{{$payment->id}}</td>
                                        <td>{{$payment->typeId}}</td>
                                        <td>{{$payment->txid}}</td>
                                        <td>{{$payment->paymentAddress->address}}</td>
                                        <td>{{$payment->amount}} / {{$payment->currency->name}}</td>
                                        <td><span class="badge badge-info">{{$payment->status}}</span></td>
                                        <td>{{$payment->created_at}}</td>
                                        <td>
                                            <a href="{{route('admin.payment.edit', $payment->id)}}" class="btn btn-outline-primary btn-xs"><i class="fa fa-pencil"></i></a>

                                            <form style="display: inline;" action="{{route('admin.payment.destroy', ['id' => $payment->id])}}" method="post">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-outline-danger btn-xs"><i class="fa fa-trash"></i></button>
                                            </form>
                                        </td>
                                    </tr>

                                @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

