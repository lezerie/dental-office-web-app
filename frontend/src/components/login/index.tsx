import {
  Box,
  Button,
  Typography,
  Link,
  TextField,
  Alert,
  LinearProgress,
} from "@mui/material";
import Footer from "../footer";
import { useLogin } from "./hooks/useLogin";

function LoginComponent() {
  const { ...hooks } = useLogin();
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
        Login to Your Account
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
              Email
            </Typography>
            <TextField
              label=""
              placeholder="Email address"
              sx={{
                input: { fontSize: "16px", color: "#333333" },
                border: "1px solid #cccccc",
                borderRadius: "4px",
                marginBottom: "30px",
              }}
              onChange={hooks.handleChangeInputEmail}
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
              id="outlined-password-input"
              label=""
              type="password"
              autoComplete="current-password"
              placeholder="Password"
              onChange={hooks.handleChangeInputPassword}
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
              textAlign: "right",
            }}
          >
            <Link
              href="#"
              underline="hover"
              sx={{ color: "#fda5cb", textAlign: "right" }}
            >
              Forgot your password?
            </Link>
            <Button
              onClick={hooks.handleClickLogin}
              disabled={!hooks.hasCompleteValidInput}
              sx={{
                fontSize: "18px",
                textTransform: "none",
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
            >
              Login
            </Button>

            <Typography sx={{ fontSize: "16px", color: "#002b5a" }}>
              Not yet a member?
              <Link
                href="/register"
                underline="hover"
                sx={{ color: "#fda5cb" }}
              >
                Create Account
              </Link>
            </Typography>
          </Box>
        </Box>
      )}

      <Footer />
    </Box>
  );
}

export default LoginComponent;
