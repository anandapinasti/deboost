const tableHeaderStyle = {
  backgroundColor: "#f2f2f2",
  padding: 8,
  border: "1px solid #ddd",
}

const tableCellStyle = {
  padding: 8,
  border: "1px solid #ddd",
  color: "blue",
}

export default function F12Main() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 20, fontSize: 20 }}>Page List</h1>
      <table style={{ borderCollapse: 'collapse', border: '1px solid #ddd' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>URL</th>
            <th style={tableHeaderStyle}>Page</th>
          </tr>
        </thead>
        <tbody>
<tr>
            <td style={tableCellStyle}><a href='/Desktop1'>/Desktop1</a></td>
            <td style={tableCellStyle}><a href='/Desktop1'>Desktop - 1</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Desktop4'>/Desktop4</a></td>
            <td style={tableCellStyle}><a href='/Desktop4'>Desktop - 4</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Desktop5'>/Desktop5</a></td>
            <td style={tableCellStyle}><a href='/Desktop5'>Desktop - 5</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Desktop6'>/Desktop6</a></td>
            <td style={tableCellStyle}><a href='/Desktop6'>Desktop - 6</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Desktop7'>/Desktop7</a></td>
            <td style={tableCellStyle}><a href='/Desktop7'>Desktop - 7</a></td>
          </tr>
</tbody>
      </table>
    </div>
  );
}