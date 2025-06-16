<?php

namespace App\Http\Middleware;

use Illuminate\Http\Middleware\TrustProxies as ProxyMiddleware;

class TrustProxies extends ProxyMiddleware
{
    protected $proxies = '**';
}
