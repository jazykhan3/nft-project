//components/FAQ.js
"use client";
// Add this line to mark the component as a Client Component

import { useState } from 'react';


const FAQ = () => {
    const [expandedFaq, setExpandedFaq] = useState(null);

    const toggleFaq = (index) => {
        if (expandedFaq === index) {
            setExpandedFaq(null);
        } else {
            setExpandedFaq(index);
        }
    };
    const faqdata = [
        {
            question: "What is the minimum investment amount?",
            answer: "The minimum investment varies by fund, typically starting at $50,000 for our main funds. For certain specialty funds, minimum investments may start at $100,000."
        },
        {
            question: "How are returns generated?",
            answer: "Our funds generate returns through a combination of staking rewards, trading strategies, yield farming, and strategic investments in blockchain projects. We employ active management to optimize returns while managing risk."
        },
        {
            question: "How is risk managed?",
            answer: "We employ a multi-faceted risk management approach including diversification across assets, smart contract audits, position sizing limits, active monitoring, and regular stress testing of our portfolio against different market scenarios."
        },
        {
            question: "Are the funds regulated?",
            answer: "Our funds operate according to the applicable regulations in the jurisdictions where they're offered. Due to the innovative nature of DeFi, we work closely with legal advisors to ensure compliance with evolving regulatory frameworks."
        },
        {
            question: "How can I withdraw my investment?",
            answer: "Withdrawals follow the redemption schedule specified for each fund, typically quarterly. Requests must be submitted by the stated deadline for the next redemption window. Under certain circumstances, early redemptions may be possible subject to fees."
        }
    ]

    return (
        <section className="py-8 px-4">
            <div className=" mx-auto max-w-4xl">
                <div className="space-y-4">
                    {faqdata.map((faq, index) => (
                        <div key={index} className="border  border-#BBBFCA rounded-lg overflow-hidden">
                            <button
                                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                                onClick={() => toggleFaq(index)}
                            >
                                <span className="font-medium text-lg text-white">{faq.question}</span>
                                {expandedFaq === index ?
                                    <svg fill="#f4f4f2" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" /></svg>
                                    :

                                    <svg fill="#f4f4f2" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                                }
                            </button>
                            {expandedFaq === index && (
                                <div className="px-6 pb-6">
                                    <div className="border-t  border-#BBBFCA pt-4">
                                        <p className="text-#F4F4F2">{faq.answer}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;