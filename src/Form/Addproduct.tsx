import { Formik, Form, Field, FormikHelpers } from "formik";
import { object, string, number } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useMutation } from "@tanstack/react-query";
import clsx from "clsx";

// Define the schema using Zod
const addProductFormSchema = object({
  title: string().min(1, "*Please enter a title"),
  price: number().min(0.01, "*Price must be greater than 0"),
  description: string().min(1, "*Please enter a description"),
  image: string().min(1, "*Image is required"),
  category: string().min(3, "*Category must be at least 3 characters long"),
});

// Define the product type
interface Product {
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

// Function to add product
const addProduct = async (product: Product) => {
  const response = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

const AddProduct = () => {
  const mutation = useMutation({
    mutationFn: addProduct,
    onSuccess: (data) => {
      console.log("Product added successfully:", data);
      alert("Product added successfully");
    },
    onError: (error) => {
      console.error("Error adding product:", error);
      alert("Failed to add product");
    },
  });

  return (
    <Formik
      initialValues={{
        title: "",
        price: 0.00,
        description: "",
        image: "",
        category: "",
      }}
      onSubmit={async (
        values: Product,
        { resetForm }: FormikHelpers<Product>
      ) => {
        await mutation.mutateAsync(values);
        resetForm();
      }}
      validationSchema={toFormikValidationSchema(addProductFormSchema)}
    >
      {({ errors }) => (
        <Form>
          <div className="p-4">
            <div>
              <label className="text-md font-semibold text-black">Title</label>
              <Field
                type="text"
                name="title"
                placeholder="Enter title"
                className="rounded-lg w-full border border-gray-300 p-2"
              />
              {!!errors.title && (
                <div className="text-red-500 pt-2">{errors.title}</div>
              )}
            </div>

            <div className="mt-4">
              <label className="text-md font-semibold text-black">Price</label>
              <Field
                type="number"
                name="price"
                placeholder="Enter price"
                className="rounded-lg w-full border border-gray-300 p-2"
              />
              {!!errors.price && (
                <div className="text-red-500 pt-2">{errors.price}</div>
              )}
            </div>

            <div className="mt-4">
              <label className="text-md font-semibold text-black">
                Description
              </label>
              <Field
                type="text"
                name="description"
                placeholder="Enter description"
                className="rounded-lg w-full border border-gray-300 p-2"
              />
              {!!errors.description && (
                <div className="text-red-500 pt-2">{errors.description}</div>
              )}
            </div>

            <div className="mt-4">
              <label className="text-md font-semibold text-black">Image</label>
              <Field
                type="text"
                name="image"
                placeholder="Enter image"
                className="rounded-lg w-full border border-gray-300 p-2"
              />
              {!!errors.image && (
                <div className="text-red-500 pt-2">{errors.image}</div>
              )}
            </div>

            <div className="mt-4">
              <label className="text-md font-semibold text-black">
                Category
              </label>
              <Field
                type="text"
                name="category"
                placeholder="Enter category"
                className="rounded-lg w-full border border-gray-300 p-2"
              />
              {!!errors.category && (
                <div className="text-red-500 pt-2">{errors.category}</div>
              )}
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className={clsx(
                  "bg-red-500 px-4 py-2 rounded-md text-white",
                  mutation.isPending ? "opacity-50" : null
                )}
                disabled={mutation.isPending}
              >
                {mutation.isPending ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddProduct;
