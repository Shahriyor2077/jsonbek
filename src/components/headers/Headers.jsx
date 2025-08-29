import "../headers/Header.scss";

const Headers = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="wrapper">
          <div className="header__title">
            <span>Jsonbek</span>
          </div>
          <div className="header__nav">
            <ul>
              <li> <a href="articles" >Articles</a> </li>
              <li> <a href="#products" >Products</a> </li>
              <li> <a href="#users">Users</a> </li>
            </ul>
          </div>
          <div className="header__action">
            <button>Exit</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;
