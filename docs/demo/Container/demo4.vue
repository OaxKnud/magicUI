<template>
    <div class="common-layout">
        <mg-container>
            <mg-header>Header</mg-header>
            <mg-container>
                <mg-aside width=200 style="line-height: 150px">Aside</mg-aside>
                <mg-container>
                    <mg-main>Main</mg-main>
                    <mg-footer>Footer</mg-footer>
                </mg-container>
            </mg-container>
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