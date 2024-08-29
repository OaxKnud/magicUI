// 定义星级评分组件的大小类型
export type RateSize = 'large' | 'default' | 'small'

// 定义星级评分组件的Props
export interface RateProps {
  initRate?: number,        // 初始化得分
  size?: RateSize,      // 星星大小，支持 'large', 'default', 'small'
  max?: number,         // 最大分数
  color?: '',           // 星星颜色
  voidColor?: '',        // 未选中星星的颜色
  showText?:boolean,   //是否显示文字
  texts?:Array<string>,//显示的文字数组
  iconClass?:string,//设定图标
  voidIconClass?:string//未选定的图标
  disabled:boolean//是否只读
}

// 定义星级评分组件的Emits
export interface RateEmits {
  (e: 'changeRateNums', value: number): void  // 改变评分数量事件
}
