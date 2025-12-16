import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import React, { useState } from 'react';

import { FaUser, FaLock } from 'react-icons/fa';

const Tab1 = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Salva os dados no Local Storage
    localStorage.setItem('userName', name);
    localStorage.setItem('userPassword', password);
    alert('Dados salvos no Local Storage!');
  };

  return (
    <div className="container">
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>Acesse o sistema</h1>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FaUser className="icon" />
        <div>
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>
        <button onClick={handleLogin}>Entrar</button>
      </form>
    </div>
  );
};

export default Tab1;