import ImbursmentsData from "./pages/ImbursmentsData";
import {filterContext} from './contexts/filterContext'
import { useState, useEffect } from "react";
import './App.css'

function App() {
  const [filter,setFilter] = useState(null);

      useEffect(()=>{
      console.log('filter value is' + filter);
    },[filter])

  return (
    <>
    <filterContext.Provider value={{filter,setFilter}}>
      <ImbursmentsData />

    </filterContext.Provider>
    </>
  )
}

export default App
