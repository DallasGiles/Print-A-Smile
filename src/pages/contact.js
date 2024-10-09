const Contact = () => (
    <div className="min-h-screen bg-white">
      <main className="flex flex-col items-center py-16 px-8">
        <section className="max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-gray-700 mb-6">Contact Us</h1>
          <p className="text-lg text-gray-800 mb-4">
            We'd love to hear from you! Whether you have questions, suggestions, or would like to get involved, feel free to reach out.
          </p>
          <form className="flex flex-col space-y-4 mt-8">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg h-32"
            ></textarea>
            <button className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300">
              Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
  
  export default Contact;