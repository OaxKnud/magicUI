<script setup>
import Button from '@/components/Button/Button.vue'
import Icon from '@/components/Icon/Icon.vue'
</script>
<template>
<div class="block">
    <span class="title">type属性：</span>
<Button type="primary"> Primary </Button>
  <Button type="success"> Success </Button>
  <Button type="warning"> Warning </Button>
  <Button type="danger"> Danger </Button>
  <Button type="info"> Info </Button>
</div>
<div class="block">
    <span class="title">plain属性：</span>
<Button type="primary" plain> Primary </Button>
  <Button type="success" plain> Success </Button>
  <Button type="warning" plain> Warning </Button>
  <Button type="danger" plain> Danger </Button>
  <Button type="info" plain> Info </Button>
</div>
<div class="block">
    <span class="title">round属性：</span>
<Button type="primary" round> Primary </Button>
  <Button type="success" round> Success </Button>
  <Button type="warning" round> Warning </Button>
  <Button type="danger" round> Danger </Button>
  <Button type="info" round> Info </Button>
</div>
<div class="block">
    <span class="title">circle和icon属性：</span>
<Button type="primary" icon="edit" circle></Button>
  <Button type="success" icon="search" circle></Button>
  <Button type="warning" icon="check" circle></Button>
  <Button type="danger" icon="message" circle></Button>
  <Button type="info" icon="star" circle></Button>
</div>
</template>
<style>
.block {
  margin-bottom: 10px;
}
.title {
    font-size: 15px;
}
</style>