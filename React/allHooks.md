在React 16.8中，引入了Hooks这一新特性，它允许在不编写类的情况下使用状态（state）和其他React特性。React 16.8主要提供了以下几个实用的Hooks：

1. **useState**: 这个Hook让你在函数组件中添加状态。它返回一个状态值和一个更新该状态值的函数。这样，你就可以在函数组件中拥有和类组件中`this.state`相似的功能，但是以更加函数式的方式来实现。

2. **useEffect**: 这个Hook用于处理副作用。它接收一个函数作为参数，这个函数会在组件渲染后执行。此外，你还可以提供一个依赖项数组，只有当依赖项发生变化时，才会重新运行这个副作用函数。这类似于类组件中的`componentDidMount`、`componentDidUpdate`和`componentWillUnmount`生命周期方法的组合。

3. **useContext**: 这个Hook让你不使用组件嵌套就可以订阅React的Context。之前，如果你想访问Context的值，你需要明确地通过每一层组件传递一个`<Consumer>`组件或者使用`static contextType`。而`useContext`允许你直接从函数组件中读取Context的值。

除了上述三个基本但功能强大的Hooks之外，React还提供了一些其他Hooks，用于处理更特定的场景：

4. **useReducer**: 这是`useState`的一种替代方案，用于处理复杂的状态逻辑，特别是当你有多个相关的状态需要更新时。它接收一个reducer函数和一个初始状态值，然后返回当前的状态和一个用于触发状态更新的dispatch函数。

5. **useCallback**: 这个Hook返回一个记忆化的回调函数。它只在依赖项数组中的一个元素发生变化时才会返回新的函数。这有助于优化性能，特别是在依赖项不经常变化的情况下，可以避免不必要的渲染和计算。

6. **useMemo**: 这个Hook返回一个记忆化的值。它只在某个依赖项改变时重新计算该值。这对于避免在每次渲染时都进行复杂计算非常有用。

7. **useRef**: 这个Hook返回一个可变的ref对象，其`.current`属性被初始化为传入的参数（`initialValue`）。这个ref对象在组件的整个生命周期内保持不变。它常用于访问DOM节点或保存某个可变值，该值不会在渲染期间触发组件的重新渲染。

8. **useLayoutEffect**: 其API与`useEffect`相同，但它会在所有的DOM变更之后同步调用effect。可以使用它来读取DOM布局并同步触发重渲染。在浏览器执行绘制之前，`useLayoutEffect`内部的更新计划将被同步刷新。

9. **useImperativeHandle**: 可以让你在使用ref时自定义暴露给父组件的实例值。在大多数情况下，你应该避免使用ref这样的逃逸舱口来破坏React的数据流，但是在某些情况下，尤其是与命令式的API（如DOM的focus方法）交互时，它们会很有用。

10. **useDebugValue**: 可以用来在React DevTools中显示自定义Hook的标签。

以上就是React 16.8中提供的实用Hooks的详细介绍。这些Hooks为函数式组件提供了更丰富的功能和更强的表达能力，使得开发者能够更灵活地编写React应用。