<template>
  <div class="index-page">
    <div class="index-page-item">
      <div class="title">ref</div>
      <div class="body red-count">
        <n-button @click="handleCountChange('down')"> — </n-button>
        <div style="margin: 0 8px">count: {{ count }}</div>
        <div style="margin: 0 8px">notRef: {{ notRef }}</div>
        <n-button @click="handleCountChange('up')"> ➕ </n-button>
      </div>
    </div>
    <div class="index-page-item">
      <div class="title">组件</div>
      <!-- 组件内是 ref toref的用法，以及实现父子组件传值通信 -->
      <div class="body">
        <div class="title">父子通信</div>
        <select-parent></select-parent>

        <div class="title">defineComponent</div>
        <define-component component-name="define-component"></define-component>
        <div class="title">选项式组件</div>
        <options-api-com />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NButton, NDropdown } from 'naive-ui'
import { ref, unref, isRef, onMounted } from 'vue'
// SelectParent 组件引用必须大驼峰
import SelectParent from '@/components/selectParent.vue'
import DefineComponent from '@/components/defineComponent.jsx'
import OptionsApiCom from '@/components/optionsApiCom.vue'
const count = ref(0)
let notRef = 0

onMounted(() => {
  handleRefLog()
})

function handleCountChange(type: string) {
  if (type === 'up') {
    count.value += 1
    notRef += 1
  } else if (count.value > 0) {
    count.value -= 1
    notRef -= 1
  }
}

function handleRefLog() {
  // https://blog.csdn.net/glorydx/article/details/115645277 vue 3.0 Refs详解合集
  // isRef 检查值是否为一个 ref 对象
  window.console.log('count isRef:', count, isRef(count))
  window.console.log('notRef isRef:', isRef(notRef))

  // unref 如果参数是ref，则返回内部值，否则返回参数本身。 => isRef(val) ? val.value : val
  window.console.log('count:', count, 'unref:', unref(count))
}
</script>

<style lang="scss" scoped>
.index-page {
  padding: 20px;
  &-item {
    margin-bottom: 20px;
    background: #f1f1f1;
    .title {
      font-size: 18px;
      background: #ccc;
      text-indent: 10px;
    }
    .body {
      padding: 0 10px;
      &.red-count {
        display: flex;
        align-items: center;
      }
      .title {
        font-size: 14px;
        background: #dfdfdf;
        margin: 4px 0;
      }
    }
  }
}
</style>
