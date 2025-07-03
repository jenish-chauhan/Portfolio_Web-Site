import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["Home", "About", "Skills", "Projects", "Contact"];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AppBar
        position="fixed"
        sx={{
          background: scrolled ? "rgba(18, 18, 18, 0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          boxShadow: scrolled ? 1 : 0,
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold", color: "#fff" }}
          >
            Portfolio
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {menuItems.map((item) => (
              <Button
                key={item}
                color="inherit"
                onClick={() => scrollToSection(item)}
                sx={{
                  mx: 1,
                  "&:hover": {
                    color: "#64ffda",
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item} onClick={() => scrollToSection(item)}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </motion.div>
  );
};

export default Navbar;
