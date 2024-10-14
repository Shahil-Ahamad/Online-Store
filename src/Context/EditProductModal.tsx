import React, { useState } from 'react';

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

interface EditProductModalProps {
  product: Product;
  onSave: (editedProduct: Product) => void;
  onClose: () => void;
}

const EditProductModal: React.FC<EditProductModalProps> = ({ product, onSave, onClose }) => {
  const [editedProduct, setEditedProduct] = useState<Product>(product);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedProduct(prev => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(editedProduct);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-md font-semibold text-black">Title</label>
            <input
              type="text"
              name="title"
              value={editedProduct.title}
              onChange={handleChange}
              className="rounded-lg w-full border border-gray-300 p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-md font-semibold text-black">Description</label>
            <textarea
              name="description"
              value={editedProduct.description}
              onChange={handleChange}
              rows={3}
              className="rounded-lg w-full border border-gray-300 p-2"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="text-md font-semibold text-black">Price</label>
            <input
              type="number"
              name="price"
              value={editedProduct.price}
              onChange={handleChange}
              step="0.01"
              className="rounded-lg w-full border border-gray-300 p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-md font-semibold text-black">Image URL</label>
            <input
              type="url"
              name="image"
              value={editedProduct.image}
              onChange={handleChange}
              className="rounded-lg w-full border border-gray-300 p-2"
              required
            />
          </div>
          <div className="flex justify-end space-x-2 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded-md text-gray-800 hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-600"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;
