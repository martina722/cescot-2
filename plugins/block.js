const { registerBlockType } = wp.blocks;
const { createElement: el } = wp.element;

registerBlockType('custom/stelline', {
    title: 'Stelline Recensioni',
    icon: 'star-filled',
    category: 'widgets',

    edit() {
        return el(
            'div',
            { className: 'rating' },
            [...Array(5)].map((_, i) =>
                el('svg', {
                    key: i,
                    viewBox: '0 0 24 24',
                    width: 24,
                    height: 24,
                    style: { fill: i < 4 ? '#f5b301' : '#ddd' }
                },
                el('path', {
                    d: 'M12 .587l3.668 7.431L24 9.75l-6 5.847L19.335 24 12 19.897 4.665 24 6 15.597 0 9.75l8.332-1.732z'
                }))
            )
        );
    },

    save() {
        return null;
    }
});
