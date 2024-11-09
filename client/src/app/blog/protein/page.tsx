import Link from "next/link";
import Image from "next/image";
import { ChevronDoubleRightIcon } from '@heroicons/react/16/solid'

export default function Page() {
    return (
        <>
            {/* Hero Container */}
            <div className="max-w-4xl flex flex-col space-y-5 mx-auto mt-20 px-4 md:px-0">
                {/* Breadcrumb Container */}
                <div className="flex items-center space-x-2 text-lg flex-wrap">
                    <Link href="/blog" className="text-brand font-semibold underline">
                        Blog
                    </Link>
                    <ChevronDoubleRightIcon className="w-5 h-5" />
                    <p className="text-gray-600">How much protein do I really need?</p>
                </div>

                {/* Start of Hero Content */}
                <h1 className="text-3xl md:text-5xl font-bold">How much protein do I really need?</h1>
                <p className="text-base md:text-lg">
                    By: <span className="text-brand font-bold">Sam Kotecha</span>
                </p>
                <span className="h-[2px] bg-black w-[80px] block"></span>
                <p className="text-lg md:text-xl">Not only do you have to train hard, but you also have to have a certain diet to achieve your personalized fitness goals. If muscle building is a priority,
                    you’ll need to eat the right amount of protein to build and maintain mass. One question, how much do you really need? With controversy across the internet of how much one should consume, we’ll
                    dive deep into this article to find out a good number.
                </p>

                <Image
                    src="/meat.avif"
                    alt="Blog Cover"
                    width={895}
                    height={500}
                    className="rounded-lg" />
            </div>

            {/* Blog Content Container */}
            <div className="max-w-4xl flex flex-col mx-auto gap-8 mt-8 mb-8 px-4 md:px-0">

                {/* Section #1 */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl md:text-3xl font-semibold text-brandHeading">Science of protein and muscle</h2>
                    <div className="flex flex-col gap-4">
                        <p className="text-base md:text-[18px]"> Protein can be found in every cell in tissue in the human body and it is made up of smaller units called amino acids.
                            Amino acids are known as the building blocks of protein, as they help form the structure of our muscles and organs. Protein plays a big part in both the repair and maintenance of
                            muscle tissue, as it provides the necessary amino acids for muscle recovery and growth after exercise. Protein is also essential for the production of enzymes and hormones that regulate
                            various bodily functions, making it a crucial component for overall health and well-being.
                        </p>
                        <p className="text-base md:text-[18px]">When we workout, our muscles undergo small tears due to the load we put on them. When we consume protein, we are giving our body the necessary amino
                            acids to rebuild these micro-tears in our muscles. During this process, they are healed stronger, a process known as hypertrophy. Without sufficient protein, the muscle repair and growth
                            process is compromised, leading to slower progress in strength and muscle gains.
                        </p>
                    </div>
                </div>

                {/* Section #2 */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl md:text-3xl font-semibold text-brandHeading">So, how much do I need?</h2>
                    <div className="flex flex-col gap-4">
                        <p className="text-base md:text-[18px]"> The amount of protein an individual needs is based on a lot of factors, including age, health status, and activity level. 
                            With that in mind, the RDA(Recommended Dietary Allowance) for protein is about .8g of protein per kg or .36g per lb. This number is the amount required to maintain nitrogen balance and prevent muscle loss.
                        </p>
                        <p className="text-base md:text-[18px]">This means a person who weighs 180 lbs should be eating around 65g of protein per day, not a lot right?</p>
                        <p className="text-base md:text-[18px]">Well, if one wishes to build muscle, the may be higher. How much you may be asking? Let’s reference some studies and learn in the next section.</p>
                    </div>
                </div>

                {/* Section #3 */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl md:text-3xl font-semibold text-brandHeading">And the studies reveal!
                    </h2>
                    <div className="flex flex-col gap-4">
                        <p className="text-base md:text-[18px]"> Most studies reveal a higher amount of protein intake is beneficial for muscle gain. However, even with these studies, 
                        the number still remains a bit controversial.
                        </p>
                        <p className="text-base md:text-[18px]">
                        According to the <a href = "https://jissn.biomedcentral.com/articles/10.1186/s12970-017-0177-8#Sec33" className="text-brand">International Society of Sports Nutrition</a>, individuals should consume 1.4 to 2.0 g of protein per kg(0.64 to 0.91 grams per lb) of 
                        body weight to optimize muscle gain. This recommendation aligns with the Institute of Medicine’s Acceptable Macronutrient Distribution Range and can vary depending on 
                        factors such as exercise intensity, protein quality, and overall energy intake. Additionally, consuming protein post-workout or before sleep can enhance muscle protein synthesis and recovery, 
                        further supporting improvements in muscle size, strength, and body composition over time.
                        </p>
                        <p className="text-base md:text-[18px]">Based on this study, a man weighing 180 lbs would need to consume between 115.2 to 163.8g of protein per 
                            day to build muscle. A way bigger jump from our .8kg from before, but studies lean towards a higher protein diet for optimal muscle gain.
                        </p>
                        <p className="text-base md:text-[18px]">This number should be evaluated and personalized based on your goals and current activity status. If you want 
                        suggestions on how much protein you should consume, log into your gymskii dashboard and use our diet tracker to optimize your amount!
                        </p>
                    </div>
                </div>

                {/* Section 4 */}
                <div className="max-w-4xl flex flex-col mx-auto gap-8 mt-8 px-4 md:px-0 mb-4">
                <div className="flex flex-col gap-2">
                        <h2 className="text-2xl md:text-3xl font-semibold text-brandHeading">What are some good sources of protein?</h2>
                        <div className="flex flex-col gap-2">
                            <p className="text-base md:text-[18px]"> Below are some great sources of protein to add to your diet! </p>
                            <ul className="list-disc text-base md:text-[18px] ml-8 flex flex-col gap-2">
                                <li>
                                    Chicken Breast(35g of protein per 4 oz)
                                </li>
                                <li>
                                    Salmon(25g of protein per 4 oz)
                                </li>
                                <li>
                                    Lean Ground Beef(24g of protein per 4 oz)
                                </li>
                                <li>
                                    Tuna(26g of protein per 4 oz)
                                </li>
                                <li>
                                    Eggs(13g of protein per 4 oz)
                                </li>
                            </ul>
                            <p className="text-base md:text-[18px] pt-4"> Now you know the science, reccomended amount, and good sources of protein. 
                            Now go out there and crush your next workout!
                            </p>
                        </div>
                    </div>
            </div>



            </div>
        </>
    );
}