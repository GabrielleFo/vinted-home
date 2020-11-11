import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import packages
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([{}]);
  const [isLoading, setIsloading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://lereacteur-vinted-api.herokuapp.com/offers"
    );
    console.log(response.data);
    setData(response.data);
    setIsloading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {isLoading === true ? (
        <p>En cours de chargement ...</p>
      ) : (
        <>
          <h1>Vous etes sur la page home</h1>
          <h2>{data.offers}</h2>
        </>
      )}
      <Link to="/product">Revenir à la page article</Link>
    </div>
  );
};

export default Home;
