"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { firestore } from "@/utils/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { classnames } from "@/utils/style";

export default function Contact() {
    const [formData, setFormData] = useState({ Name: '', Email: '', msg: '' })
    const [status, setStatus] = useState('')
    const ref = collection(firestore, 'contact')
    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    useEffect(()=>{
        setTimeout(()=>{
            setStatus('')
        },5000)
    },[status])

    const handleSubmit = async () => {
        console.log(formData, "form")
        if (!formData.Name || !formData.Email) return
        try {
            await addDoc(ref, {
                ...formData,
                createdAt: new Date()
            })
            setStatus("✅ Your message has been sent!")
            setFormData({
                Name: '',
                Email: '',
                msg: ''
            })

        } catch (err) {
            console.log(err)
            setStatus("❌ Something went wrong. Please try again.")
        }

    }
    return (
        <section className=" mt-14 min-h-screen bg-[#0f172a] text-white py-20 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Let’s Build Something Together 🚀
                    </h1>
                    <p className="mt-4 text-gray-400 text-sm md:text-lg max-w-2xl mx-auto">
                        Have an idea, project, or just want to say hi?
                        Feel free to reach out—I’m always open to collaboration and new opportunities.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="flex flex-col gap-6 ">
                        <div className=" p-4 md:p-6 bg-white/10 border border-cyan-500/30 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-cyan-500/30 transition">
                            <FaEnvelope className=" text-xl md:text-3xl text-cyan-400 mb-2" />
                            <h3 className=" text-sm md:text-lg font-semibold">Email</h3>
                            <a
                                href="mailto:sakshi5bhawsar@gmail.com"
                                className="text-indigo-300 hover:underline"
                            >sakshi5bhawsar@gmail.com</a>
                        </div>

                        <div className=" p-4 md:p-6 bg-white/10 border border-cyan-500/30 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-cyan-500/30 transition">
                            <FaLinkedin className=" text-xl md:text-3xl text-blue-400 mb-2" />
                            <h3 className=" text-base md:text-lg font-semibold">LinkedIn</h3>
                            <a
                                href="https://www.linkedin.com/in/sakshi-bhawsar/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-300 hover:underline"
                            >https://www.linkedin.com/in/sakshi-bhawsar/</a>
                        </div>

                        <div className=" p-4 md:p-6 bg-white/10 border border-cyan-500/30 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-cyan-500/30 transition">
                            <FaGithub className=" text-xl md:text-3xl text-gray-300 mb-2" />
                            <h3 className=" text-base md:text-lg font-semibold">GitHub</h3>
                            <a
                                href="https://github.com/Sakshi-Bhawsar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-300 hover:underline"
                            >https://github.com/Sakshi-Bhawsar</a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="bg-white/10 backdrop-blur-md border border-cyan-500/30 p-6 rounded-2xl shadow-lg space-y-6" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                        {status && (
                            <p className={classnames("text-center text-sm font-medium text-cyan-400  bg-gray-900 p-2 rounded-lg min-h-[40px]")}>
                                {status}
                            </p>
                        )}
                        <div>
                            <label className="block mb-2 text-sm font-semibold">Name</label>
                            <input
                                type="text"
                                name="Name"
                                placeholder="Enter your name"
                                className="w-full p-3 rounded-lg bg-white/5 border border-gray-600 text-white focus:outline-none focus:border-cyan-400 transition"
                                value={formData.Name}
                                onChange={onChange}
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-semibold">Email</label>
                            <input
                                type="email"
                                name="Email"
                                placeholder="Enter your email"
                                className="w-full p-3 rounded-lg bg-white/5 border border-gray-600 text-white focus:outline-none focus:border-cyan-400 transition"
                                value={formData.Email}
                                onChange={onChange}
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-semibold">Message</label>
                            <textarea
                                rows={4}
                                name="msg"
                                placeholder="Write your message..."
                                className="w-full p-3 rounded-lg bg-white/5 border border-gray-600 text-white focus:outline-none focus:border-cyan-400 transition"
                                value={formData.msg}
                                onChange={onChange}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40 transition"
                        >
                            Send Message ✨
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
