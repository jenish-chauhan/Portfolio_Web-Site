import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  IconButton,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with React and Material-UI. Features smooth animations, responsive design, and a clean user interface.",
    image:
      "https://images.pexels.com/photos/6913124/pexels-photo-6913124.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    technologies: ["React", "Material-UI", "Framer Motion"],
    githubLink: "https://github.com/yourusername/portfolio",
    liveLink: "https://your-portfolio.com",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.",
    image:
      "https://okcredit-blog-images-prod.storage.googleapis.com/2021/04/ecommerce3-2.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubLink: "https://github.com/yourusername/ecommerce",
    liveLink: "https://your-ecommerce.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://www.eviaglobal.com/images/task-management-system.jpg",
    technologies: ["React", "Firebase", "Redux"],
    githubLink: "https://github.com/yourusername/task-manager",
    liveLink: "https://your-task-manager.com",
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      id="projects"
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
            My Projects
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      background: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(100, 255, 218, 0.1)",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-10px)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        objectFit: "cover",
                        borderBottom: "1px solid rgba(100, 255, 218, 0.1)",
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="h5"
                        component="h2"
                        sx={{
                          mb: 2,
                          color: "#64ffda",
                          fontWeight: "bold",
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#8892b0", mb: 2 }}
                      >
                        {project.description}
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {project.technologies.map((tech, techIndex) => (
                          <Chip
                            key={techIndex}
                            label={tech}
                            size="small"
                            sx={{
                              background: "rgba(100, 255, 218, 0.1)",
                              color: "#64ffda",
                              border: "1px solid rgba(100, 255, 218, 0.2)",
                              "&:hover": {
                                background: "rgba(100, 255, 218, 0.2)",
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                    <CardActions
                      sx={{
                        p: 2,
                        pt: 0,
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: 1,
                      }}
                    >
                      <IconButton
                        href={project.githubLink}
                        target="_blank"
                        sx={{
                          color: "#64ffda",
                          "&:hover": {
                            color: "#00bcd4",
                          },
                        }}
                      >
                        <GitHubIcon />
                      </IconButton>
                      <IconButton
                        href={project.liveLink}
                        target="_blank"
                        sx={{
                          color: "#64ffda",
                          "&:hover": {
                            color: "#00bcd4",
                          },
                        }}
                      >
                        <LaunchIcon />
                      </IconButton>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;
