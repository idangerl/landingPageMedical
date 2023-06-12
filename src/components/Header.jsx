function Header() {
  return (
    <header className="bg-sky-400">
      <div className="px-10 py-4 flex justify-between items-center">
        <img src="logo.png" alt="logo" className="h-24" />
        <ul className="flex">
          <li className="ml-10 font-semibold text-lg hover:underline">
            <a href="#hero">Inicio</a>
          </li>
          <li className="ml-10 font-semibold text-lg hover:underline">
            <a href="#services">Servicios</a>
          </li>
          <li className="ml-10 font-semibold text-lg hover:underline">
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
