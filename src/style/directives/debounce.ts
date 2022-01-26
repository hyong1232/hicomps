import { App, Directive } from "vue";
import { $on, $once } from "@/hooks/domEvent";

export const debounceDirective: Directive = {
    beforeMount(el, binding) {
        let timer: any;
        let starTime=  0;
        $on('mousedown', el, () => {
            starTime = Date.now();
            $once('mouseup', el, () => {
                if (Date.now() - starTime < 100) {
                    binding.value();
                    timer && clearTimeout(timer);
                }
            })
            timer && clearTimeout(timer);
            timer = setTimeout(() => {
                binding.value();
            }, 400);
        })
    }
}

export function setupDebounceDirective(app: App<Element>) {
    app.directive('v-debounce-click', debounceDirective);
}