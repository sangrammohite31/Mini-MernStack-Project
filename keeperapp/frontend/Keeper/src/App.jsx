import { useState ,useEffect} from 'react'

import './App.css'
import Header from './Compenents/header/header'
import Addkeeper from './Compenents/addkeeper/addkeeper'
import ShowKeeper from './Compenents/showkeeper/showkeeper'
import axios from 'axios'

function App() {
  const [keeperlist, setkeeperlist] = useState([])
useEffect(()=>{
  axios.get('http://localhost:3000/api/getAll').then(data=>setkeeperlist(data.data))
},[])
  return (
    <div className='App'>
      {console.log("Keeperlist",keeperlist)}
    <Header/>
    <Addkeeper keeperlist={keeperlist} setkeeperlist={setkeeperlist}/>
    <ShowKeeper keeperlist={keeperlist}/>
    </div>
  )
}

export default App
