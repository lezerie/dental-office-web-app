import { Box, Button, Typography, Link, TextField } from "@mui/material";
import Footer from "../footer";

function CreateAccountPage() {
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
        alt="Dental Clinic Logo"
      />
      <Typography
        sx={{
          fontSize: "36px",
          fontWeight: 700,
          color: "#002b5a",
          marginBottom: "30px",
        }}
      >
        Get Started with Your New Account
      </Typography>

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
        <Box>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#002b5a",
              marginBottom: "10px",
            }}
          >
            Full name
          </Typography>
          <TextField
            label=""
            placeholder="John Doe"
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
            Username
          </Typography>
          <TextField
            label=""
            placeholder="johndoe2024"
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
            id="outlined-password-input"
            label=""
            type="password"
            autoComplete="current-password"
            placeholder="Enter your password"
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
          <Link href="#" underline="hover" sx={{ color: "#fda5cb" }}>
            Forgot your password?
          </Link>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default CreateAccountPage;
