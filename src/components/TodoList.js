import React, { PropTypes } from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'

const Todos = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)

export default TodoList
