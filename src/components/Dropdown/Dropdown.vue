<template>
    <div class="mg-dropdown">
        <mg-tooltip :trigger="trigger" :placement="placement" :popper-options="popperOptions" :open-delay="openDelay"
            :close-delay="closeDelay" :manual="manual" ref="tooltipRef" @visible-change="visibleChange">
            <!-- 点击的菜单按钮 -->
            <slot></slot>
            <!-- 菜单选项 -->
            <template #content>
                <ul class="mg-dropdown__menu">
                    <!-- 每一个菜单item -->
                    <template v-for="item in menuOptions" :key="item.key">
                        <!-- 分割线 -->
                        <li v-if="item.divided" role="separator" class="divided-placeholder"></li>
                        <!-- 实际菜单内容 -->
                        <li class="mg-dropdown__item" @click="itemClick(item)"
                            :class="{ 'is-disabled': item.disabled, 'is-divided': item.divided }"
                            :id="`dropdown-item-${item.key}`">
                            <!-- {{ item.label }} -->
                            <RenderVnode :vNode="item.label"></RenderVnode>
                        </li>
                    </template>
                </ul>
            </template>
        </mg-tooltip>

    </div>
</template>
<script setup lang="ts">
import MgTooltip from '../Tooltip/Tooltip.vue'
import {TooltipInstance} from '../Tooltip/types'
import { MenuOption, DropdownProps, DropdownEmits, DropdownInstance } from './types'
import { ref } from 'vue'
import RenderVnode from '../Common/RenderVnode'
defineOptions({
    name: 'MgDropdown'
})
//定义props
const props = defineProps<DropdownProps>()
//定义emits
const emits=defineEmits<DropdownEmits>()

//定义ref
const tooltipRef = ref<TooltipInstance>()

//定义visibleChange
const visibleChange = (e: boolean) => {
  emits('visible-change', e)
}

//定义itemClick(item)
const itemClick=(item:MenuOption)=>{
    if(item.disabled){
        return 
    }
    emits('select',item)
    if(props.hideAfterClick){
        tooltipRef.value?.hide()
    }
}

//暴漏接口
defineExpose<DropdownInstance>({
    show: () => tooltipRef.value?.show(),
    hide: () => tooltipRef.value?.hide()
})
</script>