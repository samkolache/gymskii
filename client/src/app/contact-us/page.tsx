
import SupportForm from '../components/forms/SupportForm'

export default function ContactUs() {
    return(
        <>
            {/* Page Container */}
            <div className="mt-12">

                <div className="max-w-4xl text-center mx-auto px-6 py-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Need some help?</h1>
                    <p className="text-lg md:text-xl text-gray-500 leading-relaxed">Fill out the form with anything you want! If you have any good meal prep recipes, let us know that as well :)</p>
                </div>

                <div className="mb-12">
                    <SupportForm />
                </div>
            </div>
        </>
    )
}