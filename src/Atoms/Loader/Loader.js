import React from "react";
import { Typography, Box, CircularProgress } from "@mui/material";

const Loader = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100vh"
  >
    <CircularProgress />
    <Typography variant="h6" sx={{ ml: 2 }}>
      Loading articles...
    </Typography>
  </Box>
);

export default Loader;
