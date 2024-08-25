---
title: MessageBox
description: MessageBox组件文档
---
# MessageBox 弹框
模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。

## 消息提示
当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。
<preview path="../demo/MessageBox/demo1.vue"></preview>

## 确认消息
提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。
<preview path="../demo/MessageBox/demo2.vue"></preview>

## 提交内容
当用户进行操作时会被触发，中断用户操作，提示用户进行输入的对话框。
<preview path="../demo/MessageBox/demo3.vue"></preview>

## 自定义
可自定义配置不同内容。例如：VNode
<preview path="../demo/MessageBox/demo4.vue"></preview>

## 使用 HTML 片段
message 属性支持传入 HTML 片段。

message 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 XSS 攻击。因此在 dangerouslyUseHTMLString 打开的情况下，请确保 message 的内容是可信的，永远不要将用户提交的内容赋值给 message 属性。
<preview path="../demo/MessageBox/demo5.vue"></preview>