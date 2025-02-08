import React from 'react';
import { styles } from '../styles';
import Slider from 'react-slick';
import { FeedbackCard } from '.';
import { feedback } from '../constants';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
    const sliderSettings  =  {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 2 cards at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2, // Show 2 cards on medium screens
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // Show 1 card on smaller screens
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative pt-20`}>
            <div className='w-full flex justify-between items-center  flex-col sm:mb-16 mb-6 relative z-[1]'>
                <h1 className="mb-5 text-2xl text-primary font-medium">Testimonials</h1>
                <p className={`${styles.paragraph} flex justify-center`}>
                    What Our Clients Say
                </p>
            </div>
            <Slider {...sliderSettings} className="w-full">
                {feedback.map((card) => (
                    <div key={card.id} className="px-2 flex justify-center">
                        <FeedbackCard {...card} />
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default Testimonials;
