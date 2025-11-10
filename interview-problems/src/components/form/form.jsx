import { useState, useEffect, useMemo, useCallback } from "react";

const Field = ({ label, name, type = "text", value, error, onChange }) => {
  const handleOnChange = (e) => {
    onChange(name, e.target.value);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>{label}</label>
      <input name={name} type={type} value={value} onChange={handleOnChange} />
      {error && <small style={{ color: "red" }}>{error}</small>}
    </div>
  );
};

const CustomForm = () => {
  const [values, setValues] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});

  const validate = useCallback((name, value) => {
    switch (name) {
      case "name":
        return value.trim() ? "" : "Name is required";
      case "email":
        return /\S+@\S+\.\S+/.test(value) ? "" : "Invalid email";
      case "password":
        return value.length >= 6
          ? ""
          : "Password must be at least 6 characters";
      default:
        return "";
    }
  }, []);

  const handleChange = useCallback(
    (name, value) => {
      setValues((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
    },
    [validate]
  );

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        width: "300px",
        margin: "20px auto",
      }}
    >
      <Field
        label={"Name"}
        name="name"
        value={values.name}
        error={errors.name}
        onChange={handleChange}
      />
      <Field
        label="Email"
        name="email"
        value={values.email}
        error={errors.email}
        onChange={handleChange}
      />
      <Field
        label="Password"
        name="password"
        type="password"
        value={values.password}
        error={errors.password}
        onChange={handleChange}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default CustomForm;
