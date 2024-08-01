import { Typography, Box, FormGroup } from "@mui/material";
import { useNavbar } from "./hooks/useNavbar";

function NavigationBar() {
  const { ...hooks } = useNavbar();

  return (
    <Box
      sx={{
        backgroundColor: "#002b5a",
        color: "#fffffd",
        height: "100vh",
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
          alt="Dental Office Logo"
        />
        {hooks.Pages.map((page) => {
          return (
            <Box
              key={page.name}
              onClick={() => hooks.handleClickHome(page)}
              sx={{
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
                  padding: "20px 0px",
                }}
              >
                {page.name}
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
          onClick={
            hooks.storedUser.full_name.length === 0
              ? hooks.handleClickLogin
              : hooks.handleClickUser
          }
          sx={{
            backgroundColor: hooks.selectedPage === "Login" ? "#0fb8f9" : null,
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
              color:
                hooks.storedUser.full_name.length === 0
                  ? hooks.displayedText
                  : hooks.storedUser.full_name
                  ? "#fda5cb"
                  : null,
            }}
          >
            {hooks.storedUser.full_name.length === 0
              ? hooks.displayedText
              : hooks.storedUser.full_name}
          </Typography>
        </Box>
        {hooks.storedUser.full_name.length === 0 ? (
          <></>
        ) : (
          <Box
            onClick={hooks.handleClickLogout}
            sx={{
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
              Logout
            </Typography>
          </Box>
        )}
      </FormGroup>
    </Box>
  );
}

export default NavigationBar;
