import Link from "next/link"
import Image from "next/image"



export default function About() {
    return(
        <>

            {/* Container */}
            <div className="mt-12">

                {/* Heading Section Container */}
                <div className="max-w-2xl text-center mx-auto px-10 pt-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Empowering you to <span className="text-brand">Track</span>, <span className="text-brand">Visualize</span>, and <span className="text-brand">Elevate</span> your Strength Journey</h1>
                    <p className="text-lg md:text-xl text-gray-500">gymskii is your central platform for bringing together everything fitness-related. Whether you are a beginner or a seasoned gym rat, anyone can benefit from gymskii's tracking and visuals.</p>
                </div>

                {/* Intitiave Containers */}
                <div className=" flex flex-col space-y-20 mt-16">

                    {/* Container for BG Color */}
                    <div className="bg-gray-100">
                        {/* Intitiave 1 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl gap-24 items-center text-center mx-auto p-10">
                            <div className="flex flex-col space-y-4">
                                <h2 className="text-3xl md:text-4xl font-semibold text-brandHeading">Making Progressive Overload Simpler and Effective</h2>
                                <p className="text-lg">Progressive overloading is the method of gradually increasing the difficulty in your workouts to consistently improve your strength and build muscle. 
                                With Gymskii, you can easily track your progress through charts and data, ensuring you're consistently getting stronger. We believe that achieving your fitness goals comes from pushing yourself to be better than your last session.
                                </p>
                                <p className="text-lg">With Gymskii, you can easily track your progress through charts and data, ensuring you're consistently getting stronger. We believe that achieving your fitness goals comes from pushing yourself to be better than your last session.</p>
                            </div>
                            <Image 
                                src = "/up-ill.svg"
                                alt="Illustration of man looking at up arrow"
                                width = {500}
                                height = {361}
                            />
                        </div>
                    </div>

                    {/* Intitiave 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl gap-24  items-center text-center mx-auto p-10">
                        <Image 
                            src = "/dashboard-ill.svg"
                            alt="Illustration of man looking looking at screen with charts"
                            width = {500}
                            height = {361}
                        />
                        <div className="flex flex-col space-y-4">
                            <h2 className="text-3xl md:text-4xl font-semibold text-brandHeading">Creating a Hub for all your Workout Needs</h2>
                            <p className="text-lg">Deemed the "Gains Lab", gymskii offers a central dashboard to keep track of everything fitness-related. You can create and view workouts, 
                                track your progress, and even keep track of your basic macros. gymskii wants to become the hub for keeping track of your fitness, in a smarter way
                            </p>

                            <p className="text-lg">Visit this  <Link href= "/blog/progressive-overload" className="text-brand font-medium">blog post</Link> to learn more about progressive overloading and how it can help on your journey.</p>
                        </div>
                    </div>

                    {/* Container for BG Color */}
                    <div className="bg-gray-100">
                        {/* Intitiave 3 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl gap-24  items-center text-center mx-auto p-10">
                            <div className="flex flex-col space-y-4">
                                <h2 className="text-3xl md:text-4xl  font-semibold text-brandHeading">Made by People Who Care and Know</h2>
                                <p className="text-lg">gymskii was founded by Sam Kotecha, who tracked his progression through an Excel sheet. He always wanted to see how his stats looked visually, 
                                    hence gymskii was born He tried other tracking apps but most are made by people who don't truly appreciate fitness and understand how it works today. We hope gymskii 
                                    delivers what you need.</p>
                                <p className="text-lg">We are always looking to improve, so please email <a href="email" className="text-brand font-medium">sam@gymskii.com</a> with any feedback!</p>
                            </div>
                            <Image 
                                src = "/care-ill.svg"
                                alt="Illustration of friends drinking coffee"
                                width = {500}
                                height = {361}
                                
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}