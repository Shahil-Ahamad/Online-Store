import { useState } from "react";
import AddProduct from "../Form/Addproduct";
import Signup from "../Form/signup";
import { useCart } from "../Context/CartContext";

export const Navbar = () => {
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const { cartCount } = useCart();

  const openAddProductModal = () => setIsAddProductModalOpen(true);
  const closeAddProductModal = () => setIsAddProductModalOpen(false);

  const openSignUpModal = () => setIsSignUpModalOpen(true);
  const closeSignUpModal = () => setIsSignUpModalOpen(false);

  return (
    <header className="sticky top-0 z-50">
      <nav className="flex justify-between items-center bg-white p-2 border-b border-green-900">
        <div className="flex items-center space-x-4 flex-grow">
          <h1 className="text-[#1A702D] font-bold text-4xl cursor-pointer">
            Shahil Store
          </h1>
          <label className="flex items-center bg-gray-100 rounded-full overflow-hidden flex-grow">
            <input
              type="text"
              placeholder="Search Product"
              className="rounded-l-full px-4 py-2 text-sm w-full"
            />
            <button className="bg-green-600 text-white px-6 py-2">
              Search
            </button>
          </label>
        </div>
        <div className="flex items-center space-x-6">
          <img src="support.png" alt="Support" className="w-10 h-10 ml-4" />
          <button
            className="flex items-center bg-green-600 text-white px-4 py-2 rounded-xl"
            onClick={openAddProductModal}
          >
            <img src="cart.png" alt="Add Product" className="w-6 h-6 mr-2" />
            Add Product
          </button>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded-xl"
            onClick={openSignUpModal}
          >
            Sign Up
          </button>
        </div>
      </nav>

      <nav className="bg-green-600 text-white">
        <div className="flex justify-between items-center px-4 py-2">
          <div className="flex space-x-6">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              Features
            </a>
            <a href="#" className="hover:underline">
              Collection
            </a>
            <a href="#" className="hover:underline">
              Shop
            </a>
            <a href="#" className="hover:underline">
              About us
            </a>
            <a href="#" className="hover:underline">
              Contact us
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <a href="#" className="display-flex inline-flex items-center">
              <img src="cart.png" alt="Cart" className="w-6 h-6 mr-2" />
              Your Cart ({cartCount})
            </a>
          </div>
        </div>
      </nav>

      {/* Modals */}
      {isAddProductModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md">
            <button
              onClick={closeAddProductModal}
              className="text-red-600 text-2xl float-right"
            >
              x
            </button>
            <AddProduct />
          </div>
        </div>
      )}

      {isSignUpModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md">
            <button
              onClick={closeSignUpModal}
              className="text-red-600 text-2xl float-right"
            >
              x
            </button>
            <Signup />
          </div>
        </div>
      )}
    </header>
  );
};
