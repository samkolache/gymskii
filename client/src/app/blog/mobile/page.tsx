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
          <p className="text-gray-600">Mobile app for gymskii coming soon!</p>
        </div>

        {/* Start of Hero Content */}
        <h1 className="text-3xl md:text-5xl font-bold">Mobile app for gymskii coming soon!</h1>
        <p className="text-base md:text-lg">
          By: <span className="text-brand font-bold">Sam Kotecha</span>
        </p>
        <span className="h-[2px] bg-black w-[80px] block"></span>
        <p className="text-lg md:text-xl">We're excited to announce that a mobile app for gymskii is coming soon! The app will make it even easier to track your workouts, monitor progress, 
            and stay motivated on the go. With features like personalized progress charts and intuitive workout logging, you'll have all the tools you need to crush your fitness goals right in your pocket.
        </p>

        <Image
          src="/mobile.avif"
          alt="Blog Cover"
          width={895}
          height={500}
          className="rounded-lg" />
      </div>

      {/* Blog Content Container */}
      <div className="max-w-4xl flex flex-col mx-auto gap-8 mt-8 mb-8 px-4 md:px-0">

        {/* Section #1 */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-brandHeading">Why we are building a gymskii app?</h2>
          <div className="flex flex-col gap-4">
            <p className="text-base md:text-[18px]"> Hey all! We are in the planning stage for our brand new gymskii app. It will allow you to do everything on the gymskii web app, but you can 
                now track your progress at the gym. Right now, you have to write down or remember your current PRs to track them at home. An app would make this process much better, logging your data 
                right when you finish your set,
            </p>
            <p className="text-base md:text-[18px]">With the gymskii mobile app, you'll no longer need to worry about forgetting your progress or carrying around a notebook. The app will 
                give you instant access to all your workout stats, including personal records, set history, and even your weekly workout splits. You will now be able to progressively overload even better, 
                seeing your stats real time while you workout.
            </p>
          </div>
        </div>

        {/* Section #2 */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-brandHeading">The Future of gymskii</h2>
          <div className="flex flex-col gap-4">
            <p className="text-base md:text-[18px]"> Looking ahead, we envision Gymskii becoming the ultimate gym companion, where all workout logging happens directly in the app while you’re at 
                the gym. No more waiting until you get home to input your sets or remember your PRs. The goal is for the mobile app to be your go-to tool during workouts, allowing you to effortlessly 
                track every rep, set, and weight in real-time. This will make it easier to stay consistent, focused, and aware of your progress as it happens, keeping you motivated to push further every session.
            </p>
            <p className="text-base md:text-[18px]">At the same time, we see the Gymskii web app evolving into a powerful platform for deeper analysis and planning. After your workout, the web app will offer detailed insights into your progress, showing trends, charts, and data to help you reflect on what’s working and what needs improvement. Whether you’re analyzing your strength gains or strategizing for your next gym session, the web app will serve as your personal fitness advisor, 
                helping you make informed decisions and plan your workouts for maximum results.
            </p>
            <p className="text-base md:text-[18px]">That's it for now folks, happy progressive overloading from all of us at gymskii!</p>
          </div>
        </div>
      </div>
    </>
  );
}