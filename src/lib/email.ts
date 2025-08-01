// src/lib/email.ts
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export interface LetterData {
  recipientEmail: string;
  senderName: string;
  message: string;
  isAnonymous: boolean;
}

export async function sendLetter(data: LetterData) {
  const { recipientEmail, senderName, message, isAnonymous } = data;
  
  const sender = isAnonymous ? 'Someone Special' : (senderName || 'An Admirer');
  const subject = `💌 You've received an anonymous letter`;
  
  const htmlTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Merriweather:wght@300;400&display=swap');
            body { 
                font-family: 'Merriweather', serif; 
                background: linear-gradient(145deg, #f4e4bc, #e8d5b7); 
                padding: 20px; 
                margin: 0;
            }
            .letter {
                max-width: 600px;
                margin: 0 auto;
                background: linear-gradient(135deg, #fefdf8 0%, #f9f7f1 100%);
                border: 2px solid #8b7355;
                border-radius: 12px;
                padding: 40px;
                box-shadow: 0 10px 30px rgba(139, 69, 19, 0.2);
                position: relative;
            }
            .header {
                border-bottom: 2px dashed #8b7355;
                padding-bottom: 20px;
                margin-bottom: 30px;
                text-align: center;
            }
            .title {
                font-family: 'Dancing Script', cursive;
                font-size: 36px;
                color: #2d1810;
                margin-bottom: 10px;
            }
            .date {
                color: #8b7355;
                font-style: italic;
            }
            .message {
                font-size: 16px;
                line-height: 1.8;
                color: #2d1810;
                white-space: pre-wrap;
                margin: 30px 0;
                position: relative;
            }
            .signature {
                text-align: right;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px dotted #8b7355;
                font-family: 'Dancing Script', cursive;
                font-size: 20px;
                color: #8b7355;
            }
            .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #8b7355;
                text-align: center;
                color: #8b7355;
                font-size: 12px;
            }
        </style>
    </head>
    <body>
        <div class="letter">
            <div class="header">
                <h1 class="title">A Letter For You</h1>
                <p class="date">${new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</p>
            </div>
            
            <div class="message">${message}</div>
            
            <div class="signature">
                With heartfelt sincerity,<br>
                ~ ${sender}
            </div>
            
            <div class="footer">
                <p>This letter was sent through Anonymous Letters - a safe space for genuine expression.</p>
                <p>You are under no obligation to respond. Process this message at your own pace.</p>
            </div>
        </div>
    </body>
    </html>
  `;

  const mailOptions = {
    from: `"Anonymous Letters" <${process.env.SMTP_USER}>`,
    to: recipientEmail,
    subject,
    html: htmlTemplate,
    text: `You've received an anonymous letter:\n\n${message}\n\n~ ${sender}`,
  };

  return await transporter.sendMail(mailOptions);
}
