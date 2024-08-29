<template lang="">
    <div>
      <mg-switch v-model="value1"/>
      <mg-switch v-model="value2" activeColor="green" inactiveColor="red"/>
    </div>
  </template>
<script setup lang="ts">
import MgSwitch from '@/components/Switch/Switch.vue'
import { ref } from 'vue'
const value1 = ref(true)
const value2 = ref(true)
</script>