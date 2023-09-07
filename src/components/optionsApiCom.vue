<template>
  <div>
    <div class="insert-audio-title">{{ fileName }}</div>
  </div>
</template>

<script>
import { ref, unref, isRef, onMounted } from 'vue'
export default {
  name: 'InsertAudio',
  data() {
    return {
      fileName: '选项式组件',
    }
  },
  mounted() {
    this.fileName = 'Options API'
  },
}
</script>
<style lang="scss">
.insert-audio-title {
  margin-left: 20px;
}
</style>
