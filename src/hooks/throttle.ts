export function throttle(interval: number, cb: (...args: any[]) => void) {
    let lastExecTime = Date.now();
    let elapsedTime = 0;
    let timer: number;
    function wrapper(this: typeof wrapper,...args: any[]) {
        function clear() {
            timer && clearTimeout(timer);
        }
        function executor(...args: any[]) {
            cb(...args);
            lastExecTime = Date.now();
        }
        elapsedTime = Date.now() - lastExecTime;
        clear();
        if (elapsedTime > interval) {
            executor();
        } else {
            timer = setTimeout(executor, interval);
        }
    }
    return wrapper;
}