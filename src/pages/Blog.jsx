import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Blog = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <div className="bg-gray-50 py-12 px-6">
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">
                        The Power of Digital Marketing & SEO in Today’s World
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        Digital marketing and search engine optimization (SEO) have become
                        cornerstones of modern business strategies. With the rise of
                        technology and online platforms, businesses are now leveraging these
                        tools to reach their target audience, drive traffic, and maximize
                        revenue. But what makes digital marketing and SEO so powerful?
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
                        What is Digital Marketing?
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        Digital marketing is the use of online channels, such as social
                        media, email, search engines, and websites, to promote a product or
                        service. It’s a data-driven approach that allows marketers to target
                        specific demographics with precision, ensuring the highest ROI for
                        their efforts.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mb-6">
                        <li>Social Media Marketing</li>
                        <li>Email Marketing</li>
                        <li>Content Marketing</li>
                        <li>Pay-Per-Click (PPC) Advertising</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
                        The Importance of SEO
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        Search Engine Optimization (SEO) ensures your website ranks higher on
                        search engine result pages (SERPs). With proper SEO, your business
                        can gain organic traffic, build credibility, and outperform
                        competitors.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mb-6">
                        <li>Keyword Research</li>
                        <li>On-Page SEO Optimization</li>
                        <li>Technical SEO</li>
                        <li>Backlink Building</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
                        How Digital Marketing & SEO Work Together
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        While digital marketing drives traffic through paid campaigns and
                        social media strategies, SEO focuses on organic growth. Together,
                        they create a powerful synergy that boosts your online visibility and
                        brings long-term benefits.
                    </p>

                    <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-blue-600 mb-4">
                            Key Takeaway
                        </h3>
                        <p className="text-gray-700">
                            In the competitive online marketplace, leveraging digital marketing
                            and SEO is no longer optional—it’s essential. Businesses that
                            master these tools will have a significant advantage over their
                            competitors.
                        </p>
                    </div>

                    
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;
