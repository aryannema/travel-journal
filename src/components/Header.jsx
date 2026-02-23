import reactImage from "../assets/images/globe.png";

function Header() {
  return (
    <header>
      <img src={reactImage} alt="A globe image" />
      <h1>my travel journal</h1>
    </header>
  );
}

export default Header;
