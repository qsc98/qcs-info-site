import React from 'react'
import Image from 'next/image'

const OurCenter = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-6 py-20">
      <h1 className="mb-8 text-center text-4xl font-bold text-green-600">Welcome to Our Center</h1>
      <p className="text-gray-700 mx-auto mb-12 max-w-2xl text-center">
        Our adult day care center is designed with comfort, safety, and enrichment in mind. Take a
        look inside and discover the space where compassionate care meets meaningful connection.
      </p>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="overflow-hidden rounded-lg shadow-md">
          <Image
            src="/assets/center-exterior.jpg"
            alt="Center Exterior"
            width={600}
            height={400}
            layout="responsive"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-md">
          <Image
            src="/assets/activity-room.jpg"
            alt="Activity Room"
            width={600}
            height={400}
            layout="responsive"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-md">
          <Image
            src="/assets/dining-area.jpg"
            alt="Dining Area"
            width={600}
            height={400}
            layout="responsive"
          />
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="mb-2 text-2xl font-semibold text-green-500">Visit Us</h2>
        <p className="text-gray-700">811 Mt Holly Rd, Fairdale, KY 40118</p>
        <p className="mt-1 text-gray-500">Open Monday – Saturday, 7 AM – 7 PM</p>
        <div className="mt-4">
          <iframe
            title="Google Map"
            className="h-64 w-full rounded-md border"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.9570945952433!2d-85.76777598467997!3d38.101059779704754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88690a13eb7b6d61%3A0xa6a2aa35a4d7c4ec!2s811%20Mt%20Holly%20Rd%2C%20Fairdale%2C%20KY%2040118!5e0!3m2!1sen!2sus!4v1629860414313!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default OurCenter
