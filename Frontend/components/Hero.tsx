'use client';

import { useEffect } from 'react';

export default function Hero() {
    useEffect(() => {
        // Push page_view event
        if (typeof window !== 'undefined' && (window as any).dataLayer) {
            (window as any).dataLayer.push({
                event: 'page_view',
                page_title: 'Home',
                page_location: window.location.href,
                page_path: '/',
            });
        }
    }, []);

    const handleApplyNow = () => {
        if (typeof window !== 'undefined' && (window as any).dataLayer) {
            (window as any).dataLayer.push({
                event: 'cta_click',
                cta_text: 'Apply Now',
                cta_location: 'hero',
                page_section: 'hero',
            });
        }
        // Navigate to products page
        window.location.href = '/products';
    };

    const handleCheckEligibility = () => {
        if (typeof window !== 'undefined' && (window as any).dataLayer) {
            (window as any).dataLayer.push({
                event: 'cta_click',
                cta_text: 'Check Eligibility',
                cta_location: 'hero',
                page_section: 'hero',
            });
        }
        window.location.href = '/eligibility';
    };

    return (
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
            {/* Multi-Layer Background with Parallax Effect */}
            <div className="absolute inset-0 z-0">
                {/* Layer 1: Sky Background (Fixed/Parallax) */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url(/images/skyline0.jpg)',
                        backgroundAttachment: 'fixed',
                        filter: 'brightness(1.1) contrast(1.15) saturate(1.3)',
                    }}
                />

                {/* Layer 2: City Skyline (Scrolling) - Positioned at bottom */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-[60%] bg-cover bg-bottom bg-no-repeat"
                    style={{
                        backgroundImage: 'url(/images/skyline.jpg)',
                        filter: 'brightness(1.1) contrast(1.15) saturate(1.3)',
                        maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 15%, rgba(0,0,0,1) 40%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 15%, rgba(0,0,0,1) 40%)',
                    }}
                />

                {/* Gradient overlays for visual enhancement */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-500/15 to-pink-500/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                Banking that puts{' '}
                                <span className="gradient-text">you first</span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                Experience seamless banking with competitive rates, instant approvals, and personalized financial solutions designed for your goals.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={handleApplyNow}
                                    className="group px-8 py-4 bg-[#DB0011] text-white rounded-lg font-semibold hover:bg-[#B00010] transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                                >
                                    <span>Apply Now</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>

                                <button
                                    onClick={handleCheckEligibility}
                                    className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-900 rounded-lg font-semibold hover:border-[#DB0011] hover:text-[#DB0011] transition-all duration-300"
                                >
                                    Check Eligibility
                                </button>
                            </div>
                        </div>

                        {/* Right Content - Empty for now as requested */}
                        <div></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
