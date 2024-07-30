import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnonymousRoutes from "./routes/AnonymousRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import FoodServiceProviderRoutes from "./routes/FoodServiceProviderRoutes";
import CustomerRoutes from "./routes/CustomerRoutes";
import ScrollToTop from "./components/shared/ScrollToTop";
import OrderCartPage from "./pages/OrderCart/OrderCartPage";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ViewProfile from "./pages/Profile/ViewProfile";
import EditProfile from "./pages/Profile/EditProfile";
import AcceptedOrders from "./pages/Order/AcceptedOrders";
import { OrderTrackAppProvider } from "./context/OrderTrackContext/OrderTrackContext";
import TrackOrderStatus from "./pages/Order/TrackOrderStatus";
import { FoodProviderMealAppProvider } from "./context/FoodProviderMealContext/FoodProviderMealContext";
import MealMenuManagement from "./pages/FoodProvider/MealMenuManagement";
import AddAMeal from "./pages/FoodProvider/AddAMeal";
import MealPage from "./pages/FoodProvider/MealPage";
import UpdateAMeal from "./pages/FoodProvider/UpdateAMeal";
import { CustomerMealAppProvider } from "./context/CustomerMealContext/CustomerMealContext";
import CustomerHomePage from "./pages/Customer/CustomerHomePage";
import FoodProviderPage from "./pages/Customer/FoodProviderPage";
import MealPageCustomer from "./pages/Customer/MealPageCustomer";
import LoginPage from "./pages/Authentication/LoginPage";
import SellerRegisterPage from "./pages/Authentication/SellerRegisterPage";
import CustomerRegisterPage from "./pages/Authentication/CustomerRegisterPage";
import ForgotPasswordPage from "./pages/Authentication/ForgotPasswordPage";
import ViewReceivedOrdersPage from "./pages/Order/ViewReceivedOrdersPage";
import { OrderProvider } from "./context/OrderContext/OrderContext";
import ViewOrderDetailsPage from "./pages/Order/ViewOrderDetailsPage";
import React from "react";
import Sidebar from "./components/shared/Sidebar";
import { OrderCartProvider } from "./context/OrderCartContext/OrderCartContext";

const AnonymousRoutes = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/faqs" element={<FAQPage />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<AdminDashboard />} />
      <Route path="pending-request" element={<PendingRequests />} />
      <Route
        path="single-pending-request/:foodServiceProviderId"
        element={<SinglePendingRequest />}
      />
      <Route path="user-list" element={<UserList />} />
    </Routes>
  );
};

const OrderRoutesCustomer = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="order-history" element={<OrderHistoryPage />} />
        <Route path="order-details/:orderId" element={<OrderDetailsPage />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

const OrderRoutesFoodServiceProvider = () => {
  return (
    <React.Fragment>
      <Sidebar>
        <Routes>
          <Route path="received-orders" element={<ViewReceivedOrdersPage />} />
          <Route
            path="received-orders/:orderId"
            element={<ViewOrderDetailsPage />}
          />
        </Routes>
        <Footer />
      </Sidebar>
    </React.Fragment>
  );
};

function App() {
  return (
    <main data-theme="bumblebee">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/*" element={<AnonymousRoutes />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route
            path="/foodprovider/*"
            element={
              <FoodProviderMealAppProvider>
                <Routes>
                  <Route
                    path="mealmenumanagement"
                    element={<MealMenuManagement />}
                  />
                  <Route path="meal-page/:mealId" element={<MealPage />} />
                  <Route path="add-a-meal" element={<AddAMeal />} />
                  <Route
                    path="update-a-meal/:mealId"
                    element={<UpdateAMeal />}
                  />
                </Routes>
              </FoodProviderMealAppProvider>
            }
          />
          {/* Food Service Provider routes ends */}
          {/* Routes for the Authentication starts */}
        
            <Route path="/login" element={<LoginPage />} />
            <Route path="/customer-register" element={<CustomerRegisterPage />} />
            <Route path="/seller-register" element={<SellerRegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        
          {/* Routes for the Authentication ends */}

          {/* Routes for Customer */}
          <Route
            path="/customer/*"
            element={
              <CustomerMealAppProvider>
                <Routes>
                  <Route path="home-page" element={<CustomerHomePage />} />
                  <Route
                    path="food-provider-page/:foodProviderId"
                    element={<FoodProviderPage />}
                  />
                  <Route
                    path="meal-page/:mealId"
                    element={<MealPageCustomer />}
                  />
                </Routes>
              </CustomerMealAppProvider>
            }
          />
          <Route
            path="/orders/*"
            element={
              <OrderProvider>
                <OrderRoutesCustomer />
              </OrderProvider>
            }
          />
          <Route
            path="/orders/fsp/*"
            element={
              <OrderProvider>
                <OrderRoutesFoodServiceProvider />
              </OrderProvider>
            }
          />
          <Route
            path="/cart"
            element={
              <OrderCartProvider>
                <Navbar />
                <OrderCartPage />
                <Footer />
              </OrderCartProvider>
            }
          />
          <Route path="/customer/*" element={<CustomerRoutes />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
