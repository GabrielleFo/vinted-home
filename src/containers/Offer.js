import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";

const Offer = () => {
  const { id } = useParams();

  const [data, setData] = useState({});

  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    console.log(id);
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
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
          <div className="offer-container">
            <div className="offer-infos">
              <p>{data.product_price}</p>
              {data.product_details.map((elem, index) => {
                console.log("elem=>", elem);
                const keys = Object.keys(elem);
                return (
                  <p key={index}>
                    {keys[0]} {elem[keys[0]]}
                  </p>
                );
              })}
              <p>{data.product_name}</p>
              <p>{data.product_description}</p>
              {data.owner.account.avatar && (
                <img
                  src={data.owner.account.avatar.url}
                  alt={data.owner.account.username}
                />
              )}

              <span>{data.owner.account.username}</span>
              <br></br>
              <button type="submit">
                <Link
                  to={{
                    pathname: "/payment",
                    state: {
                      title: data.product_name,
                      price: data.product_price,
                    },
                  }}
                >
                  ACHETER
                </Link>
              </button>
            </div>
            <img src={data.product_image.url} alt={data.product_name}></img>
          </div>

          <Link to="/">Revenir à l'accueil</Link>
        </>
      )}
    </div>
  );
};

export default Offer;
