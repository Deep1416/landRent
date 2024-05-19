import React, { useState } from "react";
import { GoHeart } from "react-icons/go";
import { LuBedSingle } from "react-icons/lu";
import { TbBath } from "react-icons/tb";
import { TbDimensions } from "react-icons/tb";
import { GoHeartFill } from "react-icons/go";
const Card = ({ item }) => {
//   console.log(item);
  const {
    image,
    price,
    houseName,
    address,
    numberOfBaths,
    numberOfBeds,
    roomDimensions,
  } = item;
  const [like, setLike] = useState(true);
  return (
    <div className="w-[318px] h-[420px] ">
      <div className="border border-black rounded-t-lg rounded-b-lg w-full h-full">
        <div className="w-full h-56">
          <img src={image} className="rounded-t-lg w-full h-full" alt="" />
        </div>
        <div className="flex flex-col p-4 gap-2 w-full">
          <div className="flex justify-between items-center font-semibold">
            <div>{price}/Month</div>
            <div className="w-8 h-8 rounded-full border border-black relative text-[18px]">
              <div
                className="absolute top-[6px] right-[6px] cursor-pointer"
                onClick={() => setLike(!like)}
              >
                {like === true ? (
                  <GoHeart />
                ) : (
                    <GoHeartFill />
                )}
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-semibold">{houseName}</h1>
          <p className=" font-semibold">{address}</p>
          <hr />
          <div className="flex justify-evenly">
            <div className="flex gap-2 items-center">
              <LuBedSingle />
              <p>{numberOfBeds}</p>
            </div>
            <div className="flex gap-2 items-center">
              <TbBath />
              <p>{numberOfBaths}</p>
            </div>
            <div className="flex gap-2 items-center">
              <TbDimensions />
              <p>{roomDimensions.livingRoom}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
