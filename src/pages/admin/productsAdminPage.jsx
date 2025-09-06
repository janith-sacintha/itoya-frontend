import { useState } from "react";

const sampleProducts = [
  {
    productId: "P001",
    name: "Hydrating Face Cream",
    altNames: ["Moisturizer", "Skin Cream"],
    labelledPrice: 25.00,
    price: 19.99,
    images: ["/images/products/face-cream-1.jpg", "/images/products/face-cream-2.jpg"],
    description: "A lightweight face cream that keeps your skin hydrated all day.",
    stock: 150,
    isAvailable: true,
    category: "cosmetics"
  },
  {
    productId: "P002",
    name: "Vitamin C Serum",
    altNames: ["Brightening Serum", "Face Serum"],
    labelledPrice: 30.00,
    price: 24.50,
    images: ["/images/products/vitamin-c-serum.jpg"],
    description: "A powerful antioxidant serum to brighten your skin and reduce dark spots.",
    stock: 80,
    isAvailable: true,
    category: "skincare"
  },
  {
    productId: "P003",
    name: "Matte Liquid Lipstick",
    altNames: ["Lip Color", "Longwear Lipstick"],
    labelledPrice: 15.00,
    price: 11.99,
    images: ["/images/products/liquid-lipstick-red.jpg"],
    description: "A bold matte liquid lipstick with all-day wear and no transfer.",
    stock: 200,
    isAvailable: true,
    category: "makeup"
  },
  {
    productId: "P004",
    name: "Aloe Vera Gel",
    altNames: ["Skin Gel", "After Sun Gel"],
    labelledPrice: 12.00,
    price: 8.99,
    images: [],
    description: "Soothing aloe vera gel to calm and hydrate irritated skin.",
    stock: 120,
    isAvailable: true,
    category: "skincare"
  },
  {
    productId: "P005",
    name: "Rose Fragrance Mist",
    altNames: ["Body Mist", "Floral Spray"],
    labelledPrice: 18.00,
    price: 14.75,
    images: ["/images/products/rose-mist.jpg"],
    description: "A fresh rose-scented body mist for daily wear.",
    stock: 95,
    isAvailable: true,
    category: "fragrance"
  }
];

export default function AdminProductsPage(){

    const [products, setProducts] = useState(sampleProducts)

    return(
        <div className="w-full h-full p-4 overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-200 shadow-sm">
            <thead className="bg-gray-100">
            <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Image</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Price</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Labelled Price</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Stock</th>
            </tr>
            </thead>
            <tbody>
            {products.map((product, index) => (
                <tr key={index} className="hover:bg-gray-50 border-t border-gray-200">
                <td className="px-4 py-3">
                    {/* Replace with actual image if available */}
                    <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center text-gray-400 text-sm">
                    Img
                    </div>
                </td>
                <td className="px-4 py-3 text-sm text-gray-800">{product.name}</td>
                <td className="px-4 py-3 text-sm text-gray-800">LKR{product.price}</td>
                <td className="px-4 py-3 text-sm text-gray-800">LKR{product.labelledPrice}</td>
                <td className="px-4 py-3 text-sm text-gray-800">{product.stock}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>

    )
}