const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        // ES2015の Spread operator https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_operator
        // ここでは、todosの配列を展開している。
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo
        }
        // ES2015の Object.assign() https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
        // ここでは state を複製して、新しい object を作成している。
        return Object.assign({}, todo, {
          completed: !todo.completed
        })
      })
    default:
      return state
  }
}

export default todos
