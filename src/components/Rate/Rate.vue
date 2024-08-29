<template>
    <div class="mg-rate" :style="{color:voidColor}" >
        <!-- <span
            v-for="num in max"
            class="iconfont icon-star"
            :key="num"
            :class="{ active: num <= coloredStarNum, [`mg-rate--${size}`]: true}"
            :style="{
                'color': num <= coloredStarNum ? color : voidColor
            }"
            @click="setRateNum(num)"
            @mouseenter="setMouseEnterStarNum(num)"
            @mouseleave="setMouseLeaveStarNum()"
            ></span> -->
        <mg-icon :icon="num <= coloredStarNum ? iconClass : voidIconClass" :color="num <= coloredStarNum ? color : voidColor" v-for="num in max" :key="num" @click="setRateNum(num)"
            @mouseenter="setMouseEnterStarNum(num)" @mouseleave="setMouseLeaveStarNum()"></mg-icon>
        <span v-if="showText">{{ texts[coloredStarNum-1] }}</span>
    </div>
</template>

<script setup lang="ts">
import {RateProps,RateEmits} from './types'
import {ref} from 'vue'
import MgIcon from '../Icon/Icon.vue'

defineOptions({
    name:'MgRate'
})

//定义props
const props=withDefaults(defineProps<RateProps>(),{
    initRate:0,//星星数目
    size:'default',//星星大小
    max:5,//总评分
    texts:['极差','失望','一般','满意','惊喜'],
    color:'#FBAB06',
    voidColor:'#696969',
    iconClass:'star',
    voidIconClass:'star',
    disabled:false
})
//定义emits
const emits=defineEmits<RateEmits>()
//定义点亮的星星数目
const clickrateNum=ref(props.initRate)
//修改点亮的星星数目
const setRateNum=(num:number)=>{
    // console.log("setRateNum:",num)
    clickrateNum.value=num
    emits('changeRateNums',clickrateNum.value)
    changeStarColor(clickrateNum.value)
}

//定义当前点亮的星星数目
const coloredStarNum=ref(props.initRate)
//设置鼠标进入时星星的颜色
const setMouseEnterStarNum=(num:number)=>{
    if(props.disabled){
        return
    }
    changeStarColor(num)
}
//设置鼠标离开时星星的颜色
const setMouseLeaveStarNum=()=>{
    if(props.disabled){
        return
    }
    changeStarColor(clickrateNum.value)
}
//修改有颜色的星星数目
const changeStarColor=(starNum:number)=>{
    if(props.disabled){
        return
    }
    coloredStarNum.value=starNum
}



defineExpose({
    clickrateNum
})


</script>