<template>
  <div class="index-page">
    <div class="index-page-count">
      <n-button @click="handleCountChange"> + </n-button>
      <div>count: {{ count }}</div>
      <div>notRef: {{ notRef }}</div>
    </div>
    <div class="index-page-dropdown">
      <!-- 组件内是 ref toref的用法，以及实现父子组件传值通信 -->
      <select-dropdown title="下拉选择器" @update="handleSelect"></select-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NButton, NDropdown } from 'naive-ui'
import { ref, unref, isRef, onMounted } from 'vue'
// SelectDropdown 组件引用必须大驼峰
import SelectDropdown from '@/components/selectDropdown.vue'
const count = ref(0)
let notRef = 0

onMounted(() => {
  handleRefLog()
})

function handleRefLog() {
  // isRef 检查值是否为一个 ref 对象
  window.console.log('count isRef:', isRef(count))
  window.console.log('notRef isRef:', isRef(notRef))

  // unref 如果参数是ref，则返回内部值，否则返回参数本身。 => isRef(val) ? val.value : val
  window.console.log('count:', count, 'unref:', unref(count))
}

const handleCountChange = () => {
  count.value += 1
  notRef += 1
}
function handleSelect(key: string) {
  window.console.log('接受子组件：', key)
}
</script>

<style lang="scss" scoped>
</style>
