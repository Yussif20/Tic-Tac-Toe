import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Yousef" symbol="X" />
          <Player name="Rawan" symbol="O" />
        </ol>
        Game Board
      </div>
    </main>
  );
}

export default App;
