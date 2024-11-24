
import TodoList from './Components/TodoList'
import TodoMake from './Components/todoMake'
import './index.css'

function App() {


  return (
   <div className='flex justify-center my-10 flex-col items-center'>
   <TodoMake />
   <TodoList />
   

   </div>
  )
}

export default App
