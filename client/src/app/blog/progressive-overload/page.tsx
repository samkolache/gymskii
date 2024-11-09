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
          <p className="text-gray-600">How to Progressive Overload in the Gym</p>
        </div>

        {/* Start of Hero Content */}
        <h1 className="text-3xl md:text-5xl font-bold">How to Progressive Overload in the Gym</h1>
        <p className="text-base md:text-lg">
          By: <span className="text-brand font-bold">Sam Kotecha</span>
        </p>
        <span className="h-[2px] bg-black w-[80px] block"></span>
        <p className="text-lg md:text-xl">Ready to take your strength to the next level? Progressive overload is the key to consistent gains and long-term results. In this guide,
          we’ll break down what progressive overload really means, why it’s essential for building muscle and strength, and how to apply it to your workouts effectively. Let’s dive into the
          science of getting stronger, one rep at a time
        </p>

        <Image
          src="/prog-overload.avif"
          alt="Blog Cover"
          width={895}
          height={500}
          className="rounded-lg" />
      </div>

      {/* Blog Content Container */}
      <div className="max-w-4xl flex flex-col mx-auto gap-8 mt-8 mb-8 px-4 md:px-0">

        {/* Section #1 */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-brandHeading">What even is Progressive Overloading?!</h2>
          <div className="flex flex-col gap-4">
            <p className="text-base md:text-[18px]"> Progressive overloading is a technique that involves increasing the intensity of your routine compared to the last session.
              This usually means increasing the weight/reps for each exercise as a way to “progressively overload” your muscles.
            </p>
            <p className="text-base md:text-[18px]">This technique allows you to overcome plateaus and continually get stronger as time goes on. The idea is to make the session harder than last time, causing your
              muscles to adapt to the new resistance you are placing.
            </p>
            <p className="text-base md:text-[18px]">Progressive overloading isn’t limited to strength training. This principle can be applied to all forms of exercise, including running and swimming. You may be wondering about the
              science of exactly how this all works, let’s dive into that next(or you can skip and see how gymskii can help you progressive overload more effectively).
            </p>
          </div>
        </div>

        {/* Section #2 */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-brandHeading">How Does Progressive Overloading Work Behind the Scenes?</h2>
          <div className="flex flex-col gap-4">
            <p className="text-base md:text-[18px]"> Before we dive into Progressive Overload, we need to understand how our body builds muscle. When we workout our muscle fibers experience microscopic tears
              which cause our body to repair and reinforce these fibers. This process is known as “muscle protein synthesis”.
            </p>
            <p className="text-base md:text-[18px]">Now that we understand how muscle fibers repair and grow, we can now dive into progressive overload. For muscles to continue growing and adapting, they need
              to face new challenges. If every session we use the same weight, perform the same amount of repetitions etc, our muscles have no reason to grow and adapt. Progressively overloading gives our muscles
              the stimulus they need to rebuild and strengthen the muscle fibers.
            </p>
            <p className="text-base md:text-[18px]">It’s as simple as that, every time you go into a new session, challenge yourself harder in order to force new muscle tears and repairs. Remember to make
              these increases gradual in order to be safe and not injure yourself.
            </p>
          </div>
        </div>

        {/* Section #3 */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-brandHeading">Different Ways of Progressive Overloading</h2>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg md:text-[23px] font-semibold">Increase Volume</h3>
            <p className="text-base md:text-[18px]"> <strong>Week 1:</strong> Perform 5-8 reps of a Bicep Curl at X weight</p>
            <p className="text-base md:text-[18px]"> <strong>Week 2:</strong> Perform 8-12 reps of a Bicep Curl at X weight</p>
            <p className="text-base md:text-[18px]"> <strong>Week 3:</strong> Perform 12-15 reps of a Bicep Curl at X weight</p>
            <p className="text-base md:text-[18px]"> In this example, the weight stays the same but the reps gradually increase weekly</p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg md:text-[23px] font-semibold">Increase Weight</h3>
            <p className="text-base md:text-[18px]"> <strong>Week 1:</strong> Perform Bicep Curls with 10-12 lb dumbbells</p>
            <p className="text-base md:text-[18px]"> <strong>Week 2:</strong> Perform Bicep Curls with 12-15 lb dumbbells</p>
            <p className="text-base md:text-[18px]"> <strong>Week 3:</strong> Perform Bicep Curls with 15-18 lb dumbbells</p>
            <p className="text-base md:text-[18px]">In this example, you are gradually increasing the weight instead of reps</p>
          </div>
        </div>

        {/* Section #4 */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-brandHeading">How can gymskii help?</h2>
          <div className="flex flex-col gap-4">
            <p className="text-base md:text-[18px]"> gymskii offers multiple features to ensure you are progressively overloading each week. It’s simple, you train hard, track your preferred method of 
              overload(reps, weights), and view your stats! Gymskii offers visuals and statistics to make sure you are overloading each session.
            </p>
            <p className="text-base md:text-[18px]">If gymskii notices that you haven’t increased in an exercise, it will notify you and suggest an increase you can do in the following session. 
              You will notice an increase in muscle and strength if you utilize gymskii’s Gains Lab dashboard consistently.
            </p>
            <p className="text-base md:text-[18px]">gymskii has multiple other features for your grind, read more about them here: <Link href = "/features" className="underline text-brand font-semibold">Features</Link>. We hope this article explained Progressive Overload clearly, happy training!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}