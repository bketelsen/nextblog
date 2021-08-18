function SubscribeCTA() {
  return (
    <div className="flex justify-center w-full mt-6 lg:justify-start">
      <input
        aria-label="subscribe-form"
        type="text"
        className="w-full h-12 px-4 py-2 border border-r-0 border-gray-500 rounded rounded-r-none focus:outline-none"
      />
      <button
        className="h-12 p-2 text-sm font-semibold text-left text-white transition duration-150 ease-in-out border border-transparent rounded rounded-l-none sm:text-base focus:outline-none bg-primary-500 hover:bg-primary-900"
        onClick={() => console.log('Subscribe Action')}
      >
        Subscribe
      </button>
    </div>
  )
}

export default SubscribeCTA
