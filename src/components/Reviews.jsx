import React from 'react';
import people1 from "../assets/images/people1.jpg"
import people2 from "../assets/images/people2.jpg"
import people3 from "../assets/images/people3.jpg"


const Reviews = () => {
    const reviews = [
        {
            id: 1,
            name: "Emily Johnson",
            feedback: "The food was absolutely amazing! The flavors were perfectly balanced, and the service was excellent. Highly recommend!",
            rating: 5,
            avatar: people1,
        },
        {
            id: 2,
            name: "Michael Brown",
            feedback: "Great ambiance and delicious dishes. I had a wonderful dining experience and will definitely come back.",
            rating: 4,
            avatar: people2,
        },
        {
            id: 3,
            name: "Sophia Williams",
            feedback: "Everything was perfect, from the appetizers to the dessert. The staff was friendly and attentive.",
            rating: 5,
            avatar: people3,
        },
    ];

    return (
        <div className="bg-gray-100 py-12 px-4 lg:px-24">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">What Our Customers Say</h2>
                <p className="text-gray-600">Real stories from our happy customers.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((review) => (
                    <div key={review.id}
                         className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
                        <img src={review.avatar} alt={review.name} className="w-20 h-20 rounded-full mb-4"/>
                        <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
                        <p className="text-gray-600 mt-2">{review.feedback}</p>
                        <div className="flex items-center mt-4">
                            {Array.from({length: review.rating}).map((_, i) => (
                                <span key={i} className="text-yellow-400 text-xl">★</span>
                            ))}
                            {Array.from({length: 5 - review.rating}).map((_, i) => (
                                <span key={i} className="text-gray-300 text-xl">★</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
