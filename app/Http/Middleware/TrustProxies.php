<?php

namespace App\Http\Middleware;

use Illuminate\Http\Middleware\TrustProxies as ProxyMiddleware;
use Illuminate\Http\Request as HttpRequest;

class TrustProxies extends ProxyMiddleware
{
    protected $proxies = '*';

    protected $headers = HttpRequest::HEADER_X_FORWARDED_FOR |
        HttpRequest::HEADER_X_FORWARDED_HOST |
        HttpRequest::HEADER_X_FORWARDED_PORT |
        HttpRequest::HEADER_X_FORWARDED_PROTO |
        HttpRequest::HEADER_X_FORWARDED_PREFIX |
        HttpRequest::HEADER_X_FORWARDED_AWS_ELB;
}
