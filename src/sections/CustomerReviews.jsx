import {reviews} from "../constants/index.js";
import ReviewCard from "../Components/ReviewCard.jsx"

const CustomerReviews = () => {
    return (
        <section className="max-container">
            <h3 className="font-palanquin text-4xl text-center font-bold">
                What Our
                <span className="text-coral-red"> Customers </span>
                Say?
            </h3>
            <p className="mt-4 info-text text-center m-auto max-w-lg
            ">Hear genuine stories from our satisfied customers about their exceptional
                experiences with us
            </p>

            <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
                {reviews.map((review) => (
                    <ReviewCard
                        key={review.customerName} {...review}
                        imageURL={review.imgURL}
                        customerName={review.customerName}
                        rating={review.rating}
                        feedback={review.feedback}
                    />
                ))}
            </div>
        </section>
    )
}
export default CustomerReviews
