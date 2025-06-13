import styles from './FilterData.module.css'

import { useContext } from "react"
import { filterContext } from "../../contexts/filterContext"

const FilterData = ({values}) => {
    const filtervalues = useContext(filterContext);

  return (
    <div className={styles.filterContainer} >
          <label className={styles.label}>Filter : </label>
          <select className={styles.select} onChange={(e)=>filtervalues.setFilter(e.target.value)}>
            <option value='' >Select Value</option>
            {values?.map((v)=><option value={v.value} key={v.value}>{v.name}</option>)}
          </select>
        </div>
  )
}

export default FilterData