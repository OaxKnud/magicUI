---
title: Button
description: Button组件文档
---

# Button按钮

按钮（Button）是用户界面中常见的交互元素，通常用于触发某种操作或提交表单。通过修改其属性的值来定义按钮样式。
具体属性如下：
| 参数     | 说明   | 类型   | 可选值                                 |
| -------- | ------ | ------ | -------------------------------------- |
| size     | 尺寸   | string | medium/small/large                    |
| type     | 类型   | string | primary/success/warning/danger/info/ |
| plain    | 是否朴素按钮 | boolean |                                        |
| round    | 是否圆角按钮 | boolean |                                        |
| circle   | 是否圆形按钮 | boolean |                                        |
| loading  | 是否加载中状态 | boolean |                                        |
| disabled | 是否禁用状态 | boolean |                                        |
| icon     | 图标类名 | string |                                        |
| autofocus| 是否默认聚焦 | boolean |                                        |
| native-type | 原生type属性 | string | button/submit/reset                   |

## 基础用法

基础按钮，使用type，round，plain，circle，icon来定义按钮的样式。

<preview path="../demo/Button/Basic.vue" title="基础用法" description="Button 组件的基础用法"></preview>

## 禁用状态
调整disabled变量，实现按钮的禁用
<preview path="../demo/Button/Disable.vue" title="禁用状态" description="Button 组件的禁用状态"></preview>

## 文字按钮
没有边框和背景色的按钮。
<preview path="../demo/Button/Text.vue" title="文字按钮" description="Button 组件的文字按钮"></preview>

## 图标按钮
带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

设置icon属性即可，icon 的列表可以参考 Magic-UI 的 icon 组件，也可以设置在文字右边的 icon ，只要使用MgIcon标签即可，可以使用自定义图标。其中icon使用fontawesome图标实现，具体icon的值可以参考https://fontawesome.com/

<preview path="../demo/Button/ButtonIcon.vue" title="图标按钮" description="Button 组件的图标按钮"></preview>

## 加载中
点击按钮后进行数据加载操作，在按钮上显示加载状态。
<preview path="../demo/Button/Loading.vue" title="加载中" description="Button 组件的加载中"></preview>

## 不同尺寸
Button 组件提供除了默认值以外的三种尺寸(small,medium,large)，可以在不同场景下选择合适的按钮尺寸。
<preview path="../demo/Button/Size.vue" title="不同尺寸" description="Button 组件的不同尺寸"></preview>