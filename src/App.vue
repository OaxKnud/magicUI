<script setup lang="ts">
// import MgButton from './components/Button/Button.vue'
// import MgContainer from './components/Container/Container.vue'
// import MgHeader from './components/Container/Header.vue'
// import MgFooter from './components/Container/Footer.vue'
// import MgMain from './components/Container/Main.vue'
// import MgAside from './components/Container/Aside.vue'
import MgLink from './components/Link/Link.vue'
</script>

<template>
   <!-- <MgButton type="success">12312</MgButton>
   <mg-button >按钮</mg-button>
    <mg-button type="danger">按钮</mg-button>
    <mg-button type="info">按钮</mg-button>
    <mg-button type="warning">按钮</mg-button>
    <mg-button type="success">按钮</mg-button>
    <mg-button loading>按钮1</mg-button>
    <mg-button icon="arrow-right">按钮1</mg-button> 
    <mg-button >按钮</mg-button> -->
    
    <!-- <MgContainer >
      <MgHeader height=120>header1</MgHeader>
      <MgAside width=200>Aside</MgAside>
      <MgMain>main</MgMain>
      <MgFooter height=240>footer</MgFooter>
    </MgContainer> -->
    <mg-link type="primary" :underline="false">link111</mg-link>
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
