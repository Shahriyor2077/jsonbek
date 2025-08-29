import axios from "axios";
import { useEffect, useState } from "react";
import "../articles/Articles.scss"

const Articles = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading]=useState(true)

  useEffect(() => {
    axios
      .get("https://jsonbek.uz/api/posts?style=comedy")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="articles" id="articles">
      <h2>Articles</h2>
      {loading && <div className="articles__loading">Loading...</div>}
      <div className="articles__list">
        {data?.map((item) => (
          <div className="articles__item" key={item.id}>
            <h3 loading="lazy" >{item.title} </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
