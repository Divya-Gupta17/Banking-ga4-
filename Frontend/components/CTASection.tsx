'use client';

export default function CTASection() {
    const handleApplyNow = () => {
        if (typeof window !== 'undefined' && (window as any).dataLayer) {
            (window as any).dataLayer.push({
                event: 'cta_click',
                cta_text: 'Apply Now',
                cta_location: 'bottom_cta',
                page_section: 'cta',
            });
        }
        window.location.href = '/products';
    };

    const handleContactUs = () => {
        if (typeof window !== 'undefined' && (window as any).dataLayer) {
            (window as any).dataLayer.push({
                event: 'cta_click',
                cta_text: 'Contact Us',
                cta_location: 'bottom_cta',
                page_section: 'cta',
            });
        }
        window.location.href = '/support';
    };

    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#DB0011] to-[#B00010] text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to get started?
                </h2>
                <p className="text-lg md:text-xl text-white/90 mb-8">
                    Join millions who trust SecureBank for their financial needs
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={handleApplyNow}
                        className="group px-8 py-4 bg-white text-[#DB0011] rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                    >
                        <span>Apply Now</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <button
                        onClick={handleContactUs}
                        className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#DB0011] transition-all duration-300"
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
}
