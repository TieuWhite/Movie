import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { useState } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const StyleNav = {
  fontWeight: "bold",
  fontSize: "1,5em",
  fontFamily: "Arial, Helvetica, sans-serif",
  margin: "1.25em",
  color: "white",
};

export default function NavBar() {
  const [searchParams, setSearchParams] = useSearchParams("");
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ query: input });
    navigate(`/browse?query=${input}`);
  };

  return (
    <form onSubmit={onSubmit}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          sx={{
            position: "static",
            alignSelf: "center",
            backgroundColor: "rgba(3, 37, 65, 1)",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "80%",
              alignSelf: "center",
              backgroundColor: "rgba(3, 37, 65, 1)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Link to={"/"}>
                <img src="icon.svg" height={"30px"}></img>
              </Link>
              <Link to={"/"}>
                <Typography sx={StyleNav}>Home</Typography>
              </Link>
              <Link to={"/browse"}>
                <Typography sx={StyleNav}>Browse</Typography>
              </Link>
            </Box>

            <Search onSubmit={onSubmit}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    </form>
  );
}
