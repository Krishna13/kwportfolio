import Head from "next/head"
import Link from "next/link"
import { StarIcon } from '@heroicons/react/solid'

function projects() {
    return (
        <>
            <Head>
                <title>Projects - Kaustubh Wankhede | Python Developer | Instructor | Business Enthisiast | Kwinfosys</title>
            </Head>
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
                    <div className="lg:w-full mx-auto my-16 flex flex-wrap-reverse items-center">

                        <div className="lg:w-3/5 w-full mt-6  lg:pr-16 lg:py-6  lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest mb-2">TRENDING</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-heading font-bold mb-3">The Complete Python Course Bootcamp from Beginners to Advance</h1>
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
                        <img alt="ecommerce" className="lg:w-2/5 w-full lg:h-auto h-64 object-cover object-center rounded-3xl" src="/homecourse1.png" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default projects
