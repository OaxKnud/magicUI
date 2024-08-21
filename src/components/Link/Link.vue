<template>
    <a class="mg-link" :class="computedClass" :href="disabled || !href ? '' : href"
        :target="disabled || !href ? undefined : target"
        @click="handleClick"
        >
        <mg-icon :icon="icon" v-if="icon"></mg-icon>
        <span class="mg-link__inner">
            <slot>文字链接</slot>
        </span>
    </a>
</template>
<script setup lang="ts">
import { linkProps,linkEmits } from './types'
import MgIcon from '../Icon/Icon.vue'
import { computed } from 'vue'
defineOptions({
    name: 'MgLink'
})

const props=defineProps(linkProps)

const computedClass=computed(()=>{
    const {type,underline,disabled,href,icon,target}=props
    return [
        type? 'mg-link--'+type :'',
        {
            'is-disabled':disabled,
            'is-underline':underline
        }
    ]

})
const emits=defineEmits(linkEmits)

// 处理点击事件
const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emits('click', event)
  }
}

</script>