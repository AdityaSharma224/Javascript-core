import React, { useState } from "react";

const Pagination = () => {
  const mockData = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(mockData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPageData = mockData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <ul>
        {currentPageData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            style={{ fontWeight: currentPage === i + 1 ? "bold" : "normal" }}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;

// pagination using offset is commonly implemented when fetching data from an API or filtering a dataset.

// async function fetchUsers(offset, limit) {
//   const response = await fetch(`https://api.example.com/users?offset=${offset}&limit=${limit}`);
//   const data = await response.json();
//   return data;
// }

// // Fetch users from offset 20, with a limit of 10
// fetchUsers(20, 10).then(console.log);