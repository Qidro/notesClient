import React, { useState } from "react";

const Сontacts = () => {

  return (
    <div className="grid grid-cols-7 gap-10">
      
      <h1 className="col-start-2 row-start-3 font-semibold text-4xl whitespace-nowrap">Контактная информация</h1>
      
      <div className="col-start-2 h-55 w-100 row-start-5 border border-gray-300 rounded-xl px-5 py-2 shadow-md bg-white">
        <div className="flex justify-start">
          <img src={'/feedback.png'} alt="logo" className="h-16" />
        </div>
        <h1 className="font-medium text-xl">Обратная связь</h1>
        <p className="mt-1">Задайте вопрос, направьте положение или оставьте отзыв о работе сайты.</p>
        <p>Почта: pavel.osincev04@mail.ru</p>
      </div>

      <div className="col-start-3 row-start-5 ml-40 h-55 w-100 border border-gray-300 rounded-xl px-5 py-2 shadow-md bg-white">
        <div className="flex justify-start">
          <img src={'/headphones.png'} alt="logo" className="h-16" />
        </div>
        <h1 className="font-medium text-xl">Клиентская поддержка</h1>
        <p className="mt-1">Мы принимаем звонки круглосуточно. Звонок по России бесплатный</p>
        <p>Номер телефона: +7-993-521-98-65</p>
      </div>

      <div className="col-start-5 row-start-5 ml-10 h-55 w-100 border border-gray-300 rounded-xl px-5 py-2 shadow-md bg-white">
        <div className="flex justify-start">
          <img src={'/community.png'} alt="logo" className="h-16" />
        </div>
        <h1 className="font-medium text-xl">Наши социальные сети</h1>
        <p className="mt-1">Telegram: <a href="https://web.telegram.org/" className="text-blue-500 underline">https://web.telegram.org/</a></p>
        
        <p className="mt-1">Vk: <a href="https://vk.com/id875448139" className="text-blue-500 underline">https://vk.com/id875448139</a></p>

        <p className="mt-1">MAX: <a href="https://max.ru/" className="text-blue-500 underline">https://max.ru/</a></p>
      </div>

      <div className="col-start-2 row-start-6 h-55 w-100 border border-gray-300 rounded-xl px-5 py-2 shadow-md bg-white">
        <div className="flex justify-start">
          <img src={'/programmer.png'} alt="logo" className="h-16" />
        </div>
        <h1 className="font-medium text-xl">Разрабочтик</h1>
        <p className="mt-1">Приложение разработал разработчик Осинцев П.А. не для коммерческого использования</p>
      </div>
    </div>
  );
};

export default Сontacts;