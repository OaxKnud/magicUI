<template lang="">
  <div>
    <mg-switch v-model="rightValue" :activeValue="1" :inactiveValue="0"></mg-switch>
    <p>{{ rightValue }}</p>
  </div>
</template>
<script setup>
import MgSwitch from '@/components/Switch/Switch.vue'
import { ref } from 'vue'
const rightValue = ref(1)
</script>