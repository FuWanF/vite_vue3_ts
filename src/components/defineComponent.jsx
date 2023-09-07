import { defineComponent, onMounted, ref, reactive } from 'vue'
import { NGradientText } from 'naive-ui'

const renderData = [
  {
    text: '一级文案-1',
    children: [{ text: '一级文案-1-二级文案-1' }],
  },
  { text: '一级文案-2' },
]

const reactiveData = reactive({
  value: 0,
  key: 1,
})

const renderChildren = (data) => {
  return data.map((item) => {
    if (item.children) {
      return renderChildren(item.children)
    }
    return <NGradientText type='info'>{item.text}</NGradientText>
  })
}

export default defineComponent({
  props: {
    componentName: {
      type: String,
      default: '',
    },
  },
  setup() {
    // 获取对应dom, 务必写ref, text textP 要与render里的ref值对应上
    const text = ref()
    const textP = ref()
    onMounted(() => {
      // 这里获取dom值要写.value
      console.log(text.value, textP.value, reactiveData)
      setInterval(() => {
        reactiveData.value += 1
      }, 1000)
    })
    // 需要返回，暴露给渲染层
    return { text, textP, renderParams: '测试传值给render' }
  },
  computed: {
    childrenTitle() {
      return this.componentName + '&&'
    },
  },
  render() {
    // 接收setup的返回值
    console.log(this, this.renderParams)
    // render里操作或打印render函数里的dom, 会触发render的死循环！！
    // console.log(this.textP)
    return (
      <div ref='text'>
        <div>{reactiveData.value}</div>
        {renderData.map((item) => {
          return (
            <>
              <p ref='textP'>{item.text}</p>
              {item.children && this.childrenTitle + '：'}
              {item.children && renderChildren(item.children)}
            </>
          )
        })}
      </div>
    )
  },
})
