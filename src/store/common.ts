import { observable } from 'mobx'

const commonStore = observable({
  counter: 0,
  increment() {
    this.counter++
  },
})

export default commonStore
