import React from "react";

import "./collection-item.style.scss";

const CollectionItem = (props) => {
  console.log(props);
  const { id, name, price, imageUrl } = props;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />

      <div className="collection-footer">
        <span className="image">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
