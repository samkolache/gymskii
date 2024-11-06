export default function SupportForm() {

    return (
      <form className='max-w-lg w-full mx-auto flex flex-col items-start space-y-6 p-4 md:p-6'>
        {/* Email */}
        <div className='flex flex-col w-full'>
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            type="email" 
            name="email"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-brand focus:border-brand sm:text-sm"
            required
          />
        </div>
  
        {/* Name */}
        <div className='flex flex-col w-full'>
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">
            Your Name
          </label>
          <input
            id="name"
            type="text" 
            name="name"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-brand focus:border-brand sm:text-sm"
            required
          />
        </div>
  
        {/* Message */}
        <div className='flex flex-col w-full'>
          <label htmlFor="message" className="block text-lg font-medium text-gray-700">
            What's up?
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-brand focus:border-brand sm:text-sm resize-none"
            required
          />
        </div>
  
        {/* Submit Button */}
        <button 
          type="submit" 
          className='bg-brand hover:bg-brand-dark px-8 py-2 text-white rounded-lg font-semibold transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand focus:ring-opacity-50 w-full'
        >
          Send
        </button>
      </form>
    );
  }
  