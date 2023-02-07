import React, { useState } from "react";
import "./../App.css";
import axios from "axios";
function Form() {
  const url = "http://mairamje.beget.tech/reminders/reminder_create/";
  const [data, setData] = useState({
    name: "",
    birthday: "",
    email: "",
    phone: "",
  });

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }
  function submit(e) {
    e.preventDefault();
    axios
      .post(url, {
        name: data.name,
        birthday: data.birthday,
        phone: data.phone,
        email: data.email,
      })

      .then((res) => {
        let name = res.data.name;
        let email = res.data.email;
        let phone = res.data.phone;
        let birthday = res.data.birthday;

        alert("Спасибо, Ваш промокод 1414");
      });
  }
  return (
    <div className="main">
      <div className="main__container">
        <form onSubmit={(e) => submit(e)}>
          {/* Имя */}
          <label htmlFor="name" style={{ color: "white", fontWeight: "bold" }}>
            Имя
          </label>
          <input
            onChange={(e) => handle(e)}
            value={data.name}
            id="name"
            className="form-control"
            style={{ marginBottom: "20px" }}
            placeholder="Ваше имя"
            aria-label="default input example"
            htmlFor={true}
          />
          {/* Email */}
          <label htmlFor="email" style={{ color: "white", fontWeight: "bold" }}>
            Email
          </label>
          <input
            onChange={(e) => handle(e)}
            value={data.email}
            id="email"
            type="email"
            className="form-control"
            style={{ marginBottom: "20px" }}
            placeholder="Ваш email"
            aria-label="default input example"
          />
          {/* Номер телефона */}
          <label
            htmlFor="number"
            style={{ color: "white", fontWeight: "bold" }}
          >
            Номер телефона
          </label>
          <input
            onChange={(e) => handle(e)}
            value={data.phone}
            id="phone"
            name="phone"
            style={{ marginBottom: "20px" }}
            className="form-control "
            type="number"
            placeholder="Номер телефона"
            aria-label="default input example"
          />
          {/* Дата рождения */}
          <label htmlFor style={{ color: "white", fontWeight: "bold" }}>
            Дата рождение
          </label>{" "}
          <br />
          <input
            onChange={(e) => handle(e)}
            value={data.birthday}
            id="birthday"
            name="birthday"
            type="date"
            style={{ marginBottom: "20px", color: "black" }}
            id="birthday"
          />
          <br />
          <button className="btn btn-primary form__button" type="submit">
            Получить скидку
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
