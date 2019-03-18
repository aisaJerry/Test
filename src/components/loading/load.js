import Vue from 'vue'
import loadingVue from './index.vue'

const LoadingConstructor = Vue.extend(loadingVue)

LoadingConstructor.prototype.close = function() {
  setTimeout(() => {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
    this.$destroy()
  }, 0)
}

const Loading = (options = {}) => {
  let instance = new LoadingConstructor({
    el: document.createElement('div'),
    data: options
  })
  let parent = document.body
  parent.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.visible = true
  })
  return instance
}
export default Loading