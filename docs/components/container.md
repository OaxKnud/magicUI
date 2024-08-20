---
title: Container
description: Container组件文档
---

# Container 布局
## 基本结构
用于布局的容器组件，方便快速搭建页面的基本结构：
- `<mg-container>`：外层容器。当子元素中包含 `<mg-header>` 或 `<mg-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。
- `<mg-header>`：顶栏容器。
- `<mg-aside>`：侧边栏容器。
- `<mg-main>`：主要区域容器。
- `<mg-footer>`：底栏容器。

## 常见页面布局

### 样例1
<preview path="../demo/Container/demo1.vue"></preview>

### 样例2
<preview path="../demo/Container/demo2.vue"></preview>

### 样例3
<preview path="../demo/Container/demo3.vue"></preview>

### 样例4
<preview path="../demo/Container/demo4.vue"></preview>

### 样例5
<preview path="../demo/Container/demo5.vue"></preview>

### 样例6
<preview path="../demo/Container/demo6.vue"></preview>

## Container Attributes

| 参数     | 说明                                                         | 类型    | 可选值       | 默认值                   |
| -------- | ------------------------------------------------------------ | ------- | ------------- | ------------------------ |
| direction | 子元素的排列方向，子元素中有`mg-header`或`mg-footer`时为 `vertical`，否则为 `horizontal` | number | horizontal / vertical | vertical（若有`mg-header`或`mg-footer`）<br>horizontal（否则） |

## Header Attributes
| 参数   | 类型   | 说明     | 可选值 | 默认值 |
| ------ | ------ | -------- | ------ | ------ |
| height | number | 顶栏高度 | ——     | 60   |
## Aside Attributes
| 参数   | 类型   | 说明       | 默认值 |
| ------ | ------ | ---------- | ------ |
| height | number | 底栏高度   | 60   |
## Footer Attributes
| 参数   | 类型   | 说明     | 默认值    | 可选值 |
| ------ | ------ | -------- | --------- | ------ |
| width  | number | 侧边栏宽度 | 300 | ——     |