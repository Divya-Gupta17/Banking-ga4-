import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Logo & Description */}
                    <div className="md:col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-[#DB0011] rounded-lg flex items-center justify-center">
                                <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
                                    <path d="M12 20L18 14L24 20L30 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 26L18 20L24 26L30 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold">SecureBank</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Your trusted partner for all financial needs. Banking made simple, secure, and accessible.
                        </p>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Products</h4>
                        <ul className="space-y-2">
                            <li><Link href="/products/personal-loan" className="text-gray-400 hover:text-white transition-colors text-sm">Personal Loan</Link></li>
                            <li><Link href="/products/home-loan" className="text-gray-400 hover:text-white transition-colors text-sm">Home Loan</Link></li>
                            <li><Link href="/products/savings-account" className="text-gray-400 hover:text-white transition-colors text-sm">Savings Account</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
                            <li><Link href="/support" className="text-gray-400 hover:text-white transition-colors text-sm">Support</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</Link></li>
                            <li><Link href="/security" className="text-gray-400 hover:text-white transition-colors text-sm">Security</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8">
                    <p className="text-center text-gray-400 text-sm">
                        &copy; 2026 SecureBank. All rights reserved. | This is a simulation project for assessment purposes only.
                    </p>
                </div>
            </div>
        </footer>
    );
}
