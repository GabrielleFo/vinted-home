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
    // console.log(response.data);
    setData(response.data);
    setIsloading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card-wrapper">
      {isLoading === true ? (
        <p>En cours de chargement ...</p>
      ) : (
        <>
          {data.offers.map((elem, id) => {
            return (
              <>
                <Link to={`/offer/${elem._id}`}>
                  <div className="card-container">
                    <div className="card-avatar">
                      {elem.owner.account.avatar && (
                        <img
                          src={elem.owner.account.avatar.url}
                          alt={elem.owner.account.username}
                        />
                      )}

                      <span>{elem.owner.account.username}</span>
                    </div>

                    <div className="card-offer">
                      <img
                        src={elem.product_image.url}
                        alt={elem.product_name}
                      ></img>
                      <h2> {elem.product_price}€</h2>
                      <span>{elem.product_details[1].TAILLE}</span>
                      <br></br>
                      <span>{elem.product_details[0].MARQUE}</span>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Home;
