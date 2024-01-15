import HeaderCss from "./header.module.css"

const Header = () => {
  return (
    <div>
      <header className={HeaderCss.header}>
        <h1 className="heading">
          MY BLOG
        </h1>
        <p>
          Welcome to the blog of <span>unknown</span>
        </p>
      </header>
    </div>
  );
};

export default Header;
