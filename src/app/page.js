'use client'
import Image from 'next/image';
import { useState } from "react";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub
} from "react-icons/ai";
import me from '/Users/NadeemBuhdha/Documents/Repositories/PortfolioSite/portfolio/public/me.jpeg';
import pp1 from '/Users/NadeemBuhdha/Documents/Repositories/PortfolioSite/portfolio/public/ppone.png';
import pp2 from  '/Users/NadeemBuhdha/Documents/Repositories/PortfolioSite/portfolio/public/pptwo.png';
import pp4 from '/Users/NadeemBuhdha/Documents/Repositories/PortfolioSite/portfolio/public/ppfour.png';
import pp5 from '/Users/NadeemBuhdha/Documents/Repositories/PortfolioSite/portfolio/public/ppfive.png';
import lincoln from '/Users/NadeemBuhdha/Documents/Repositories/PortfolioSite/portfolio/public/lincoln.png'


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40" >
        <section className='min-h-screen'>
        <nav className="py-10 mb-12 flex justify-between text-gray-800 dark:text-white">
        <h1 className="font-burtons text-xl">&apos;developedbyNU&apos;</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              {/* <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li> */}
            </ul>
          </nav>

          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Nadeem Unwin
            </h2>
            <h3 className="text-2xl py-2 text-gray-800 dark:text-white md:text-3xl">
              Full Stack Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                Hi there! I&apos;m a Full Stack Developer with a passion for crafting seamless digital experiences from front-end design to back-end functionality. I thrive on turning ideas into code and solving problems to bring innovative web solutions to life.
              </p>

            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://www.linkedin.com/in/nadeem-unwin-3a1bb6219/" target="_blank"> <AiFillLinkedin /> </a>
              <a href="https://github.com/nadsbuhdha" target="_blank"><AiFillGithub /> </a>
              {/* <AiFillYoutube /> */}
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={me} layout="fill" objectFit="cover" alt="Nadeem Unwin" />
            </div>
          </div>
        </section>
        <section>
        <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a full stack developer, I have focused on building and developing my skills.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I am profecient with a variety of langauges and frameworks including : 
              <br></br>
              HTML, CSS, JavaScript, Python, PHP, MySQL, PostgreSQL, jQuery, React, Heroku, GitHub, Git, Flask, Django, Bootstrap, Code Igniter, Laravel 
              
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Here are some of my projects :              
            </p>

          </div>
          <div className="md:flex gap-8 ">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
            <Image className="rounded-md mx-auto" src={lincoln} width={500} height={100} alt="p1" />
            <a href="https://lincolnsu.com/elections23" target="_blank">
                <h3 className="text-lg font-medium pt-8 text-gray-800 pb-2">
                  Lincoln Students&apos; Union
                </h3>
              </a>

              <h4 className="py-4 text-teal-600">Design Tools I Used</h4>
              <p className="text-gray-800 py-1">HTML & CSS</p>
              <p className="text-gray-800 py-1">PHP</p>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">Tailwind</p>
              <p className="text-gray-800 py-1">MySQL</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1" alt="p2" >
              <Image className="rounded-md mx-auto" src={pp5} width={500} height={100} />
              <a href="https://tinyurl.com/mu8k6b4r" target="_blank"><h3 className="text-lg font-medium pt-8 text-gray-800 pb-2 ">
                Sole Society
              </h3> </a>
              <h4 className="py-4 text-teal-600">Tools I Used</h4>
              <p className="text-gray-800 py-1">Html & CSS</p>
              <p className="text-gray-800 py-1">Python / Django</p>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">Bootstrap</p>
              <p className="text-gray-800 py-1">PostgreSQL</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1" alt="p3" >
              <Image className="rounded-md" src={pp4} width={100} height={100} />
              <a href="https://tinyurl.com/2cuxwk53" target="_blank"><h3 className="text-lg font-medium pt-8 pb-2 text-gray-800 ">The Lost Tapes</h3></a>
              <h4 className="py-4 text-teal-600">Tools I Used</h4>
              <p className="text-gray-800 py-1">Html & CSS</p>
              <p className="text-gray-800 py-1">Python / Django</p>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">Bootstrap</p>
              <p className="text-gray-800 py-1">PostgreSQL</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1" alt="p5" >
              <Image className="rounded-md" src={pp2} width={100} height={100} />
              <a href="https://tinyurl.com/mt9jbe4a" target="_blank"><h3 className="text-lg font-medium pt-8 pb-2 text-gray-800 ">Back to School</h3></a>
              <h4 className="py-4 text-teal-600">Tools I Used</h4>
              <p className="text-gray-800 py-1">Html & CSS</p>
              <p className="text-gray-800 py-1">Javascript</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1" alt="p6" >
              <Image className='rounded-md' src={pp1} width={100} height={100} />
              <a href="https://tinyurl.com/mr2zv7nk" target="_blank"><h3 className="text-lg font-medium pt-8 pb-2 text-gray-800 ">CSWS Studios</h3></a>
              <h4 className="py-4 text-teal-600">Tools I Used</h4>
              <p className="text-gray-800 py-1">Html & CSS</p>
              <p className="text-gray-800 py-1">Javascript</p>
            </div>
          </div>
        </section>
        {/* <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg  object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={pp1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={pp1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={pp1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={pp1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                // src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                // src={web6}
              />
            </div>
          </div>
        </section> */}
      
      </main>
    </div>
  )
}
