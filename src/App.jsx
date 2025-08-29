import "./App.css";
import Headers from "./components/headers/Headers";
import Articles from "./components/articles/Articles";
import Products from "./components/products/Products";
import Users from "./components/users/User";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Headers />
      <main className="content">
        <Articles />
        <Products />
        <Users />
      </main>
      <Footer />
    </div>
  );
}

export default App;
