import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './DemoCarousel.css'; // ← Import the custom CSS

const DemoCarousel = () => {
    return (
        <div className="carousel-container">
            <Carousel
                autoPlay
                infiniteLoop
                emulateTouch
                showThumbs={false}
                showStatus={false}
                showArrows={true}
                interval={3000}
                stopOnHover={false}
                swipeable
            >
                <div>
                    <img src="images/meeting.jpg" alt="Slide 1" className="carousel-image" />
                </div>
                <div>
                    <img src="images/meeting.jpg" alt="Slide 2" className="carousel-image" />
                </div>
                <div>
                    <img src="images/meeting.jpg" alt="Slide 3" className="carousel-image imghereis3" />
                </div>
            </Carousel>
        </div>
    );
};

export default DemoCarousel;
