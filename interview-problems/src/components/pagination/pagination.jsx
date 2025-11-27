// import { useState, useEffect, useCallback } from "react";

import { useEffect, useState } from "react";

// const Product = ({image,title})=>{
//     return (
//         <div style={{display:'flex',margin:'5px', width:'210px', height:'210px', padding:'10px', border:'1px solid #000',flexWrap:'wrap', }}>
//             <img src={image} alt={title} style={{width:'200px', height:'200px'}}/>
//             <span style={{fontSize:'12px'}}>{title}</span>
//         </div>
//     )
// }

// const Pagination =()=>{

//     const [data,setData] = useState([]);
//     const [currentPage, setCurrentPage] = useState(0);

//     const fetchData = async()=>{
//         const data = await fetch("https://dummyjson.com/products?limit=500");
//         const json = await data.json();
//         setData(json.products);
//     }

//     const totalProducts = data.length;
//     const noOfPages = Math.ceil(totalProducts/10);
//     const start = currentPage*10;
//     const end = start+10;

//     const handlePageChange = (n)=>{
//         setCurrentPage(n);
//     }

//     useEffect(()=>{
//         fetchData();
//     },[]);

//     return (
//         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '10px' }}>
//             <div style={{display:'flex',alignItems:'center', justifyContent:'center',flexDirection:'row',padding:'10px'}}>
//                 <button onClick={()=>setCurrentPage(prev=>prev-1)} disabled={currentPage === 0}>{'<'}</button>
//                 <div style={{margin:'10px'}}>
//                     {
//                         [...Array(noOfPages).keys()].map(n=>(
//                             <button style={{padding:'5px',margin:'2px', backgroundColor:n===currentPage?'cyan':'#D3D3D3', cursor:'pointer'}} key={n} onClick={()=>handlePageChange(n)}>
//                                 {n}
//                             </button>
//                         ))
//                     }
//                 </div>
//                 <button onClick={()=>setCurrentPage(prev=>prev+1)} disabled={currentPage === noOfPages}>{'>'}</button>
//             </div>
//             <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//                 {
//                     data.slice(start,end).map((item)=>(
//                         <Product key={item.id} image={item.thumbnail} title={item.title}/>
//                     ))
//                 }
//             </div>

//         </div>
//     )
// };

// export default Pagination;

const Pagination = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    setData(json.products);
  };

  const totalProducts = data.length;
  const noOfPages = Math.ceil(totalProducts / 10);
  const start = currentPage*10;
  const end = start+10;

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "10px",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <button onClick={() => setCurrentPage((prev) => prev - 1)}>
          {"<"}
        </button>
        <div>
          {[...Array(noOfPages).keys()].map((n) => (
            <button key={n} onClick={()=>setCurrentPage(n)}>{n}</button>
          ))}
        </div>
        <button onClick={() => setCurrentPage((prev) => prev + 1)}>
          {">"}
        </button>
      </div>
      <div>
        {data.slice(start,end).map((item) => (
          <div key={item.id}>
            <img
              src={item.thumbnail}
              alt={item.title}
              style={{ width: "200px", height: "200px" }}
            />
            <span style={{ fontSize: "12px" }}>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
