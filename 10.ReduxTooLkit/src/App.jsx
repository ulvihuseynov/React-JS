
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { artir, azalt } from './reduxToolkit/CounterSlice'
import Userlist from './reduxToolkit/Userlist'

function App() {
const dispatch=useDispatch()
const count=useSelector((state)=>state.counter.value)
const {users}=useSelector((state)=>state.user)
console.log(count)
console.log(users)
  return (
<div>
{count}
<div style={{display:'flex',gap:'30px' ,margin:"30px 0"}}>
  <button onClick={()=>dispatch(artir())}>Artir</button>
  <button onClick={()=>dispatch(azalt())}>Azalt</button>

</div>
<div>
  <Userlist />
</div>
</div>
  )
}

export default App
