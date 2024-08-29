---
title: Rate
description: Rate组件文档
---


# Rate 评分

评分组件

## 基础用法
默认不区分颜色
<preview path="../demo/Rate/demo1.vue"></preview>

## 辅助文字
用辅助文字直接地表达对应分数
为组件设置 showText 属性会在右侧显示辅助文字。通过设置 texts 可以为每一个分值指定对应的辅助文字。texts 为一个数组，长度应等于最大值 max。
<preview path="../demo/Rate/demo2.vue"></preview>

## 只读
只读的评分用来展示分数
<preview path="../demo/Rate/demo3.vue"></preview>

## 其它 icon
设置icon的类型,包括点亮的icon和不点亮的icon
<preview path="../demo/Rate/demo4.vue"></preview>

## changeRateNums事件触发
获取修改后的rate得分
<preview path="../demo/Rate/demo5.vue"></preview>