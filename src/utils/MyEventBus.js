import React from 'react'
import MyEventBus from 'events'

export const eventBus = new MyEventBus();
/* 
    Vue.prototype.$bus = new Vue()
    this.$bus.$on  ====  eventBus.addListener ==== 监听事件
    this.$bus.$emit====  eventBus.emit        ==== 触发事件
*/