import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./Login.module.scss";

export default function Login({ handleToggleMdpOublie }) {
  const schema = yup.object({
    email: yup
      .string()
      .matches(
        /^[a-zA-Z0-9]+@[a-zA-Z0-9,-]+\.[a-zA-Z]{2,4}$/,
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
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const user = await response.json();
      if (response.ok) {
        console.log(user);
      } else {
        console.log(user.message);
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className={`d-flex center flex-fill ${styles.formPage}`}>
      <form onSubmit={handleSubmit(submit)} className={`${styles.loginForm}`}>
        <p>Formulaire de connexion</p>
        <div className="d-flex flex-column mb-10">
          <label htmlFor="email" className="mb-10">
            Email
          </label>
          <input {...register("email")} type="email" id="email" />
          {errors.email && <p className="text-error">{errors.email.message}</p>}
        </div>
        <div className="d-flex flex-column mb-10">
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
          <p onClick={handleToggleMdpOublie} className={`${styles.clickable}`}>
            Mot de passe oublié ?
          </p>
        </div>
        <hr />
        <div className={`${styles.bottom_text}`}>
          <p className={`${styles.singUp_text}`}>
            Vous n'avez pas encore de compte ?
          </p>
          <p className={`${styles.clickable}`}>Inscrivez-vous ici</p>
        </div>
      </form>
    </div>
  );
}
