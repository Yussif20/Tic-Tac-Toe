const GameOver = ({ winner, onReset }) => {
  return (
    <div id="game-over">
      <h2>Game over!</h2>
      {winner ? <p>{winner} won!</p> : <p>it's a draw!</p>}

      <button onClick={onReset}>rematch</button>
    </div>
  );
};

export default GameOver;

// {winner && <p>{winner} won!</p>}
// {!winner && <p>it's a draw!</p>}
