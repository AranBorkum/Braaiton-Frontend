import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/404";
import Checkout from "./pages/Checkout";
import QRCode from "./pages/QR-Code";
import InventoryDetail from "./pages/Inventory/InventoryDetail";
import Inventory from "./pages/Inventory/Inventory";
import Booking from "./pages/Booking/Booking";
import BookingDetail from "./pages/Booking/BookingDetail";
import Payment from "./pages/Payment";
import { createContext, useState } from "react";

export const AuthContext = createContext();

function App() {
  const [auth, setAuth] = useState(true);
  const contextValues = {
    auth: [auth, setAuth],
  };
  return (
    <AuthContext.Provider value={contextValues}>
      <BrowserRouter>
        <Routes>
          {/* Generally reachable routes */}
          <Route path={"payment/:payment_id"} element={<Payment />} />

          {/* Routes protected by auth */}
          {auth && (
            <>
              <Route path={"/"} element={<Home />} />
              <Route path={"*"} element={<NotFound />} />
              <Route path={"checkout"} element={<Checkout />} />
              <Route path={"inventory"} exact element={<Inventory />} />
              <Route
                path={"inventory/:item_id"}
                element={<InventoryDetail />}
              />
              <Route path={":remote_reference/qr-code"} element={<QRCode />} />
              <Route path={"bookings"} element={<Booking />} />
              <Route
                path={"bookings/:booking_id"}
                element={<BookingDetail />}
              />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
