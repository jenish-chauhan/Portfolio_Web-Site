import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CodeIcon from "@mui/icons-material/Code";
import BrushIcon from "@mui/icons-material/Brush";
import StorageIcon from "@mui/icons-material/Storage";
import CloudIcon from "@mui/icons-material/Cloud";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      name: "Cloud & DevOps",
      icon: <CloudIcon />,
      items: ["AWS", "Docker", "Git", "CI/CD"],
    },
    {
      name: "Frontend Development",
      icon: <CodeIcon />,
      items: ["React", "JavaScript", "HTML5", "CSS3"],
    },
    {
      name: "UI/UX Design",
      icon: <BrushIcon />,
      items: ["Figma", "Adobe XD", "Material-UI", "Responsive Design"],
    },
    {
      name: "Backend Development",
      icon: <StorageIcon />,
      items: ["Node.js", "Python", "SQL", "MongoDB"],
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: 8,
        background: "#1a1a1a",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              mb: 6,
              background: "linear-gradient(45deg, #64ffda, #00bcd4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            About Me
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 6,
              color: "#8892b0",
              fontSize: "1.1rem",
              lineHeight: 1.8,
            }}
          >
            I'm a passionate Full Stack Developer with a keen eye for design and
            a love for creating seamless user experiences. With several years of
            experience in web development, I specialize in building modern,
            responsive, and performant applications using cutting-edge
            technologies.
          </Typography>

          <Box id="skills">
            <Grid container spacing={4}>
              {skills.map((skill, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Paper
                      elevation={3}
                      sx={{
                        p: 3,
                        height: "100%",
                        background: "rgba(255, 255, 255, 0.05)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        cursor: "pointer",
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          background: "rgba(255, 255, 255, 0.08)",
                          borderColor: "#64ffda",
                          boxShadow: "0 8px 32px rgba(100, 255, 218, 0.1)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mb: 2,
                          color: "#64ffda",
                        }}
                      >
                        {skill.icon}
                        <Typography variant="h6" sx={{ ml: 1 }}>
                          {skill.name}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {skill.items.map((item, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                background: "rgba(100, 255, 218, 0.1)",
                                color: "#64ffda",
                                px: 1,
                                py: 0.5,
                                borderRadius: 1,
                                cursor: "pointer",
                                transition: "all 0.3s ease-in-out",
                                "&:hover": {
                                  background: "rgba(100, 255, 218, 0.2)",
                                  transform: "translateY(-2px)",
                                },
                              }}
                            >
                              {item}
                            </Typography>
                          </motion.div>
                        ))}
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
