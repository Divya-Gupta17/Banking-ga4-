'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50">
            {/* Top Black Bar */}
            <div className="bg-black text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-8 text-xs">
                        <div className="flex items-center space-x-6">
                            <Link href="/personal" className="hover:text-gray-300 transition-colors">Personal</Link>
                            <Link href="/business" className="hover:text-gray-300 transition-colors">Business</Link>
                            <Link href="/asset-management" className="hover:text-gray-300 transition-colors">Asset Management</Link>
                            <Link href="/private-bank" className="hover:text-gray-300 transition-colors">Private Bank</Link>
                        </div>
                        <div className="hidden md:flex items-center space-x-4">
                            <button className="hover:text-gray-300 transition-colors">English</button>
                            <button className="hover:text-gray-300 transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                            <Link href="/register" className="hover:text-gray-300 transition-colors">Register</Link>
                            <button className="bg-[#DB0011] hover:bg-[#B00010] px-4 py-1 rounded transition-colors font-medium">
                                Log On
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main White Navigation */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-[#DB0011] rounded flex items-center justify-center">
                                <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
                                    <path d="M12 20L18 14L24 20L30 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 26L18 20L24 26L30 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-2xl font-bold text-gray-900">SecureBank</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-1">
                            <div className="group relative">
                                <button className="px-4 py-6 text-gray-900 hover:text-[#DB0011] transition-colors font-medium flex flex-col items-center">
                                    <span>Banking</span>
                                    <span className="text-xs text-gray-500 font-normal">Accounts & services</span>
                                </button>
                            </div>
                            <div className="group relative">
                                <button className="px-4 py-6 text-gray-900 hover:text-[#DB0011] transition-colors font-medium flex flex-col items-center">
                                    <span>Borrowing</span>
                                    <span className="text-xs text-gray-500 font-normal">Cards & loans</span>
                                </button>
                            </div>
                            <div className="group relative">
                                <button className="px-4 py-6 text-gray-900 hover:text-[#DB0011] transition-colors font-medium flex flex-col items-center">
                                    <span>Investing</span>
                                    <span className="text-xs text-gray-500 font-normal">Wealth & Insurance</span>
                                </button>
                            </div>
                            <div className="group relative">
                                <button className="px-4 py-6 text-gray-900 hover:text-[#DB0011] transition-colors font-medium flex flex-col items-center">
                                    <span>NRI</span>
                                    <span className="text-xs text-gray-500 font-normal">NRI services & Transfers</span>
                                </button>
                            </div>
                            <div className="group relative">
                                <button className="px-4 py-6 text-gray-900 hover:text-[#DB0011] transition-colors font-medium flex flex-col items-center">
                                    <span>Offers</span>
                                    <span className="text-xs text-gray-500 font-normal">Offers & Rewards</span>
                                </button>
                            </div>
                            <div className="group relative">
                                <button className="px-4 py-6 text-gray-900 hover:text-[#DB0011] transition-colors font-medium flex flex-col items-center">
                                    <span>Online Banking</span>
                                    <span className="text-xs text-gray-500 font-normal">Banking made easy</span>
                                </button>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="lg:hidden border-t border-gray-200 bg-white">
                    <div className="px-4 py-4 space-y-3">
                        <Link href="/" className="block py-2 text-gray-900 font-medium">
                            Banking
                        </Link>
                        <Link href="/borrowing" className="block py-2 text-gray-600">
                            Borrowing
                        </Link>
                        <Link href="/investing" className="block py-2 text-gray-600">
                            Investing
                        </Link>
                        <Link href="/nri" className="block py-2 text-gray-600">
                            NRI Services
                        </Link>
                        <Link href="/offers" className="block py-2 text-gray-600">
                            Offers
                        </Link>
                        <button className="w-full px-6 py-2 bg-[#DB0011] text-white rounded font-medium">
                            Log On
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
