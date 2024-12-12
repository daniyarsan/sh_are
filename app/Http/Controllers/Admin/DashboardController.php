<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function index()
    {
    //    $response = Telegram::bot('mybot')->getMe();
        // $response = Telegram::bot('mybot')->sendMessage([
        //     'chat_id' => 'userinfobot',
        //     'text' => 'daniyarsan'
        // ]);

        // $messageId = $response->getMessageId();
        // dd($response);

        return view('admin/index', []);

    }
}
