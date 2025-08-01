"use client"; 
import { useState } from 'react';

export default function LetterForm() {
  const [formData, setFormData] = useState({
    recipientEmail: '',
    senderName: '',
    message: '',
    isAnonymous: true
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-letter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ recipientEmail: '', senderName: '', message: '', isAnonymous: true });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&display=swap');
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }
        
        @keyframes candleFlicker {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(0.98); }
        }
        
        @keyframes inkDrop {
          0% { opacity: 0; transform: scale(0.8); }
          50% { opacity: 0.6; transform: scale(1.1); }
          100% { opacity: 0; transform: scale(1); }
        }
        
        .fade-in { animation: fadeIn 0.6s ease-out; }
        .gentle-float { animation: gentleFloat 3s ease-in-out infinite; }
        .candle-flicker { animation: candleFlicker 2s ease-in-out infinite; }
        .ink-drop { animation: inkDrop 0.8s ease-out; }
        
        .parchment-bg {
          background: linear-gradient(135deg, #f7f3e9 0%, #f1ead5 25%, #ede4c3 50%, #f7f3e9 75%, #f9f6ee 100%);
          background-size: 400% 400%;
          position: relative;
          min-height: 100vh;
          padding: 8px;
        }
        
        @media (min-width: 640px) {
          .parchment-bg {
            padding: 32px 20px;
          }
        }
        
        @media (min-width: 1024px) {
          .parchment-bg {
            padding: 40px 20px;
            background-attachment: fixed;
          }
        }
        
        .parchment-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(139, 119, 101, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(101, 67, 33, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(160, 129, 89, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .main-container {
          max-width: 100%;
          margin: 0 auto;
          position: relative;
        }
        
        @media (min-width: 640px) {
          .main-container {
            max-width: 600px;
          }
        }
        
        .aged-paper {
          background: #f9f6f0;
          box-shadow: 
            inset 0 0 20px rgba(139, 119, 101, 0.1),
            0 4px 15px rgba(101, 67, 33, 0.15),
            0 2px 6px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(139, 119, 101, 0.3);
        }
        
        @media (min-width: 640px) {
          .aged-paper {
            box-shadow: 
              inset 0 0 20px rgba(139, 119, 101, 0.1),
              0 8px 25px rgba(101, 67, 33, 0.15),
              0 3px 10px rgba(0, 0, 0, 0.1);
          }
        }
        
        .ornate-border {
          border: 2px solid transparent;
          background: linear-gradient(#f9f6f0, #f9f6f0) padding-box,
                      linear-gradient(45deg, #8b7765, #654321, #a0815a, #8b7765) border-box;
          position: relative;
        }
        
        @media (min-width: 640px) {
          .ornate-border {
            border: 3px solid transparent;
          }
        }
        
        .ornate-border::before {
          content: '';
          position: absolute;
          inset: -4px;
          background: linear-gradient(45deg, #8b7765, #654321, #a0815a);
          border-radius: inherit;
          z-index: -1;
          opacity: 0.3;
        }
        
        @media (min-width: 640px) {
          .ornate-border::before {
            inset: -6px;
          }
        }
        
        .header-container {
          text-align: center;
          margin-bottom: 16px;
          position: relative;
        }
        
        @media (min-width: 640px) {
          .header-container {
            margin-bottom: 40px;
          }
        }
        
        .header-candle {
          font-size: 1.5rem;
          margin-bottom: 6px;
        }
        
        @media (min-width: 640px) {
          .header-candle {
            font-size: 3rem;
            margin-bottom: 10px;
          }
        }
        
        .header-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 300;
          color: #3c2415;
          margin-bottom: 4px;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
          line-height: 1.2;
        }
        
        @media (min-width: 640px) {
          .header-title {
            font-size: 2.5rem;
            margin-bottom: 8px;
          }
        }
        
        .header-subtitle {
          font-family: 'Crimson Text', serif;
          font-size: 0.9rem;
          color: #6d5a47;
          font-style: italic;
          margin: 0;
        }
        
        @media (min-width: 640px) {
          .header-subtitle {
            font-size: 1.1rem;
          }
        }
        
        .form-container {
          padding: 12px;
          border-radius: 8px;
          position: relative;
        }
        
        @media (min-width: 640px) {
          .form-container {
            padding: 40px;
            border-radius: 12px;
          }
        }
        
        .form-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        @media (min-width: 640px) {
          .form-content {
            gap: 32px;
          }
        }
        
        .corner-flourish {
          position: absolute;
          font-size: 0.8rem;
          color: #8b7765;
          opacity: 0.6;
        }
        
        @media (min-width: 640px) {
          .corner-flourish {
            font-size: 1.2rem;
          }
        }
        
        .corner-flourish.top-left {
          top: 4px;
          left: 4px;
        }
        
        @media (min-width: 640px) {
          .corner-flourish.top-left {
            top: 15px;
            left: 15px;
          }
        }
        
        .corner-flourish.top-right {
          top: 4px;
          right: 4px;
        }
        
        @media (min-width: 640px) {
          .corner-flourish.top-right {
            top: 15px;
            right: 15px;
          }
        }
        
        .corner-flourish.bottom-left {
          bottom: 4px;
          left: 4px;
        }
        
        @media (min-width: 640px) {
          .corner-flourish.bottom-left {
            bottom: 15px;
            left: 15px;
          }
        }
        
        .corner-flourish.bottom-right {
          bottom: 4px;
          right: 4px;
        }
        
        @media (min-width: 640px) {
          .corner-flourish.bottom-right {
            bottom: 15px;
            right: 15px;
          }
        }
        
        .quill-input {
          background: transparent;
          border: none;
          border-bottom: 2px solid #8b7765;
          outline: none;
          font-family: 'Crimson Text', serif;
          font-size: 1rem;
          color: #3c2415;
          padding: 10px 0;
          position: relative;
          transition: all 0.4s ease;
          width: 100%;
        }
        
        @media (min-width: 640px) {
          .quill-input {
            font-size: 1.125rem;
            padding: 12px 0;
          }
        }
        
        .quill-input:focus {
          border-bottom-color: #654321;
          box-shadow: 0 2px 8px rgba(101, 67, 33, 0.2);
        }
        
        .quill-input::placeholder {
          color: rgba(60, 36, 21, 0.5);
          font-style: italic;
        }
        
        .vintage-label {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          font-size: 1rem;
          color: #3c2415;
          margin-bottom: 6px;
          display: block;
          position: relative;
        }
        
        @media (min-width: 640px) {
          .vintage-label {
            font-size: 1.3rem;
            margin-bottom: 8px;
          }
        }
        
        .anonymous-section {
          padding: 12px;
          border-radius: 6px;
          border: 1px solid rgba(139, 119, 101, 0.3);
          background: rgba(249, 246, 240, 0.5);
        }
        
        @media (min-width: 640px) {
          .anonymous-section {
            padding: 24px;
            border-radius: 8px;
          }
        }
        
        .anonymous-header {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 8px;
        }
        
        @media (min-width: 640px) {
          .anonymous-header {
            gap: 12px;
            margin-bottom: 12px;
          }
        }
        
        .anonymous-checkbox-container {
          display: flex;
          align-items: flex-start;
          gap: 6px;
        }
        
        @media (min-width: 640px) {
          .anonymous-checkbox-container {
            gap: 12px;
          }
        }
        
        .confession-textarea {
          background: #f9f6f0;
          border: 2px solid #8b7765;
          border-radius: 6px;
          padding: 12px;
          font-family: 'Crimson Text', serif;
          font-size: 1rem;
          line-height: 1.5;
          color: #3c2415;
          resize: none;
          outline: none;
          transition: all 0.3s ease;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
          width: 100%;
          box-sizing: border-box;
        }
        
        @media (min-width: 640px) {
          .confession-textarea {
            background: 
              linear-gradient(transparent 0px, transparent 31px, rgba(139, 119, 101, 0.15) 32px, rgba(139, 119, 101, 0.15) 33px, transparent 34px),
              linear-gradient(90deg, transparent 39px, rgba(101, 67, 33, 0.2) 40px, rgba(101, 67, 33, 0.2) 42px, transparent 43px),
              #f9f6f0;
            border-radius: 8px;
            padding: 20px 20px 20px 50px;
            font-size: 1.1rem;
            line-height: 1.8;
          }
        }
        
        .confession-textarea:focus {
          border-color: #654321;
          box-shadow: 
            inset 0 2px 4px rgba(0, 0, 0, 0.1),
            0 0 15px rgba(101, 67, 33, 0.2);
        }
        
        .confession-textarea::placeholder {
          color: rgba(60, 36, 21, 0.4);
          font-style: italic;
        }
        
        .textarea-footer {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-top: 6px;
          font-size: 0.8rem;
        }
        
        @media (min-width: 640px) {
          .textarea-footer {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-top: 12px;
            font-size: 0.9rem;
          }
        }
        
        .vintage-checkbox {
          appearance: none;
          width: 16px;
          height: 16px;
          border: 2px solid #8b7765;
          border-radius: 3px;
          background: #f9f6f0;
          cursor: pointer;
          position: relative;
          transition: all 0.3s ease;
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        @media (min-width: 640px) {
          .vintage-checkbox {
            width: 20px;
            height: 20px;
          }
        }
        
        .vintage-checkbox:checked {
          background: #654321;
          border-color: #654321;
        }
        
        .vintage-checkbox:checked::after {
          content: '✓';
          position: absolute;
          top: -3px;
          left: 0px;
          color: #f9f6f0;
          font-size: 11px;
          font-weight: bold;
        }
        
        @media (min-width: 640px) {
          .vintage-checkbox:checked::after {
            top: -2px;
            left: 2px;
            font-size: 14px;
          }
        }
        
        .checkbox-label {
          font-family: 'Crimson Text', serif;
          font-size: 0.85rem;
          color: #3c2415;
          cursor: pointer;
          line-height: 1.3;
        }
        
        @media (min-width: 640px) {
          .checkbox-label {
            font-size: 1rem;
          }
        }
        
        .confession-button {
          background: linear-gradient(145deg, #8b7765 0%, #654321 50%, #8b7765 100%);
          border: none;
          color: #f9f6f0;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem;
          font-weight: 600;
          padding: 12px 20px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 4px 16px rgba(101, 67, 33, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          width: 100%;
          max-width: 300px;
        }
        
        @media (min-width: 640px) {
          .confession-button {
            font-size: 1.4rem;
            padding: 16px 40px;
            border-radius: 8px;
            box-shadow: 
              0 6px 20px rgba(101, 67, 33, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
          }
        }
        
        .confession-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 
            0 6px 20px rgba(101, 67, 33, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          background: linear-gradient(145deg, #a0815a 0%, #654321 50%, #a0815a 100%);
        }
        
        @media (min-width: 640px) {
          .confession-button:hover:not(:disabled) {
            box-shadow: 
              0 8px 25px rgba(101, 67, 33, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
          }
        }
        
        .confession-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .confession-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }
        
        .confession-button:hover::before {
          left: 100%;
        }
        
        .button-container {
          text-align: center;
          padding-top: 12px;
        }
        
        @media (min-width: 640px) {
          .button-container {
            padding-top: 20px;
          }
        }
        
        .ornamental-divider {
          text-align: center;
          margin: 12px 0;
          position: relative;
        }
        
        @media (min-width: 640px) {
          .ornamental-divider {
            margin: 30px 0;
          }
        }
        
        .ornamental-divider::before,
        .ornamental-divider::after {
          content: '';
          position: absolute;
          top: 50%;
          width: 25%;
          height: 1px;
          background: linear-gradient(to right, transparent, #8b7765, transparent);
        }
        
        @media (min-width: 640px) {
          .ornamental-divider::before,
          .ornamental-divider::after {
            width: 30%;
          }
        }
        
        .ornamental-divider::before { left: 0; }
        .ornamental-divider::after { right: 0; }
        
        .divider-symbol {
          font-size: 1rem;
          color: #8b7765;
          background: linear-gradient(135deg, #f7f3e9, #f1ead5);
          padding: 0 8px;
        }
        
        @media (min-width: 640px) {
          .divider-symbol {
            font-size: 1.5rem;
            padding: 0 15px;
          }
        }
        
        .status-message {
          border-radius: 8px;
          padding: 12px;
          text-align: center;
          font-family: 'Crimson Text', serif;
          position: relative;
          overflow: hidden;
        }
        
        @media (min-width: 640px) {
          .status-message {
            border-radius: 12px;
            padding: 20px;
          }
        }
        
        .status-success {
          background: linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(139, 195, 74, 0.1));
          border: 2px solid rgba(76, 175, 80, 0.3);
          color: #2e7d32;
        }
        
        .status-error {
          background: linear-gradient(135deg, rgba(244, 67, 54, 0.1), rgba(233, 30, 99, 0.1));
          border: 2px solid rgba(244, 67, 54, 0.3);
          color: #c62828;
        }
        
        .status-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem;
          margin: 0 0 4px 0;
        }
        
        @media (min-width: 640px) {
          .status-title {
            font-size: 1.4rem;
            margin: 0 0 8px 0;
          }
        }
        
        .status-text {
          font-family: 'Crimson Text', serif;
          font-size: 0.85rem;
          margin: 0;
          font-style: italic;
        }
        
        @media (min-width: 640px) {
          .status-text {
            font-size: 1rem;
          }
        }
        
        .footer-quote {
          text-align: center;
          margin-top: 16px;
          padding: 12px;
        }
        
        @media (min-width: 640px) {
          .footer-quote {
            margin-top: 40px;
            padding: 20px;
          }
        }
        
        .footer-text {
          font-family: 'Crimson Text', serif;
          font-size: 0.8rem;
          color: #6d5a47;
          font-style: italic;
          margin: 0;
          line-height: 1.4;
        }
        
        @media (min-width: 640px) {
          .footer-text {
            font-size: 0.95rem;
            line-height: 1.6;
          }
        }
        
        .footer-symbol {
          margin-top: 6px;
          font-size: 0.9rem;
          opacity: 0.6;
        }
        
        @media (min-width: 640px) {
          .footer-symbol {
            margin-top: 10px;
            font-size: 1.2rem;
          }
        }
      `}</style>
      
      <div className="parchment-bg">
        <div className="main-container">
          
          {/* Vintage Header */}
          <div className="header-container fade-in">
            <div className="header-candle gentle-float candle-flicker">🕯️</div>
            <h1 className="header-title">
              Anonymous Confession
            </h1>
            <p className="header-subtitle">
              Pour your heart onto parchment, dear soul
            </p>
            
            <div className="ornamental-divider">
              <span className="divider-symbol">❦</span>
            </div>
          </div>

          {/* Main Form */}
          <div className="aged-paper ornate-border form-container fade-in">
            
            {/* Decorative corner flourishes */}
            <div className="corner-flourish top-left">❦</div>
            <div className="corner-flourish top-right">❦</div>
            <div className="corner-flourish bottom-left">❦</div>
            <div className="corner-flourish bottom-right">❦</div>

            <form onSubmit={handleSubmit} className="form-content">
              
              {/* Recipient Email */}
              <div>
                <label className="vintage-label">
                  <span style={{ marginRight: '8px' }}>📮</span>
                  To My Beloved
                  <span style={{ color: '#c62828', marginLeft: '4px' }}>*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.recipientEmail}
                  onChange={(e) => setFormData({...formData, recipientEmail: e.target.value})}
                  placeholder="her.heart@email.com"
                  className="quill-input"
                />
              </div>

              {/* Anonymous Toggle */}
              <div className="aged-paper anonymous-section">
                <div className="anonymous-header">
                  <span style={{ fontSize: '1.1rem' }}>🎭</span>
                  <span className="vintage-label" style={{ margin: 0, fontSize: '1rem' }}>
                    Cloak of Anonymity
                  </span>
                </div>
                
                <div className="anonymous-checkbox-container">
                  <input
                    type="checkbox"
                    id="anonymous"
                    checked={formData.isAnonymous}
                    onChange={(e) => setFormData({...formData, isAnonymous: e.target.checked})}
                    className="vintage-checkbox"
                  />
                  <label htmlFor="anonymous" className="checkbox-label">
                    Send from the shadows (recommended for matters of the heart)
                  </label>
                </div>
              </div>

              {/* Sender Name - Only if not anonymous */}
              {!formData.isAnonymous && (
                <div className="fade-in">
                  <label className="vintage-label">
                    <span style={{ marginRight: '8px' }}>✒️</span>
                    Signed with affection
                  </label>
                  <input
                    type="text"
                    value={formData.senderName}
                    onChange={(e) => setFormData({...formData, senderName: e.target.value})}
                    placeholder="Your name or initials..."
                    className="quill-input"
                  />
                </div>
              )}

              {/* Message Field */}
              <div>
                <label className="vintage-label">
                  <span style={{ marginRight: '8px' }}>💕</span>
                  Your Heart&apos;s Confession
                  <span style={{ color: '#c62828', marginLeft: '4px' }}>*</span>
                </label>
                <textarea
                  required
                  rows={10}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="My dearest...&#10;&#10;For so long I have carried these words in my heart, and now I find the courage to set them free upon this parchment...&#10;&#10;With all the love I dare not speak aloud,&#10;A secret admirer"
                  className="confession-textarea"
                  maxLength={2000}
                />
                
                <div className="textarea-footer">
                  <span style={{
                    color: '#6d5a47',
                    fontStyle: 'italic',
                    fontFamily: 'Crimson Text, serif'
                  }}>
                    ✨ Let your heart guide your quill
                  </span>
                  <span style={{
                    fontFamily: 'Crimson Text, serif',
                    color: formData.message.length > 1800 ? '#c62828' : '#6d5a47'
                  }}>
                    {formData.message.length}/2000
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <div className="button-container">
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.message.trim() || !formData.recipientEmail}
                  className="confession-button gentle-float"
                >
                  <span style={{ position: 'relative', zIndex: 1 }}>
                    {isSubmitting ? (
                      <>
                        <span style={{ marginRight: '8px' }}>🕊️</span>
                        Sending with tender care...
                      </>
                    ) : (
                      <>
                        <span style={{ marginRight: '8px' }}>💌</span>
                        Send Anonymous Confession
                        <span style={{ marginLeft: '8px' }}>🌹</span>
                      </>
                    )}
                  </span>
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="status-message status-success fade-in">
                  <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>🌹✨💕</div>
                  <h3 className="status-title">
                    Your confession has taken flight!
                  </h3>
                  <p className="status-text">
                    Like a dove carrying precious words, your message shall reach their heart.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="status-message status-error fade-in">
                  <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>🥀💔🕯️</div>
                  <h3 className="status-title">
                    Alas, fate has intervened...
                  </h3>
                  <p className="status-text">
                    Fear not, dear heart. Your words remain safe. Please try once more.
                  </p>
                </div>
              )}
            </form>
          </div>
          
          {/* Footer Quote */}
          <div className="footer-quote fade-in">
            <p className="footer-text">
              &quot;The heart that loves is always young, and the soul that confesses finds peace.&quot;
            </p>
            <div className="footer-symbol">❦</div>
          </div>
        </div>
      </div>
    </>
  );
}