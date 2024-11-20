import { useState } from "react"
import Table from "./_table/Table"
import  './index.css'

function App() {
  
  const [users,setUsers]=useState(()=>[
    {
      name:"Ulvi",
      surName:"Huseynov",
      email:"ulvihuseynov441@gmail.com",
      age:24
    },
    {
      name:"Zulfiqar",
      surName:"Huseynov",
      email:"zulfiqar1999@gmail.com",
      age:25
    },
    {
      name:"Ramal",
      surName:"Karimov",
      email:"rkarimov@gmail.com",
      age:29
    },
    {
      name:"Famil",
      surName:"Cavadov",
      email:"fCavadov@gmail.com",
      age:28
    },
  ])

  return (
    <div className="p-4">
   <Table
   searchAble={true}
   head={[{name:'Ad-Soyad',sortable:true},
    {name:'E-Posta'},
    {name:'Yas',sortable:true},
   { name:'Islemler',width:200}]}
   body={users && users.map((user,index)=>(
    [<div key={`${user.name} ${user.surName}`}>{user.name} {user.surName}</div>,
      // user.surName,
      user.email,
    <div key={`Yas ${user.age}`}>  {user.age}</div>,
      [
        <button className="h-8 px-4 flex items-center rounded cursor-pointer bg-blue-600 text-white">Duzenle</button>,
        <button onClick={()=>{
          const tmpUsers=[...users]
          tmpUsers.splice(index,1)
          setUsers(tmpUsers)
          console.log(users.splice(index,1))
        }} className="h-8 px-4 flex items-center rounded cursor-pointer bg-red-600 text-white">Sil</button>

      ]
    ]
   ))}
   />
    </div>
  )
}

export default App
