import type { PropType } from "vue";

export type containerType = 'horizontal' | 'vertical'
export const containerProps = {
    direction: {
        type: String as PropType<containerType>,
        default: 'horizontal'
    }
}
export const HeaderHeightProps={
    height:{
        type:Number,
        default:60
    }
}

export const FooterHeightProps={
    height:{
        type:Number,
        default:60
    }
}

export const AsideWidthProps={
    width:{
        type:Number,
        default:300
    }
}
