
import { useState } from "react";

const Navbar = ({ setCategory }) => {
  const [activeCategory, setActiveCategory] = useState("");

  const categories = [
    "Technology",
    "Business",
    "Health",
    "Science",
    "Sports",
    "Entertainment",
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-lg">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold fs-4" href="#">
          <span className="badge bg-light text-dark px-3 py-2">NewsHub</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {categories.map((category) => (
              <li className="nav-item" key={category}>
                <div
                  className={`nav-link text-light px-3 mx-2 ${
                    activeCategory === category ? "bg-primary rounded" : ""
                  }`}
                  onClick={() => {
                    setCategory(category.toLowerCase());
                    setActiveCategory(category);
                  }}
                  style={{ cursor: "pointer", transition: "0.3s ease-in-out" }}
                  onMouseEnter={(e) => (e.target.style.color = "#FFD700")}
                  onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
                >
                  {category}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

