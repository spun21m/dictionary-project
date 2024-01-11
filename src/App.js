import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">
          <h1>Dictionary 📖</h1>
          <p>Look up for a word</p>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          Coded by Sital Pun , and it is{" "}
          <a
            href="https://github.com/spun21m/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
