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
    const response = axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
      formData,
      {
        headers: {
          autorization: "Bearer" + token,
        },
      }
    );
    console.log(response.data);
  };

  return (
    <>
      <div className="container-form">
        <div className="form">
          <div>Vends tes articles</div>
          <br></br>
          <br></br>
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              onChange={(event) => {
                console.log(event.target.files);
                setPicture(event.target.files[0]);
              }}
            />
            <br></br>
            <input
              type="text"
              placeholder="titre"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <br></br>
            <input
              type="textarea"
              placeholder="description de ton article"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
            <br></br>
            <input
              type="text"
              placeholder="Marque"
              value={brand}
              onChange={(event) => {
                setBrand(event.target.value);
              }}
            />
            <br></br>
            <input
              type="text"
              placeholder="Taille"
              value={size}
              onChange={(event) => {
                setSize(event.target.value);
              }}
            />
            <br></br>
            <input
              type="text"
              placeholder="Couleur"
              value={color}
              onChange={(event) => {
                setColor(event.target.value);
              }}
            />
            <br></br>
            <input
              type="text"
              placeholder="Etat"
              value={condition}
              onChange={(event) => {
                setCondition(event.target.value);
              }}
            />
            <br></br>
            <input
              type="text"
              placeholder="Lieu"
              value={city}
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
            <br></br>
            <input
              type="text"
              placeholder="Prix"
              value={price}
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
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
