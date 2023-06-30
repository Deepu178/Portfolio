import React from 'react';
import Profiles from '../../assets/second.png';
import { Footer } from '../../components/index';
import { Navbar } from '../../components/index';

export const About = () => {
  return (
    <div>
      <Navbar />
      <section className="pt-10 bg-black overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Hey 👋, I am <br className="block sm:hidden" />
                Deependra
              </h2>
              <p className="max-w-lg mt-3 text-xl leading-relaxed text-white md:mt-8">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>

              <p className="mt-4 text-xl text-white md:mt-8">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                  <span className="relative"> Have a question? </span>
                </span>
                <br className="block sm:hidden" />
                Ask me on{" "}
                <a
                  href="https://twitter.com/deepureact"
                  title=""
                  className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
                >
                  Twitter
                </a>
              </p>
            </div>

            <div className="relative">
              <img
                className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                alt=""
              />

              <img
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 rounded-b-xl"
                src={Profiles}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
