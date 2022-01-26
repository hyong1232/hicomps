export function $once(type: string, el: Document | Element, handler: (...arg: any[]) => void){
    const lisener = function (...arg: any[]){
        handler(...arg);
        el.removeEventListener(type, lisener);
    }
    $on(type, el, lisener);
}
export function $on(type: string, el: Document | Element, handler: (...arg: any[]) => void){
    el && el.addEventListener(type, handler)
}

export function $destoryOn(type: string, el: Document | Element, handler: (...arg: any[]) => void) {
    el && el.removeEventListener(type, handler);
}