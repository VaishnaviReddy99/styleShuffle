import Navbar from "./Navbar";
import "./login.css";
import { useForm } from "react-cool-form";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const Field = ({ label, id, error, ...rest }) => (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...rest} />
      {error && <p>{error}</p>}
    </div>
  );

  // Initialize useForm hook and get form and errors objects
  const { form, use, errors } = useForm({
    // Provide default values
    defaultValues: { username: "", email: "", password: "" },
    // The event only triggered when the form is valid
    onSubmit: (values) => {
      console.log("onSubmit: ", values);
      navigate("/About");
    },
  });
  return (
    <div className="App">
      <Navbar />
      <div className="centered-box">
        <form ref={form} noValidate>
          <h2>Sign In</h2>
          <Field
            label="Username"
            id="username"
            name="username"
            // Support built-in validation
            required
            error={errors && errors.username}
          />
          <Field
            label="Password"
            id="password"
            name="password"
            type="password"
            required
            minLength={8}
            error={errors && errors.password}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Login;
