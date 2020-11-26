@extends('front.layouts.app')

@section('content')
    <iframe id="map-container" class="w-full -my-20" src="https://code-for-map.vercel.app/" frameborder="0"></iframe>

    <script>
        window.addEventListener('message', (event) => {
            if (event.origin !== 'https://code-for-map.vercel.app') {
                return;
            }

            document.getElementById('map-container').style.height = (event.data.height || 1000) + 'px';
        }, false);
    </script>
@endsection
