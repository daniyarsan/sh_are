<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Vote;
use Illuminate\Http\Request;


class VoteController extends Controller
{
    public function vote(Request $request)
    {
        $ip = $request->getClientIp();
        $vote = Vote::query()->where([...$request->post(), 'ip' => $ip])->first();

        if ($vote) {
            throw new \Exception('Vote exists in database');
        }

        Vote::factory()->create([...$request->post(), 'ip' => $ip]);

        return response()->json([
            'status' => true,
            'message' => "Voted Successfully"
//            'product' => $product
        ], 200);
    }

    public function unvote(Request $request)
    {
        $ip = $request->getClientIp();
        $vote = Vote::query()->where([...$request->post(), 'ip' => $ip])->first();
        if (!$vote) {
            throw new \Exception('Cant find vote for removing');
        }

        $vote->delete();

        return response()->json([
            'status' => true,
            'message' => "Voted removed successfully"
//            'product' => $product
        ], 200);
    }
}
