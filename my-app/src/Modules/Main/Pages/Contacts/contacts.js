import React, { useState } from "react";
import { Header } from "Shared";
import { Footer } from "Shared";
import { validateEmail } from "./Contactvalid";

import "./contacts.css";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [comment, setComment] = useState("");
  const [isvalid, setIsvalid] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    console.log(validateEmail(email));

    const formData = {
      name,
      email,
      tel,
      comment,
    };
    console.log(formData);
  };
  return (
    <div>
      <Header />
      <form className="form" onSubmit={onSubmit}>
        <h1 className="form__heading">Напишите нам</h1>
        <input
          className="form__input"
          type="text"
          value={name}
          placeholder="Имя"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          className="form__input"
          type="text"
          value={email}
          placeholder="E-mail"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          className="form__input"
          type="text"
          value={tel}
          placeholder="Телефон"
          onChange={(event) => {
            setTel(event.target.value);
          }}
        />
        <textarea
          type="text"
          value={comment}
          placeholder="Сообщение"
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />
        <button className="form__button" type={"submit"}>
          Отправить
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default Contacts;
