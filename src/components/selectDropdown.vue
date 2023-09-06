<template>
  <n-dropdown trigger="hover" :options="options" @select="handleSelect">
    <n-button>{{ props.title }}: {{ keyToRef }}</n-button>
  </n-dropdown>
</template>

<script setup lang="ts">
import { NButton, NDropdown } from 'naive-ui'
import { ref, toRef } from 'vue'
// defineProps 和 defineEmits 都是只能在 <script setup> 中使用的编译器宏。他们不需要导入，且会随着 <script setup> 的处理过程一同被编译掉
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
})
const emit = defineEmits(['update'])
const options = [
  {
    label: '滨海湾金沙，新加坡',
    key: 'marina bay sands',
  },
  {
    label: '布朗酒店，伦敦',
    key: 'browns hotel, london',
  },
]
const selectRef = {
  title: 'Ref',
  key: 'default',
}
const selectToRef = {
  title: 'ToRef',
  key: 'default',
}
// ref是复制，修改ref的数据不会影响原来的数据（select不会同步修改）
const keyRef = ref(selectRef.key)
// toRef 引用原数据（select会同步修改）
const keyToRef = toRef(selectToRef, 'key')

function handleSelect(key: string | number) {
  keyToRef.value = key
  keyRef.value = key
  // 看控制台，看ref, toRef的区别
  window.console.log('selectRef:', selectRef, 'selectToRef:', selectToRef)

  // emit第一个参数需在defineEmits注册，父组件@监听
  emit('update', key)
}
</script>
