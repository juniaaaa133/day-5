import { useState } from 'react'
import Form from './components/form/Form'
import Header from './components/header/Header'
import DataList from './components/list/DataList'
import Empty from './components/empty/Empty'
import './index.css'

function App() {

let [data,setData] = useState([]);
let dataSection = <Empty />;

//User CRUD
let createUser = (userData) => {
let newData = [...data,userData]
setData(newData);
console.log(data)
}

if(!data.length < 1){
dataSection = 
data.map((user,index) => 
<DataList key={index}
          name={user.name} 
         location={user.location} 
         email={user.email} 
         />
    )
}

  return (
 <div className='flex'>
 <Header title={'Users Management'}/>
 { dataSection}
 <Form createUser={createUser}/>
 </div>
    
  )
}

export default App
