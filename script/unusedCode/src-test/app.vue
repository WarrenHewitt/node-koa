<!--
 * @Description:
 * @Author: warren
 * @LastEditors: Warren
 * @Date: 2023-07-05 10:03:40
 * @LastEditTime: 2025-09-10 12:26:38
-->
<template>
    <div id="app">
        <router-view />

        <BaseDateNotice />
    </div>
</template>

<script>
import BaseDateNotice from '@/components/basen.vue'
import BaseD from '@/components/test.js'

export default {
    name: 'App',
    components: { BaseDateNotice },

    beforeCreate () {
        /* 初始化全局表格每页条数 */
        if (!localStorage.getItem('GLOBAL_PAGE_SIZE')) {
            localStorage.setItem('GLOBAL_PAGE_SIZE', 10)
        }
    },
}
</script>

<style  lang="scss"></style>
