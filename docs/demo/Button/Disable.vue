<template>
<div class="block">
<Button type="primary" disabled> Primary </Button>
  <Button type="success" disabled> Success </Button>
  <Button type="warning" disabled> Warning </Button>
  <Button type="danger" disabled> Danger </Button>
  <Button type="info" disabled> Info </Button>
</div>
<div class="block">
<Button type="primary" plain disabled> Primary </Button>
  <Button type="success" plain disabled> Success </Button>
  <Button type="warning" plain disabled> Warning </Button>
  <Button type="danger" plain disabled> Danger </Button>
  <Button type="info" plain disabled> Info </Button>
</div>
</template>

<script setup>
import Button from '@/components/Button/Button.vue'

</script>

<style>
.block {
  margin-bottom: 10px;
}
</style>