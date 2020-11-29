<?php

namespace App\Http\Controllers;

use Artesaos\SEOTools\Facades\SEOTools;

class MapController extends Controller
{
    public function __invoke()
    {
        SEOTools::addImages([
            asset('assets/images/ogimage-putem.png')
        ]);

        return view('front.map');
    }
}
