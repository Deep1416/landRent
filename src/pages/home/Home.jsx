import React, { useEffect, useState } from "react";
import { Card, SearchProperties } from "../../components";
import Data from "./../../assets/Data.json";
const Home = () => {
  const [data, setData] = useState(Data.Data);
  const [originalData] = useState(Data.Data);
  const [userInput, setUserInput] = useState("");
  

  const searchByName = () => {
    if (userInput) {
      const serach_Data = originalData.filter((item, idx) =>
        item.houseName.trim().toLowerCase().includes(userInput)
      );
      setData(serach_Data);
    } else {
      setData(originalData);
    }
  };

  useEffect(() => {
    searchByName();
  }, [userInput]);



  return (
    <div className="max-w-screen-lg m-auto">
      <SearchProperties setUserInput={setUserInput} data= {data} setData ={setData} originalData = {originalData} />
      <div className="grid grid-cols-3 gap-8 mt-10">
        {data.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
