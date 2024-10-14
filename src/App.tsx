import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import "./App.css";
import { Banner } from "./components/Banner";
import { Navbar } from "./components/Navbar";
import { Features } from "./components/Features";
import { Home } from "./Pages/Home";
import { Footer } from "./components/Footer";
import { CartProvider } from "./Context/CartContext";
import { LoadingProvider, useLoading } from "./Context/LoadingContext";
import LoadingScreen from "./components/LoadingScreen";

const queryClient = new QueryClient();

const AppContent: React.FC = () => {
  const { startLoading, stopLoading } = useLoading();
  const { isFetching } = useQuery({
    queryKey: ['example'],
    queryFn: async () => {
      startLoading();
      try {
        const response = await fetch('https://api.example.com/data');
        return response.json();
      } finally {
        stopLoading();
      }
    },
  });

  return (
    <>
      <Navbar />
      <Banner />
      <Features />
      <Home />
      <Footer />
    </>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadingProvider>
        <CartProvider>
          <AppContent />
          <LoadingScreen />
        </CartProvider>
      </LoadingProvider>
    </QueryClientProvider>
  );
}

export default App;
