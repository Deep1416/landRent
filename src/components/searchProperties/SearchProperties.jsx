import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

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
      filteredData = filteredData.filter((item) => item.date.includes(date));
    }

    if (priceRange) {
      const [minPrice, maxPrice] = priceRange.split("-").map(Number);
      filteredData = filteredData.filter((item) => {
        const price = typeof item.price === "string" ? Number(item.price.replace("Rs. ", "").replace(",", "")) : item.price;
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
      <div className="flex justify-between items-center my-10">
        <h1 className="text-3xl font-semibold">Search Properties For Rent</h1>
        <div>
          <input
            type="text"
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Search By Name..."
            className="py-1 px-4 border border-slate-500"
          />
        </div>
      </div>
      <div className="flex justify-evenly items-center">
        <div className="flex flex-col justify-center gap-2">
          <label htmlFor="byName">Location</label>
          <input
            type="text"
            onChange={(e) => setUserLocation(e.target.value)}
            id="byName"
            className="border px-2 py-1"
          />
        </div>
        <div className="flex flex-col justify-center gap-2">
          <label htmlFor="date">When</label>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            id="date"
            className="border px-4 py-1"
          />
        </div>
        <div className="flex flex-col justify-center gap-2">
          <label htmlFor="price">Price</label>
          <select
            onChange={(e) => setPriceRange(e.target.value)}
            className="border px-4 py-1"
          >
            <option value="">Select Range</option>
            <option value="0-500000">Rs. 0 - 500,000</option>
            <option value="500000-1000000">Rs. 500,000 - 1,000,000</option>
            <option value="1000000-2000000">Rs. 1,000,000 - 2,000,000</option>
            <option value="2000000-3000000">Rs. 2,000,000 - 3,000,000</option>
          </select>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <label htmlFor="propertyType">Property Type</label>
          <select
            onChange={(e) => setPropertyType(e.target.value)}
            id="propertyType"
            className="border px-4 py-1"
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
          className="py-1 px-4 bg-blue-600 text-white"
        >
          Search
        </button>
      </div>
    </>
  );
};

export default SearchProperties;
