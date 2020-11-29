@extends('front.layouts.app')

@section('content')
    <iframe id="map-container" class="w-full -my-20" src="https://code-for-map.vercel.app/" frameborder="0"></iframe>

    <script>
        window.addEventListener('message', (event) => {
            if (event.origin !== 'https://code-for-map.vercel.app') {
                return;
            }

            const container = document.getElementById('map-container');

            if (event.data.height) {
                container.style.height = (event.data.height || 1000) + 'px';
            }

            if (event.data.navigate) {
                window.scrollTo(0, container.getBoundingClientRect().top + window.pageYOffset + event.data.navigate);
            }
        }, false);
    </script>
@endsection
