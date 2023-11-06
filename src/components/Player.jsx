import { useState } from "react";

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);

  const editHandler = () => {
    // setIsEditing(!isEditing);  Bad practice as react doesn't update the state immediately
    setIsEditing((prevState) => !prevState);
  };

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input type="text" required value={name} />
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editHandler}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
