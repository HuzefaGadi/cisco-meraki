/* ------------------------------------------------------------------------------
 *
 *  # Custom JS code
 *
 *  Place here all your custom js. Make sure it's loaded after app.js
 *
 * ---------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------
 *
 *  # CKEditor Classic editor
 *
 *  Demo JS code for editor_ckeditor_classic.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

const CKEditorClassic = function() {


    //
    // Setup module components
    //

    // CKEditor
    const _componentCKEditorClassic = function() {
        if (typeof ClassicEditor == 'undefined') {
            console.warn('Warning - ckeditor_classic.js is not loaded.');
            return;
        }

        // Editor with prefilled text
        ClassicEditor.create(document.querySelector('#ckeditor_classic'), {
            fontFamily: {
                supportAllValues: true
            },
            fontSize: {
                options: [ 10, 12, 14, 'default', 18, 20, 22 ],
                supportAllValues: true
            },
            heading: {
                options: [
                    { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                    { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                    { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
                    { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
                    { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
                    { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
                    { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
                ]
            },
            htmlEmbed: {
                showPreviews: true
            },
            htmlSupport: {
                allow: [
                    // Enables all HTML features.
                    {
                        name: /.*/,
                        attributes: true,
                        classes: true,
                        styles: true
                    }
                ],
                disallow: [
                    {
                        attributes: [
                            { key: /.*/, value: /data:(?!image\/(png|jpeg|gif|webp))/i }
                        ]
                    }
                ]
            },
            image: {
                styles: [ 'alignCenter', 'alignLeft', 'alignRight' ],
                resizeOptions: [
                    {
                        name: 'resizeImage:original',
                        label: 'Default image width',
                        value: null
                    },
                    {
                        name: 'resizeImage:50',
                        label: '50% page width',
                        value: '50'
                    },
                    {
                        name: 'resizeImage:75',
                        label: '75% page width',
                        value: '75'
                    }
                ],
                toolbar: [
                    'imageTextAlternative', 'toggleImageCaption',
                    '|',
                    'imageStyle:inline', 'imageStyle:wrapText', 'imageStyle:breakText', 'imageStyle:side',
                    '|',
                    'resizeImage'
                ],
                insert: {
                    integrations: [ 'insertImageViaUrl' ]
                }
            },
            list: {
                properties: {
                    styles: true,
                    startIndex: true,
                    reversed: true
                }
            },
            link: {
                decorators: {
                    toggleDownloadable: {
                        mode: 'manual',
                        label: 'Downloadable',
                        attributes: {
                            download: 'file'
                        }
                    }
                },
                addTargetToExternalLinks: true,
                defaultProtocol: 'https://'
            },
            placeholder: 'Type or paste your content here!',
            style: {
                definitions: [
                    {
                        name: 'Title',
                        element: 'h1',
                        classes: [ 'document-title' ]
                    },
                    {
                        name: 'Subtitle',
                        element: 'h2',
                        classes: [ 'document-subtitle' ]
                    },
                    {
                        name: 'Callout',
                        element: 'p',
                        classes: [ 'callout' ]
                    },
                    {
                        name: 'Side quote',
                        element: 'blockquote',
                        classes: [ 'side-quote' ]
                    },
                    {
                        name: 'Needs clarification',
                        element: 'span',
                        classes: [ 'needs-clarification' ]
                    },
                    {
                        name: 'Wide spacing',
                        element: 'span',
                        classes: [ 'wide-spacing' ]
                    },
                    {
                        name: 'Small caps',
                        element: 'span',
                        classes: [ 'small-caps' ]
                    },
                    {
                        name: 'Code (dark)',
                        element: 'pre',
                        classes: [ 'stylish-code', 'stylish-code-dark' ]
                    },
                    {
                        name: 'Code (bright)',
                        element: 'pre',
                        classes: [ 'stylish-code', 'stylish-code-bright' ]
                    }
                ]
            },
            table: {
                contentToolbar: [
                    'tableColumn',
                    'tableRow',
                    'mergeTableCells',
                    'tableProperties',
                    'tableCellProperties',
                    'toggleTableCaption'
                ]
            },
        }).catch(error => {
            console.error(error);
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentCKEditorClassic();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    CKEditorClassic.init();
});
