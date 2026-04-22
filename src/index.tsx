import React from 'react';
import ReactDOM from 'react-dom/client';
import './output.css';
import App from './Home';
import Authorization from './authorization';
import Header from './Headers/Headers';
import Registration from './registration';
import Home from './Home';
import Сontacts from './contacts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Header
        logo="/logo.png"
        navData={[
          { label: "Главная", href: "/" },
          { label: "Группы", href: "/" },
          { label: "Создание заметки", href: "/about" },
          { label: "Контакты", href: "/contact" }
        ]}
      /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Authorization />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/contact" element={<Сontacts />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

