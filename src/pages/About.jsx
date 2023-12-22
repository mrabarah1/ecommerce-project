import aboutImg from "../assets/arinze.jpeg";
import Modal from "../components/Modal";
import { useState } from "react";


const About = () => {

  return (
    <>
      <section className="mx-auto max-w-7xl px-8 py-4 grid md:grid-cols-2 items-center gap-16">
        <div>
          <img src={aboutImg} alt="arinze" className="rounded" />
        </div>
        <div className="">
          <h1 className="text-2xl font-bold leading-none tracking-tight sm:text-5xl">
            We Are Your Number 1 Local Brand
          </h1>
          {/* <div className="stats bg-success shadow">
            <div className="stat">
              <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
                comfy
              </div>
            </div>
          </div> */}
          <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            perspiciatis veritatis obcaecati molestiae provident cumque nulla
            necessitatibus officia est, nostrum labore laboriosam quasi sint.
            Vel, commodi! Magni eius, iste nisi aliquam illum quia consectetur
            hic eos dolorem quasi earum? Quos.
          </p>
        </div>
      </section>
      
    </>
  );
}

export default About
