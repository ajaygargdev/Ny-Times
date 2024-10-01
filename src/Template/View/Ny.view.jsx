import React, { useEffect } from "react";
import ArticalDetails from "../../Organism/ArticlesDetails";
import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";
import Loader from "../../Atoms/Loader/Loader";
import { fetchArticles } from "../../Store/rootSlice";
import { useDispatch, useSelector } from "react-redux";

const NyView = () => {
  const dispatch = useDispatch();
  const { isLoading, error, copyright } = useSelector((state) => state.root);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">The New York Times</Typography>
        </Toolbar>
      </AppBar>
      <Container data-testid="main" component="main" sx={{ mt: 4, mb: 2 }}>
        {isLoading ? <Loader /> : error ? error : <ArticalDetails />}
      </Container>
      <Box
        component="footer"
        sx={{ p: 2, mt: "auto", backgroundColor: "#f5f5f5" }}
      >
        <Container>
          <Typography variant="body2" color="textSecondary" align="center">
            {copyright}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default NyView;
