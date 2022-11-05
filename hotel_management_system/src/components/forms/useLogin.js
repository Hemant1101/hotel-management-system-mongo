import Axios from "axios";
import { useState, useEffect } from "react";

const useLogin = (callback, validate) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isLogging, setIsLogging] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLogging(true);
    Axios.post("http://localhost:5000/login", {
      password: values.password,
      email: values.email,
    })
      .then((res) => {
        const results = res.data;
        if (
          results["user"]["email"] === values.email &&
          results["user"]["password"] === values.password
        ) {
          callback();
          localStorage.setItem("login", results["user"]["_id"]);
        } else {
          alert("wrong email/password");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("wrong email/password");
      });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isLogging) {
      console.log("callback");
    } else {
      console.log("notcallback");
    }
  }, []);

  return { handleChange, handleSubmit, values, errors };
};

export default useLogin;
