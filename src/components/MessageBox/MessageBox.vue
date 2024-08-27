<template>
  <Transition name="messagebox-fade">
    <div class="mg-message-box" v-show="state.visible" @click.self="handleClickModal">
      <div class="mg-message-box-wrapper">
        <div class="mg-message-box-title">
          <h1>{{ props.title }}</h1>
          <span class="mg-message-box-close" v-if="props.showClose">
            <mg-icon icon="xmark" @click="handleAction('cancel')"></mg-icon>
          </span>
        </div>
        <div class="mg-message-box-content">
          <!-- 是否自定义图标和系统自带4种类型图标 -->
          <span v-if="type">
            <mg-icon :icon="iconClass" v-if="iconClass"></mg-icon>
            <mg-icon
              icon="warning"
              v-else-if="!iconClass && type === 'warning'"
              color="#E89F12"
            ></mg-icon>
            <mg-icon
              icon="circle-info"
              v-else-if="!iconClass && type === 'info'"
              color="#696969"
            ></mg-icon>
            <mg-icon
              icon="xmark"
              v-else-if="!iconClass && type === 'error'"
              color="#DC2708"
            ></mg-icon>
            <mg-icon
              icon="square-check"
              v-else-if="!iconClass && type === 'success'"
              color="#148E49"
            ></mg-icon>
          </span>
          <!-- 自定义输入内容 -->
          <!-- <div style="display:flex;flex-direction:column"> -->
          <!-- {{ props.message }} -->
          <div v-if="props.dangerouslyUseHTMLString" v-html="props.message"></div>
          <RenderVnode
            :vNode="props.message"
            v-else-if="!props.dangerouslyUseHTMLString && props.message"
          />
          <div
            class="message-input"
            v-if="props.isInput"
          >
            <input type="text" placeholder="" v-model="inputValue" @input="validateInput"/>
            <div v-if="!isValidInput" class="error-message">{{ props.inputErrorMessage }}</div>
          </div>
          <!-- </div> -->
        </div>
        <div class="mg-message-box-btns">
          <mg-button
            type="primary"
            plain
            @click="handleAction('cancel')"
            v-if="props.showCancelButton"
            >{{ props.cancelButtonText || "取消" }}</mg-button
          >
          
          <mg-button type="primary" @click="handleAction('confirm')" :loading="props.confirmButtonLoading">{{
            props.confirmButtonText || "确认"
          }}</mg-button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import MgIcon from "../Icon/Icon.vue";
import MgButton from "../Button/Button.vue";
import { reactive, ref ,getCurrentInstance} from "vue";
import { messageBoxProps, ActionType } from "./types";
import RenderVnode from '../Common/RenderVNode.ts'

const state = reactive({
  visible: true, //组件是否显示
  type: "", //组件的类型
});
//定义输入框的内容
const inputValue = ref("");
//valid
const isValidInput = ref(true);
//根据正则表达式判断输入内容是否符合格式要求
const validateInput = () => {
  // 根据props.inputPattern来验证inputValue
//   const pattern = new RegExp(props.inputPattern);
  isValidInput.value = props.inputPattern.test(inputValue.value);
};
//定义props
const props = defineProps<messageBoxProps>();

//修改visible的值
const setVisible = (isVisible: boolean) => {
  state.visible = isVisible;
};

defineOptions({
  name: "MgMessageBox",
});

//点击模态框外部实现模态框关闭
const handleClickModal = () => {
  if (props.closeOnClickModal) {
    setVisible(false);
  }
};
// 关闭 Messagebox 框
const closeModal = () => {
  // 如果弹窗已经关闭，则直接返回
  if (!state.visible) return;
  // 设置 visible 为 false，隐藏
  setVisible(false);
};

// 获取当前组件实例
const instance = getCurrentInstance();
// 处理按钮点击事件
const handleAction = (type: ActionType) => {
  if(type==='cancel'){
    state.type = type;
    closeModal();
  }
    if(props.isInput && inputValue.value.length===0){
        isValidInput.value=false
    }
    if(!props.isInput || (props.isInput && isValidInput.value && inputValue.value.length!=0)){
        // 记录用户操作类型
        state.type = type;
        // 关闭弹框
        if(typeof props.beforeClose === "function"){
          props.beforeClose(type, instance, closeModal)
        }else{
          closeModal();
        }
    }

};

defineExpose({
  setVisible,
  state,
  inputValue
});
</script>
