<template>
    <!-- 表单组件模板 -->
    <div class="mg-form">
    <!-- 表单组件插槽 -->
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { provide } from 'vue'
import type { ValidateFieldsError } from 'async-validator'
import { formProps, formContextKey } from './types'
import type { FormItemContext, FormContext, FormValidateFailure } from './types'

defineOptions({
    name:'MgForm'
})

//定义props
const props=defineProps(formProps)

//存储表单字段的数组
const fields:FormItemContext[]=[]

//添加字段到表单的函数
const addField:FormContext['addField']=(field)=>{
    fields.push(field)
}

//移除表单字段的函数
const removeField:FormContext['removeField']=(field)=>{
    //如果字段有prop属性,字段不为空
    if(field.prop){
        const index=fields.indexOf(field)
        if(index!==-1){
            fields.splice(index,1)
        }
    }
}

//重置表单中的字段
const resetFields:FormContext['resetFields']=(keys=[])=>{
    const filterArr=keys.length?fields.filter(field=>keys.includes(field.prop)):fields
    filterArr.forEach(field=>{
        field.resetField()
    })
}

//清除表单中字段的验证状态函数
const clearValidate:FormContext["clearValidate"]=(keys=[])=>{
    const filterArr=keys.length?fields.filter(field=>keys.includes(field.prop)):fields
    filterArr.forEach(field=>{
        field.clearValidate()
    })
}

//验证表单中所有字段的函数
const validate:FormContext["validate"]=async()=>{
    //获取验证报错信息
    let validationErrors:ValidateFieldsError={}
    for(const field of fields){
        try {
            await field.validate('')
        }catch(e){
            const error=e as FormValidateFailure
            validationErrors={
                ...validationErrors,
                ...error.fields
            }
        }
    }
    if(Object.keys(validationErrors).length==0){
        return true
    }
    return Promise.reject(validationErrors)
}

//暴露外部使用的函数
defineExpose({
    // 验证表单
    validate,
    // 重置字段
    resetFields,
    //清除验证状态
    clearValidate,
    //增加表单项
    addField,
    //删除表单项
    removeField,
})

//向子组件提供表单上下文
provide(
    formContextKey,
    {
        ...props,
        addField,
        removeField,
        resetFields,
        clearValidate,
        validate
    }
)
</script>