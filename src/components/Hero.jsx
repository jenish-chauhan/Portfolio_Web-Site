import { Box, Typography, Container, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Offset to account for fixed navbar
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", md: "4rem" },
                  fontWeight: "bold",
                  mb: 2,
                  background: "linear-gradient(45deg, #64ffda, #00bcd4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Hi, I'm <span style={{ color: "#64ffda" }}>Jenish</span>
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.8rem", md: "3rem" },
                  mb: 4,
                  color: "#8892b0",
                }}
              >
                DevOps Engineer
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  mb: 4,
                  maxWidth: "600px",
                  color: "#8892b0",
                }}
              >
                I’m a computer engineering student passionate about building
                scalable, user-friendly web applications. Currently exploring
                DevOps and cloud practices to deliver clean, efficient
                solutions.
              </Typography>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  variant="contained"
                  onClick={() => scrollToSection("projects")}
                  sx={{
                    background: "linear-gradient(45deg, #64ffda, #00bcd4)",
                    color: "#1a1a1a",
                    "&:hover": {
                      background: "linear-gradient(45deg, #00bcd4, #64ffda)",
                    },
                  }}
                >
                  View My Work
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => scrollToSection("contact")}
                  sx={{
                    borderColor: "#64ffda",
                    color: "#64ffda",
                    "&:hover": {
                      borderColor: "#00bcd4",
                      color: "#00bcd4",
                    },
                  }}
                >
                  Contact Me
                </Button>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                minHeight: { xs: "300px", md: "500px" },
              }}
            >
              {/* Background animation elements */}
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    position: "absolute",
                    width: "400px",
                    height: "400px",
                    background:
                      "radial-gradient(circle, rgba(100,255,218,0.1) 0%, rgba(0,188,212,0.1) 100%)",
                    borderRadius: "50%",
                    filter: "blur(20px)",
                  }}
                />
                <motion.div
                  animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    position: "absolute",
                    width: "300px",
                    height: "300px",
                    background:
                      "radial-gradient(circle, rgba(0,188,212,0.1) 0%, rgba(100,255,218,0.1) 100%)",
                    borderRadius: "50%",
                    filter: "blur(15px)",
                  }}
                />
              </Box>

              {/* Profile photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8 }}
                style={{
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <Box
                  component="img"
                  src="./src/assets/jenish.jpg"
                  alt="Profile"
                  sx={{
                    width: { xs: "250px", md: "400px" },
                    height: { xs: "250px", md: "400px" },
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "4px solid #64ffda",
                    boxShadow: "0 0 30px rgba(100, 255, 218, 0.3)",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 0 40px rgba(100, 255, 218, 0.5)",
                    },
                  }}
                />
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
