<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class IsAdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $guard='admin'): Response
    {

        if (!auth()->guard($guard)->check()) {
            return redirect('/admin/login');
        }

        if (!auth()->guard($guard)->user()->hasRole('admin')) {
            return redirect('/admin/login');
        }

        return $next($request);
    }
}
