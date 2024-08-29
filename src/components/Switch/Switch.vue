<template>
    <div class="mg-switch" @click="toggleSwitch"
        :class="{ 'is-checked': switchOn, 'is-disabled': disabled, [`mg-switch--${size}`]: size }">
        <!-- 开关主体部分 -->
        <!-- activeText文字描述:左侧 -->
        <span class="mg-switch__label mg-switch__label--left" v-if="!inlinePrompt && inactiveText">
            {{ inactiveText }}
        </span>
        <!-- switch开关结构 -->
        <span class="mg-switch__core" :style="switchStyle">
            <!-- 内嵌文字样式 -->
            <div class="mg-switch__inner">
                <span class="is-text" v-if="inlinePrompt && (activeText || inactiveText)">
                    {{ switchOn ? activeText : inactiveText }}
                </span>
            </div>
            <!-- 按钮 -->
            <div class="mg-switch__action"></div>
        </span>
        <!-- inactiveText文字描述 -->
        <span class="mg-switch__label mg-switch__label--right" v-if="!inlinePrompt && activeText">
        {{ activeText }}
        </span>
    </div>
</template>

<script setup lang="ts">
import { SwitchProps, SwitchEmits } from './types'
import { ref, watch, computed } from 'vue'
defineOptions({
    name: 'MgSwitch'
})

// 设置默认属性
const props = withDefaults(defineProps<SwitchProps>(), {
    disabled: false,
    size: 'large',
    activeValue: true,
    inactiveValue: false,
    inlinePrompt: false,
})

//当前Switch的value值
const switchValue = ref(props.modelValue)
//定义emits
const emits = defineEmits<SwitchEmits>()
//判断开关是否打开
const switchOn = ref(props.modelValue === props.activeValue)

//编写watch，当props.modelValue的值发生变化的时候，修改switchOn的值
watch(() => props.modelValue, (newValue) => {
    // console.log("watch:",props.modelValue)
    switchValue.value = newValue
    switchOn.value = (newValue === props.activeValue)
})

// 切换开关状态
const toggleSwitch = () => {
  // 如果未禁用且不处于加载状态，则切换开关状态
  if (!props.disabled) {
    switchOn.value = !switchOn.value;
    // 根据开关状态，更新 modelValue 并触发 'update:modelValue' 和 'change' 事件
    const newValue = switchOn.value ? props.activeValue : props.inactiveValue;
    emits('update:modelValue', newValue);
    emits('change', newValue);
  }
};


//计算switchStyle，开关打开关闭时的背景颜色
const switchStyle = computed(() => {
    return {
        'background-color': switchOn.value ? props.activeColor : props.inactiveColor,
        'border': switchOn.value ? props.activeColor : props.inactiveColor,
    }
})


</script>