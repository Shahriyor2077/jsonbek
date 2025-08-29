import "./App.css";
import Headers from "./components/headers/Headers";
import Articles from "./components/articles/Articles";
import Products from "./components/products/Products";
import Footer from "./components/footer/Footer";
import User from "./components/users/User";

function App() {
  return (
    <div className="app">
      <Headers />
      <main className="content">
        <Articles />
        <Products />
        <User />
      </main>
      <Footer />
    </div>
  );
}

export default App;
