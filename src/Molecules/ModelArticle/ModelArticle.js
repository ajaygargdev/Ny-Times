import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import ArticleCard from "../ArticleCard/ArticleCard";

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
    >
      <Box sx={style}>
        <ArticleCard allowModel={false} article={article} />
        <Button onClick={handleClose} variant="contained" sx={{ mt: 2 }}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default ModelArticle;
