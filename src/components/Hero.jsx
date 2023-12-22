import { Link } from "react-router-dom";

import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";

const carouselImages = [image1, image2, image3, image4]; 

const Hero = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-24 items-center">

        {/* INFO */}
        <div>
            <h1 className="max-w-7xl text-4xl font-bold tracking-tight sm:text-6xl">
                Changing the way people shop
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos suscipit eligendi esse fugiat temporibus quia, vel labore culpa qui iure.
            </p>
            <div className="mt-10">
                <Link to='/products' className="btn btn-success">
                    Our Products
                </Link>
            </div>
        </div>

        {/* Carousel */}
        <div className='hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box'>
            {carouselImages.map((image) => {
                return (
                    <div key={image} className="carousel-item">
                        <img src={image} className="rounded-box h-full w-80 object-cover" alt="" />
                    </div>
                )
            })}
        </div>
      </div>
    </>
  );
}

export default Hero
