import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "jenishchauhan.08@gmail.com",
        },
        "YOUR_PUBLIC_KEY"
      );

      setSnackbar({
        open: true,
        message: "Message sent successfully!",
        severity: "success",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Failed to send message. Please try again.",
        severity: "error",
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box
      id="contact"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",
        color: "#fff",
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  fontWeight: "bold",
                  mb: 2,
                  background: "linear-gradient(45deg, #64ffda, #00bcd4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Get in Touch
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  mb: 4,
                  color: "#8892b0",
                }}
              >
                Have a question or want to work together? Feel free to reach
                out! I'm always open to discussing new projects, creative ideas,
                or opportunities to be part of your visions.
              </Typography>

              <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
                <IconButton
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  sx={{
                    color: "#64ffda",
                    "&:hover": {
                      color: "#00bcd4",
                    },
                  }}
                >
                  <LinkedInIcon sx={{ fontSize: 40 }} />
                </IconButton>
                <IconButton
                  href="https://twitter.com/your-profile"
                  target="_blank"
                  sx={{
                    color: "#64ffda",
                    "&:hover": {
                      color: "#00bcd4",
                    },
                  }}
                >
                  <TwitterIcon sx={{ fontSize: 40 }} />
                </IconButton>
                <IconButton
                  href="mailto:jenishchauhan.08@gmail.com"
                  sx={{
                    color: "#64ffda",
                    "&:hover": {
                      color: "#00bcd4",
                    },
                  }}
                >
                  <EmailIcon sx={{ fontSize: 40 }} />
                </IconButton>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  background: "rgba(255, 255, 255, 0.05)",
                  p: 4,
                  borderRadius: 2,
                  backdropFilter: "blur(10px)",
                }}
              >
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  sx={{
                    mb: 2,
                    "& .MuiOutlinedInput-root": {
                      color: "#fff",
                      "& fieldset": {
                        borderColor: "#64ffda",
                      },
                      "&:hover fieldset": {
                        borderColor: "#00bcd4",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "#8892b0",
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  sx={{
                    mb: 2,
                    "& .MuiOutlinedInput-root": {
                      color: "#fff",
                      "& fieldset": {
                        borderColor: "#64ffda",
                      },
                      "&:hover fieldset": {
                        borderColor: "#00bcd4",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "#8892b0",
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  sx={{
                    mb: 3,
                    "& .MuiOutlinedInput-root": {
                      color: "#fff",
                      "& fieldset": {
                        borderColor: "#64ffda",
                      },
                      "&:hover fieldset": {
                        borderColor: "#00bcd4",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "#8892b0",
                    },
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    background: "linear-gradient(45deg, #64ffda, #00bcd4)",
                    color: "#1a1a1a",
                    "&:hover": {
                      background: "linear-gradient(45deg, #00bcd4, #64ffda)",
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
