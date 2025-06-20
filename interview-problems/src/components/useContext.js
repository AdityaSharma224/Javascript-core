import React, { useRef, useState, createContext,useContext } from "react";

const UserContext = createContext();

function UseContextComponent() {
    const [user, setUser] = useState("Jesse Hall");

    return (
        <UserContext.Provider value={user}>
            <div>
             <Component2/>
            </div>
        </UserContext.Provider>
    );
}

export default UseContextComponent;

// function Component2({ user }) {
//     return (
//       <>
//         <h1>Component 2</h1>
//         <Component3 user={user} />
//       </>
//     );
//   }
  
//   function Component3({ user }) {
//     return (
//       <>
//         <h1>Component 3</h1>
//         <Component4 user={user} />
//       </>
//     );
//   }
  
//   function Component4({ user }) {
//     return (
//       <>
//         <h1>Component 4</h1>
//         <Component5 user={user} />
//       </>
//     );
//   }
  
//   function Component5({ user }) {
//     return (
//       <>
//         <h1>Component 5</h1>
//         <h2>{`Hello ${user} again!`}</h2>
//       </>
//     );
//  }


function Component2() {
    return (
      <>
        <h1>Component 2</h1>
        <Component3 />
      </>
    );
  }
  
  function Component3() {
    return (
      <>
        <h1>Component 3</h1>
        <Component4 />
      </>
    );
  }
  
  function Component4() {
    return (
      <>
        <h1>Component 4</h1>
        <Component5 />
      </>
    );
  }
  
  function Component5() {
    const user = useContext(UserContext);
    return (
      <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
 }
