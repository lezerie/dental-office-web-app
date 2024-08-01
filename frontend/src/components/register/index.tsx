import {
  Box,
  Button,
  Typography,
  Link,
  TextField,
  LinearProgress,
  Alert,
} from "@mui/material";
import Footer from "../footer";
import { useRegister } from "./hooks/useRegister";

function RegisterComponent() {
  const { ...hooks } = useRegister();
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        padding: "30px 20px",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        style={{ width: "150px", display: "flex", margin: "auto" }}
        src="./logo.png"
        alt="Dental Office Logo"
      />
      <Typography
        sx={{
          fontSize: "36px",
          fontWeight: 700,
          color: "#002b5a",
          marginBottom: "30px",
        }}
      >
        {hooks.isLoading
          ? "Creating your account"
          : "Get started with your new account"}
      </Typography>
      {hooks.isLoading ? (
        <LinearProgress
          sx={{
            width: "100%",
            height: "70px",
            borderRadius: "35px",
            backgroundColor: "##12bbf4",
            "& .MuiLinearProgress-bar": {
              background: `linear-gradient(to right, transparent 0%, #0daaf1)`,
              borderRadius: "35px",
            },
          }}
        />
      ) : (
        <Box
          sx={{
            backgroundColor: "#f7f7f7",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            maxWidth: "400px",
            margin: "auto",
            marginBottom: "25px",
          }}
        >
          {hooks.errorMessage.length !== 0 ? (
            <Alert severity="error">{hooks.errorMessage}</Alert>
          ) : (
            <></>
          )}

          <Box>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#002b5a",
                marginBottom: "10px",
              }}
            >
              Full Name
            </Typography>
            <TextField
              error={hooks.inputFullName.length === 0}
              label=""
              placeholder="John Doe"
              onChange={hooks.handleChangeInputFullName}
              sx={{
                input: { fontSize: "16px", color: "#333333" },
                border: "1px solid #cccccc",
                borderRadius: "4px",
                marginBottom: "30px",
              }}
            />
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#002b5a",
                marginBottom: "10px",
              }}
            >
              Contact #
            </Typography>
            <TextField
              error={hooks.inputPhone.length === 0}
              onChange={hooks.handleChangeInputPhone}
              label=""
              placeholder="(012) 345-678"
              sx={{
                input: { fontSize: "16px", color: "#333333" },
                border: "1px solid #cccccc",
                borderRadius: "4px",
                marginBottom: "30px",
              }}
            />
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#002b5a",
                marginBottom: "10px",
              }}
            >
              Email Address
            </Typography>
            <TextField
              label=""
              error={!hooks.EmailRegex.test(hooks.inputEmail)}
              onChange={hooks.handleChangeInputEmail}
              placeholder="johndoe@sample-email.com"
              sx={{
                input: { fontSize: "16px", color: "#333333" },
                border: "1px solid #cccccc",
                borderRadius: "4px",
                marginBottom: "30px",
              }}
            />

            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#002b5a",
                marginBottom: "10px",
              }}
            >
              Password
            </Typography>
            <TextField
              error={hooks.inputPassword.length === 0}
              onChange={hooks.handleChangeInputPassword}
              id="outlined-password-input"
              label=""
              type="password"
              autoComplete="current-password"
              placeholder="Password"
              sx={{
                input: { fontSize: "16px", color: "#333333" },
                border: "1px solid #cccccc",
                borderRadius: "4px",
                marginBottom: "30px",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Button
              disabled={!hooks.hasCompleteValidInput}
              sx={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#fffffd",
                backgroundColor: "#fda5cb",
                border: "none",
                borderRadius: "5px",
                padding: "10px 20px",
                textAlign: "center",
                marginBottom: "20px",
                width: "223px",
                "&:hover": {
                  color: "#fffffd",
                  backgroundColor: "#002b5a",
                },
              }}
              onClick={hooks.handleClickCreateAccount}
            >
              Signup
            </Button>
            <Typography sx={{ fontSize: "16px", color: "#002b5a" }}>
              Already a member?
              <Link href="/login" underline="hover" sx={{ color: "#fda5cb" }}>
                Login
              </Link>
            </Typography>
          </Box>
        </Box>
      )}

      <Footer />
    </Box>
  );
}

export default RegisterComponent;
