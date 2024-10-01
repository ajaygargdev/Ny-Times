import React, { useMemo, useState } from "react";
import { Container } from "@mui/material";
import ArticleCard from "../ArticleCard/ArticleCard";
import { useSelector } from "react-redux";
import ModelArticle from "../ModelArticle/ModelArticle";

const ArticlesList = () => {
  const articles = useSelector((state) => state.root.articles);
  const currentPage = useSelector((state) => state.root.currentPage);
  const [currentArticle, setCurrentArtical] = useState(null);

  const articlesList = useMemo(
    () => articles[currentPage] || [],
    [currentPage, articles],
  );

  const handleClick = (article) => setCurrentArtical(article);

  const handleClose = () => setCurrentArtical(null);

  return (
    <>
      <Container
        data-testid="artical-list"
        sx={{
          "flex-wrap": "wrap",
          display: "flex",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {Array.isArray(articlesList) &&
          articlesList.map((article) => (
            <ArticleCard
              key={articles.asset_id}
              article={article}
              handleClick={() => handleClick(article)}
            />
          ))}
      </Container>
      {currentArticle && (
        <ModelArticle article={currentArticle} handleClose={handleClose} />
      )}
    </>
  );
};

export default ArticlesList;
