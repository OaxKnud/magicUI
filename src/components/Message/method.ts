import { render, h, shallowReactive } from 'vue'
import { MessageContext,CreateMessageProps } from "./types";
import MessageConstructor from './Message.vue'


//定义随机种子
let seed = 1;

// 存储消息实例的数组，使用 shallowReactive 创建响应式数组
export const instances: MessageContext[] = shallowReactive([])

// 创建消息函数
export const createMessage = (props: CreateMessageProps) => {
    // 生成消息 id
    const id = `message_${seed++}`
    // 创建消息容器
    const container = document.createElement('div')
    // 合并新的 props
    const newProps = {
      ...props,
      id,
    }
    // 通过 h 函数 创建消息vNode
    const vnode = h(MessageConstructor, newProps)
    // console.log('vnode:',vnode)
    // 渲染消息 vnode 到容器中
    render(vnode, container)
    // 将容器中的第一个元素添加到 body 中
    document.body.appendChild(container.firstElementChild!)
    // 获取组件实例
    const vm = vnode.component!
    // 创建消息实例对象
    const instance = {
      id,
      vnode,
      vm,
      props: newProps,
    }
    // 将消息实例对象添加到实例数组中
    instances.push(instance)
    return instance
}

// 获取上一个实例的底部偏移量
export const getLastBottomOffset = (id: string) => {
    const idx = instances.findIndex(instance => instance.id === id)
    if (idx <= 0) {
        return 0
    } else {
        const prev = instances[idx - 1]
        return prev.vm.exposed!.bottomOffset.value
    }
}
