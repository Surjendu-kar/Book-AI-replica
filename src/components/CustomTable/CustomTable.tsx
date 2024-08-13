import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface TableProps {
  headers: string[];
  rows: { [key: string]: string }[];
}

export default function CustomTable({ headers, rows }: TableProps) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        borderCollapse: "separate",
        borderSpacing: 0,
        marginTop: "1rem",
        overflow: "hidden",
        borderRadius: "8px",
        border: "1px solid #334155",
        background: "transparent",
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="custom table">
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell
                key={header}
                sx={{
                  backgroundColor: "#6366f1",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontSize: "0.8rem",
                  color: "#e2e8f0",
                  border: "none",
                }}
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody sx={{ background: "#1e293b" }}>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {headers.map((header, headerIndex) => (
                <TableCell
                  key={header}
                  sx={{
                    padding: "1rem",
                    fontSize: "1.05rem",
                    textAlign: "left",
                    borderBottom: "1px solid #334155",
                    color: headerIndex === 0 ? "#22d3ee" : "#e2e8f0",
                    fontWeight: headerIndex === 0 ? "bold" : "none",
                  }}
                >
                  {row[header]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
