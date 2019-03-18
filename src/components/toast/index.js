import Vue from 'vue'
import toastVue from './toast.vue'

const ToastConstructor = Vue.extend(toastVue);

ToastConstructor.prototype.close = function(dutation) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (this.$el && this.$el.parentNode) {
          this.$el.parentNode.removeChild(this.$el)
        }
        this.$destroy();
        resolve();
      }, dutation)
  })
}

const Toast = async (options = {}) => {
    let instance = new ToastConstructor({
        el: document.createElement('div'),
            data: options
        })
        let parent = document.body
        parent.appendChild(instance.$el)
        Vue.nextTick(() => {
            instance.visible = true
        })
        await instance.close(options.duration | 1000)
}
export default Toast