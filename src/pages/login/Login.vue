<template>
  <div class="test">{{ mainStore.name }}</div>
  <button @click="updateName">321</button>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/main'
import { NButton } from 'naive-ui'

const mainStore = useMainStore()

const updateName = () => {
  mainStore.$patch({
    name: '111',
  })
}
</script>

<style lang="scss" scoped>
.test {
  color: $test-color;
}
</style>
