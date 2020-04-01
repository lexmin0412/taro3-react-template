# 常见问题及需要注意的点

> 注意：以下内容均基于 Taro 1.3.36 版本

## 1. H5端

### 1.1 不能嵌套setState

```tsx
this.setState({
  state1: []
}, () => {
  this.setState({
    state2: []
  })
})
```

以上代码中，`state2` 不能够被正确改变。

### 1.2 onReachBottom 会先于 componentDidShow 触发

在列表类的页面中，经常需要在初始化页面时请求数据，然后通过 `onReachBottom` 触发上拉加载，但是在h5环境中第一次进入页面时，`componentDidShow` 和 `onReachBottom` 生命周期都会触发。
