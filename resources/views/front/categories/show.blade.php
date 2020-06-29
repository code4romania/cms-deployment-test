@inject('settings', 'Code4Romania\Cms\Helpers\settingsHelper')

@extends('front.layouts.app')

@section('content')
    @include('front.partials.page-header', [
        'title'       => $item->title,
        'description' => $settings->get('blogDescription', 'site'),
    ])

    <x-container class="container md:grid-cols-2 md:col-gap-16">
        @foreach ($item->posts as $item)
            @include('front.posts.card', [
                'item'  => $item,
                'class' => $loop->index === 0 ? 'md:col-span-2' : '',
            ])
        @endforeach
    </x-container>
@endsection
