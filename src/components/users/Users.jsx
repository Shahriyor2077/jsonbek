import axios from "axios";
import { useState } from "react";
import "../users/Users.scss";

const Users = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  axios
    .get("https://jsonbek.uz/api/users?style=comedy")
    .then((res) => setData(res.data))
    .catch((err) => console.log(err))
    .finally(() => setLoading(false));

  return (
    <div className="users" id="users">
      <h2>Users</h2>
      {loading && <div className="users__loading">Loading...</div>}
      <div className="users__list">
        {data?.map((item) => (
          <div className="users__item" key={item.id}>
            <h3>{item.name}</h3>
            <h3>{item.username}</h3>
            <h2>Hobbies:</h2>
            <ul>
              {item.hobbies?.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
