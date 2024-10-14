export const Footer = () => {
  return (
    <>
    <footer className="bg-white mb-2 pb-2 ">
      <div className="container mx-auto px-4">
        {/* Left Section */}
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="footer-left">
            <h1 className="text-[#1A702D] font-bold text-4xl cursor-pointer ">
              Shahil Store
            </h1>
            <h2 className="text-[#1A702D] font-bold text-4xl cursor-pointer mt-4 underline">
              Follow Us On:
            </h2>
         
            <div className="social-icons flex space-x-4 mt-2">
              <img src="https://cdn-icons-png.flaticon.com/256/15047/15047435.png" alt="Facebook" className="h-6 w-6" />
              <img src="https://cdn-icons-png.flaticon.com/256/5969/5969020.png" alt="X" className="h-6 w-6" />
              <img
                src="https://cdn-icons-png.flaticon.com/256/15707/15707749.png"
                alt="Instagram"
                className="h-6 w-6"
              />
             
              <img
                src="https://cdn-icons-png.flaticon.com/256/5968/5968771.png"
                alt="Messenger"
                className="h-6 w-6"
              />
              <img src="https://cdn-icons-png.flaticon.com/256/4423/4423697.png" alt="WhatsApp" className="h-6 w-6" />
            </div>
          </div>

          {/* Center Section */}
          <div className="footer-center flex space-x-10 mt-6 md:mt-0">
            <div className="footer-links">
              <h2 className="font-bold">Products</h2>
              <ul>
                <li>Bag</li>
                <li>Jeans</li>
                <li>Laptop</li>
                <li>Clothes</li>
              </ul>
            </div>
            <div className="footer-links">
              <h2 className="font-bold">Help</h2>
              <ul>
                <li>FAQ</li>
                <li>Shipping</li>
              </ul>
            </div>
            <div className="footer-links">
              <h2 className="font-bold">About</h2>
              <ul>
                <li>Contact us</li>
                <li>About us</li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="footer-right mt-6 md:mt-0">
            <h2 className="font-bold text-4xl">Payment Methods</h2>
            <div className="payment-icons flex space-x-4 mt-2">
              <img src="https://cdn-icons-png.flaticon.com/256/196/196578.png" alt="Visa" className="h-16 w-auto" />
              <img
                src="https://cdn-icons-png.flaticon.com/256/16174/16174534.png"
                alt="Mastercard"
                className="h-16 w-auto"
              />
              <img src="https://play-lh.googleusercontent.com/MRzMmiJAe0-xaEkDKB0MKwv1a3kjDieSfNuaIlRo750_EgqxjRFWKKF7xQyRSb4O95Y" alt="E-Sewa" className="h-16 w-auto" />
              <img src="https://play-lh.googleusercontent.com/Xh_OlrdkF1UnGCnMN__4z-yXffBAEl0eUDeVDPr4UthOERV4Fll9S-TozSfnlXDFzw" alt="Khalti" className="h-16 w-auto" />
            </div>
            <div className="app-download mt-4">
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="h-20 w-auto"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4TwB3TA6WmilvQ23u3OOH5MVmbm_eppBt1Q&s"
                alt="Download on the App Store"
                className="h-16 w-auto ml-3"
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
      </div>
    </footer>
            <div className="border-t mt-6 pt-4 text-center pb-2 p-2   text-white bg-green-600  ">
            &copy; Copyright 2024 Shahil Ahamad
            </div>
    </>
  );
};
