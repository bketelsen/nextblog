function SubscribeCTA() {
  return (
    <div className="flex justify-center w-full mt-6 lg:justify-start">
      <input
        aria-label="subscribe-form"
        type="text"
        className="w-full h-12 px-4 py-2 input input-bordered"
      />
      <button
        className="btn btn-outline btn-primary"
        onClick={() => console.log('Subscribe Action')}
      >
        Subscribe
      </button>
    </div>
  )
}

export default SubscribeCTA
