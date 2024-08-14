import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material";

const TableCellStyle = styled(TableCell)(({ theme }) => ({
  padding: "1rem",
  fontSize: "1.05rem",
  textAlign: "left",
  borderBottom: "1px solid #334155",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.85rem",
  },
}));

interface TableProps {
  headers: string[];
  rows: { [key: string]: string }[];
  color: boolean;
}

export default function CustomTable({ headers, rows, color }: TableProps) {
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
      <Table aria-label="custom table">
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell
                key={header}
                sx={{
                  backgroundColor: "var(--color-primary)",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontSize: "0.8rem",
                  color: "var(--color-text)",
                  border: "none",
                }}
                role="columnheader"
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody sx={{ background: "var(--color-box-bg)" }}>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                "&:last-child td, &:last-child th": {
                  border: 0,
                },
              }}
            >
              {headers.map((header, headerIndex) => (
                <TableCellStyle
                  key={header}
                  sx={{
                    color:
                      headerIndex === 0 && color
                        ? "var(--color-accent)"
                        : "var(--color-text)",
                    fontWeight: headerIndex === 0 && color ? "bold" : "none",
                  }}
                >
                  {row[header]}
                </TableCellStyle>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
