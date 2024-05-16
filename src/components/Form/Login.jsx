import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./Login.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { signin } from "../../apis/users";
import Modal from "../Modal/Modal";

export default function Login({ handleLogged }) {
  const [feedback, setFeedback] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const schema = yup.object({
    email: yup
      .string()
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9,-]+\.[a-zA-Z]{2,4}$/,
        "Email non valide"
      )
      .required("Le champ est obligatoire"),
    password: yup.string().required("Le mot de passe est obligatoire"),
  });

  const defaultValues = {
    email: "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  //   fonction de validation de formulaire
  async function submit(values) {
    console.log(values);
    try {
      const response = await signin(values);
      if (!response.message) {
        setFeedback("Connexion réussie");
        reset(defaultValues);
        setShowModal(true);
      } else {
        setFeedback(response.message);
        setShowModal(true);
      }
      setShowModal(true);
    } catch (error) {
      console.error(error);
    }
  }
  function handleCloseModal() {
    setShowModal(false);
    if (feedback === "Connexion réussie") {
      navigate("/");
      handleLogged();
    }
  }
  return (
    <div
      className={`d-flex flex-column align-items-center flex-fill ${styles.formPage}`}
    >
      <h1>Connexion</h1>
      <hr />
      <form onSubmit={handleSubmit(submit)} className={`${styles.loginForm}`}>
        <p>Formulaire de connexion</p>
        <div className="d-flex flex-column mb-30">
          <label htmlFor="email" className="mb-10">
            Email
          </label>
          <input {...register("email")} type="email" id="email" />
          {errors.email && <p className="text-error">{errors.email.message}</p>}
        </div>
        <div className="d-flex flex-column mb-30">
          <label htmlFor="password" className="mb-10">
            Mot de passe
          </label>
          <input {...register("password")} type="password" id="password" />
          {errors.password && (
            <p className="text-error">{errors.password.message}</p>
          )}
        </div>
        <div className={`${styles.divFin}`}>
          <button className={`btn btn-secondary ${styles.btnConnexion}`}>
            Connexion
          </button>
          <p className={`${styles.clickable}`}>Mot de passe oublié ?</p>
        </div>
        <hr />
        <div className={`${styles.bottom_text}`}>
          <p className={`${styles.singUp_text}`}>
            Vous n'avez pas encore de compte ?
          </p>
          <NavLink to="/register" className={`${styles.clickable}`}>
            Inscrivez-vous ici
          </NavLink>
        </div>
      </form>
      {showModal && (
        <Modal
          onClose={handleCloseModal}
          feedback={feedback}
          handleCloseModal={handleCloseModal}
        ></Modal>
      )}
    </div>
  );
}
