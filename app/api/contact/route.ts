import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Email HTML template
    const emailHTML = `
      <div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
        <div>A message by ${name} has been received. Kindly respond at your earliest convenience.</div>
        <div style="margin-top: 20px;padding: 15px 0;border-width: 1px 0;border-style: dashed;border-color: lightgrey;">
          <table role="presentation">
            <tr>
              <td style="vertical-align: top">
                <div style="padding: 6px 10px;margin: 0 10px;background-color: aliceblue;border-radius: 5px;font-size: 26px;" role="img">👤</div>
              </td>
              <td style="vertical-align: top">
                <div style="color: #2c3e50; font-size: 16px"><strong>${name}</strong></div>
                <div style="color: #cccccc; font-size: 13px">${new Date().toLocaleString()}</div>
                <div style="color: #7f8c8d; font-size: 14px; margin-top: 5px">Email: ${email}</div>
                <div style="color: #7f8c8d; font-size: 14px; margin-bottom: 10px">Subject: ${subject}</div>
                <p style="font-size: 16px">${message}</p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    `

    // Using Resend API (you'll need to install: npm install resend)
    // Uncomment and configure when ready:
    /*
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'ncubesitembile@yahoo.com',
      subject: `Portfolio Contact: ${subject}`,
      html: emailHTML,
      replyTo: email,
    })
    */

    // For now, log to console (remove this when email service is configured)
    console.log("Contact form submission:", { name, email, subject, message })

    return NextResponse.json({ success: true, message: "Message sent successfully!" })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
