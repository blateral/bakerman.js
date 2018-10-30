import * as Observer from 'fontfaceobserver';

export const loadFonts = () => {
    Promise.all([new Observer('Some Fontname').load()])
        .then(function() {
            if (document.documentElement) {
                document.documentElement.className += ' fl';
            }
        })
        .catch(e => console.error('Fontloader Error: Fonts not loaded:', e));
};
