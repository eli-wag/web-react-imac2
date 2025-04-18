import "../style/Header.css";

export default function Header({ onSearchChange }) {
    return (
        <div className="header">
            <div className="search">
                <input
                    type="text"
                    className="searchBar"
                    placeholder="Search.."
                    onChange={onSearchChange} // Appelée à chaque frappe dans la barre de recherche
                />
                <button type="submit" className="btnSearch">
                    <img className="searchGlass" src="..\..\img\glass.svg" alt="Glass for search" />
                </button>
            </div>
        </div>
    );
}