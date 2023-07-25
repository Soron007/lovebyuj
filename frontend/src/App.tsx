import "./App.css";
import { sampleProducts } from "./data";

const App = () => {
  return (
    <div>
      <header>withLoveByUJ</header>
      <main>
        <ul>
          {sampleProducts.map((prod) => {
            return (
              <li key={prod?.slug}>
                <img
                  src={prod?.image}
                  alt={prod?.name}
                  className="product-image"
                />
                <h2>{prod?.name}</h2>
                <p>${prod?.price}</p>
              </li>
            );
          })}
        </ul>
      </main>
      <footer>All Rights Reserved</footer>
    </div>
  );
};

export default App;
