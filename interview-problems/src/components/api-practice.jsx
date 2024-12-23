import React, { useState, useEffect, useCallback } from "react";
import axios from 'axios';
const ApiPractice = () => {
  const POST_URL = 'https://jsonplaceholder.typicode.com/posts';
  const [data, setData] = useState([]);

  // using fetch inside useEffect
  // useEffect(() => {
  //   fetch(POST_URL)
  //     .then((response) => response.json())
  //     .then((response) => setData(response));
  // }, []);

  // using async await
  // useEffect(()=>{
  //   async function fetchData(){
  //     const resp = await fetch(POST_URL);
  //     const data = await resp.json();
  //     setData(data);
  //   }
  //   fetchData();
  // },[]);

  // const fetchData = useCallback(async () => {
  //   const resp = await fetch(POST_URL);
  //   const data = await resp.json();
  //   setData(data);
  // }, [])
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const fetchData = useCallback(async () => {
    await axios.get(POST_URL).then(_ => setData(_.data));
  }, [])

  useEffect(() => {
    fetchData();
  });

  return (
    <div style={{ padding: '20px' }}>
      <h1>Posts</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #000', padding: '10px' }}>{'User ID'}</th>
            <th style={{ border: '1px solid #000', padding: '10px' }}>{'ID'}</th>
            <th style={{ border: '1px solid #000', padding: '10px' }}>{'Title'}</th>
            <th style={{ border: '1px solid #000', padding: '10px' }}>{'Body'}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((post) => (
            <tr key={post.id}>
              <td style={{ border: '1px solid #000', padding: '10px' }}>{post.userId}</td>
              <td style={{ border: '1px solid #000', padding: '10px' }}>{post.id}</td>
              <td style={{ border: '1px solid #000', padding: '10px' }}>{post.title}</td>
              <td style={{ border: '1px solid #000', padding: '10px' }}>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default ApiPractice;
