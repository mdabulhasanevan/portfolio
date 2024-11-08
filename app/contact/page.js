// pages/contact.js
export default function Contact() {
    return (
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="p-2 border border-gray-300 rounded"
            rows="5"
          ></textarea>
          <button type="submit" className="p-2 bg-blue-500 text-white rounded">
            Send Message
          </button>
        </form>
      </div>
    );
  }
  