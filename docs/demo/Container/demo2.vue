<template>
    <div class="common-layout">
        <mg-container>
            <mg-header>header</mg-header>
            <mg-main>main</mg-main>
            <mg-footer>footer</mg-footer>
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
.mg-main {
    line-height: 90px;
}
</style>