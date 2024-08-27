<template>
  <mg-tooltip>
    <template #content> multiple lines<br />second line </template>
    <mg-button>Top center</mg-button>
  </mg-tooltip>
</template>
<script setup>
import MgTooltip from '@/components/Tooltip/Tooltip.vue'
import MgButton from '@/components/Button/Button.vue'
</script>