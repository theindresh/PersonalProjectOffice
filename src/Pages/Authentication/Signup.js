import { useState } from "react";
import { postSignUp } from "../Api/Signup";

function Signup() {
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const apiData = await postSignUp(values);
      if (apiData) {
        console.log("success");
        setValues({
          fname: "",
          lname: "",
          email: "",
          username: "",
          password: "",
        });
      }
      // console.log(apiData);
    } catch (error) {
      console.log(error);
    }
    // ... rest of the code
    // axios
    //   .post("http://localhost:8081/signup", values)
    //   .then((res) => {
    //     console.log("Registration successful", res);
    //     // ... rest of the code
    //   })
    //   .catch((err) => {
    //     console.error("Error during registration", err);
    //   });
  }

  // console.log(values, "djfhdj");
  return (
    <>
      <div className="loginback">
        <form onSubmit={handleSubmit}>
          <h2>Signup</h2>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={values.fname}
            required
            onChange={handleChange}
          />
          <label htmlFor="lname">Last Name:</label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={values.lname}
            required
            onChange={handleChange}
          />
          <label htmlFor="email">Enamil</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            required
            onChange={handleChange}
          />
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={values.userid}
            required
            onChange={handleChange}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password" // Corrected from "values" to "password"
            value={values.password}
            required
            onChange={handleChange}
          />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
}

export default Signup;
