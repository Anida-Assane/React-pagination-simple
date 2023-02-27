import React from "react";
import "./Pagination.css";
export default function Pagination({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) {
  //trouver le nombre de pages
  const nombre = totalPosts / postsPerPage;
  let pages = [];
  for (let index = 1; index <= Math.ceil(nombre); index++) {
    pages.push(index);
  }

  return (
    <div className="pagination">
      {pages.map((page, index) => (
        <button
          key={index}
          style={{ color: "#fff" }}
          onClick={() => setCurrentPage(page)}
          className={currentPage === page ? "active" : ""}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
