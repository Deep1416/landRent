import React, { useContext } from "react";
import UserContext from "../../config/UserContext";
import { Card } from "../../components";

const Like = () => {
  const { like } = useContext(UserContext);
  return (
    <div className="max-w-screen-lg m-auto">
      <div className="md:grid grid-cols-3 gap-8 mt-10  ">
        {like.length > 0 ? like.map((item) => {
          return <Card item={item} key={item.id} />;
        }) : <h2 className="text-center text-4xl ">Not Any Faviortie Added</h2>}
      </div>
    </div>
  );
};

export default Like;
