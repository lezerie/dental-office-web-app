import { useState, MouseEvent } from "react";
import { Typography, Box, FormGroup } from "@mui/material";

function NavigationBar() {
  const pages = ["Home", "Services", "Contact"];
  const handleMenu = (page: string) => {
    setSelectedPage(page);
    console.log("You clicked", page);
  };
  const [showUserMenu, setShowUserMenu] = useState<null | HTMLElement>(null);
  const [selectedPage, setSelectedPage] = useState<string>("");

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setShowUserMenu(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setShowUserMenu(null);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#002b5a",
        color: "#fffffd",
        height: "98.3vh",
        padding: "25px auto",
        minWidth: "10%",
      }}
    >
      <FormGroup
        sx={{
          alignItems: "center",
          marginBottom: "25%",
        }}
      >
        <img
          style={{ width: "150px", display: "flex" }}
          src="./logo.png"
          alt="Dental Clinic Logo"
        />
        {pages.map((page) => {
          return (
            <Box
              key={page}
              onClick={() => handleMenu(page)}
              sx={{
                backgroundColor: page === selectedPage ? "#0fb8f9" : null,
                "&:hover": {
                  backgroundColor: "#3c4e70",
                  cursor: "pointer",
                },
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: "20px",
                  fontWeight: "600px",
                  textAnchor: "center",
                  padding: "20px",
                }}
              >
                {page}
              </Typography>
            </Box>
          );
        })}
      </FormGroup>
      <FormGroup
        sx={{
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: selectedPage === "Login" ? "#0fb8f9" : null,
            "&:hover": {
              backgroundColor: "#3c4e70",
              cursor: "pointer",
            },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: "20px",
              fontWeight: "600px",
              textAnchor: "center",
              p: 2,
            }}
          >
            Login
          </Typography>
        </Box>
      </FormGroup>
    </Box>
  );
}

export default NavigationBar;
