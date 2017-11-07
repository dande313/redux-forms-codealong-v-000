export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { todos: state.todos.concat(action.todo.text) };
<<<<<<< HEAD

=======
 
>>>>>>> 2c407864fee3dddf61f703d1e7b7c88688854569
    default:
      return state;
  }
}
