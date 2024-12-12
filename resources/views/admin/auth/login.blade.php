@extends('admin/layouts/auth')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="login-card">
                    <form class="theme-form login-form" action="{{route('admin.auth.store')}}" method="post" novalidate>
                        @csrf
                        @method('POST')

                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-text"><i class="icon-email"></i></span>
                                <input class="form-control" name="login" type="login" required="" placeholder="login" value="{{old('login')}}">
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="input-group"><span class="input-group-text"><i class="icon-lock"></i></span>
                                <input class="form-control" name="password" type="password" name="login[password]" placeholder="*********">
                                <div class="show-hide"><span class="show"></span></div>
                            </div>
                        </div>

                        <div class="form-group">
                            <button class="btn btn-primary btn-block" type="submit">Enter</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

