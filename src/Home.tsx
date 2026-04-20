import React from 'react';
import logo from './logo.svg';
import Header from './Headers/Headers';
function App() {
  return (
     <Header
      logo="/logo.png"
      navData={[
        { label: "Главная", href: "/" },
        { label: "Группы", href: "/" },
        { label: "Создание заметки", href: "/about" },
        { label: "Контакты", href: "/contact" }
      ]}
    />
   
  );
}

export default App;
