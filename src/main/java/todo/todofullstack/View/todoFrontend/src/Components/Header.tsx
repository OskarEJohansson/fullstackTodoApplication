const HeaderNav = () => {
  return (
    <nav className="header-app">
      <button>Home</button>
      <button>
        Enter User Name to see User specific Notes <input type="text" />{" "}
      </button>
    </nav>
  );
};

export default HeaderNav;
