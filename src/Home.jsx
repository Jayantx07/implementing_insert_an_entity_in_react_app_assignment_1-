import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import BookCard from "./components/BookCard"; // Corrected import path
import books from "./booksData"; // Corrected import path
import "./Home.css"; // Import the CSS for styling

const Home = () => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className="home-container">
      <h1>Book Library</h1>

      {/* Add Book Button */}
      <button className="add-book-btn" onClick={() => navigate("/add-book")}>
        Add Book
      </button>

      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
