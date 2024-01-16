import HeaderCss from "./header.module.css"

const Header = (props) => {
  return (
    <div>
      <header className={HeaderCss.header}>
        <h1 className="heading">
        {props.name}
        </h1>
        <p>
          Welcome to the blog of <span>unknown</span>
        </p>
      </header>
    </div>
  );
};

export default Header;
