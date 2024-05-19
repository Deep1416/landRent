import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SearchProperties = ({ setUserInput, setData, originalData }) => {
  const [userLocation, setUserLocation] = useState("");
  const [date, setDate] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const performSearch = () => {
    let filteredData = originalData;

    if (userLocation) {
      filteredData = filteredData.filter((item) =>
        item.city.trim().toLowerCase().includes(userLocation.trim().toLowerCase())
      );
    }

    if (date) {
      filteredData = filteredData.filter((item) => item.date === date);
    }

    if (priceRange) {
      const [minPrice, maxPrice] = priceRange.split("-").map(Number);
      filteredData = filteredData.filter((item) => {
        const price =
          typeof item.price === "string"
            ? Number(item.price.replace("Rs. ", "").replace(/,/g, ""))
            : item.price;
        return price >= minPrice && price <= maxPrice;
      });
    }

    if (propertyType) {
      filteredData = filteredData.filter((item) =>
        item.propertyType.trim().toLowerCase().includes(propertyType.trim().toLowerCase())
      );
    }

    setData(filteredData);
  };

  useEffect(() => {
    performSearch();
  }, [userLocation, date, priceRange, propertyType]);

  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center p-5 md:p-0 gap-5 md:gap-0">
        <h1 className="text-xl md:text-3xl font-semibold">
          Search Properties For Rent
        </h1>
        <div className="flex gap-5">
          <input
            type="text"
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Search By Name..."
            className="py-1 px-4 border rounded-lg"
          />
          <button className="px-4 py-2 rounded-lg text-lg font-medium text-white bg-[#7065f1]" onClick={performSearch()}>
            Search
          </button>
          <Link to="/like">
            <button className="py-2 px-6 rounded-lg text-lg text-white font-medium bg-[#7065f1]">
              Like
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap md:flex-nowrap flex-col md:flex-row bg-white mt-8 p-6 rounded-md">
        <div className="flex flex-col justify-center gap-2">
          <label htmlFor="byName">Location</label>
          <input
            type="text"
            onChange={(e) => setUserLocation(e.target.value)}
            id="byName"
            className="border px-2 py-1 font-semibold"
          />
        </div>
        <div className="flex flex-col justify-center gap-2">
          <label htmlFor="date">When</label>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            id="date"
            className="border px-4 py-1 font-semibold"
          />
        </div>
        <div className="flex flex-col justify-center gap-2">
          <label htmlFor="price">Price</label>
          <select
            onChange={(e) => setPriceRange(e.target.value)}
            className="border px-4 py-1 font-semibold"
          >
            <option value="">Select Range</option>
            <option value="0-500000">Rs. 0 - 500,000</option>
            <option value="500000-1000000">Rs. 500,000 - 1,000,000</option>
            <option value="1000000-1500000">Rs. 1,000,000 - 1,500,000</option>
            <option value="1500000-2000000">Rs. 1,500,000 - 2,000,000</option>
            <option value="2000000-2500000">Rs. 2,000,000 - 2,500,000</option>
            <option value="2500000-3000000">Rs. 2,500,000 - 3,000,000</option>
          </select>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <label htmlFor="propertyType">Property Type</label>
          <select
            onChange={(e) => setPropertyType(e.target.value)}
            id="propertyType"
            className="border px-4 py-1 font-semibold"
          >
            <option value="">Select By Property Type</option>
            <option value="detached">Detached</option>
            <option value="semi-detached">Semi-detached</option>
            <option value="apartment">Apartment</option>
            <option value="townhouse">Townhouse</option>
          </select>
        </div>
        <button
          onClick={performSearch}
          className="py-1 px-6 bg-[#7065f1] text-white font-semibold h-16"
        >
          Search
        </button>
      </div>
    </>
  );
};

export default SearchProperties;
