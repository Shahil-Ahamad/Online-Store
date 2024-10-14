import { Formik, Form, Field, FormikHelpers } from "formik";
import { z, object, string } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useMutation } from "@tanstack/react-query";
import clsx from "clsx";

// Define the schema using Zod
const Signupschema = object({
  username: string().min(1, "*Please enter a username"),
  password: z.string().min(3, "*Password must be at least 3 characters long"),
});

// Define the signup type
interface SignupValues {
  username: string;
  password: string;
}

// Function to sign up
const Sign = async (values: SignupValues) => {
  const response = await fetch("https://fakestoreapi.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

const Signup = () => {
  const mutation = useMutation({
    mutationFn: Sign,
    onSuccess: (data) => {
      console.log("Signup successful:", data);
      alert("Signup successful");
    },
    onError: (error) => {
      console.error("Error during signup:", error);
      alert("Failed to sign up");
    },
  });

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      onSubmit={async (
        values: SignupValues,
        { resetForm }: FormikHelpers<SignupValues>
      ) => {
        await mutation.mutateAsync(values);
        resetForm();
      }}
      validationSchema={toFormikValidationSchema(Signupschema)}
    >
      {({ errors }) => (
        <Form>
          <div className="p-4">
            <div>
              <label className="text-md font-semibold text-black">Username</label>
              <Field
                type="text"
                name="username"
                placeholder="Username"
                className="rounded-lg w-full border border-gray-300 p-2"
              />
              {!!errors.username && (
                <div className="text-red-500 pt-2">{errors.username}</div>
              )}
            </div>

            <div className="mt-4">
              <label className="text-md font-semibold text-black">Password</label>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="rounded-lg w-full border border-gray-300 p-2"
              />
              {!!errors.password && (
                <div className="text-red-500 pt-2">{errors.password}</div>
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
                {mutation.isPending ? "Signing..." : "Sign Up"}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Signup;
