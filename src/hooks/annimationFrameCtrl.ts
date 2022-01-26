// bad example: can't use local params by rAF callback!!!
export function animationFrameCtrl(cb: (...args: any[]) => void, fps = 60) {
    const interval = 1000/fps;
    let lastExecTime: number;
    const rAF = window.requestAnimationFrame || ((...args: any[]) => {setTimeout(() => {cb(...args)}, interval)});
    let elapsedTime = 0;
    function executor(...args: any[]) {
        rAF(executor);
        elapsedTime = Date.now() - lastExecTime;
        if (fps !== 60 && elapsedTime > interval) {
            cb(...args)
        } else {
            cb(...args)
        }
    }
    return executor;
}