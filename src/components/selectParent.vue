<template>
  <!-- 组件内是 ref toref的用法，以及实现父子组件传值通信 -->
  <select-dropdown title="下拉选择器" @update="handleSelect"></select-dropdown>
</template>

<script setup lang="ts">
import { NButton, NDropdown } from 'naive-ui'
import { ref, unref, isRef, onMounted } from 'vue'
// SelectDropdown 组件引用必须大驼峰
import SelectDropdown from './selectDropdown.vue'

function handleSelect(key: string) {
  window.console.log('接受子组件：', key)
}
</script>
