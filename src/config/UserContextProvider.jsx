import React, { useState } from "react";
import UserContext from "./UserContext";
const UserContextProvider = ({ children }) => {
  const [like, setLike] = useState([]);

  const handleLike =(item) =>{
    setLike((prev)=>{
        if(prev.some(e => e.id === item.id)){
            return prev.filter((e)=>e.id !== item.id)
        }else{
            return [...prev , item]
        }
    })
  }

  return <UserContext.Provider value={{like , handleLike}}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
