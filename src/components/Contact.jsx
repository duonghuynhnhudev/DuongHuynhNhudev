import { useState } from 'react'
import { toast } from 'react-toastify'
import { personalInfo } from '../data/portfolio'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: `[Portfolio] ${form.subject}`,
          message: form.message,
          _template: 'table',
        }),
      })

      if (!response.ok) throw new Error('Unable to send message')

      toast.success('Message sent successfully! I will get back to you soon.')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      toast.error('Unable to send the message. Please email me directly instead.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 gradient-textHeader">
          Get In Touch
        </h2>
        <div className="w-20 h-1 gradient-bg mx-auto mb-4 rounded-full" />
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
          I&apos;m always interested in new opportunities and exciting projects. Let&apos;s discuss
          how we can work together!
        </p>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Let&apos;s Connect</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-envelope text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Email</h4>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-phone text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Phone</h4>
                  <a href={`tel:${personalInfo.phone}`} className="text-blue-600 hover:text-blue-700">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-location-dot text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Location</h4>
                  <p className="text-slate-600">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 glass rounded-2xl p-6">
              <h4 className="font-bold text-slate-800 mb-2">Ready to start a project?</h4>
              <p className="text-slate-600 text-sm mb-2">
                I&apos;m available for freelance work and full-time opportunities.
              </p>
              <p className="text-blue-600 text-sm font-medium">
                ⚡ Usually responds within 24 hours
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-colors"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-colors resize-none"
                placeholder="Tell me about your project or just say hello!"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full gradient-bg text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed btn-shine"
            >
              {sending ? (
                <>
                  <i className="fa-solid fa-spinner fa-spin mr-2" />
                  Sending...
                </>
              ) : (
                <>
                  <i className="fa-solid fa-paper-plane mr-2" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
