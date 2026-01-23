import Image from 'next/image';
import Link from 'next/link';

const cards = [
    {
        id: 1,
        title: "Sapphiro",
        tag: "Hot Selling",
        tagColor: "bg-[#FF5C00]", // Orange tag
        // Gradient for the card container
        bgGradient: "bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]",
        image: "/images/card-sapphire.png",
        bestFor: "Premium lifestyle offers",
        features: [
            "Lounge Access | Golf Rounds | BookMyShow",
            "Offer more"
        ],
        type: "sapphire"
    },
    {
        id: 2,
        title: "Rubyx",
        tag: "Exclusive",
        tagColor: "bg-[#FF5C00]",
        // Gradient for the card container
        bgGradient: "bg-gradient-to-br from-[#450a0a] via-[#7f1d1d] to-[#991b1b]",
        image: "/images/card-ruby.png",
        bestFor: "High-end lifestyle perks",
        features: [
            "Welcome Vouchers | Complimentary Golf",
            "Rounds | Lounge Access more"
        ],
        type: "ruby"
    },
    {
        id: 3,
        title: "Coral",
        tag: "Popular",
        tagColor: "bg-[#FF5C00]",
        // Gradient for the card container
        bgGradient: "bg-gradient-to-br from-[#7c2d12] via-[#ea580c] to-[#fb923c]", // Darker orange/rust to bright orange
        image: "/images/card-coral.png",
        bestFor: "Everyday or on-the-go",
        features: [
            "Lounge Access | BookMyShow Offers | INOX",
            "Offers more"
        ],
        type: "coral"
    }
];

export default function FeaturedCards() {
    return (
        <section className="py-16 relative z-20 -mt-24 overflow-hidden">
            {/* Background Layer with Smooth Transition */}
            <div className="absolute inset-0 z-0">
                {/* Skyline Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url(/images/skyline3.avif)',
                        filter: 'brightness(1.05) contrast(1.1)',
                    }}
                />

                {/* Smooth Gradient Transition from Hero (top) */}
                <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white/80" />

                {/* Bottom fade for seamless continuation */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <h2 className="text-3xl font-normal text-gray-700 mb-10">Choose Your Credit Card</h2>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((card) => (
                        <div key={card.id} className={`${card.bgGradient} rounded-2xl p-6 shadow-lg border border-transparent hover:shadow-2xl transition-all duration-300 relative overflow-hidden group h-[500px] flex flex-col`}>

                            {/* Card Tag */}
                            <div className="absolute top-6 left-0 z-20">
                                <span className={`${card.tagColor} text-white text-xs font-bold px-4 py-1.5 rounded-r-full uppercase tracking-wide shadow-md`}>
                                    {card.tag}
                                </span>
                            </div>

                            {/* Heart & Compare Icons */}
                            <div className="absolute top-6 right-6 z-20 flex space-x-3">
                                <button className="text-white/70 hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                                <button className="text-white/70 hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                    </svg>
                                </button>
                            </div>

                            {/* Card Image Container - Expanded & Luxurious */}
                            <div className="relative h-64 mt-8 mb-4 w-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 ease-out">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="space-y-4 mt-auto relative z-10">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-3xl font-light text-white flex items-center gap-2">
                                        {card.title}
                                        <svg className="w-5 h-5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </h3>
                                </div>

                                {/* Best For Tag */}
                                <div>
                                    <span className="inline-block bg-white/10 text-white backdrop-blur-sm text-xs font-bold px-2 py-1 rounded uppercase mb-2 border border-white/20">
                                        BEST FOR
                                    </span>
                                    <p className="text-lg text-white/90 font-light">
                                        {card.bestFor}
                                    </p>
                                </div>

                                {/* Features */}
                                <div className="text-sm text-white/70 space-y-1">
                                    {card.features.map((feature, index) => (
                                        <p key={index} className="line-clamp-2">
                                            {feature.split('|').map((part, i) => (
                                                <span key={i}>
                                                    {i > 0 && <span className="mx-1 text-white/30">|</span>}
                                                    {part.trim().replace('more', '')}
                                                    {part.includes('more') && <span className="text-white ml-1 cursor-pointer hover:underline font-medium">more</span>}
                                                </span>
                                            ))}
                                        </p>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="pt-4 flex items-center space-x-6 border-t border-white/10">
                                    <button className="text-white font-bold text-sm hover:text-gray-200 tracking-wide uppercase transition-colors">
                                        APPLY
                                    </button>
                                    <button className="text-white font-bold text-sm hover:text-gray-200 tracking-wide uppercase transition-colors">
                                        DETAILS
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
