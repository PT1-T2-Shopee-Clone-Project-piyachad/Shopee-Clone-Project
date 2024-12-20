import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";

const Navbar = () => {
    const { scrollY } = useScroll();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollY.get() > lastScrollY) {
                // เลื่อนลง → ซ่อน Navbar
                setIsVisible(false);
            } else {
                // เลื่อนขึ้น → แสดง Navbar
                setIsVisible(true);
            }
            setLastScrollY(scrollY.get());
        };

        const unsubscribe = scrollY.on("change", handleScroll);
        return () => unsubscribe();
    }, [scrollY, lastScrollY]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "auto" });
    };

    return (
        <motion.nav
            className={`fixed top-0 left-0 w-full z-50 py-2 bg-red-700 border-gray-200 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-4">
                {/* Logo Section */}
                <Link to="/" className="flex items-center space-x-3" onClick={scrollToTop}>
                    <svg
                        className="h-8 w-8 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                        <line x1={12} y1="22.08" x2={12} y2={12} />
                    </svg>
                    <span className="self-center text-white text-2xl font-bold">SHOPPER</span>
                </Link>

                {/* Search Bar */}
                <form className="flex-1 py-0 mx-16">
                    <div className="relative">
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full ps-5 text-sm text-red-700 border border-red-700  focus:ring-red-500 focus:border-red-500 py-3"
                            placeholder="Search For Products"
                            required
                        />
                        <button
                            type="submit"
                            className="absolute right-2.5 top-1/2 transform -translate-y-1/2 bg-red-700 hover:bg-red-800 text-white text-sm px-5 py-1 mr-0"
                        >
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </form>

                {/* Navbar Menu */}
                <div className="flex items-center space-x-6">
                    {/* Cart Icon */}
                    <a href="#" role="button" className="relative flex items-center">
                        <svg
                            className="h-8 w-8 text-white"
                            fill="none"
                            viewBox="0 0 32 32"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                        <span className="absolute right-0 top-0 rounded-full bg-white w-4 h-4 p-0 m-0 text-red-500 font-mono text-sm leading-tight text-center">0</span>
                    </a>

                    {/* User Icon */}
                    <Link to="/login" className="text-white hover:text-red-500">
                        <svg
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 32 32"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
