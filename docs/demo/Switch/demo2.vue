<template lang="">
  <div>
    
    <mg-switch v-model="value1" activeText="on" inactiveText="off"></mg-switch>
    <mg-switch v-model="value2" activeText="on" inlinePrompt inactiveText="off"></mg-switch>
  </div>
</template>
<script setup>
import MgSwitch from '@/components/Switch/Switch.vue'
import { ref } from 'vue'
const value1 = ref(true)
const value2 = ref(true)
</script>