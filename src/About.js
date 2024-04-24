import Navbar from "./Navbar";
import WelcomeDialog from "./WelcomeDialog";
import { useForm } from "react-cool-form";
import { useNavigate } from "react-router-dom";
import InputColor from "react-input-color";
import "./About.css";
import React from "react";

function About() {
  const navigate = useNavigate();
  const { form, use, errors } = useForm({
    defaultValues: { colour: "", mood: "" }, // Set default values
    onSubmit: (values) => {
      console.log("Submitted values:", values);
      navigate("/outfit"); // Assuming About page is for confirmation
    },
  });
  const Select = ({ label, id, children, ...rest }) => (
    <div>
      <label htmlFor={id}>{label}</label>
      <select id={id} {...rest}>
        {children}
      </select>
    </div>
  );

  const Field = ({ label, id, error, ...rest }) => (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...rest} />
      {error && <p>{error}</p>}
    </div>
  );
  const [color, setColor] = React.useState({});
  const SurpriseButton = () => {
    const handleClick = () => {
      // Implement your surprise logic here (e.g., randomize color selection, mood, navigate to a surprise page)
      console.log("Surprise Me button clicked!");
      navigate("/outfit");
    };

    return (
      <button type="button" onClick={handleClick} className="surprise-button">
        Surprise Me!
      </button>
    );
  };

  return (
    <div className="App">
      <Navbar />
      <WelcomeDialog />
      <img
        src={require("./assets/welcome.png")}
        alt="Welcome image"
        className="left-bottom-image"
      />

      <div className="home-page">
        <br />
        <form ref={form} noValidate>
          <h2>Hi Sonika! Please set your preferences</h2>

          {/* Use ColorPickerField for color selection */}
          <label>Preferred Colours</label>
          <InputColor
            initialValue="#5e72e4"
            onChange={setColor}
            placement="right"
            className="input-color"
          />
          <InputColor
            initialValue="#5e72e4"
            onChange={setColor}
            placement="right"
            className="input-color"
          />
          <InputColor
            initialValue="#5e72e4"
            onChange={setColor}
            placement="right"
            className="input-color"
          />

          {/* Mood Select with clearer placeholder */}
          <Select label="What is the mood like?" id="mood" name="mood">
            <option value="">Choose your mood</option>
            <option value="Summer">Summer Outits</option>
            <option value="Fall">Fall outfits</option>
            <option value="Party">Party Outfits</option>
            <option value="Basic">Minimalistic</option>
          </Select>

          <Field
            label="What is the Ocassion?"
            id="ocassion"
            name="ocassion"
            // Support built-in validation

            error={errors && errors.username}
          />

          <input type="submit" value="Submit Your Preferences" />
          <SurpriseButton />
        </form>
      </div>
    </div>
  );
}

export default About;
