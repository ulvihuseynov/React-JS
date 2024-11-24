import React from "react";
import { useFormik } from "formik";
import { RegisterFormSchemas } from "../schema/RegisterFormSchemas";
function RegisterForm() {
  
  const submit = (values, action) => {
    console.log(values);
    console.log(action);
  };
  const { values, errors, handleChange, handlesubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      repeatPassword: "",
      term: "",
    },
    validationSchema: RegisterFormSchemas,
    onSubmit: submit,
  });
  // console.log(errors)
  return (
    <div className="w-[500px]">
      <form
        onSubmit={handlesubmit}
        // action=""
        className="text-white flex flex-col gap-5"
      >
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="write email"
            className="w-[100%] outline-none p-2 border-none rounded-sm text-black mt-5"
            id="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-600 mt-5 text-lg">{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            className="w-[100%] outline-none p-2 border-none rounded-sm text-black mt-5"
            placeholder="write age"
            id="age"
            value={values.age}
            onChange={handleChange}
          />
          {errors.age && (
            <p className="text-red-600 mt-5 text-lg">{errors.age}</p>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="w-[100%] outline-none p-2 border-none rounded-sm text-black mt-5"
            placeholder="write password"
            id="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="text-red-600 mt-5 text-lg">{errors.password}</p>
          )}
        </div>
        <div>
          <label htmlFor="Reppassword">Repeat Password</label>
          <input
            type="password"
            className="w-[100%] outline-none p-2 border-none rounded-sm text-black mt-5"
            placeholder="write repeat password"
            id="Reppassword"
            value={values.repeatPassword}
            onChange={handleChange}
          />
          {errors.repeatPassword && (
            <p className="text-red-600 mt-5 text-lg">
              {errors.repeatPassword}
            </p>
          )}
        </div>
        <div>
          <input
            type="checkbox"
            // placeholder='write password'
            id="term"
            value={values.term}
            onChange={handleChange}
          />
          <label htmlFor="term">Istifadeci sozlesmesini qebul edirem</label>
          {errors.term && (
            <p className="text-red-600 mt-5 text-lg">{errors.term}</p>
          )}
        </div>
        <div></div>
        <button
          type="submit"
          className="w-[100%] bg-yellow-400 text-black cursor-pointer p-2 rounded-sm font-semibold"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
