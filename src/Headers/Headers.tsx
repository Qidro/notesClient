import React, { useState } from "react";
type NavData = {
  label: string;
  href: string;
};

type HeaderProps = {
  logo: string;
  navData: NavData[];
};

const Header: React.FC<HeaderProps> = ({ logo, navData }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Кнопка */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 bg-gray-800 text-white px-3 py-2 rounded-md"
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        className={`
          h-screen w-64 bg-gray-900 text-white flex flex-col p-4 fixed top-0 left-0
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-46"}
        `}
      >
        {/* Логотип */}
        <div className="mb-6 flex justify-center -mt-[12px]">
          <img src={logo} alt="logo" className="h-16" />
        </div>

        {/* Навигация */}
        <nav>
          <ul className="flex flex-col gap-2">
            {navData.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Header;