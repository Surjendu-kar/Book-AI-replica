import { useState, useEffect } from "react";
import { Box, styled, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const Navbar = styled(Box)(({ theme }) => ({
  backgroundColor: "var(--color-box-bg)",
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
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const NavItem = styled("li")(({ theme }) => ({
  margin: "0.5rem 1rem",
  "& a": {
    color: "var(--color-text)",
    textDecoration: "none",
    fontWeight: 500,
    transition: "color 0.3s ease",
    fontSize: "0.9rem",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    "&:hover": {
      color: "var(--color-accent) ",
    },
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const ThemeToggle = styled(Box)(() => ({}));

function Nav() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode !== null ? JSON.parse(savedMode) : true;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));

    document.documentElement.setAttribute(
      "theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  const handleThemeChange = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const navItems: Array<{ name: string; path: string }> = [
    { name: "Overview", path: "#overview" },
    { name: "Authentication", path: "#authentication" },
    { name: "Endpoints", path: "#endpoints" },
    { name: "Tutorial", path: "#tutorial" },
    { name: "Code Examples", path: "#code-examples" },
    { name: "Pricing", path: "#pricing" },
  ];
  return (
    <Navbar role="navigation" aria-label="Secondary navigation">
      <NavList role="menubar">
        {navItems.map((item) => (
          <NavItem key={item.name}>
            <a href={item.path}>{item.name}</a>
          </NavItem>
        ))}

        <ThemeToggle>
          <IconButton
            onClick={handleThemeChange}
            color="inherit"
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {isDarkMode ? (
              <Brightness7Icon sx={{ width: "20px", height: "20px" }} />
            ) : (
              <Brightness4Icon sx={{ width: "20px", height: "20px" }} />
            )}
          </IconButton>
        </ThemeToggle>
      </NavList>
    </Navbar>
  );
}

export default Nav;
