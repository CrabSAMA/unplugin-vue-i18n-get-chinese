import { createUnplugin } from 'unplugin'
import type { Options } from './types'

const getZh = /[\u4E00-\u9FA5|\w| |,，.。\/\*:：=()（）!！？\?-]{1,}/g // 匹配中英文加部分标点

function getChineseList(str = '') {
  // 获取所有 中文 混合英文 混合空格 及 标点符号
  return str
    .match(getZh)
    .map((e) => {
      e = e.trim()
      // 把 英文 和 注释筛选掉
      if (/[\u4E00-\u9FA5]/.test(e) && !/\/\/|\/\*|\*|!--/.test(e)) return e
    })
    .filter((e) => e)
}

export default createUnplugin<Options | undefined>(() => ({
  name: 'unplugin-starter',
  enforce: 'pre',
  transformInclude(id) {
    return id.endsWith('.vue')
  },
  transform(code) {
    return code.replace('__UNPLUGIN__', 'Hello Unplugin!')
  },
}))
