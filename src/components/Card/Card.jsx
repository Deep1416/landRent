import React, { useCallback, useContext, useState } from "react";
import { GoHeart } from "react-icons/go";
import { LuBedSingle } from "react-icons/lu";
import { TbBath } from "react-icons/tb";
import { TbDimensions } from "react-icons/tb";
import { GoHeartFill } from "react-icons/go";
import UserContext from "../../config/UserContext";
const Card = ({ item }) => {
  const { like, handleLike} = useContext(UserContext);

  const {
    image,
    price,
    houseName,
    address,
    numberOfBaths,
    numberOfBeds,
    roomDimensions,
    id
  } = item;

const isLiked = like.some((e)=>e.id === id);

  return (
    <div className="w-[318px] h-[400px] mt-8 md:mt-0 bg-white">
      <div className="border border-black rounded-t-lg rounded-b-lg w-full h-full">
        <div className="w-full h-56">
          <img src={image} className="rounded-t-lg w-full h-full" alt="" />
        </div>
        <div className="flex flex-col p-4 gap-2 w-full">
          <div className="flex justify-between items-center font-semibold">
            <div className="flex items-center"><span className="text-xl font-semibold text-[#7065f1]">{price}</span> <span className="text-[14px]">/months</span> </div>
            <div className="w-8 h-8 rounded-full border border-slate-400 relative text-[18px]">
              <div
                className="absolute top-[6px] right-[6px] cursor-pointer"
                onClick={() => handleLike(item)}
              >
                {isLiked !== true ? <GoHeart className="text-[#7065f1]" /> : <GoHeartFill className="text-[#7065f1]" />}
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-semibold">{houseName}</h1>
          <p className=" font-semibold text-slate-400">{address.slice(0 ,33)}</p>
          <hr />
          <div className="flex justify-evenly">
            <div className="flex gap-2 items-center">
              <LuBedSingle className="text-[#7065f1]" />
              <p>{numberOfBeds}</p>
            </div>
            <div className="flex gap-2 items-center">
              <TbBath className="text-[#7065f1]" />
              <p>{numberOfBaths}</p>
            </div>
            <div className="flex gap-2 items-center">
              <TbDimensions className="text-[#7065f1]" />
              <p>{roomDimensions.livingRoom}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
