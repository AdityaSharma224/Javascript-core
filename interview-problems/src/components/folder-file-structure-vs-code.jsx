import React, { useState, useEffect } from "react";

const jsonData = [
    {
        "id": "1",
        "name": "public",
        "isFolder": true,
        "children": [
            {
                "id": "2",
                "name": "index.html",
                "isFolder": false,
            }
        ]
    },
    {
        "id": "3",
        "name": "src",
        "isFolder": true,
        "children": [
            {
                "id": "4",
                "name": "components",
                "isFolder": true,
                "children": [
                    {
                        "id": "5",
                        "name": "test",
                        "isFolder": true,
                        "children": [
                            {
                                "id": "6",
                                "name": "file.js",
                                "isFolder": false,
                            }
                        ]
                    }
                ]
            },
            {
                "id": "7",
                "name": "App.js",
                "isFolder": false,
            },
            {
                "id": "8",
                "name": "data.json",
                "isFolder": false,
            },
            {
                "id": "9",
                "name": "index.js",
                "isFolder": false,
            },
            {
                "id": "10",
                "name": "style.css",
                "isFolder": false,
            }
        ]
    },
    {
        "id": "11",
        "name": "package.json",
        "isFolder": false,
    }
]

const List = ({ list, addNodeToList, deleteNodeFromList }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div style={{ textAlign: 'left', paddingLeft: '20px', margin: '10px' }}>
            {list.map(node => (
                <div key={node.id}>
                    {node.isFolder && (
                        <span onClick={() =>
                            setIsExpanded(prev => ({
                                ...prev,
                                [node.name]: !prev[node.name],
                            }))
                        }>
                            {
                                isExpanded?.[node.name] ? '-' : '+'
                            }
                        </span>)}
                    <span>{node.name}</span>
                    {node.isFolder && (
                        <img
                            src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQGXG-uGHsqo2pWEinRQfwABLjqUnnn7eAw&s'}
                            alt="add folder"
                            style={{ marginLeft: '15px', height: '18px', width: '18px' }}
                            onClick={() => addNodeToList(node.id)}
                        />
                    )}
                    {node.isFolder && (
                        <img
                            src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnsgpYoZ9xuGF10vaiPuOV17X9WHRhIkACFA&s'}
                            alt="remove folder"
                            style={{ marginLeft: '15px', height: '18px', width: '18px' }}
                            onClick={() => deleteNodeFromList(node.id)}
                        />
                    )}
                    {
                        (isExpanded?.[node.name] && node?.children) &&
                        <List list={node.children} addNodeToList={addNodeToList} deleteNodeFromList={deleteNodeFromList} />
                    }
                </div>
            ))}
        </div>
    );
}

const FileFolderStructure = () => {
    const [data, setData] = useState(jsonData); // chase data

    const addNodeToList = (parentId) => {
        const name = prompt("enter folder name");

        const updateTree = (list) => {// new tree with updated value
            return list.map(node => {
                if (node.id === parentId) {
                    return {
                        ...node,
                        children: [...node.children, { id: "123", name: name, isFolder: true, children: [] }]
                    }
                };
                if (node.children) { // recursion if children is present call same function once again
                    return { ...node, children: updateTree(node.children) };
                }
                return node;
            });
        };
        setData((prev) => updateTree(prev));// update tree with new data
    }

    const deleteNodeFromList = (itemId) => {

        const updateTree = (list) => {// new tree with updated value
            return list
                .filter((node) => node.id !== itemId)
                .map(node => {
                    if (node.children) { // recursion if children is present call same function once again
                        return { ...node, children: updateTree(node.children) };
                    };
                    return node;
                });
        };
        setData((prev) => updateTree(prev));// update tree with new data
    }

    return (
        <div style={{ padding: '10px' }}>
            <h1>File/Folder Explorer</h1>
            <List list={data} addNodeToList={addNodeToList} deleteNodeFromList={deleteNodeFromList} />
        </div>
    );
};

export default FileFolderStructure;