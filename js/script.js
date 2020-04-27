const options = {
  linkSelector:
    'a[href^="' +
    window.location.origin +
    '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup])',
    plugins: [new SwupScrollPlugin({animateScroll: false})]
};
const swup = new Swup(options); // only this line when included with script tag
