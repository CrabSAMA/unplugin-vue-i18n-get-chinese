// document.getElementById('app')!.innerHTML = '__UNPLUGIN__'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './src/App.vue'

const messages = {
  en: {
    你好: 'hello world',
  },
  zh: {
    你好: '你好，世界',
  },
}

const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  messages,
})

const app = createApp(App).use(i18n).mount('#app')
