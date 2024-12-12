<header class="main-nav">
    <nav>
        <div class="main-navbar">
            <div class="left-arrow disabled" id="left-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
            </div>

            <div id="mainnav">
                <ul class="nav-menu custom-scrollbar" style="display: block; height: calc(100vh - 70px);">
                    <li class="dropdown"><a class="nav-link menu-title link-nav" href="social-app.html">
                            <span>Social App</span>
                            <div class="according-menu"><i class="fa fa-angle-right"></i>
                            </div>
                        </a>
                    </li>
                    @foreach ($navigation as $key => $nav)
                        <li class="sidebar-main-title">
                            <div>
                                <h6>{{$key}} </h6>
                            </div>
                        </li>
                        @foreach ($nav as $navItem)
                            <li>
                                <a class="nav-link menu-title link-nav" href="{{route($navItem['route'])}}">
                                    <i class="{{$navItem['icon']}}"></i>
                                    <span>{{$navItem['label']}}</span>
                                    <div class="according-menu"><i class="fa fa-angle-right"></i></div>
                                </a>
                            </li>
                        @endforeach
                    @endforeach
                </ul>
            </div>


            <div class="right-arrow" id="right-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </div>
        </div>
    </nav>
</header>
