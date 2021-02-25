import React, { useState } from "react";
import axios from "axios";

const Publish = ({ token }) => {
  console.log(token);

  const [picture, setPicture] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");

  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("price", price);
  formData.append("condition", condition);
  formData.append("city", city);
  formData.append("brand", brand);
  formData.append("size", size);
  formData.append("color", color);
  formData.append("picture", picture);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <div className="container-forms">
        <div className="formSell">
          <h2>Vends ton article</h2>
          <br></br>
          <br></br>
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              className="picture"
              onChange={(event) => {
                console.log(event.target.files);
                setPicture(event.target.files[0]);
              }}
            />
            <br></br>
            <div className="textDetail">
              <div className="title">
                <label>Titre</label>
                <input
                  type="text"
                  placeholder="ex:chemise sézanne verte"
                  value={title}
                  onChange={(event) => {
                    setTitle(event.target.value);
                  }}
                />
              </div>
              <br></br>
              <div className="texterea">
                <label>Description de l'article </label>
                <textarea
                  placeholder="ex: porté quelque fois, taille correctement"
                  value={description}
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                ></textarea>
              </div>
            </div>
            <br></br>
            <div className="detail">
              <div className="title">
                <label>Marque</label>
                <input
                  type="text"
                  placeholder="Marque"
                  value={brand}
                  onChange={(event) => {
                    setBrand(event.target.value);
                  }}
                />
              </div>
              <br></br>
              <div className="title">
                <label>Taille</label>
                <input
                  type="text"
                  placeholder="Taille"
                  value={size}
                  onChange={(event) => {
                    setSize(event.target.value);
                  }}
                />
              </div>
              <br></br>
              <div className="title">
                <label>Couleur</label>
                <input
                  type="text"
                  placeholder="Couleur"
                  value={color}
                  onChange={(event) => {
                    setColor(event.target.value);
                  }}
                />
              </div>
              <br></br>
              <div className="title">
                <label>Etat</label>
                <input
                  type="text"
                  placeholder="Etat"
                  value={condition}
                  onChange={(event) => {
                    setCondition(event.target.value);
                  }}
                />
              </div>
              <br></br>
              <div className="city">
                <label>Lieu</label>
                <input
                  type="text"
                  placeholder="Lieu"
                  value={city}
                  onChange={(event) => {
                    setCity(event.target.value);
                  }}
                />
              </div>
              <br></br>
            </div>
            <div className="price">
              <label>Prix</label>
              <input
                type="text"
                placeholder="Prix"
                value={price}
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
            </div>
            <br></br>
            <br></br>
            <button type="submit">Ajouter</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Publish;
