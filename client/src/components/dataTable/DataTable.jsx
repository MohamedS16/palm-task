import { useContext} from "react";
import styles from "./DataTable.module.css";
import { filterContext } from "../../contexts/filterContext";

const DataTable = ({ data }) => {
  const columns = Object.keys(data[0] || {});
  const filterValue = useContext(filterContext)

  return (
    <div className={styles.container}>
      {data ? (
        <table className={styles.table}>
          <thead>
            <tr>
              {columns.map((c,idx) => (
                <th key={idx}>{c}</th>
              ))}
              <th>Approve</th>
            </tr>
          </thead>
          <tbody>
            {data?.filter((v)=>{
                if (!filterValue.filter) return true;
                return v.status === filterValue.filter;
            }).map((e, index) => (
              <tr key={index}>
                {Object.values(e).map((c, idx) => (
                  <td key={idx}>{c}</td>
                ))}
                <td><button>Approve</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No Data Found</p>
      )}
    </div>
  );
};

export default DataTable;
