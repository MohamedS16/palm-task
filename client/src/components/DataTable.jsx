import styles from "./DataTable.module.css";

const DataTable = ({ data }) => {
  const columns = Object.keys(data[0] || {});
  console.log(data);

  return (
    <div className={styles.container}>
      {data ? (
        <table className={styles.table}>
          <thead>
            <tr>
              {columns.map((c) => (
                <th>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map((e, index) => (
              <tr key={index}>
                {Object.values(e).map((c, idx) => (
                  <td key={idx}>{c}</td>
                ))}
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
