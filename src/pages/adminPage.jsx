import { Link, Route, Routes } from "react-router-dom";

import AdminProductsPage from "./admin/productsAdminPage";
import { FaBoxOpen, FaCog, FaShoppingCart, FaStar, FaUsers } from "react-icons/fa";

export default function AdminPage() {
    return (
        <div className="w-full h-screen flex">
            {/* Sidebar */}
            <div className="w-[300px] h-full flex flex-col gap-5 bg-white shadow-md p-6">
                <Link className="flex items-center gap-2 text-gray-700 hover:text-blue-600 hover:underline transition" to="/admin/products">
                    <FaBoxOpen /> Products
                </Link>
                <Link className="flex items-center gap-2 text-gray-700 hover:text-blue-600 hover:underline transition" to="/admin/users">
                    <FaUsers /> Users
                </Link>
                <Link className="flex items-center gap-2 text-gray-700 hover:text-blue-600 hover:underline transition" to="/admin/orders">
                    <FaShoppingCart /> Orders
                </Link>
                <Link className="flex items-center gap-2 text-gray-700 hover:text-blue-600 hover:underline transition" to="/admin/reviews">
                    <FaStar /> Reviews
                </Link>
                <Link className="flex items-center gap-2 text-gray-700 hover:text-blue-600 hover:underline transition" to="/admin/settings">
                    <FaCog /> Settings
                </Link>
            </div>

            {/* Main Content */}
            <div className="w-[calc(100%-300px)] h-full bg-gray-100 p-6 overflow-y-auto">
                <Routes path="/*">
                    <Route path="/" element={<h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>} />
                    <Route path="/products" element={<AdminProductsPage />} />
                    <Route path="/users" element={<h1 className="text-2xl font-semibold text-gray-800">Users</h1>} />
                    <Route path="/orders" element={<h1 className="text-2xl font-semibold text-gray-800">Orders</h1>} />
                    <Route path="/reviews" element={<h1 className="text-2xl font-semibold text-gray-800">Reviews</h1>} />
                    <Route path="/settings" element={<h1 className="text-2xl font-semibold text-gray-800">Setting</h1>} />
                </Routes>
            </div>
        </div>
    );
}
