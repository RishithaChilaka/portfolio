import { Resend } from 'resend'

// Vercel serverless function: POST /api/send-email
// Sends the portfolio contact-form submission to Rishitha's inbox via Resend.
//
// Required environment variables (set in Vercel project settings):
//   RESEND_API_KEY   - API key from https://resend.com/api-keys
//   CONTACT_TO_EMAIL - inbox that should receive messages (e.g. rishithareddych21@gmail.com)
//   CONTACT_FROM_EMAIL - verified sender address/domain in Resend
//                        (Resend's onboarding sandbox "onboarding@resend.dev" works
//                         before you verify your own domain)

const resend = new Resend(process.env.RESEND_API_KEY)

function escapeHtml(str = '') {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, subject, phone, message } = req.body || {}

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || 'rishithareddych21@gmail.com'
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>'

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: subject ? `Portfolio contact: ${subject}` : `New portfolio message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New message from your portfolio site</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
          ${subject ? `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return res.status(502).json({ error: 'Failed to send email' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('send-email handler error:', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
