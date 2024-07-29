import { Box, Button, Typography, Stack } from "@mui/material";
import NavigationBar from "../navbar";
import Footer from "../footer";
import CoverPhoto from "/dental-clinic-cover-photo.png";

function HomePage() {
  const services = [
    {
      title: "Teeth Whitening",
      description:
        "Brighten your smile with our professional teeth whitening services. Safe, effective, and long-lasting results.",
      imageSrc: "whitening.png",
    },
    {
      title: "Dental Checkup",
      description:
        "Routine checkups to ensure your oral health is in top condition. Includes cleaning, examination, and x-rays.",
      imageSrc: "checkup.png",
    },
    {
      title: "Orthodontics",
      description:
        "Straighten your teeth with our advanced orthodontic treatments. We offer traditional braces and clear aligners.",
      imageSrc: "ortho.png",
    },
  ];
  return (
    <Box sx={{ display: "flex" }}>
      <NavigationBar />
      <Box
        sx={{
          width: "100%",
          border: "1px solid #002b5a",
        }}
      >
        <Box
          className="hero-section"
          sx={{
            backgroundImage: `url(${CoverPhoto})`,
            backgroundSize: "cover",
            height: "220px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(0, 43, 90, 0.5)",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "48px",
                fontWeight: "bold",
                paddingTop: "20px",
              }}
            >
              Welcome to Dental Clinic
            </Typography>
            <Typography
              sx={{
                fontSize: "24px",
                marginTop: "10px",
                marginBottom: "20px",
              }}
            >
              Your smile, our priority!
            </Typography>
            <Button
              sx={{
                backgroundColor: "#fda5cb",
                color: "#002b5a",
                fontSize: "18px",
                fontWeight: "600px",
                height: "40px",
                padding: "10px 20px",
                marginBottom: "20px",
                "&:hover": { backgroundColor: "#002b5a", color: "#fffffd" },
              }}
            >
              Book an Appointment
            </Button>
          </Box>
        </Box>
        <Box
          className="services-section"
          sx={{ color: "#002b5a", marginBottom: "80px" }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "36px",
              marginBottom: "30px",
            }}
          >
            Our Services
          </Typography>
          <Box
            sx={{
              paddingLeft: "200px",
              paddingRight: "200px",
              display: "flex",
            }}
          >
            {services.map((service) => {
              return (
                <Box
                  sx={{
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    margin: "0px 25px",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#fca2c5",
                      opacity: "0.5",
                      borderRadius: "25px",
                      height: "25%",
                      width: "400px",
                      position: "absolute",
                      marginTop: "50px",
                      zIndex: "-1",
                    }}
                  />
                  <img src={service.imageSrc} style={{ width: "100px" }} />
                  <Typography
                    sx={{
                      fontSize: "24px",
                      fontWeight: 600,
                      textAnchor: "center",
                      color: "#333333",
                      marginTop: "10px",
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      textAnchor: "center",
                      color: "#666666",
                      marginBottom: "20px",
                    }}
                  >
                    {service.description}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box
          className="contact-section"
          sx={{
            backgroundColor: "#f7f7f7",
            padding: "20px 20px",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "36px",
              fontWeight: "700px",
              color: "#002b5a",
              marginBottom: "30px",
              textAlign: "center",
            }}
          >
            Contact Us
          </Typography>
          <Typography
            sx={{ fontSize: "18px", color: "#333333", marginBottom: "7px" }}
          >
            247 Dental Clinic, Lezerie City, PH 0123
          </Typography>
          <Typography
            sx={{ fontSize: "18px", color: "#333333", marginBottom: "7px" }}
          >
            (012) 345-6789
          </Typography>
          <Typography
            sx={{ fontSize: "18px", color: "#333333", marginBottom: "7px" }}
          >
            sampledentalclinic@email.com
          </Typography>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}

export default HomePage;
