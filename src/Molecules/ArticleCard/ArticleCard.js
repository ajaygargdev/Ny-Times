import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const ArticleCard = ({ article, handleClick = () => {} }) => {
  return (
    <>
      <Card sx={{ maxWidth: 345, marginBottom: 2 }} onClick={handleClick}>
        {article.media[0] && (
          <CardMedia
            component="img"
            height={article.media[0]["media-metadata"][2].height}
            width={article.media[0]["media-metadata"][2].width}
            image={article.media[0]["media-metadata"][2].url}
            alt={article.media[0].caption}
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {article.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {article.abstract}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <em>{article.byline}</em>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Published on:{" "}
            {new Date(article.published_date).toLocaleDateString()}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default ArticleCard;

// {
//     "uri": "nyt://article/63c5c0a2-2e26-56d6-a857-2e5346f6594a",
//     "url": "https://www.nytimes.com/2024/09/29/business/nadia-milleron-boeing-congress.html",
//     "id": 100000009690096,
//     "asset_id": 100000009690096,
//     "source": "New York Times",
//     "published_date": "2024-09-29",
//     "updated": "2024-09-29 10:37:09",
//     "section": "Business",
//     "subsection": "",
//     "nytdsection": "business",
//     "adx_keywords": "audio-neutral-informative;Content Type: Personal Profile;Elections, House of Representatives;Third-Party Politics (US);Boeing 737 Max Groundings and Safety Concerns (2019);Aviation Accidents, Safety and Disasters;Suits and Litigation (Civil);Compensation for Damages (Law);Regulation and Deregulation of Industry;Consumer Protection;Grief (Emotion);Deaths (Fatalities);Nader, Ralph;Neal, Richard E;Samya Stumo;Milleron, Nadia;Democratic Party;Boeing Company;Massachusetts;Addis Ababa (Ethiopia)",
//     "column": null,
//     "byline": "By David Enrich",
//     "type": "Article",
//     "title": "A Grieving Mother. A Famous Uncle. An Unlikely Crusade.",
//     "abstract": "Tragedy turned Nadia Milleron, Ralph Nader’s niece, into an activist. Now she’s on a long-shot campaign for Congress.",
//     "des_facet": [
//       "audio-neutral-informative",
//       "Content Type: Personal Profile",
//       "Elections, House of Representatives",
//       "Third-Party Politics (US)",
//       "Boeing 737 Max Groundings and Safety Concerns (2019)",
//       "Aviation Accidents, Safety and Disasters",
//       "Suits and Litigation (Civil)",
//       "Compensation for Damages (Law)",
//       "Regulation and Deregulation of Industry",
//       "Consumer Protection",
//       "Grief (Emotion)",
//       "Deaths (Fatalities)"
//     ],
//     "org_facet": [
//       "Democratic Party",
//       "Boeing Company"
//     ],
//     "per_facet": [
//       "Nader, Ralph",
//       "Neal, Richard E",
//       "Samya Stumo",
//       "Milleron, Nadia"
//     ],
//     "geo_facet": [
//       "Massachusetts",
//       "Addis Ababa (Ethiopia)"
//     ],
//     "media": [
//       {
//         "type": "image",
//         "subtype": "photo",
//         "caption": "Nadia Milleron is trying to unseat one of the most powerful Democrats in Congress.",
//         "copyright": "Amir Hamja for The New York Times",
//         "approved_for_syndication": 1,
//         "media-metadata": [
//           {
//             "url": "https://static01.nyt.com/images/2024/09/29/multimedia/00milleron-01-glvj/00milleron-01-glvj-thumbStandard.jpg",
//             "format": "Standard Thumbnail",
//             "height": 75,
//             "width": 75
//           },
//           {
//             "url": "https://static01.nyt.com/images/2024/09/29/multimedia/00milleron-01-glvj/00milleron-01-glvj-mediumThreeByTwo210-v2.jpg",
//             "format": "mediumThreeByTwo210",
//             "height": 140,
//             "width": 210
//           },
//           {
//             "url": "https://static01.nyt.com/images/2024/09/29/multimedia/00milleron-01-glvj/00milleron-01-glvj-mediumThreeByTwo440-v2.jpg",
//             "format": "mediumThreeByTwo440",
//             "height": 293,
//             "width": 440
//           }
//         ]
//       }
//     ],
//     "eta_id": 0
//   }
