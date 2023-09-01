import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <h1>Neflix has a new series</h1>
        <h2>One piece live action</h2>
      </header>
      <nav>
        <a href="http://onepiece.com"></a>
      </nav>
      <main>
        <article>
          The One Piece is the driving goal of Monkey D. Luffy and his crew, as
          well as that of multiple other pirates, who all seek to claim the
          treasure
        </article>
      </main>
      <section>Main characters</section>
      <aside>
        <li>
          <b>Luffy</b>
        </li>
        <li>
          <b>Zoro</b>
        </li>
        <li>
          <b>Sanji</b>
        </li>
      </aside>
      <p>
        <footer>Dont forget to watch it </footer>
      </p>
    </>
  );
}

export default App;
