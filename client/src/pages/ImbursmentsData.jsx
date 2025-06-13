import axios from 'axios'
import { useEffect, useState } from 'react'
import DataTable from '../components/dataTable/DataTable'
import FilterData from '../components/filter/FilterData';

const ImbursmentsData = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3000/api/v1/disbursments').then(res=>setData(res.data.data))
    },[])

    const filterValues = [
      {value : "Approved", name : "Approved"},
      {value : "Rejected", name : "Rejected"},
      {value : "Pending", name : "Pending"},
    ]
  return (
    <div>
        <FilterData values={filterValues} />

        <DataTable data={data} />
    </div>
  )
}

export default ImbursmentsData