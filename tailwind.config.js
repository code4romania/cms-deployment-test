module.exports = {
    theme: {
        container: {
            padding: '1.25rem',
            center: true,
        },
        extend: {
            fontFamily: {
                sans: [
                    'Titillium Web',
                    'Helvetica Neue',
                    'Helvetica',
                    'Arial',
                    'sans-serif',
                ],
                mono: ['Courier', 'monospace'],
            },
        },
        colors: {
            transparent: 'transparent',

            black: '#000',
            white: '#FFF',

            primary: {
                100: '#E6E6FF',
                200: '#BFBFFF',
                300: '#9999FF',
                400: '#4D4DFF',
                500: '#0000FF',
                600: '#0000E6',
                700: '#000099',
                800: '#000073',
                900: '#00004D',
            },
            warning: {
                100: '#FFFAE6',
                200: '#FFF2BF',
                300: '#FFEB99',
                400: '#FFDB4D',
                500: '#FFCC00',
                600: '#E6B800',
                700: '#997A00',
                800: '#735C00',
                900: '#4D3D00',
            },
            danger: {
                100: '#FFE6E6',
                200: '#FFBFBF',
                300: '#FF9999',
                400: '#FF4D4D',
                500: '#FF0000',
                600: '#E60000',
                700: '#990000',
                800: '#730000',
                900: '#4D0000',
            },
            success: {
                100: '#E8F5EC',
                200: '#C7E7CE',
                300: '#A5D9B1',
                400: '#61BC77',
                500: '#1D9F3C',
                600: '#1A8F36',
                700: '#115F24',
                800: '#0D481B',
                900: '#093012',
            },
            gray: {
                100: '#F6F7F9',
                200: '#E7EBEF',
                300: '#D9DFE6',
                400: '#BDC6D3',
                500: '#A0AEC0',
                600: '#909DAD',
                700: '#606873',
                800: '#484E56',
                900: '#30343A',
            },
        },
        textStyles: theme => ({
            // defaults to {}
            heading: {
                output: false, // this means there won't be a "heading" component in the CSS, but it can be extended
                fontWeight: theme('fontWeight.bold'),
                lineHeight: theme('lineHeight.tight'),
            },
            h1: {
                extends: 'heading', // this means all the styles in "heading" will be copied here; "extends" can also be an array to extend multiple text styles
                fontSize: theme('fontSize.3xl'),
                '@screen md': {
                    fontSize: theme('fontSize.4xl'),
                },
                '@screen lg': {
                    fontSize: theme('fontSize.5xl'),
                },
            },
            h2: {
                extends: 'heading',
                fontSize: theme('fontSize.2xl'),
                '@screen md': {
                    fontSize: theme('fontSize.3xl'),
                },
                '@screen lg': {
                    fontSize: theme('fontSize.4xl'),
                },
            },
            h3: {
                extends: 'heading',
                fontSize: theme('fontSize.xl'),
                '@screen md': {
                    fontSize: theme('fontSize.2xl'),
                },
                '@screen lg': {
                    fontSize: theme('fontSize.3xl'),
                },
            },
            h4: {
                extends: 'heading',
                fontSize: theme('fontSize.lg'),
                '@screen md': {
                    fontSize: theme('fontSize.xl'),
                },
                '@screen lg': {
                    fontSize: theme('fontSize.2xl'),
                },
            },
            list: {
                output: false,
                marginTop: theme('spacing.5'),
                marginBottom: theme('spacing.5'),
                marginLeft: theme('spacing.10'),

                li: {
                    marginTop: theme('spacing.1'),
                },
            },
            link: {
                fontWeight: theme('fontWeight.semibold'),
                color: theme('colors.primary.500'),
                textDecoration: 'underline',

                '&:hover': {
                    textDecoration: 'none',
                },
            },
            embed: {
                position: 'relative',
                overflow: 'hidden',
                display: 'block',
                width: '100%',
                padding: 0,

                'iframe, video': {
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    left: 0,
                    top: 0,
                },
            },
            richText: {
                lineHeight: theme('lineHeight.relaxed'),
                '> * + *': {
                    marginTop: theme('spacing.5'),
                },
                h1: {
                    extends: 'h1',
                },
                h2: {
                    extends: 'h2',
                },
                h3: {
                    extends: 'h3',
                },
                h4: {
                    extends: 'h4',
                },
                h5: {
                    extends: 'h5',
                },
                h6: {
                    extends: 'h6',
                },
                ul: {
                    extends: 'list',
                    listStyleType: 'disc',
                },
                ol: {
                    extends: 'list',
                    listStyleType: 'decimal',
                },
                a: {
                    extends: 'link',
                },
                'b, strong': {
                    fontWeight: theme('fontWeight.bold'),
                },
                'i, em': {
                    fontStyle: 'italic',
                },
                table: {
                    width: '100%',
                    fontSize: theme('fontSize.base'),
                },
                'tr:nth-child(2n)': {
                    backgroundColor: theme('colors.gray.100'),
                },
                td: {
                    paddingTop: theme('spacing.2'),
                    paddingBottom: theme('spacing.2'),
                    paddingLeft: theme('spacing.3'),
                    paddingRight: theme('spacing.3'),
                },
            },
        }),
        // This should match the aspect raio values defined in config/cms/embeds.php
        aspectRatio: {
            '1/1': [1, 1],
            '5/4': [5, 4],
            '4/3': [4, 3],
            '3/2': [3, 2],
            '5/3': [5, 3],
            '16/9': [16, 9],
            '2/1': [2, 1],
            '3/1': [3, 1],
            '5/6': [5, 6],
            '4/5': [4, 5],
            '3/4': [3, 4],
            '2/3': [2, 3],
            '3/5': [3, 5],
            '9/16': [9, 16],
            '1/2': [1, 2],
            '1/3': [1, 3],
        },
    },
    variants: {
        aspectRatio: ['responsive'],
    },
    plugins: [
        //
        require('tailwindcss-aspect-ratio'),
        require('@tailwindcss/custom-forms'),
        require('tailwindcss-typography')({
            componentPrefix: '', // the prefix to use for text style classes
        }),
    ],
    purge: {
        content: [
            'resources/**/*.blade.php',
            'vendor/code4romania/cms/src/Presenters/*.php',
        ],
        options: {
            whitelist: ['rich-text'],
            whitelistPatterns: [/^aspect-ratio-/],
        },
    },
};