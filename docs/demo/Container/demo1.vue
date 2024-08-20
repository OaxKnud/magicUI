<template>
    <div class="common-layout">
        <mg-container>
            <mg-header>header</mg-header>
            <mg-main style="line-height: 150px">main</mg-main>
        </mg-container>
    </div>

</template>
<script setup>
import MgContainer from '@/components/Container/Container.vue'
import MgAside from '@/components/Container/Aside.vue'
import MgMain from '@/components/Container/Main.vue'
import MgFooter from '@/components/Container/Footer.vue'
import MgHeader from '@/components/Container/Header.vue'
</script>
<style>

</style>