// import useDarkMode from "../useDarkmode";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Card from "../components/homepage/Card";
import Navbar from "../components/Navbar";
import SocialFollow from "../components/homepage/SocialFollow";
import Schedule from "../components/homepage/Schedule";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  // const [colorTheme, setTheme] = useDarkMode();
  // console.log(colorTheme);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    Aos.init({ duration: 2000 });
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <div>
      <Head>
        <title>
          GirlScipt Summer of Code 2022 | GirlScript Foundation India
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SocialFollow />
      <div className="container transition-colors mx-auto my-12 p-8 sm:px-10 md:px-12 lg:px-40 2xl:px-50 dark:bg-gray-700 dark:transition-colors">
        <div className="first-section mb-10 flex flex-col md:flex-row">
          <div className="basis-1/2">
            <p className="text-black dark:text-white font-bold text-4xl 2.25rem 3rem mb-10">
              <span className="text-primary_orange-0">GSSoC </span>
              2022
              <br />
              is here! &nbsp;
            </p>
            <p className="font-serif font-medium text-2xl 1.5rem 2rem text-gray-800 dark:text-white mb-24">
              GirlScript Summer of Code is a 3-month long
              <br />
              <span className="text-primary_orange-0">#OpenSource &nbsp;</span>
              program by GirlScript Foundation.
            </p>
            <div className="flex items-center mb-10 md:mb-52 lg:mb-56">
              <button
                data-aos="fade-down"
                className="bg-primary_orange-0 text-md text-white font-bold px-4 py-4 rounded md:text-2xl md:py-6"
              >
                Register Here
              </button>
              <a data-aos="fade-down" href="#Learn_more">
                <p className="font-serif font-medium text-md text-primary_orange-0 ml-9 md:text-2xl">
                  Learn More
                </p>
              </a>
            </div>
          </div>
          <div data-aos="fade-down" className="hero__image">
            <div className="img__container">
              <img
                src="https://user-images.githubusercontent.com/64256342/151706657-5f08df0e-9837-4319-a992-c536b745c642.svg"
                alt="hero-image"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center flex-wrap  mb-24">
          <img
            data-aos="fade-up"
            src="https://github.com/GSSoC-Web/gssoc-assets/blob/main/Logos/Rectangle.png?raw=true"
          />
          <div className="basis-full md:basis-6/12 md:order-last lg:basis-1/2 lg:order-last">
            {/* <img
              className=" mt-4 mb-8 md:mb-9 md:mt-0"
              src="https://github.com/GSSoC-Web/gssoc-assets/blob/main/Logos/GS_logo_Black.png?raw=true"
            /> */}
            {theme === "light" ? (
              <img
                className=" mt-4 mb-8 md:mb-9 md:mt-0"
                src="https://github.com/GSSoC-Web/gssoc-assets/blob/main/Logos/GS_logo_Black.png?raw=true"
                alt="logo"
              />
            ) : (
              <img
                className=" mt-4 mb-8 md:mb-9 md:mt-0"
                src="https://user-images.githubusercontent.com/64256342/151560603-90bbd36c-8b30-4013-9f40-3420d9fb6b5f.png"
                alt="logo"
              />
            )}
            <p className="text-black dark:text-white font-semibold text-4xl 2.25rem 3rem mb-5">
              About <span className="text-primary_orange-0">GirlScript </span>
              Foundation
            </p>
            <p className="dark:text-white font-serif text-1xl text-black-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
              pulvinar malesuada tortor orci nullam rhoncus et. Purus, massa
              orci aliquet neque. Nulla urna viverra tempus nullam commodo.
              Fringilla turpis sit laoreet pellentesque sit. Ultrices consequat
              tempor nisi, tincidunt tortor, elit pharetra, nulla. Enim a quam
              tortor, sodales. Vitae placerat egestas pellentesque senectus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio consectetur dolore possimus tempora, aperiam earum
              eligendi facilis. Itaque tenetur, nobis atque consequuntur nisi
              expedita iure praesentium dolore ad. Eos, labore!
            </p>
            <button className="bg-primary_orange-0 rounded-xl font-bold py-3 w-full text-white dark:text-gray-800 mt-5">
              Get to know more about GIRLSCRIPT!
            </button>
          </div>
        </div>

        <div className="flex justify-between flex-wrap mb-24">
          <div className="w-560px md:w-1/2 lg:my-4 lg:px-4 lg:w-2/5">
            {theme === "light" ? (
              <img
                id="Learn_more"
                className="mb-10"
                src="https://github.com/GSSoC-Web/gssoc-assets/blob/main/Logos/GSSoC_logo_Black.png?raw=true"
              />
            ) : (
              <img
                id="Learn_more"
                className="mb-10"
                src="https://github.com/GSSoC-Web/gssoc-assets/blob/main/Logos/logo.png?raw=true"
              />
            )}
            <p className="text-primary_orange-0 font-semibold text-4xl 2.25rem 3rem mb-10">
              <span className="dark:text-white text-black text-4xl 2.25rem 3rem">
                About
                <br />
                GirlScript{" "}
              </span>
              Summer of Code
            </p>
            <p className="dark:text-white font-serif text-xl 1.25rem 1.75rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque sit
              tortor aliquet mauris. Sodales odio vitae morbi nulla sit turpis
              sem at. Nibh in consectetur aliquam in ante pulvinar vehicula sed.
            </p>
          </div>
          <img
            data-aos="fade-up"
            className="mt-8 md:mt-4 lg:mt-0"
            src="https://github.com/GSSoC-Web/gssoc-assets/blob/main/Logos/Frame.png?raw=true"
          />
        </div>

        <div className="organisation mb-24">
          <p className="font-serif font-semibold dark:text-white text-gray-800 text-4xl 2.25rem 3rem mb-8">
            Some of the{" "}
            <span className="text-primary_orange-0 text-4xl 2.25rem 3rem">
              participating organisations!
            </span>
          </p>
          <div className="org__box flex flex-row items-center flex-wrap">
            <img
              data-aos="fade-right"
              className="w-20 h-auto mr-12 mb-10 md:mb-0"
              src="https://github.com/GSSoC-Web/gssoc-assets/blob/main/Participating_projects/logo1.png?raw=true"
              alt="logo"
            />
            <img
              data-aos="fade-right"
              className="w-20 h-auto mr-12 mb-10 md:mb-0"
              src="https://github.com/GSSoC-Web/gssoc-assets/blob/main/Participating_projects/logo2.png?raw=true"
              alt="logo"
            />
            <img
              data-aos="fade-right"
              className="w-20 h-auto mr-12"
              src="https://github.com/GSSoC-Web/gssoc-assets/blob/main/Participating_projects/logo3.png?raw=true"
              alt="logo"
            />
            <img
              data-aos="fade-right"
              className="w-20 h-auto mr-12"
              src="https://github.com/GSSoC-Web/gssoc-assets/blob/main/Participating_projects/logo4.png?raw=true"
              alt="logo"
            />
            <div>
              <p className="font-serif font-medium text-4xl dark:text-white text-gray-800">
                and more ...
              </p>
            </div>
          </div>
        </div>
        <div className="be-part-of">
          <p className="font-serif font-semibold text-justify dark:text-white text-gray-800 text-4xl 2.25rem 3rem ">
            <span className="text-primary_orange-0 text-4xl 2.25rem 3rem">
              Be a part of{" "}
            </span>
            GSSoC 2022!
          </p>
          <div data-aos="fade-left" className="container my-12 mx-auto">
            <div className="flex flex-wrap justify-between -mx-1 lg:-mx-4 md:justify-items-stretch">
              {/* Card-1 */}
              <Card
                title="Participate in GSSoC 2021"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed lectus non magna enim dignissim amet semper. Quisque nisl sed ipsum in id sit volutpat pulvinar. Tortor placerat tincidunt enim posuere hendrerit aliquet amet quis."
                btntext="Register"
              />
              {/* Card-2 */}
              <Card
                title="Be a Mentor"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed lectus non magna enim dignissim amet semper. Quisque nisl sed ipsum in id sit volutpat pulvinar. Tortor placerat tincidunt enim posuere hendrerit aliquet amet quis."
                btntext="Register"
              />
            </div>
          </div>
          <div data-aos="fade-right" className="container my-12 mx-auto ">
            <div className="flex flex-wrap justify-between -mx-1 lg:-mx-4">
              {/* Card-3 */}
              <Card
                title="Calling all NGOs"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed lectus non magna enim dignissim amet semper. Quisque nisl sed ipsum in id sit volutpat pulvinar. Tortor placerat tincidunt enim posuere hendrerit aliquet amet quis."
                btntext="Submit your project"
              />
              {/* Card-4 */}
              <Card
                title="Be a Sponsor"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed lectus non magna enim dignissim amet semper. Quisque nisl sed ipsum in id sit volutpat pulvinar. Tortor placerat tincidunt enim posuere hendrerit aliquet amet quis."
                btntext="Know More"
              />
            </div>
          </div>
        </div>
      </div>

      {/* sponsors */}
      <div className="sponsors__container flex flex-row justify-center">
        <div className="sponsors__wrapper flex flex-col w-[1136px] mt-[93px]">
          <div className="sponsors__header mb-9">
            <p className="font-serif font-semibold dark:text-white text-gray-800 text-4xl leading-10">
              Our Sponsors
            </p>
          </div>
          {/* sponsors card container */}
          <div className="sponsors__card__container flex flex-row justify-between">
            {/* card1 */}

            <div
              data-aos="up"
              className="dark:bg-white sponsor__card__wrapper w-[368px] h-[228px] px-9 py-9 shadow-xl rounded"
            >
              <p className="dark:text-gray-800 text-[#ff7a19] font-serif font-semibold text-3xl mb-9">
                Gold Sponsor
              </p>
              <img
                data-aos="up"
                src="https://gssoc.girlscript.tech/images/sponsor/2021/do_blue.svg"
                alt="logo"
              />
            </div>
            {/* card2 */}

            <div
              data-aos="up"
              className="dark:bg-white sponsor__card__wrapper w-[368px] h-[228px] px-9 py-9 shadow-xl rounded"
            >
              <p className="dark:text-gray-800 text-[#ff7a19] font-serif font-semibold text-3xl  mb-9">
                Silver Sponsor
              </p>
              <img
                src="https://gssoc.girlscript.tech/images/sponsor/2021/linode.svg"
                alt="logo"
              />
            </div>
            {/* card3 */}

            <div
              data-aos="up"
              className="dark:bg-white sponsor__card__wrapper w-[368px] h-[228px] px-9 py-9 shadow-xl rounded"
            >
              <p className="dark:text-gray-800 text-[#ff7a19] font-serif font-semibold text-3xl  mb-9">
                Bronze Sponsor
              </p>
              <img
                src="https://gssoc.girlscript.tech/images/sponsor/2021/honeybadger.svg"
                alt="logo"
              />
            </div>
          </div>

          
          <div
            data-aos="up"
            className="dark:bg-white other__sponsors px-9 py-9 shadow-xl rounded mt-9"
          >
            <div className="other__sponsors__title">
              <p className=" dark:text-gray-800 text-[#ff7a19] font-serif font-semibold text-3xl  mb-9">
                Other Sponsors
              </p>
            </div>
            {/* row 1 */}
            <div className="sponsors__row__one flex flex-row mb-9">
              <img
                data-aos="fade-up"
                className="h-12 mr-14"
                src="https://gssoc.girlscript.tech/images/sponsor/2021/taskade-logo.png"
                alt="logo"
              />
              <img
                data-aos="fade-up"
                className="h-12 mr-14"
                src="https://gssoc.girlscript.tech/images/sponsor/2021/sticker-mule.png"
                alt="logo"
              />
              <img
                data-aos="fade-up"
                className="h-12 mr-14"
                src="https://gssoc.girlscript.tech/images/sponsor/2021/xyz-logo-color.png"
                alt="logo"
              />
            </div>
            <div className="sponsors__row__two flex flex-row">
              <img
                data-aos="fade-up"
                className="h-12 mr-14"
                src="https://gssoc.girlscript.tech/images/sponsor/2021/sketch-logo-light.png"
                alt="logo"
              />
              <img
                data-aos="fade-up"
                className="h-12 mr-14"
                src="https://gssoc.girlscript.tech/images/sponsor/2021/egghead_logo.png"
                alt="logo"
              />
              <img
                data-aos="fade-up"
                className="h-12 mr-14"
                src="https://gssoc.girlscript.tech/images/sponsor/2021/ORM_logo_red_rgb.png"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Schedule */}
      {/* <Schedule /> */}
      <div className="schedule__container flex flex-col items-center mb-48">
        <div className="schedule__overview mt-24">
          <p className="font-serif font-semibold text-3xl ml-5 mb-4 dark:text-white">
            <span className="text-primary_orange-0">Schedule</span> of GSSoC
            2022!
          </p>
          <img
            src="https://github.com/GSSoC-Web/gssoc-assets/blob/main/Schedule/Schedule.png?raw=true"
            alt="schedule"
          />
        </div>
      </div>
    </div>
  );
}
