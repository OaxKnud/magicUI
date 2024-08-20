<template>
  <button
    class="mg-button"
    ref="_ref"
    :class="computedClass"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <!-- 如果按钮处于加载中 -->
    <mg-icon icon="spinner" v-if="loading" spin/>
    <!-- 如果按钮传递图标 -->
    <mg-icon :icon="icon" v-if="icon" />
    <span>
      <slot></slot>
    </span>
  </button>
</template>
<script setup lang="ts">
import { buttonProps } from './types'
import { computed, ref } from 'vue'
// 引入Icon组件
import MgIcon from '../Icon/Icon.vue'
// 定义组件名称
defineOptions({
  name: 'MgButton'
})
// 接收props
const props = defineProps(buttonProps)
// 定义组件实例
const _ref = ref<HTMLButtonElement>()
// defineExpose暴露实例
defineExpose({
  ref: _ref
})
// 计算button的样式类
const computedClass = computed(() => {
  const { type, size, round, loading, circle, disabled, plain } = props
  return [
    type ? 'mg-button--' + type : '',
    size ? 'mg-button--' + size : '',
    { 
      'is-round': round,
      'is-loading': loading,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-plain': plain,
    }
  ]
})
</script>

<style scoped>

</style>