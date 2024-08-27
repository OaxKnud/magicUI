<template>
  <MgTooltip 
    content="Content"
    trigger="hover"
  >
    <MgButton> Hover状态下 显示 Tooltip显示 </MgButton>
  </MgTooltip>
</template>
<script setup>
import MgTooltip from '@/components/Tooltip/Tooltip.vue'
import MgButton from '@/components/Button/Button.vue'
</script>