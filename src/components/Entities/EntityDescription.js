import React from "react";
import { useParams, Link } from "react-router-dom";
import "./EntityDescription.css";

const EntityDescription = ({ getCategoryData }) => {
  const { entityName, category } = useParams();
  const decodedName = decodeURIComponent(entityName);
  const entity = getCategoryData(category).find(
    (entity) => entity.name === entityName
  );

  if (!entity) {
    return <div>Item not found</div>;
  }

  const { img, level, description } = entity;

  return (
    <div className="desc-card">
      <Link to={`/wiki/${category}`} className="back-link">
        ← Back to {category}
      </Link>
      <img src={img} alt={decodedName} />
      <h3>{decodedName}</h3>
      <p className="desc-card-level">{level}</p>
      <p className="desc-card-description">{description}</p>
    </div>
  );
};

export default EntityDescription;
