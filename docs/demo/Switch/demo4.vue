<template lang="">
  <div>
    
    <mg-switch v-model="value1" disabled/>
    <mg-switch v-model="value2" disabled/>
  </div>
</template>
<script setup>
import MgSwitch from '@/components/Switch/Switch.vue'
import { ref } from 'vue'
const value1 = ref(true)
const value2 = ref(false)
</script>