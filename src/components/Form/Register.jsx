import React, { useState } from "react";
import * as yup from "yup";
import { appendErrors, useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Register() {
  const [techFromApi, setTechFromApi] = useState([]);
  // schéma de validation
  const schema = yup.object({
    username: yup.string().required("Le champ est obligatoire"),
    email: yup
      .string()
      .matches(
        /^[a-zA-Z0-9]+@[a-zA-Z0-9,-]+\.[a-zA-Z]{2,4}$/,
        "Email non valide"
      )
      .required("Le champ est obligatoire"),
    password: yup
      .string()
      .required("Le mot de passe est obligatoire")
      .min(5, "trop court")
      .max(10, "trop long"),
    confirmPassword: yup
      .string()
      .required("Vous devez confirmer votre mot de passe")
      .oneOf([yup.ref("password"), ""], "Les mots ne correspondent pas"),
    rgpd: yup
      .boolean()
      .oneOf([true], "Vous devez accepter les termes et les conditions"),
    technos: yup.array().of(
      yup.object({
        value: yup.string().required("Ce champ ne peut être vide"),
      })
    ),
  });

  //   valeurs par défaut
  const defaultValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    rgpd: false,
    technos: [],
  };

  //   méthodes utilisées par useForm et options : resolver fait le lien entre le formulaire et le schéma
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    name: "technos",
    control,
  });

  function addTechno() {
    append({
      value: "",
    });
  }

  function deleteTechno(id) {
    remove(id);
  }

  //   fonction de validation de formulaire
  async function submit(values) {
    console.log(values);
    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        const newUser = await response.json();
        console.log(newUser);
        setTechFromApi(newUser.technos);
        reset(defaultValues);
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="d-flex center container">
      <form onSubmit={handleSubmit(submit)}>
        <div className="d-flex flex-column mb-10">
          <label htmlFor="username" className="mb-10">
            Pseudo
          </label>
          <input
            {...register("username")}
            type="text"
            id="username"
            className="mb-10"
          />
          {errors.username && (
            <p className="text-error">{errors.username.message}</p>
          )}
        </div>
        <div className="d-flex flex-column mb-10">
          <label htmlFor="email" className="mb-10">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="mb-10"
          />
          {errors.email && <p className="text-error">{errors.email.message}</p>}
        </div>
        <div className="d-flex flex-column mb-10">
          <label htmlFor="password" className="mb-10">
            Mot de passe
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            className="mb-10"
          />
          {errors.password && (
            <p className="text-error">{errors.password.message}</p>
          )}
        </div>
        <div className="d-flex flex-column mb-10">
          <label htmlFor="confirmPassword" className="mb-10">
            Confirmation de mot de passe
          </label>
          <input
            {...register("confirmPassword")}
            type="password"
            id="confirmPassword"
            className="mb-10"
          />
          {errors.confirmPassword && (
            <p className="text-error">{errors.confirmPassword.message}</p>
          )}
        </div>
        <div className="d-flex flex-column mb-10">
          <label htmlFor="rgpd" className="mb-10">
            <input
              {...register("rgpd")}
              type="checkbox"
              className="mr-15"
              id="rgpd"
            />
            En soumettant ce formulaire j'accepte ...
          </label>
          {errors.rgpd && <p className="text-error">{errors.rgpd.message}</p>}
        </div>
        <div className="d-flex flex-column mb-20">
          <label htmlFor="techno" className="d-flex center mb-10">
            <span className="flex-fill mr-10">Technologies</span>
            <button
              type="button"
              className="btn btn-reverse-primary"
              onClick={addTechno}
            >
              +
            </button>
          </label>
          <ul>
            {fields.map((tech, index) => (
              <div key={tech.id}>
                <li className="mb-10">
                  <input
                    {...register(`technos[${index}].value`)}
                    type="text"
                    className="flex-fill mr-15 mb-20"
                  />
                  <button
                    onClick={() => deleteTechno(index)}
                    type="button"
                    className="btn btn-primary"
                  >
                    -
                  </button>
                </li>
                {errors.technos?.length && errors.technos[index]?.value && (
                  <p>{errors.technos[index].value.message}</p>
                )}
              </div>
            ))}
          </ul>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
      <ul className="my-30">
        {techFromApi.length &&
          techFromApi.map((t, i) => <li key={t.id}>{t.value}</li>)}
      </ul>
    </div>
  );
}
