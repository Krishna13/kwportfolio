import Head from 'next/head'
import { CheckCircleIcon, CodeIcon, UserCircleIcon, LocationMarkerIcon, PencilAltIcon, StatusOnlineIcon, DesktopComputerIcon, ClipboardCheckIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import Link from 'next/link'
export default function Home() {
  let reviews = 102;
  return (
    <div className="">
      <Head>
        <title>Kaustubh Wankhede | Python Developer | Instructor | Business Enthisiast | Kwinfosys</title>
        <meta name="description" content="Python developer, Data Scientist, Machine Learning Engineer, Python Programmer, Javascript Learner, Desktop Application Development, Desktop GUI Application Development, Website Development, Database Management, Android Development with Python, Web Application Developer" />
      </Head>
      <section id="home" className="text-gray-600 body-font">
        <div className="max-w-7xl mx-auto flex px-7 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="tracking-tight font-heading sm:text-6xl md:text-4xl lg:text-4xl xl:text-6xl text-3xl mb-4 font-bold text-gray-900">Python Developer <br />and an Instructor
              <br className="hidden lg:inline-block" />at <span className="text-kwone">Kw</span><span className="text-kwtwo">infosys</span>
            </h1>
            <p className="mb-8 leading-relaxed">A Python Developer by Profession and an Instructor by Passion at KW Infosys.
              Young Entrepreneur.
              Partnered at Soulverr.com.
              Business Enthusiast.
            </p>
            <div className="flex justify-center">
              <Link href="https://www.fiverr.com/kkwankhede/teach-you-python-from-beginners-to-advance"><a className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-500 hover:bg-red-600"
              >
                Get Started Right Now
              </a>
              </Link>
              <Link href="/about"><a className="ml-3 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-800 bg-gray-200 hover:bg-gray-100"
              >
                About Me
              </a>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="/Illustration1.png" />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="max-w-7xl px-5 py-5 mx-auto">

          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-gray-50">
                <CodeIcon className="w-12 h-12 text-red-500 mb-3 inline-block" />
                <h2 className="animate- title-font font-medium text-3xl text-gray-900">5+</h2>
                <p className="leading-relaxed">Languages</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-gray-50">
                <UserCircleIcon className="w-12 h-12 text-red-500 mb-3 inline-block" />
                <h2 className="title-font font-medium text-3xl text-gray-900">33</h2>
                <p className="leading-relaxed">Clients</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-gray-50">
                <LocationMarkerIcon className="w-12 h-12 inline-block mb-3 text-red-500" />
                <h2 className="title-font font-medium text-3xl text-gray-900">15+</h2>
                <p className="leading-relaxed">Countries</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-gray-50">
                <StarIcon className="w-12 h-12 inline-block mb-3 text-red-500" />
                <h2 className="title-font font-medium text-3xl text-gray-900">{reviews}</h2>
                <p className="leading-relaxed">Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex flex-col">
          <div className="lg:w-11/12 mx-auto">
            {/* <div className="rounded-lg h-64 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full" src="/Luu" />
      </div> */}
            <div className="flex flex-col items-center sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="sm:w-44 sm:h-44 w-60 h-60 lg:w-64 lg:h-64 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img className="object-cover object-center" src="/profile-pic.png" alt="profile" />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Kaustubh Wankhede</h2>
                  <div className="w-12 h-1 bg-red-500 rounded mt-2 mb-4"></div>
                  {/* <p className="text-base">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p> */}
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <div className="flex flex-wrap">
                  <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                      <CheckCircleIcon className="h-5 w-5 mr-1 text-red-500" />
                      <span className="title-font font-medium">Python Developer</span>
                    </div>
                  </div>
                  <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                      <CheckCircleIcon className="h-5 w-5 mr-1 text-red-500" />
                      <span className="title-font font-medium">Freelancer</span>
                    </div>
                  </div>
                  <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                      <CheckCircleIcon className="h-5 w-5 mr-1 text-red-500" />
                      <span className="title-font font-medium">Instructor</span>
                    </div>
                  </div>
                  <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                      <CheckCircleIcon className="h-5 w-5 mr-1 text-red-500" />
                      <span className="title-font font-medium">Business Enthusiast</span>
                    </div>
                  </div>
                  <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                      <CheckCircleIcon className="h-5 w-5 mr-1 text-red-500" />
                      <span className="title-font font-medium">Young Entreprenuer</span>
                    </div>
                  </div>
                  <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                      <CheckCircleIcon className="h-5 w-5 mr-1 text-red-500" />
                      <span className="title-font font-medium">Soulverr.com</span>
                    </div>
                  </div>
                  <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                      <CheckCircleIcon className="h-5 w-5 mr-1 text-red-500" />
                      <span className="title-font font-medium">Machine Learning</span>
                    </div>
                  </div>
                  <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                      <CheckCircleIcon className="h-5 w-5 mr-1 text-red-500" />
                      <span className="title-font font-medium">Data Analysis</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 bg-gray-50 body-font">
        <div className="max-w-7xl px-5 py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">

            <h2 className="text-xs text-red-500 tracking-widest font-medium title-font mb-1 uppercase">Testimonials</h2>
            <h1 className="sm:text-3xl text-2xl font-heading title-font text-gray-900">What my clients say about me !!</h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-white p-8 rounded shadow-lg">
                <PencilAltIcon className="w-5 h-5" />
                <p className="leading-relaxed mb-6">Full Python & Data Science Bootcamp delivered with utmost professionalism, meticulous structure and aptitude. One of the best teachers I ever had the pleasure to work with. I definitely recommend it to anyone aiming to master Python & Data Science. Cheers</p>
                <a className="inline-flex items-center">
                  <img alt="testimonial" src="/test.png" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">Jad Abboud</span>
                    <span className="text-gray-500 text-sm">Data Analyst at Oracle</span>
                    <span className="flex items-center">
                      <StarIcon className="w-4 h-4 text-red-500" />
                      <StarIcon className="w-4 h-4 text-red-500" />
                      <StarIcon className="w-4 h-4 text-red-500" />
                      <StarIcon className="w-4 h-4 text-red-500" />
                      <StarIcon className="w-4 h-4 text-red-500" />
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full shadow-lg bg-white p-8 rounded">
                <PencilAltIcon className="w-5 h-5" />
                <p className="leading-relaxed mb-6">Kaustubh is young but extremely knowledgeable. I am very happy with my sessions so far and definitely paying for the next ones right now. Cannot wait to be a professional programmer!</p>
                <a className="inline-flex items-center">
                  <img alt="testimonial" src="/test1.png" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">Abayomi Arigbabu</span>
                    <span className="text-gray-500 text-sm">Business Consultant</span>
                    <span className="flex items-center">
                      <StarIcon className="w-4 h-4 text-red-500" />
                      <StarIcon className="w-4 h-4 text-red-500" />
                      <StarIcon className="w-4 h-4 text-red-500" />
                      <StarIcon className="w-4 h-4 text-red-500" />
                      <StarIcon className="w-4 h-4 text-red-500" />
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="max-w-7xl px-5 py-20 mx-auto flex flex-wrap">

          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-3/5 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-3">
              <h1 className="font-heading font-bold text-4xl mb-2 text-gray-900">The Skills which have been with me in my journey as an Entrepreneur</h1>
              <div className="leading-relaxed">Here I am trying to elaborate my skills with the help of graphical representations so you understand my expertise.</div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">98%</h2>
              <p className="leading-relaxed">Pro Instructor</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">93%</h2>
              <p className="leading-relaxed">Web App Dev</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">89%</h2>
              <p className="leading-relaxed">ML DS Algo</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">83%</h2>
              <p className="leading-relaxed">Business MNGT</p>
            </div>
          </div>
          <div className="lg:w-2/5 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img className="object-cover object-center w-full h-full" src="/skills1.svg" alt="skills" />
          </div>

        </div>
      </section>

      {/* <section className="text-gray-600 body-font">
        <div className="max-w-7xl px-5 py-20 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-heading title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Master Cleanse Reliac Heirloom</h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably havent heard of them man bun deep jianbing selfies heirloom.</p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="/homecourse.png" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="/homecourse.png" />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src="/homecourse.png" />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src="/homecourse.png" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="/homecourse.png" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="/homecourse.png" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="text-gray-600 body-font">
        <div className="max-w-7xl px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">

            <h2 className="text-xs text-red-500 tracking-widest font-medium title-font mb-1 uppercase">PROJECTS</h2>
            <h1 className="sm:text-3xl text-2xl font-heading title-font text-gray-900">What are my Projects !</h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 shadow-lg border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="/homecourse.png" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                      {/* <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg> */}
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      {/* <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K */}
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      {/* <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6 */}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 shadow-lg border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="/homecourse.png" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                      {/* <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg> */}
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      {/* <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K */}
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      {/* <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6 */}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 shadow-lg border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="/homecourse.png" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                      {/* <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg> */}
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      {/* <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K */}
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      {/* <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6 */}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="text-gray-600 bg-gray-50 body-font overflow-hidden">
        <div className="max-w-7xl px-5 py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">

            <h2 className="text-xs text-red-500 tracking-widest font-medium title-font mb-1">COURSES</h2>
            <h1 className="sm:text-3xl text-2xl font-heading title-font text-gray-900">Most Trending Course!</h1>
          </div>
          <div className="lg:w-full mx-auto flex flex-wrap items-center">
            <img alt="ecommerce" className="lg:w-2/5 w-full lg:h-auto h-64 object-cover object-center rounded-3xl" src="/homecourse1.png" />
            <div className="lg:w-3/5 w-full lg:pl-16 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest mb-2">TRENDING</h2>
              <h1 className="text-gray-900 text-3xl title-font font-heading font-bold mb-3">The Complete Python Course Bootcamp from Beginners to Advance</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <StarIcon className="w-5 h-5 text-red-500" />
                  <StarIcon className="w-5 h-5 text-red-500" />
                  <StarIcon className="w-5 h-5 text-red-500" />
                  <StarIcon className="w-5 h-5 text-red-500" />
                  <StarIcon className="w-5 h-5 text-red-500" />
                  <span className="text-gray-600 ml-3">{reviews} Reviews</span>
                </span>
              </div>
              <p className="leading-relaxed">Do you want to become a successful Python Developer, Python Freelancer, Data Scientist, Data Analyst, Machine Learning Engineer, Deep Learning Engineer, Software Engineer, Web Developer or the GOD OF PYTHON PROGRAMMING ??
                Then here is the COMPLETE PYTHON COURSE BOOTCAMP FROM BEGINNERS TO PROFESSIONAL
                Exclusively on Fiverr <br />
                <span className="mt-2 font-medium">
                  Basic Series - ( 15$/hr )<br />
                  Standard Series - ( 20$/hr )<br />
                  Premium Series - ( 25$/hr )<br />
                </span>
              </p>

              <div className="flex mt-5">
                <span className="title-font font-medium text-2xl text-gray-900">Starting at $15.00 Only</span>
                {/* <a href="https://www.fiverr.com/kkwankhede/teach-you-python-from-beginners-to-advance" className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Get Started</a> */}
                <Link href="https://www.fiverr.com/kkwankhede/teach-you-python-from-beginners-to-advance"><a className="inline-flex ml-auto items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-500 hover:bg-red-600"
                >
                  Get Started Right Now
                </a>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
