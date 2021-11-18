// import css
import "../styles/header.css";

export default function Header() {
  return (
    <div className="header">
      <input
        type="text"
        className="header__input"
        placeholder="Rechercher un film"
        name="headerSearch"
      />

      <button for="headerSearch" className="header__btn">
        Rechercher
      </button>
    </div>
  );
}
