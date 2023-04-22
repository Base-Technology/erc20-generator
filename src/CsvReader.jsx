import React, { useState } from 'react';
import Papa from 'papaparse';
function CsvReader(props) {
  const [csvData, setCsvData] = useState([]);
  const handleCsvFile = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: false,
      complete: (results) => {
        setCsvData(results.data);
        props.onData(results.data);
      },
    });
  };
  return (
    <div>
      <input type="file" onChange={handleCsvFile} />
      <table style={{ fontSize: '14px', borderCollapse: 'collapse', border: '1px solid black' }}>
        <tbody>
          {csvData.map((row, i) => (
            <tr key={i}>
              {Object.values(row).map((value, j) => (
                <td key={j} style={{ border: '1px solid black' }}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default CsvReader; 
