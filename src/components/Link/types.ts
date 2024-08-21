//定义props
import type { PropType } from "vue";

export type linkType= 'default' | 'primary' | "success" | "warning" | "danger" | "info"
export const linkProps={
    type:{
        type:String as PropType<linkType>,
        default:'default'
    },
    underline:{
        type:Boolean,
        default:true
    },
    disabled:{
        type:Boolean,
        default:false
    },
    href:{
        type:String,
    },
    icon:{
        type:String,
    },
    target:{
        type:String
    }
}

// 定义Link组件的事件
export const linkEmits = {
    click: (evt: MouseEvent) => evt instanceof MouseEvent, // 当链接被点击时触发的事件，返回一个布尔值表示是否为鼠标点击事件
}
// export type LinkEmits = typeof linkEmits // Link组件事件的类型定义