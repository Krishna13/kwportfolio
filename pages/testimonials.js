import Head from "next/head"
import {PencilAltIcon} from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'

function testimonials() {
    return (
        <>
            <Head>
                <title>Testimonials - Kaustubh Wankhede | Python Developer | Instructor | Business Enthisiast | Kwinfosys</title>
            </Head>

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

        </>
    )
}

export default testimonials
