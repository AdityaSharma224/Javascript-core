// Pagination is the technique that splits up large amounts of data into pages for easier display and navigation in a website or app

// question ? where will I get this data from is there any API or can I create some mock data quickly ?
// 2 ways to implement pagination
// 1. get all the data on frontend and then manage pages and data on UI side
// 2. backend does the calculations from frontend side we give the req like how many pages we need


import React, { useState, useEffect } from "react";

// const Pagination = () => {
//   const mockData = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
//   const itemsPerPage = 10;
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = Math.ceil(mockData.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const currentPageData = mockData.slice(startIndex, startIndex + itemsPerPage);

//   return (
//     <div>
//       <ul>
//         {currentPageData.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//       <div>
//         <button
//           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//           disabled={currentPage === 1}
//         >
//           Prev
//         </button>
//         {Array.from({ length: totalPages }, (_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrentPage(i + 1)}
//             style={{ fontWeight: currentPage === i + 1 ? "bold" : "normal" }}
//           >
//             {i + 1}
//           </button>
//         ))}
//         <button
//           onClick={() =>
//             setCurrentPage((prev) => Math.min(prev + 1, totalPages))
//           }
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Pagination;

//pagination using offset is commonly implemented when fetching data from an API or filtering a dataset.

// async function fetchUsers(offset, limit) {
//   const response = await fetch(`https://api.example.com/users?offset=${offset}&limit=${limit}`);
//   const data = await response.json();
//   return data;
// }

// // Fetch users from offset 20, with a limit of 10
// fetchUsers(20, 10).then(console.log);


const Product = ({ image, title }) => {
  return (
    <div style={{ display: 'flex', width: '210px', flexWrap: 'wrap', border: '1px solid #000', padding: '5px', margin: '5px' }}>
      <img src={image} alt={title} style={{ width: '200px', height: '200px' }} />
      <span>{title}</span>
    </div>
  )
}


const Pagination = () => {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    setData(json.products);
  }

  const totalProducts = data.length;
  const noOfPages = Math.ceil(totalProducts / 10);
  const start = currentPage * 10;
  const end = start + 10;

  const handlePageChange = (n) => {
    setCurrentPage(n);
  }


  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '10px' }}>
        <div
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', padding: '10px' }}
        >
          <button onClick={() => setCurrentPage((prev) => prev - 1)} disabled={currentPage === 0}>{' < '}</button>
          <div style={{ margin: '10px' }}>
            {[...Array(noOfPages).keys()].map(n => (
              <button style={{ padding: '5px', margin: '2px', backgroundColor: n === currentPage ? 'cyan' : '#D3D3D3', border: '1px solid #000', cursor: 'pointer' }} key={n} onClick={() => handlePageChange(n)}>
                {n}
              </button>
            ))}
          </div>
          <button onClick={() => setCurrentPage((prev) => prev + 1)} disabled={currentPage === noOfPages}>{' > '}</button>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {data.slice(start, end).map((item) => (
            <Product key={item.id} image={item.thumbnail} title={item.title} />
          ))
          }
        </div>
      </div>
    </>
  );
};

export default Pagination;