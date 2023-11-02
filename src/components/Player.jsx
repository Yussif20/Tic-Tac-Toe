const Player = ({ name, symbol }) => {
  return (
    <li>
      <span>
        <span className="player-name">{name}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button>edit</button>
    </li>
  );
};

export default Player;