import React from "react";
const Pagination = (props) => {
  const { page, totalPages, nextPage, prevPage, setPage } = props;
  return (
    <div className="pagination">
      <p className="text">
        {page}/{totalPages}
      </p>
      <button onClick={prevPage} className="page">
        &larr;
      </button>
      {/* @ts-ignore */}
      {[...Array(totalPages).keys()].map((el) => (
        <button onClick={() => setPage(el + 1)} key={el} className={`page ${page === el + 1 ? "active" : ""}`}>
          {el + 1}
        </button>
      ))}
      <button onClick={nextPage} className="page">
        &rarr;
      </button>
    </div>
  );
};
export default Pagination;
