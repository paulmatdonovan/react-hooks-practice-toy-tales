import React from "react";

function ToyCard({ toy }) {
  const { name, image, likes } = toy;
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{""} Likes </p>
      <button className="like-btn">Like {likes}</button>
      <button className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
