<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class VerifyTwoFactorAccess
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->user()) {
            if (!$request->user()->hasVerifiedTwofactor() && $request->user()->mustVerifyTwofactor()) {
                return redirect()->route("otp.check");
            }
        }

        return $next($request);
    }
}
