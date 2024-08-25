import {VNode} from 'vue'

export interface messageBoxProps {
    title:string;//messageBox的标题
    message:string | VNode; //messageBox的内容
    dangerouslyUseHTMLString?:boolean;//是否将messageBox的内容当作html处理
    type?:MessageType;//消息类型，用于显示图标，success / info / warning / error
    iconClass:string;//自定义图标类型
    showClose:boolean;//是否显示右上角关闭
    beforeClose:(actype:ActionType, instance:any, closeModal:()=>void)=>void;//MessageBox 关闭前的回调，会暂停实例的关闭
    showCancelButton?:boolean;//是否显示取消按钮
    showConfirmButton?:boolean;//是否显示确定按钮
    cancelButtonText?:string;//取消按钮的文本内容
    confirmButtonText?:string;//确定按钮的文本内容
    showInput?:boolean;//是否显示输入框
    closeOnClickModal?: boolean; // 是否在点击模态框外部时关闭弹出框
    [key: string]: unknown; // 允许添加额外的自定义属性
    isInput?:boolean;//是否插入输入框
    inputPattern?:RegExp;//正则表达式
    inputErrorMessage?:string;//输入不符合要求的错误提示
    // field?: string; // 额外字段
    confirmButtonLoading?:boolean;
}

export type MessageType='success' | "info" | "warning" | "error"
export type ActionType='confirm' | 'cancel' | 'close';
