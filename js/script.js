const options = {
  linkSelector:
    'a[href^="' +
    window.location.origin +
    '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
    plugins: [new SwupScrollPlugin({animateScroll: false, doScrollingRightAway: false}), new SwupDebugPlugin()]
};

const swup = new Swup(options);

function init() { //all the functions that could be run on page load
    if (document.querySelector('#infoemail')) { //honeypot info email
        console.log("spam email swapped");
        var asdf="info", ghjk="worksgroup", lzxc="synergy";
        document.getElementById("infoemail").innerHTML = '<a href="mailto:' + asdf + '@' + lzxc + ghjk + '.com' + '">'+ asdf + '@' + lzxc + ghjk + '.com' + '</a>';
    }

}

init(); //runs any init code once when loaded

swup.on('contentReplaced', init); //runs any init code whenever navigation takes place
