import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../data/productsSlice';

const TopProduct = () => {
    const dispatch = useDispatch();
    const { items, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (error) return <p>Error: {error}</p>;

    return (
        <div className="w-4/6 mx-auto mt-8 bg-white p-6 border border-gray-200">
            <h2 className="text-lg text-red-700">TOP PRODUCT</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
                {items.slice(0, 5).map((product) => (
                    <Link
                        to={`/product/${product.id}`}
                        key={product.id}
                        className="bg-white shadow-sm border border-gray-100 hover:scale-105 transition-transform duration-200 p-4 flex flex-col"
                    >
                        <img
                            className="m-auto rounded-lg h-32 w-28 p-2 mt-4 text-sm hover:scale-110 transition-transform duration-200"
                            src={product.image}
                            alt={product.title}
                        />
                        <div className="mt-4 flex-grow">
                            <h3 className="truncate text-lg font-semibold text-gray-900">
                                {product.title}
                            </h3>
                            <div className="flex items-center mt-2">
                                {/* Rating */}
                                <div className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className={`w-4 h-4 ${i < Math.round(product.rating.rate) ? "text-yellow-300" : "text-gray-200"}`}
                                            fill="currentColor"
                                            viewBox="0 0 22 20"
                                        >
                                            <path d="M11 0L13.09 7.36H21L14.47 11.74L16.55 19.1L11 14.73L5.45 19.1L7.53 11.74L1 7.36H8.91L11 0Z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
                                    {product.rating.rate.toFixed(1)}
                                </span>
                            </div>
                            <div className="mt-3">
                                <h5 className="text-lg font-semibold tracking-tight text-red-700">
                                    ${product.price.toFixed(2)}
                                </h5>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default TopProduct