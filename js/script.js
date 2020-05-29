const swupoptions = {
  linkSelector:
    'a[href^="' +
    window.location.origin +
    '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup])',
    plugins: [new SwupScrollPlugin({animateScroll: false}), new SwupScriptsPlugin({optin: true})]
};
const swup = new Swup(swupoptions);
