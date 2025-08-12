import React from "react";
import Entity from "./Entity";
import "./Entities.css";
import { useParams, Link } from "react-router-dom";

const Entities = ({ getCategoryData }) => {
  const { category } = useParams();
  const items = getCategoryData(category) || [];

  return (
    <div className="entity-list">
      {items.map((entity, i) => (
        <Link
          key={i}
          to={`/wiki/${category}/${encodeURIComponent(entity.name)}`}
          className="entity-card"
        >
          <Entity
            name={entity.name}
            img={entity.img}
            level={entity.level}
            description={entity.description}
            category={category}
          />
        </Link>
      ))}
    </div>
  );
};

export default Entities;
