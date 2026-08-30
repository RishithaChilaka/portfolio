import React, { useState, useRef } from 'react'

const Contact = () => {
  const formRef = useRef(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({ text: '', type: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const payload = Object.fromEntries(formData.entries())

    if (!payload.name || !payload.email || !payload.message) {
      setStatus({ text: 'Please fill in all required fields.', type: 'error' })
      return
    }

    setIsSubmitting(true)
    setStatus({ text: '', type: '' })

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error('Request failed')

      setStatus({ text: 'Message sent successfully!', type: 'success' })
      formRef.current.reset()
    } catch (err) {
      setStatus({ text: 'Failed to send message. Please try again later.', type: 'error' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute -bottom-24 left-0 w-[480px] h-[480px] bg-cyan-glow/10 blur-[150px] rounded-full animate-blob" />
      <div className="max-w-6xl mx-auto px-6 md:px-10 relative">
        <h2 className="reveal text-3xl md:text-5xl font-black uppercase tracking-tight text-cyan-glow drop-shadow-[0_0_24px_rgba(56,189,248,0.35)] mb-14">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          <div className="reveal flex flex-col gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">Email</p>
              <a href="mailto:rishithareddych21@gmail.com" className="text-lg md:text-xl text-white hover:text-cyan-glow">
                rishithareddych21@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">Phone</p>
              <p className="text-lg md:text-xl text-white">(628) 724-1023</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">Location</p>
              <p className="text-lg md:text-xl text-white">Houston, TX</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Connect</p>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/rishithachilaka/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-cyan-glow/30 text-sm text-slate-200 hover:bg-cyan-glow/10 hover:scale-105 transition-all duration-300"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/RishithaChilaka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-cyan-glow/30 text-sm text-slate-200 hover:bg-cyan-glow/10 hover:scale-105 transition-all duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="reveal glass-panel glow-border rounded-[22px] p-7 md:p-8 flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-slate-400 font-medium">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="bg-black/30 border border-cyan-glow/20 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-glow/50"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-slate-400 font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="bg-black/30 border border-cyan-glow/20 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-glow/50"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-slate-400 font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="What's this about?"
                className="bg-black/30 border border-cyan-glow/20 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-glow/50"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-slate-400 font-medium">Message</label>
              <textarea
                name="message"
                required
                rows="5"
                placeholder="Write something...."
                className="bg-black/30 border border-cyan-glow/20 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-glow/50 resize-none"
              />
            </div>

            {status.text && (
              <div
                className={`text-sm px-4 py-3 rounded-lg border ${
                  status.type === 'success'
                    ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300'
                    : 'bg-red-500/10 border-red-500/40 text-red-300'
                }`}
              >
                {status.text}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 w-full py-3 rounded-full font-semibold text-sm text-[#04121f] bg-gradient-to-r from-cyan-glow to-sky-500 disabled:opacity-60 hover:shadow-[0_0_35px_rgba(56,189,248,0.5)] hover:scale-[1.02] transition-all duration-300"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
