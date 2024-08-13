import { Box, styled } from "@mui/material";

const Navbar = styled(Box)(({ theme }) => ({
  backgroundColor: "#1e293b",
  padding: "1.1rem 0",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const NavList = styled("ul")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  listStyleType: "none",
  padding: 0,
  margin: 0,
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const NavItem = styled("li")(({ theme }) => ({
  margin: "0.5rem 1rem",
  "& a": {
    color: "#e2e8f0",
    textDecoration: "none",
    fontWeight: 500,
    transition: "color 0.3s ease",
    fontSize: "0.9rem",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    "&:hover": {
      color: "#22d3ee",
    },
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

function Nav() {
  const navItems = [
    { name: "Overview", path: "#overview" },
    { name: "Authentication", path: "#authentication" },
    { name: "Endpoints", path: "#endpoints" },
    { name: "Tutorial", path: "#tutorial" },
    { name: "Code Examples", path: "#code-examples" },
    { name: "Pricing", path: "#pricing" },
  ];
  return (
    <Navbar>
      <NavList>
        {navItems.map((item) => (
          <NavItem key={item.name}>
            <a href={item.path}>{item.name}</a>
          </NavItem>
        ))}
      </NavList>
    </Navbar>
  );
}

export default Nav;
