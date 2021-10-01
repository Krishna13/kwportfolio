import { Disclosure } from '@headlessui/react'
import Head from 'next/head'
import { CodeIcon, UserCircleIcon, LocationMarkerIcon, StarIcon } from '@heroicons/react/outline'
import { ChevronUpIcon } from '@heroicons/react/solid'
function about() {
    return (
        <>
            <Head>
                <title>About Me - Kaustubh Wankhede | Python Developer | Instructor | Business Enthisiast | Kwinfosys</title>
            </Head>
            <section className="text-gray-600 body-font">
                <div className="max-w-7xl mx-auto flex px-7 py-16 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="font-heading sm:text-6xl md:text-4xl lg:text-4xl xl:text-6xl text-3xl mb-4 font-bold text-gray-900">About Me
                        </h1>
                        <p className="mb-8 leading-relaxed">{`A Python Developer by Profession and an Instructor by Passion at KW Infosys. Young Entrepreneur. Partnered at Soulverr.com. Business Enthusiast.`}
                        </p>
                        <div className="flex justify-center">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-500 hover:bg-red-600"
                            >
                                My Courses
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-4 py-2 ml-3 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-800 bg-gray-200 hover:bg-gray-100"
                            >
                                Contact Me
                            </a>


                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center" alt="hero" src="/about.svg" />
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font">
                <div className="max-w-7xl px-5 py-14 mx-auto">

                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-gray-50">
                                <CodeIcon className="w-12 h-12 text-red-500 mb-3 inline-block" />
                                <h2 className="font-heading font-light text-2xl text-gray-900">Python Developer</h2>
                                <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aspernatur sunt, iste dolorem dolores iusto quos, quasi nemo laborum dolore laboriosam accusantium? Architecto corrupti dolore dolores autem, eligendi illo cumque?</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-gray-50">
                                <CodeIcon className="w-12 h-12 text-red-500 mb-3 inline-block" />
                                <h2 className="font-heading font-light text-2xl text-gray-900">Python Developer</h2>
                                <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aspernatur sunt, iste dolorem dolores iusto quos, quasi nemo laborum dolore laboriosam accusantium? Architecto corrupti dolore dolores autem, eligendi illo cumque?</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-gray-50">
                                <CodeIcon className="w-12 h-12 text-red-500 mb-3 inline-block" />
                                <h2 className="font-heading font-light text-2xl text-gray-900">Python Developer</h2>
                                <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aspernatur sunt, iste dolorem dolores iusto quos, quasi nemo laborum dolore laboriosam accusantium? Architecto corrupti dolore dolores autem, eligendi illo cumque?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="text-gray-600 body-font">
                <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-3/5 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="font-heading sm:text-4xl text-3xl font-medium text-gray-900 mb-1">Kaustubh Wankhede
                        </h1><span className="font-medium mb-4 ">{`Python Developer & an Instructor`}</span>
                        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Button</button>
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                        </div>
                    </div>
                    <div className="lg:max-w-sm lg:w-full md:w-2/5 w-5/6">
                        <img className="object-cover object-center rounded" alt="aboutus" src="/profile-pic.png" />
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="max-w-7xl px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex flex-col text-center w-full mb-16">

                        <h2 className="text-xs text-red-500 tracking-widest font-medium title-font mb-1">JOURNEY</h2>
                        <h1 className="sm:text-3xl text-2xl font-heading title-font text-gray-900">How I became a Business Enthusiast</h1>
                    </div>
                    <div className="flex flex-wrap w-full">
                        <div className="lg:w-1/2 md:w-1/2 md:pr-10 md:py-6">
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 1</h2>
                                    <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 2</h2>
                                    <p className="leading-relaxed">Vice migas literally kitsch +1 pok pok. Truffaut hot chicken slow-carb health goth, vape typewriter.</p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <circle cx="12" cy="5" r="3"></circle>
                                        <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 3</h2>
                                    <p className="leading-relaxed">Coloring book nar whal glossier master cleanse umami. Salvia +1 master cleanse blog taiyaki.</p>
                                </div>
                            </div>


                        </div>
                        <div className="lg:w-1/2 md:w-1/2 md:pr-10 md:py-6">
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 1</h2>
                                    <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 2</h2>
                                    <p className="leading-relaxed">Vice migas literally kitsch +1 pok pok. Truffaut hot chicken slow-carb health goth, vape typewriter.</p>
                                </div>
                            </div>


                            <div className="flex relative">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">FINISH</h2>
                                    <p className="leading-relaxed">Pitchfork ugh tattooed scenester echo park gastropub whatever cold-pressed retro.</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section> */}
            <section className="text-gray-600 bg-gray-50 body-font">
                <div className="max-w-7xl px-5 py-24 mx-auto flex items-center  flex-col">
                    <div className="flex flex-col text-center w-full mb-20">

                        <h2 className="text-xs text-red-500 tracking-widest font-medium title-font mb-1">FAQS</h2>
                        <h1 className="sm:text-3xl text-2xl font-heading title-font text-gray-900">Questions you may Ask?</h1>
                    </div>
                    <div className="w-full p-2 mx-auto bg-white rounded-2xl">
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex justify-between items-center w-full px-4 py-2 text-lg font-medium text-left text-red-500 bg-red-50 rounded-lg hover:bg-red-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                        <span>What is your refund policy?</span>
                                        <ChevronUpIcon
                                            className={`${open ? 'transform rotate-180' : ''
                                                } w-5 h-5 text-red-500`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                        If youre unhappy with your purchase for any reason, email us
                                        within 90 days and well refund you in full, no questions asked.
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure as="div" className="mt-2">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex justify-between items-center w-full px-4 py-2 text-lg font-medium text-left text-red-500 bg-red-50 rounded-lg hover:bg-red-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                        <span>Do you offer technical support?</span>
                                        <ChevronUpIcon
                                            className={`${open ? 'transform rotate-180' : ''
                                                } w-5 h-5 text-red-500`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                        No.
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                </div>
            </section>


        </>
    )
}

export default about
