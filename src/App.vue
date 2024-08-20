<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import MgButton from './components/Button/Button.vue'
</script>

<template>
   <MgButton type="success">12312</MgButton>
   <mg-button >按钮</mg-button>
    <mg-button type="danger">按钮</mg-button>
    <mg-button type="info">按钮</mg-button>
    <mg-button type="warning">按钮</mg-button>
    <mg-button type="success">按钮</mg-button>
    <mg-button loading>按钮1</mg-button>
    <mg-button icon="arrow-right">按钮1</mg-button> 
    <mg-button >按钮</mg-button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
