<template>
    <div class="mg-form-item" ref="formItemRef" :class="{
        'is-error': validateStatus.state === 'error',
        'is-success': validateStatus.state === 'success',
        'is-loading': validateStatus.loading,
        'is-required': isRequired
    }">
        <!-- 表单项的label -->
        <div class="mg-form-item__label">
            <slot name="label" :label="label">
                {{ label }}
            </slot>
        </div>
        <!-- 表单项的content -->
        <div class="mg-form-item__content">
            <slot/>
            <div class="mg-form-item__error-msg" v-if="validateStatus.state === 'error' && showMessage">
                {{ validateStatus.errorMsg }}
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { inject, reactive, ref, computed, onMounted, onUnmounted, provide,watch } from 'vue'
import AsyncValidator from 'async-validator'
import type { RuleItem } from 'async-validator'
import { isNil } from 'lodash-es'
import { formItemProps, formContextKey, formItemContextKey } from './types'
import type { FormItemContext, FormValidateFailure } from './types'

// 设置组件选项
defineOptions({
    name: 'MgFormItem'
})

//定义props
const props = defineProps(formItemProps)

// 表单项的引用
const formItemRef = ref<HTMLDivElement>()

//获取表单上下文
const formContext = inject(formContextKey)

//定义验证状态
const validateStatus = reactive({
    state: 'init',
    errorMsg: '',
    loading: false
})

//计算属性，获取表单的item的内部值
const innerValue = computed(() => {
    const model = formContext?.model
    if (model && props.prop && !isNil(model[props.prop])) {
        return model[props.prop]
    } else {
        return null
    }
})

//初始值
let initialValue: any = undefined

//获取表单规则的计算属性
const getItemRules = computed(() => {
    const rules = formContext?.rules
    if (rules && props.prop && rules[props.prop]) {
        // console.log("getItemRules:",rules[props.prop])
        return rules[props.prop]
    } else {
        return []
    }
})

//是否为必填项
const isRequired = computed(() => {
    return getItemRules.value?.some((rule: RuleItem) => rule.required)
})

//验证字段的函数
const validate = async () => {
    // console.log("validate")
    const modelName = props.prop
    if (getItemRules.value?.length === 0) {
        return true
    }
    if (modelName) {
        const validator = new AsyncValidator({
            [modelName]: getItemRules.value as RuleItem[],
        })
        validateStatus.loading = true
        return validator.validate({
            [modelName]: innerValue.value
        }).then(() => {
            console.log("success")
            validateStatus.state = 'success'
        }).catch((e: FormValidateFailure) => {
            console.log("error")
            const { errors } = e
            validateStatus.state = 'error'
            validateStatus.errorMsg = (errors && errors.length > 0) ? errors[0].message || '' : ''
            return Promise.reject(e)
        })
            .finally(() => {
                validateStatus.loading = false
            })
    }
}

//当组件被trigger的时候调用validate函数
watch(()=>innerValue.value,()=>{
    // console.log("innerValue change")
    validate()
})

//清除验证状态函数
const clearValidate = () => {
    validateStatus.state = 'init'
    validateStatus.loading = false
    validateStatus.errorMsg = ''
}

//重置字段的函数
const resetField = () => {
    const model = formContext?.model
    clearValidate()
    if (model && props.prop && model[props.prop]) {
        model[props.prop] = initialValue
    }
}

//表单项上下文
const context: FormItemContext = reactive({
    $el: formItemRef,
    resetField,
    clearValidate,
    prop: props.prop || '',
    validate
})

// 提供表单项上下文
provide(formItemContextKey, context)

// 组件挂载时执行的钩子函数
onMounted(() => {
    if (props.prop) {
        formContext?.addField(context)
        initialValue = innerValue.value
    }
})

// 组件卸载时执行的钩子函数
onUnmounted(() => {
    formContext?.removeField(context)
})

// 暴露供外部使用的函数和状态
defineExpose({
    /** @description 验证状态 */
    validateStatus,
    /** @description 验证表单项 */
    validate,
    /** @description 清除验证状态 */
    clearValidate,
    /** @description 重置字段值 */
    resetField,
})

</script>