export default function NewsLetter() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-2xl text-gray-600 font-semibold mb-4">Let's Stay in Touch</h2>
        <div className="flex gap-2 max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button className="bg-orange-400 hover:bg-orange-500 text-white px-8 rounded-full">Submit</button>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          You can unsubscribe at any time. See our <a href="" className="underline">privacy policy</a> for more info on how we use your data.
        </p>
        <p className="text-xs text-gray-500 mt-2">
This form is protected by reCAPTCHA - the <a href="" className="underline">Google Privacy Policy</a> and <a href="" className="underline">Terms of Service apply</a> .        </p>
      </div>
    </section>
  )
}
