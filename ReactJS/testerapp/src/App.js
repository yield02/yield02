import { useStore, actions } from './store';


function App() {

  const [state, dispatch] = useStore();

  return (
    <div>
      <input 
        value={state.todoInput} 
        onChange = { e => dispatch(actions.setTodoInPut(e.target.value))}
        placeholder = "Enter todos"
      />
      <button onClick = {()=> {dispatch(actions.addTodoInPut(state.todoInput))}}>Add</button>
      <ul>
        {state.todos.map( (todo, index) => <li key={index}>{todo} <button onClick = { () => dispatch(actions.deleteTodoInPut(index))}>X</button> </li>)}
      </ul>
    </div>

  )
}
export default App;