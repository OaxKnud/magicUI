---
title: Icon 组件
description: Icon组件文档
---

# Icon 组件
提供了一套常用的图标集合。

# 使用方法
通过设置icon属性来使用即可。例如：
<preview path="../demo/Icon/demo1.vue"></preview>

# 图标属性
| 属性     | 作用                     | 类型                         | 可取值                                       |
| ------------- | ------------------------ | ---------------------------- | -------------------------------------------- |
| icon          | 图标对象或名称           | `object` \| `Array<string>` \| `string` \| `IconDefinition` | 对象、字符串数组、字符串或图标定义类型       |
| color         | 图标颜色                 | `string`                    | 任意有效的颜色值                             |
| size          | 图标尺寸                 | `string`                    | '2xs', 'xs', 'sm', 'lg', 'xl', '2xl', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x' |
| border        | 是否带边框               | `boolean`                   | true, false                                  |
| fixedWidth    | 是否固定宽度             | `boolean`                   | true, false                                  |
| flip          | 图标翻转方向             | `string`                    | 'horizontal', 'vertical', 'both'            |
| mask          | 图标遮罩                 | `object` \| `Array<string>` \| `string` | 对象、字符串数组、字符串                     |
| listItem      | 是否作为列表项           | `boolean`                   | true, false                                  |
| pull          | 图标对齐方式             | `string`                    | 'right', 'left'                               |
| pulse         | 是否有脉动效果           | `boolean`                   | true, false                                  |
| rotation      | 图标旋转角度             | `number` \| `string`        | 90, 180, 270, '90', '180', '270'            |
| swapOpacity   | 是否交换不透明度         | `boolean`                   | true, false                                  |
| spin          | 是否旋转                 | `boolean`                   | true, false                                  |
| transform     | 图标变换                 | `object` \| `string`        | 对象或字符串                                |
| symbol        | 是否作为符号             | `boolean` \| `string`       | true, false, 任意字符串                      |
| title         | 图标标题                 | `string`                    | 任意字符串                                    |
| inverse       | 是否反向显示             | `boolean`                   | true, false                                  |
| bounce        | 是否弹跳                 | `boolean`                   | true, false                                  |
| shake         | 是否摇动                 | `boolean`                   | true, false                                  |
| beat          | 是否跳动                 | `boolean`                   | true, false                                  |
| fade          | 是否淡入淡出             | `boolean`                   | true, false                                  |
| beatFade      | 是否跳动并淡入淡出       | `boolean`                   | true, false                                  |
| spinPulse     | 是否旋转脉动             | `boolean`                   | true, false                                  |
| spinReverse   | 是否反向旋转             | `boolean`                   | true, false                                  |