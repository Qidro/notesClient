import React, { useState } from 'react';

function Authorization() {
    const [, setIsOpen] = useState(false);
    return (
        <div className="h-screen flex items-center justify-center bg-gray-300">
  <div className="w-100 h-100 bg-white rounded-lg p-6 shadow-md">

    <h1 className="text-center mb-4 font-semibold text-lg">
      Авторизация
    </h1>

    <div className="w-full flex flex-col gap-4">
      
      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
        placeholder="Логин"
      />

      <input
        type="password"
        placeholder="Пароль"
        className="w-full px-3 py-2 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
      />

    </div>

  </div>
</div>
    );

}

export default Authorization;