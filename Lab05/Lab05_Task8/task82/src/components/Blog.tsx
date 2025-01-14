import React from "react";
import { Link } from "react-router-dom";

const Blog: React.FC = () => {
  const articles = JSON.parse(localStorage.getItem("articles") || "[]");

  return (
    <div style={blogContainerStyle}>
      <h2 style={headingStyle}>Lista Artykułów</h2>
      {articles.length === 0 ? (
        <p style={emptyMessageStyle}>
          Brak artykułów.{" "}
          <Link to="/dodaj" style={linkStyle}>
            Dodaj pierwszy artykuł
          </Link>
        </p>
      ) : (
        <ul style={listStyle}>
          {articles.map((article: any) => (
            <li
              key={article.id}
              style={listItemStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#2c3e50")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              <Link to={`/article/${article.id}`} style={linkStyle}>
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const blogContainerStyle: React.CSSProperties = {
  padding: "80px 20px",
  textAlign: "left",
};

const headingStyle: React.CSSProperties = {
  fontSize: "28px",
  marginBottom: "20px",
  color: "#ffffff",
};

const emptyMessageStyle: React.CSSProperties = {
  fontSize: "16px",
  color: "#ffffff",
};

const listStyle: React.CSSProperties = {
  listStyleType: "none",
  padding: 0,
  margin: 0,
};

const listItemStyle: React.CSSProperties = {
  marginBottom: "15px",
  padding: "20px",
  backgroundColor: "#2c2c2c",
  borderRadius: "5px",
  transition: "background-color 0.3s ease",
  display: "flex",
  width: "100%",
};

const linkStyle: React.CSSProperties = {
  color: "#1e88e5",
  fontSize: "18px",
  textDecoration: "none",
  fontWeight: "bold",
  flex: 1,
};

export default Blog;
