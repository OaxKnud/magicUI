<template>
    <Transition name="fade-up" @enter="updateHeight">
        <div class="mg-message" :class="computedClass" :style="cssStyle" v-show="visible" ref="messageRef">
            <div class="mg-container" :style="cssCenter">
                <mg-icon :icon="iconClass" v-if="iconClass != undefined"></mg-icon>
                <mg-icon icon="warning" v-else-if="!iconClass && type === 'warning'"></mg-icon>
                <mg-icon icon="circle-info" v-else-if="!iconClass && type === 'info'"></mg-icon>
                <mg-icon icon="xmark" v-else-if="!iconClass && type === 'error'"></mg-icon>
                <mg-icon icon="square-check" v-else-if="!iconClass && type === 'success'"></mg-icon>
                <slot>
                    
                    <div v-if="dangerouslyUseHTMLString" v-html="message"></div>
                    <RenderVnode :vNode="message" v-else-if="!dangerouslyUseHTMLString && message" />
                </slot>
            </div>
            <div class="mg-message__close" v-if="showClose">
                <!-- 显示关闭按钮 -->
                <mg-icon icon="xmark" size="sm" @click="closeMessage"></mg-icon>
            </div>
        </div>
    </Transition>
</template>



<script setup lang="ts">
import { MessageProps } from './types'
import { computed, ref } from 'vue'
import MgIcon from '../Icon/Icon.vue'
import RenderVnode from '../Common/RenderVNode'
import { onMounted } from 'vue';
import { getLastBottomOffset,instances } from './method'


defineOptions({
    name: 'MgMessage'
})

//设置props的默认值
const props = withDefaults(defineProps<MessageProps>(), {
    type: 'info',
    duration: 3000,
    offset: 20,
    center:false,
    dangerouslyUseHTMLString:false
})

// 设置消息是否可见
const visible = ref(false)
// 消息组件的引用
const messageRef = ref<HTMLDivElement>()

//计算属性
const height = ref(0) // 消息组件高度，在组件进入的时候通过updateHeight函数更新height
const lastOffset = computed(() => getLastBottomOffset(props.id)) // 上一个实例的最下面的坐标数字，上一个message的底部坐标
const topOffset = computed(() => props.offset + lastOffset.value) // 当前实例的 top 偏移量
const bottomOffset = computed(() => height.value + topOffset.value) // 元素的 bottom 偏移量，为下一个消息组件提供
const cssStyle = computed(() => ({
    top: topOffset.value + 'px', // 动态设置 top 样式
    zIndex: props.zIndex // 动态设置 z-index 样式
}))

const cssCenter=computed(()=>{
    if(props.center){
        return {
            'justify-content':'center'
}
    }else{
        return {
            'justify-content':'flex-start'
        }
    }

})



//计算组件的样式类名
const computedClass = computed(() => {
    const { type, message, iconClass, showClose,center,dangerouslyUseHTMLString } = props
    return [
        type ? 'mg-message--' + type : '',
    ]
})

let timer: any;
//创建计时器
function startTimer() {
    if (props.duration === 0) return
    timer = setTimeout(() => {
        visible.value = false // 定时器结束后隐藏消息
        clearTimeout(timer) //销毁timer
        //需要将instances中的相应id的message删除
        let idx = instances.findIndex(instance => instance.id === props.id)
        instances.splice(idx, 1)
        if (props.onClose && typeof props.onClose === 'function') {
  props.onClose()
}
        messageRef.value.remove()
    }, props.duration)

}


// 组件生命周期钩子
onMounted(async () => {
    visible.value = true // 组件挂载后显示消息
    startTimer() // 启动定时器
    // console.log("props:",props)
})


// 更新高度函数
function updateHeight() {
    height.value = messageRef.value!.getBoundingClientRect().height // 更新消息组件高度
}

defineExpose({
    bottomOffset,
    visible // 将 bottomOffset 和 visible 公开
})

//点击关闭组建
const closeMessage=()=>{
    visible.value = false // 定时器结束后隐藏消息
    clearTimeout(timer) //销毁timer
    //清除这个div组件
    let idx = instances.findIndex(instance => instance.id === props.id)
    instances.splice(idx, 1)
    if (props.onClose && typeof props.onClose === 'function') {
        props.onClose()
    }
    messageRef.value.remove()
}

</script>