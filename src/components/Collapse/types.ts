import type { Ref, InjectionKey } from 'vue'

export type CollapseActiveName = string | number;

// 定义item的props：name，title，disable
export interface CollapseItemProps {
    name: CollapseActiveName; // 标识每个折叠项的唯一标识符，可以是字符串或数字类型
    title?: string; // 折叠项的标题，可选属性
    disabled?: boolean; // 是否禁用折叠项，可选属性
}

//定义collapse的props
export interface CollapseProps {
    modelValue: CollapseActiveName[]; //展开项的name的集合
    accordion?: boolean;//表示是否开启手风琴模式。
}

//定义collapse的触发事件
export interface CollapseEmits {
    // 更新了绑定值时，会自动触发
    (e: 'update:modelValue', value: CollapseActiveName[]): void,
    // 用户展开或折叠某个面板时触发change事件
    (e: 'change', values: CollapseActiveName[]): void
}

// 接收Inject数据类型
export interface CollapseContext {
    // 当前处于激活状态（展开状态）的折叠项
    activeNames: Ref<CollapseActiveName[]>,
    // 处理折叠项被点击时的逻辑
    handleItemClick: (name: CollapseActiveName) => void
}
// 折叠面板组件的上下文信息
export const collapseContextKey: InjectionKey<CollapseContext> = Symbol('collapseContextKey')
