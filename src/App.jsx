import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <div className="ourBestSellers">
        <p>Imagem de uma folha ou planta | (our) Best sellers</p>
        <div>
          5 cards com os produtos, foto em cima, nome do item em bold, preço e
          estrelas, botao em baixo com seta para a pagina do item e quando no
          hover aparecer no botao de adicionar ao carrinho
        </div>
      </div>
    </div>
  );
}

export default App;
