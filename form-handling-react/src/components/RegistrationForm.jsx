import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setErrors("Email required");
      return;
    }

    if (!password) {
      setErrors("Password required");
      return;
    }

    setErrors("");
    console.log(username, email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      {errors && <p>{errors}</p>}

      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
