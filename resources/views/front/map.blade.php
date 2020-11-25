@extends('front.layouts.app')

@section('content')
    <iframe id="map-container" class="container w-full" src="http://code-for-map.vercel.app/" frameborder="0"></iframe>

    <script>
        window.addEventListener('message', (event) => {
            if (event.origin !== 'https://code-for-map.vercel.app') {
                return;
            }

            document.getElementById('map-container').style.height = (event.data.height || 1000) + 'px';
        }, false);
    </script>
@endsection