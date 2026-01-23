'use client';

export default function Products() {
    const products = [
        {
            id: 'personal-loan',
            title: 'Personal Loan',
            description: 'Quick approval with minimal documentation. Get funds in 24 hours.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            features: [
                { label: 'Interest Rate', value: '10.5% p.a.' },
                { label: 'Loan Amount', value: 'Up to ₹25L' },
                { label: 'Tenure', value: '1-5 years' },
            ],
            color: 'from-red-500 to-pink-500',
            bgColor: 'bg-red-50',
            textColor: 'text-red-600',
        },
        {
            id: 'home-loan',
            title: 'Home Loan',
            description: 'Lowest interest rates for your dream home with flexible repayment.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            ),
            features: [
                { label: 'Interest Rate', value: '8.75% p.a.' },
                { label: 'Loan Amount', value: 'Up to ₹5Cr' },
                { label: 'Tenure', value: 'Up to 30 years' },
            ],
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'bg-blue-50',
            textColor: 'text-blue-600',
        },
        {
            id: 'savings-account',
            title: 'Savings Account',
            description: 'High-interest savings with zero balance requirements and free debit card.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
            ),
            features: [
                { label: 'Interest Rate', value: '4.5% p.a.' },
                { label: 'Min. Balance', value: '₹0' },
                { label: 'Free ATM', value: 'Unlimited' },
            ],
            color: 'from-green-500 to-emerald-500',
            bgColor: 'bg-green-50',
            textColor: 'text-green-600',
        },
    ];

    const handleProductClick = (productId: string, productTitle: string) => {
        if (typeof window !== 'undefined' && (window as any).dataLayer) {
            (window as any).dataLayer.push({
                event: 'select_product',
                product_id: productId,
                product_name: productTitle,
                page_section: 'products',
            });
        }
        window.location.href = `/products/${productId}`;
    };

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Explore Our Products
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Tailored financial solutions to help you achieve your goals
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Icon */}
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                                {product.icon}
                            </div>

                            {/* Title & Description */}
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                {product.title}
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {product.description}
                            </p>

                            {/* Features */}
                            <div className="space-y-3 mb-6">
                                {product.features.map((feature, idx) => (
                                    <div key={idx} className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">{feature.label}</span>
                                        <span className="text-sm font-semibold text-gray-900">{feature.value}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <button
                                onClick={() => handleProductClick(product.id, product.title)}
                                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${product.bgColor} ${product.textColor} hover:shadow-lg`}
                            >
                                <span>View Details</span>
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
