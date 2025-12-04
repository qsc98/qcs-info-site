import Layout from '../components/Layout/Layout'
import SeoHead from '../components/SeoHead'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi'
import ContactForm from '../components/ContactForm'

export default function Contact() {
    return (
        <>
            <SeoHead title="Contact Us - Quality Senior Care" />
            <Layout>
                <div className="relative w-full overflow-hidden pb-16 pt-24 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-24">
                    <div
                        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-30"
                        style={{ backgroundImage: "url('/assets/honeycomb-background.jpg')" }}
                        aria-hidden="true"
                    />

                    <div className="relative mx-auto max-w-screen-xl px-4 sm:px-8 xl:px-16">
                        <div className="mb-12 text-center">
                            <h1 className="font-jakarta text-3xl font-extrabold leading-tight text-navy sm:text-5xl">
                                Get in Touch
                            </h1>
                            <p className="mt-4 text-lg text-slate-600">
                                We're here to help you and your loved ones.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
                            {/* Left Column: Contact Info & Lottie */}
                            <div className="flex flex-col gap-8">
                                <div className="rounded-2xl bg-white p-8 shadow-lg">
                                    <div className="mb-8">
                                        <DotLottieReact
                                            src="/assets/Contact-Us.lottie"
                                            loop
                                            autoplay
                                            className="mx-auto h-64 w-full sm:h-80"
                                        />
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                                                <HiOutlineMail className="size-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-navy">Email Us</h3>
                                                <p className="text-slate-600">
                                                    For general inquiries and support.
                                                </p>
                                                <a href="mailto:admin@qualityseniorcare.org" className="mt-1 block font-medium text-green-600 hover:text-green-700">
                                                    admin@qualityseniorcare.org
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                                                <HiOutlineLocationMarker className="size-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-navy">Visit Us</h3>
                                                <p className="text-slate-600">
                                                    Come say hello at our center.
                                                </p>
                                                <p className="mt-1 font-medium text-slate-800">
                                                    811 Mt Holly Rd, Fairdale, KY 40118
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                                                <HiOutlinePhone className="size-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-navy">Call Us</h3>
                                                <p className="text-slate-600">
                                                    Mon-Fri from 8am to 5pm.
                                                </p>
                                                <a href="tel:+1502XXXXXXX" className="mt-1 block font-medium text-green-600 hover:text-green-700">
                                                    (502) XXX-XXXX
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 border-t border-slate-100 pt-8">
                                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">Follow Us</h4>
                                        <div className="flex gap-4">
                                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-slate-100 p-3 text-[#1877F2] transition-colors hover:bg-[#1877F2] hover:text-white">
                                                <FaFacebookF className="size-5" />
                                            </a>
                                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-slate-100 p-3 text-[#E1306C] transition-colors hover:bg-[#E1306C] hover:text-white">
                                                <FaInstagram className="size-5" />
                                            </a>
                                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-slate-100 p-3 text-[#0A66C2] transition-colors hover:bg-[#0A66C2] hover:text-white">
                                                <FaLinkedinIn className="size-5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Contact Form */}
                            <div className="h-full">
                                <div className="h-full rounded-2xl border border-slate-100 bg-white p-8 shadow-xl lg:p-12">
                                    <h2 className="mb-2 text-2xl font-bold text-navy">Send us a Message</h2>
                                    <p className="mb-8 text-slate-600">Fill out the form below and we'll get back to you shortly.</p>
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
