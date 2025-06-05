import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from '../components/DataTable'

const ImbursmentsData = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3000/api/v1/disbursments').then(res=>setData(res.data.data))
    },[])
  return (
    <div>
        <DataTable data={data} />
    </div>
  )
}

export default ImbursmentsData