import { Link, Route, Routes } from "react-router-dom";

export default function AdminPage(){
    return(
        <div className="w-full h-screen flex">
            <div className="w-[300px] h-full flex flex-col gap-[20px]">
                <Link to="/admin/products">products</Link>
                <Link to="/admin/users">users</Link>
                <Link to="/admin/orders">orders</Link>
                <Link to="/admin/reviews">reviews</Link>
                <Link to="/admin/settings">settings</Link>
            </div>
            <div className="w-[calc(100%-300px)] h-full bg-gray-400">
                <Routes path="/*">
                    <Route path="/" element={<h1>Dashboard</h1>}/>
                    <Route path="/products" element={<h1>Products</h1>}/>
                    <Route path="/users" element={<h1>Users</h1>}/>
                    <Route path="/orders" element={<h1>Orders</h1>}/>
                    <Route path="/reviews" element={<h1>Reviews</h1>}/>
                    <Route path="/settings" element={<h1>Setting</h1>}/>
                </Routes>
            </div>
        </div>
    )
}