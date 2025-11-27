import { useState, useCallback, useMemo, useEffect } from "react";

const jsonData = [
  {
    id: "1",
    name: "public",
    isFolder: true,
    children: [
      {
        id: "2",
        name: "index.html",
        isFolder: false,
      },
    ],
  },
  {
    id: "3",
    name: "src",
    isFolder: true,
    children: [
      {
        id: "4",
        name: "components",
        isFolder: true,
        children: [
          {
            id: "5",
            name: "test",
            isFolder: true,
            children: [
              {
                id: "6",
                name: "file.js",
                isFolder: false,
              },
            ],
          },
        ],
      },
      {
        id: "7",
        name: "App.js",
        isFolder: false,
      },
      {
        id: "8",
        name: "data.json",
        isFolder: false,
      },
      {
        id: "9",
        name: "index.js",
        isFolder: false,
      },
      {
        id: "10",
        name: "style.css",
        isFolder: false,
      },
    ],
  },
  {
    id: "11",
    name: "package.json",
    isFolder: false,
  },
];

// const List = ({ list, addNodeToList, deleteNodeFromList }) => {
//   const [IsExpanded, setIsExpanded] = useState({});

//   const handleExpand = (node) => {
//     setIsExpanded((prev)=>({
//         ...prev,
//         [node.name]: !prev[node.name],
//     }))
//   };
//   return (
//     <div style={{ textAlign: "left", paddingLeft: "20px" }}>
//       {list.map((node) => (
//         <div key={node.id}>
//           {node.isFolder && <span onClick={()=>handleExpand(node)}>{IsExpanded?.[node.name] ? "-" : '+'}</span>}
//           <span>{node.name}</span>
//           {node.isFolder && (
//  <img
//                             src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQGXG-uGHsqo2pWEinRQfwABLjqUnnn7eAw&s'}
//                             alt="add folder"
//                             style={{ marginLeft: '15px', height: '18px', width: '18px', cursor:'pointer' }}
//                             onClick={()=>addNodeToList(node.id)}
//                         />
//           )}
//           {
//             node.isFolder &&(
//               <img
//                             src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnsgpYoZ9xuGF10vaiPuOV17X9WHRhIkACFA&s'}
//                             alt="remove folder"
//                             style={{ marginLeft: '15px', height: '18px', width: '18px' }}
//                             onClick={() => deleteNodeFromList(node.id)}
//                         />
//             )
//           }
          
//           {IsExpanded?.[node.name] && node?.children && <List list={node.children} addNodeToList={addNodeToList} deleteNodeFromList={deleteNodeFromList}/>}
//         </div>
//       ))}
//     </div>
//   );
// };

// const FileExplorer = () => {
//   const [data, setData] = useState(jsonData);

//   const addNodeToList = (parentId)=>{
//     const name = prompt('enter folder name');

//     const updateTree = (list)=>{
//         return list.map((node)=>{
//             if(node.id === parentId){
//                 return{
//                     ...node,
//                     children: [...node.children, {id:"123",name:name,isFolder:true, children:[]}],
//                 }
//             };
//             if(node.children){
//                 return{
//                     ...node,
//                     children: updateTree(node.children),
//                 }
//             }
//             return node;
//         })
//     }
//     setData(prev=>updateTree(prev));
//   }

//   const deleteNodeFromList = (itemId)=>{
//     const updateTree =(list)=>{
//       return list
//       .filter((prev)=>prev.id !== itemId)
//       .map((node)=>{
//         if(node.children){
//           return{
//             ...node,
//             children: updateTree(node.children),
//           }
//         }
//         return node;
//       })
//     }
//     setData(prev=>updateTree(prev));
//   }

//   return (
//     <div>
//       <List list={data} addNodeToList={addNodeToList} deleteNodeFromList={deleteNodeFromList}/>
//     </div>
//   );
// };

// export default FileExplorer;


const List = ({list, addNodeToList, deleteFromList})=>{
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToogleExpand = (node)=>{
    setIsExpanded((prev)=>({
      ...prev,
      [node.id]: !prev[node.id],
  }));
  };
  return (
    <div style={{textAlign: 'left', paddingLeft:'20px'}}>
      {
        list.map((node)=>(
          <div key={node.id}>
            {node.isFolder && <span onClick={()=>handleToogleExpand(node)} style={{backgroundColor:'#E7E7E7', cursor:'pointer'}}>{isExpanded?.[node.id] ? '-' : '+'}</span>}
            <span>{node.name}</span>
            {
              node?.isFolder && (
                <div>
                  <img
                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQGXG-uGHsqo2pWEinRQfwABLjqUnnn7eAw&s'}
                          alt="add folder"
                           style={{ marginLeft: '15px', height: '18px', width: '18px', cursor:'pointer' }}
                            onClick={()=>addNodeToList(node.id)}
                  />
                </div>
              )
            }
            {
              node?.isFolder && (
                <div>
                  <img
                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQGXG-uGHsqo2pWEinRQfwABLjqUnnn7eAw&s'}
                          alt="add folder"
                           style={{ marginLeft: '15px', height: '18px', width: '18px', cursor:'pointer' }}
                            onClick={()=>deleteFromList(node.id)}
                  />
                </div>
              )
            }
            {
              node?.isFolder && (
                <div>
                  <img/>
                </div>
              )
            }
            {isExpanded?.[node.id] && node?.children && <List list={node.children} addNodeToList={addNodeToList} deleteFromList={deleteFromList}/>}
          </div>
        ))
      }
    </div>
  )
};

const FileExplorer = ()=>{
  const [data, setData] = useState(jsonData);

  const addNodeToList = (parentId)=>{

    const name = prompt('enter folder name');
    
    const updateTree = (list)=>{
      return list.map((node)=>{
        if(node.id === parentId){
          return{
            ...node,
            children: [...node.children, {id:Date.now().toString(), name:name,isFolder:true,children:[]}],
          }
        }
        if(node?.children){
          return {
            ...node,
            children: updateTree(node.children),
          }
        }
        return node;
      })
    }

    setData(prev=>updateTree(prev));
  };

  const deleteFromList = (itemId)=>{
    const updateTree = (list)=>{
      return list
      .filter((prev)=>prev.id !== itemId)
      .map((node)=>{
        if(node?.children){
          return {
            ...node,
            children: updateTree(node.children),
          }
        }
        return node;
      })
    }
    setData(prev=>updateTree(prev));
  };
  return (
    <div style={{padding:'30px'}}>
      <List list={data} addNodeToList={addNodeToList} deleteFromList={deleteFromList}/>
    </div>
  );
};

export default FileExplorer;