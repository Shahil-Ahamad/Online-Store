import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaEdit, FaTrash } from "react-icons/fa";
import { useCart } from "../Context/CartContext";
import EditProductModal from "../Context/EditProductModal";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
}

export const Card: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [expandedDescriptions, setExpandedDescriptions] = useState<{
    [key: number]: boolean;
  }>({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    console.error("Error while fetching data:", error);
    return <div className="text-center mt-4">Error fetching data: {error}</div>;
  }

  if (!products || products.length === 0) {
    return <div className="text-center mt-4">No data available</div>;
  }

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${id}`,
          {
            method: "DELETE",
          }
        );
        if (!response.ok) {
          throw new Error("Failed to delete product");
        }
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== id)
        );
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
  };

  const handleSaveEdit = (editedProduct: Product) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === editedProduct.id ? editedProduct : product
      )
    );
    setEditingProduct(null);
  };

  const toggleDescription = (productId: number) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const truncateDescription = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + "...";
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-md p-4 border rounded-lg flex flex-col justify-between hover:shadow-lg relative group"
        >
          <div className="flex justify-center mb-4">
            <img
              src={item.image}
              alt={item.title}
              className="h-32 w-32 object-contain mb-4 border-2 rounded-md"
            />
          </div>
          <div className="text-left mb-4">
            <h1 className="font-bold text-lg mb-1">{item.title}</h1>
            <p className="text-sm text-gray-600 mb-2">
              {expandedDescriptions[item.id]
                ? item.description
                : truncateDescription(item.description, 100)}
              {item.description.length > 100 && (
                <button
                  onClick={() => toggleDescription(item.id)}
                  className="text-blue-500 hover:underline ml-1"
                >
                  {expandedDescriptions[item.id] ? "Less" : "...more"}
                </button>
              )}
            </p>
            <div className="flex items-center mb-1">
              <span className="text-yellow-500 text-sm">
                {"★".repeat(Math.round(item.rating.rate))}
                {"☆".repeat(5 - Math.round(item.rating.rate))}
              </span>
              <span className="ml-2 text-xs text-gray-600">
                {item.rating.rate}
              </span>
              <span className="ml-2 text-xs text-gray-600">
                ({item.rating.count})
              </span>
            </div>
            <div className="text-lg font-bold">${item.price.toFixed(2)}</div>
          </div>
          <div className="absolute bottom-4 right-4 flex flex-wrap space-x-2">
            <button
              className="bg-blue-500 text-white p-2 rounded-full text-xs"
              onClick={() => handleEdit(item)}
            >
              <FaEdit />
            </button>
            <button
              className="bg-green-500 text-white p-2 rounded-full text-xs"
              onClick={() => addToCart(item.id)}
            >
              <FaShoppingCart />
            </button>
            <button
              className="bg-red-600 text-white p-2 rounded-full text-xs"
              onClick={() => handleDelete(item.id)}
            >
              <FaTrash className="cursor-pointer" />
            </button>
          </div>
        </div>
      ))}
      {editingProduct && (
        <EditProductModal
          product={editingProduct}
          onSave={handleSaveEdit}
          onClose={() => setEditingProduct(null)}
        />
      )}
    </div>
  );
};

export default Card;
