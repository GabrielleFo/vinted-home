import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import packages
import axios from "axios";

const Home = () => {
  const [data, setData] = useState({});
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

          {data.offers.map((elem, id) => {
            return (
              <>
                <h2>
                  {elem.product_name} {elem.product_price}
                </h2>
                <img src={elem.product_image.url} alt={elem.product_name}></img>
                <p> {elem.product_description}</p>
                <Link to="/offer">Détail article</Link>
              </>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Home;
