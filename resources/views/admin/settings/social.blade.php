@extends('twill::layouts.settings')

@section('contentFields')
    @foreach (config('cms.social.networks') as $id => $network)
        @formField('input', [
            'name'       => $id,
            'label'      => $network['name'],
            'prefix'     => $network['baseUrl'],
            'translated' => false,
        ])
    @endforeach
@stop
