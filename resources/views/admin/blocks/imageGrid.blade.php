@twillBlockTitle('Image grid')
@twillBlockIcon('fix-grid')
@twillBlockGroup('content')

@formField('input', [
    'name'       => 'title',
    'label'      => __('admin.field.title'),
    'translated' => true,
])

@formField('select', [
    'name'       => 'columns',
    'label'      => __('admin.field.columns'),
    'default'    => 1,
    'unpack'     => true,
    'options'    => collect(range(1, 4))->map(function($i) {
        return [
            'value' => $i,
            'label' => $i,
        ];
    })->toArray(),
])

@formField('medias', [
    'name'         => 'image',
    'label'        => __('admin.field.images'),
    'max'          => 12,
    'note'         => __('admin.fieldNote.imagesUpTo', ['count' => 12]),
    'required'     => true,
    'withVideoUrl' => false,
])
