import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();  // Initialize navigate
  const [userData, setUserData] = useState({
    name: "",
    number: "",
    email: "",
    gender: "",
    roles: ""
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5030/api/auth/register", userData);
      console.log("Inscription réussie :", response.data);
          // Navigate to profile page on success
          navigate('/');
            
          // Optionally reload the page
          
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nom :</label>
      <input type="text" name="name" value={userData.name} onChange={handleChange} required />

      <label>Numéro :</label>
      <input type="text" name="number" value={userData.number} onChange={handleChange} required />

      <label>Email :</label>
      <input type="email" name="email" value={userData.email} onChange={handleChange} required />

      <label>Genre :</label>
      <select name="gender" value={userData.gender} onChange={handleChange} required>
        <option value="">Sélectionner</option>
        <option value="male">Homme</option>
        <option value="female">Femme</option>
        <option value="other">Autre</option>
      </select>

      <label>Rôle :</label>
      <select name="roles" value={userData.roles} onChange={handleChange} required>
        <option value="">Sélectionner</option>
        <option value="user">Utilisateur</option>
        <option value="admin">Administrateur</option>
        <option value="moderator">Modérateur</option>
      </select>

      <button type="submit">S'inscrire</button>
    </form>
  );
};

export default Register;
