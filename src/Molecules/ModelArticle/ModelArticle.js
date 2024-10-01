import React from "react";
import { Modal, Box, Button } from "@mui/material";
import ArticleCard from "../ArticleCard/ArticleCard";
import PropTypes from "prop-types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModelArticle = ({ article, handleClose }) => {
  return (
    <Modal
      open={true}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      data-testid="model"
    >
      <Box sx={style}>
        <ArticleCard allowModel={false} article={article} />
        <Button
          onClick={handleClose}
          data-testid="model-close"
          variant="contained"
          sx={{ mt: 2 }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

ModelArticle.propTypes = {
  article: PropTypes.shape({}).isRequired,
  handleClose: PropTypes.func,
};

export default ModelArticle;
