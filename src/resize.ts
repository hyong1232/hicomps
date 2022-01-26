(function (document, window) {
    const resizeHandler = () => {
        const scale = 1/window.devicePixelRatio;
        const viewPortTag = document.querySelector('meta[name="viewport"]');
        if (!viewPortTag) {
            return;
        }
        viewPortTag.setAttribute('content', `width=device-width, initial-scale=${scale}, user-scalable=no`);
        document.documentElement.style.fontSize =  window.Math.round(document.documentElement.clientWidth / 1080) * 16 + 'px';
    }
    document.onresize = function (params: any) {
        resizeHandler();
    }
    resizeHandler();
})(document, window)