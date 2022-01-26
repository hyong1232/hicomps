/** todo: 1、scrolling change the position of popover 2、appendTo body */
<template>
  <div class="slot-content" ref="slotContent">
    <slot></slot>
  </div>
  <teleport to="body">
    <div class="h-popover" v-show="isShowPopover" v-hy-popover="true">
      <div class="h-popover-content">
        <slot name="reference">{{ props.text }}</slot>
      </div>
      <div
        class="triangle"
        :class="{ [`arrow-${props.direction}`]: true }"
        ref="triangle"
      ></div>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
import { $destoryOn, $on } from "@/hooks/domEvent";
import { usePopoverOffset } from "@/hooks/position";
import { throttle } from "@/hooks/throttle";
import { debounceDirective } from "@/style/directives/debounce";
import { Directive, onMounted, reactive, ref } from "vue";

let domEventTrigger: (...args: any[]) => void;
let eventTrigger: () => void;

const registerTrigger = () => {
    domEventTrigger = e => {
        if(document.contains(e.target) && !slotContent.value.contains(e.target)) {
            isShowPopover.value = false;
        }
    }
    eventTrigger = () => {
        isShowPopover.value = true;
    }
    $on(props.triger, document.documentElement, domEventTrigger);
    $on(props.triger, slotContent.value, eventTrigger);
}

onMounted(registerTrigger);

const props = defineProps({
  text: {
    type: String,
  },
  triger: {
    type: String,
    default: 'click',
    validate(val: string){
        return ['hover', 'click'].includes(val);
    }
  },
  direction: {
    type: String,
    required: true,
  },
});
const triangle = ref();
const slotContent = ref();

const isShowPopover = ref(false);

let updatePosition: () => void;

const vHyPopover: Directive = {
  updated(el) {
    updatePosition = throttle(50, () =>{
        const position = usePopoverOffset(slotContent.value, el, props.direction);
        el.style.top = `${position.top}px`;
        el.style.left = `${position.left}px`;
        let triangleDirection = '';
        switch (props.direction) {
            case 'bottom':
                triangleDirection = 'top';
                break;
            case 'top':
                triangleDirection = 'bottom';
                break;
            case 'left':
                triangleDirection = 'right';
                break;
            case 'right':
                triangleDirection = 'left';
                break;
            default:
                break;
        }
        const trianglePosition = usePopoverOffset(el, triangle.value, triangleDirection, true)
        triangle.value.style.top = `${trianglePosition.top}px`;
        triangle.value.style.left = `${trianglePosition.left}px`;
    })
    window.addEventListener('resize', updatePosition);
    updatePosition();
  },
  unmounted() {
    $destoryOn(props.triger, document.documentElement, domEventTrigger);
    $destoryOn(props.triger, slotContent.value, eventTrigger);
    window.removeEventListener('resize', updatePosition);
  }
};
</script>

<style lang="scss" scoped>
$relateDirect: ("right": ("top" "right"),
  "bottom": ("bottom" "right"),
  "left": (
    "bottom"
    "left"
  ),
  "top": (
    "top"
    "left"
  ),
);

@each $key, $var in $relateDirect {
  .arrow-#{$key}::before {
    border-#{nth($var, 1)}-color: transparent !important;
    border-#{nth($var, 2)}-color: transparent !important;
  }
}

.h-popover {
  position: absolute;
  min-width: 4.6875rem;
  border-radius: 0.125rem;
  box-shadow: 0 0 4px 4px var(--hy-comp-border-color);
  border: 1px solid var(--hy-comp-border-color);
  padding: 0.375rem;
  z-index: var(--hy-popper-zindex);
  line-height: 1.4;
  text-align: justify;
  word-break: break-all;
  background: var(--hy-comp-white);
  border: 1px solid var(--hy-comp-white-light);
  .h-popover-content {
    z-index: 1;
  }
  .triangle {
    position: absolute;
    width: 0.3125rem;
    height: 0.3125rem;
    &::before {
      z-index: -1;
      content: " ";
      border: 1px solid var(--hy-comp-border-color);
      position: absolute;
      width: 0.25rem;
      height: 0.25rem;
      background-color: var(--hy-comp-white);
      transform: rotate(45deg);
    }
  }
}
</style>
