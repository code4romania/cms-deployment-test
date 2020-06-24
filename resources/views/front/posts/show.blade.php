@extends('front.layouts.app')

@section('content')
    <header class="max-w-3xl px-6 mx-auto mb-12">
        <h1 class="mb-3 h1">{{ $item->title }}</h1>

        <aside class="mb-6 text-base">
            <div class="inline-flex items-center my-2 mr-6">
                @svg('icons/calendar', 'flex-shrink-0 h-5 mr-2 text-primary-600')
                <span>{{ $item->created_at->isoFormat(__('date.format')) }}</span>
            </div>

            @if ($item->author)
                <div class="inline-flex items-center my-2 mr-6">
                    @svg('icons/author', 'flex-shrink-0 h-5 mr-2 text-primary-600')
                    <span>{{ $item->author }}</span>
                </div>
            @endif

            @if ($item->categories->count())
                <div class="inline-flex items-center my-2 mr-6">
                    @svg('icons/category', 'flex-shrink-0 h-5 mr-2 text-primary-600')
                    <span>{{ $item->categories->pluck('title')->join(', ') }}</span>
                </div>
            @endif
        </aside>

        <p class="leading-relaxed">{{ $item->description }}</p>
    </header>

    <x-figure
        :lqip="$item->lowQualityImagePlaceholder('image')"
        :src="$item->image('image')"
        :alt="$item->imageAltText('image')"
        class="w-full max-w-4xl mx-auto mb-12 border"
    />




    @include('front.blocks._container', [
        'item' => $item,
    ])
@endsection