import React, { useEffect, useState } from "react";
import { FaPaperPlane, FaFilter } from "react-icons/fa";
import Card from "../../components/Card";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItem, setFilteredItem] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all"); // initially sectected all category
  const [sortOption, setSortOption] = useState("default"); // initial default sorting
  const [currentPage, setCurrentPage] = useState(1); // pagination: page set to 1
  const [itemPerPage] = useState(8); // no. of item display per page

  // Fetch products list
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/menu.json");
        const data = await res.json();
        setMenu(data);
        setFilteredItem(data); // initially display all item
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  // Logic to filter products on the basis of category
  const handleFilterItems = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);
    setFilteredItem(filtered);
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // Show all products
  const handleShowAll = () => {
    setFilteredItem(menu);
    setSelectedCategory("all");
    setCurrentPage(1);
  };

  // Logic to sort products on the basis of A-Z, Z-A & High-to-low price, Low-to-high price
  const handleSorting = (option) => {
    setSortOption(option);

    const sortedItems = [...filteredItem];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredItem(sortedItems);
    setCurrentPage(1);
  };

  // Login of pagination
  const indexOfLastItem = currentPage * itemPerPage; // 1 * 8 = 8
  const indexOfFirstItem = indexOfLastItem - itemPerPage; // 8 - 8
  const currentItems = filteredItem.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* Menu Banner Section */}
      <section className="section-container bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
        <div className=" py-32 md:py-48 flex flex-col items-center justify-center">
          <div className="text-center space-y-7">
            <h2 className="text-4xl md:text-5xl font-bold">
              Best Food Which Makes Your <br />
              <span className="text-coral">Hungry</span>
            </h2>
            <p className="text-textSmooth text-xl md:w-3/4 mx-auto">
              Come with family & feel the joy of mouthwatering food such as
              Greek Salad, Lasagne, Butternut Pumpkin, Tokusen Wagyu, Olivas
              Rellenas and more for a moderate cost.
            </p>
            <button className="bg-coral font-semibold btn text-white px-8 py-3 rounded-full">
              Order Now <FaPaperPlane />
            </button>
          </div>
        </div>
      </section>

      {/* Menu Button Section */}
      <section className="section-container py-8">
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between space-y-3 mb-8">
          {/* Cateogry filter section */}
          <div className="flex flex-row justify-start md:items-center gap-4 md:gap-8 flex-wrap">
            <button
              onClick={handleShowAll}
              className={`${selectedCategory === "all" ? "active" : ""}`}
            >
              All
            </button>
            <button
              onClick={() => handleFilterItems("salad")}
              className={`${selectedCategory === "salad" ? "active" : ""}`}
            >
              Salad
            </button>
            <button
              onClick={() => handleFilterItems("pizza")}
              className={`${selectedCategory === "pizza" ? "active" : ""}`}
            >
              Pizza
            </button>
            <button
              onClick={() => handleFilterItems("soup")}
              className={`${selectedCategory === "soup" ? "active" : ""}`}
            >
              Soups
            </button>
            <button
              onClick={() => handleFilterItems("dessert")}
              className={`${selectedCategory === "dessert" ? "active" : ""}`}
            >
              Desserts
            </button>
            <button
              onClick={() => handleFilterItems("drinks")}
              className={`${selectedCategory === "drinks" ? "active" : ""}`}
            >
              Drinks
            </button>
          </div>
          {/* Sorting section */}
          <div className="flex justify-end rounded-sm">
            <div className="bg-black text-white p-2">
              <FaFilter size={15} />
            </div>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => handleSorting(e.target.value)}
              className="bg-black text-white px-2 py-1 rounded-sm"
            >
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>

        {/* Products section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {currentItems.map((item) => (
            <Card key={item._id} item={item} />
          ))}
        </div>
      </section>
      <div className="flex justify-center my-8">
        {Array.from({
          length: Math.ceil(filteredItem.length / itemPerPage),
        }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded-full ${
              currentPage === index + 1 ? "bg-coral text-white" : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
