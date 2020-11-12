import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";

const Offer = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offers/${id}`
      );
      console.log(response.data);
      setData(response.data);
      setIsloading(false);
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {isLoading === true ? (
        <p>En cours de chargement ...</p>
      ) : (
        <>
          <h1>Vous etes sur la page offer</h1>
          {data.product_details.map((elem, index) => {
            const keys = Object.keys(elem);
            return (
              <p key={index}>
                {keys[0]} {elem[keys[0]]}
              </p>
            );
          })}

          <Link to="/">Revenir à l'accueil</Link>
        </>
      )}
    </div>
  );
};

export default Offer;
