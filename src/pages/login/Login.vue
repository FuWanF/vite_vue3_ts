<template>
  <div class="test">秘密: {{ mainStore.name }}</div>
  <button @click="updateName">点击告诉你一个秘密</button>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/main'
import { NButton } from 'naive-ui'

const mainStore = useMainStore()

const updateName = () => {
  mainStore.$patch({
    name: '爱你哦 ♥️',
  })
}
</script>

<style lang="scss" scoped>
.test {
  color: $test-color;
}
</style>
