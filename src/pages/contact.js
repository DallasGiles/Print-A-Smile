import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_API_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert('Message sent successfully');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Failed to send message');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="flex flex-col items-center py-16 px-8">
        <section className="max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-gray-700 mb-6">Contact Us</h1>
          <p className="text-lg text-gray-800 mb-4">
            We'd love to hear from you! Whether you have questions, suggestions, or would like to get involved, feel free to reach out.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-8">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg h-32"
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Contact;