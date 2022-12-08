import React, { useState } from "react";
import classNames from "classnames";

import { Header } from "shared";
import { Footer } from "shared";
import { Button } from "../components";
import { validateEmail } from "./Contactvalid";

import loading from "assets/Image/loading.png";

import "./Contacts.css";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState("");
  const [appeal, setAppeal] = useState("");
  const [comment, setComment] = useState("");
  const [checked, setChecked] = useState(false);

  const [isNameInvalid, setIsNameInvalid] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isСommentInvalid, setIsСommentInvalid] = useState(false);
  const [isAppealInvalid, setIsAppealInvalid] = useState(false);
  const [isCheckedInvalid, setIsCheckedInvalid] = useState(false);

  const [mailError, setMailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [commentError, setСommentError] = useState("");
  const [appealError, setAppealError] = useState("");
  const [checkedError, setCheckedError] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name,
      email,
      appeal,
      file,
      comment,
      checked,
    };

    let isValid = true;

    if (!validateEmail(formData.email)) {
      setIsEmailInvalid(true);
      isValid = false;
      setMailError("Email введён некорректно");
    } else setMailError("");

    if (formData.name.trim() === "") {
      setIsNameInvalid(true);
      isValid = false;
      setNameError("Имя введёно некорректно");
    } else setNameError("");

    if (formData.comment.trim() === "") {
      setIsСommentInvalid(true);
      isValid = false;
      setСommentError("Вы ничего не написали");
    } else setСommentError("");

    if (formData.appeal === "") {
      setIsAppealInvalid(true);
      isValid = false;
      setAppealError("Поле не отмечено");
    } else setAppealError("");

    if (formData.checked === false) {
      setIsCheckedInvalid(true);
      isValid = false;
      setCheckedError("Поле не отмечено");
    } else setCheckedError("");

    if (isValid) {
      console.log(formData);
    }
  };

  return (
    <div>
      <Header />
      <div className="contacts">
        <h1 className="contacts__title">Контакты</h1>
        <p className="contacts__main">
          Главная - <span>контакты</span>
        </p>
        <iframe
          className="contacts__map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.867846852291!2d135.045929386473!3d48.49216195706459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5efaea41d55b47dd%3A0x3d12dc92d3ae649!2z0YPQuy4g0JfQvdCw0LzQtdC90YnQuNC60L7QstCwLCA1MSwg0KXQsNCx0LDRgNC-0LLRgdC6LCDQpdCw0LHQsNGA0L7QstGB0LrQuNC5INC60YDQsNC5LCA2ODAwMTE!5e0!3m2!1sru!2sru!4v1670044050603!5m2!1sru!2sru"
          width="600"
          height="450"
        ></iframe>
        <div className="contacts__communication">
          <p>
            Телефон: <br />
            +7(965)675-93-08
          </p>
          <p>
            E-mail: <br />
            info@womazing.com
          </p>
          <p>
            Адрес: <br />
            г. Хабаровск, ул. Знаменщикова, 51
          </p>
        </div>
        <form className="contacts__form" onSubmit={onSubmit}>
          <h1 className="contacts-form__heading">Напишите нам</h1>

          <div className="contacts-form__name">
            <input
              id="name"
              type="text"
              value={name}
              placeholder="Имя"
              onChange={(event) => {
                setName(event.target.value);
                setIsNameInvalid(false);
              }}
            />
            <label htmlFor="name">Ваше имя</label>
            <p className="contacts-form__error">{nameError}</p>
          </div>

          <div className="contacts-form__email">
            <input
              id="email"
              type="text"
              value={email}
              placeholder="E-mail"
              onChange={(event) => {
                setEmail(event.target.value);
                setIsEmailInvalid(false);
              }}
            />
            <label htmlFor="email">Ваш E-mail</label>
            <p className="contacts-form__error">{mailError}</p>
          </div>

          <div className="contacts-form__radio">
            <p className="contacts-form__radio-heading">Тема обращения:</p>
            <div className="contacts-form__radio-appeal">
              <input
                id="appeal1"
                name="appeal"
                type="radio"
                value="Возврат/обмен товара"
                checked={appeal == "Возврат/обмен товара" ? true : false}
                onChange={(event) => {
                  setAppeal(event.target.value);
                  setIsAppealInvalid(false);
                }}
              />
              <label htmlFor="appeal1">Возврат/обмен товара</label>
            </div>
            <div className="contacts-form__radio-appeal">
              <input
                id="appeal2"
                name="appeal"
                type="radio"
                value="Отзыв о магазине"
                checked={appeal == "Отзыв о магазине" ? true : false}
                onChange={(event) => {
                  setAppeal(event.target.value);
                  setIsAppealInvalid(false);
                }}
              />
              <label htmlFor="appeal2">Отзыв о магазине</label>
            </div>
            <p className="contacts-form__error">{appealError}</p>
          </div>

          <div className="contacts-form__textarea">
            <label htmlFor="textarea">Сообщение</label>
            <textarea
              type="text"
              value={comment}
              placeholder="Напишите сюда ваши пожелания"
              onChange={(event) => {
                setComment(event.target.value);
                setIsСommentInvalid(false);
              }}
            />
            <p className="contacts-form__error-textarea">{commentError}</p>
          </div>

          <div className="contacts-form__file">
            <input
              id="file"
              type="file"
              onChange={(event) => {
                setFile(event.target.value);
              }}
            />
            <img className="contacts-form-file-loading" src={loading} alt="loading" />
            <label htmlFor="file">
              <span>Load</span> Загрузите фотографию
            </label>
            <p className="contacts-form-file__result">{file}</p>
          </div>

          <div className="contacts-form__checkbox">
            <input
              className="form__input"
              id="checkbox"
              type="checkbox"
              checked={checked}
              onChange={() => {
                setChecked(!checked);
                setIsCheckedInvalid(false);
              }}
            />
            <label htmlFor="checkbox">Я согласен на обработку личных данных</label>
            <p className="contacts-form__error-checkbox">{checkedError}</p>
          </div>

          <div className="contacts-form__button">
            <Button type={"submit"} text="Отправить" />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
