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
        
        .aged-paper {
          background: #f9f6f0;
          box-shadow: 
            inset 0 0 20px rgba(139, 119, 101, 0.1),
            0 8px 25px rgba(101, 67, 33, 0.15),
            0 3px 10px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(139, 119, 101, 0.3);
        }
        
        .ornate-border {
          border: 3px solid transparent;
          background: linear-gradient(#f9f6f0, #f9f6f0) padding-box,
                      linear-gradient(45deg, #8b7765, #654321, #a0815a, #8b7765) border-box;
          position: relative;
        }
        
        .ornate-border::before {
          content: '';
          position: absolute;
          inset: -6px;
          background: linear-gradient(45deg, #8b7765, #654321, #a0815a);
          border-radius: inherit;
          z-index: -1;
          opacity: 0.3;
        }
        
        .quill-input {
          background: transparent;
          border: none;
          border-bottom: 2px solid #8b7765;
          outline: none;
          font-family: 'Crimson Text', serif;
          font-size: 1.125rem;
          color: #3c2415;
          padding: 12px 0;
          position: relative;
          transition: all 0.4s ease;
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
          font-size: 1.3rem;
          color: #3c2415;
          margin-bottom: 8px;
          display: block;
          position: relative;
        }
        
        .confession-textarea {
          background: 
            linear-gradient(transparent 0px, transparent 31px, rgba(139, 119, 101, 0.15) 32px, rgba(139, 119, 101, 0.15) 33px, transparent 34px),
            linear-gradient(90deg, transparent 39px, rgba(101, 67, 33, 0.2) 40px, rgba(101, 67, 33, 0.2) 42px, transparent 43px),
            #f9f6f0;
          background-size: 100% 34px, 100% 100%, 100% 100%;
          border: 2px solid #8b7765;
          border-radius: 8px;
          padding: 20px 20px 20px 50px;
          font-family: 'Crimson Text', serif;
          font-size: 1.1rem;
          line-height: 1.8;
          color: #3c2415;
          resize: none;
          outline: none;
          transition: all 0.3s ease;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
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
        
        .vintage-checkbox {
          appearance: none;
          width: 20px;
          height: 20px;
          border: 2px solid #8b7765;
          border-radius: 3px;
          background: #f9f6f0;
          cursor: pointer;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .vintage-checkbox:checked {
          background: #654321;
          border-color: #654321;
        }
        
        .vintage-checkbox:checked::after {
          content: '✓';
          position: absolute;
          top: -2px;
          left: 2px;
          color: #f9f6f0;
          font-size: 14px;
          font-weight: bold;
        }
        
        .confession-button {
          background: linear-gradient(145deg, #8b7765 0%, #654321 50%, #8b7765 100%);
          border: none;
          color: #f9f6f0;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem;
          font-weight: 600;
          padding: 16px 40px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 6px 20px rgba(101, 67, 33, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
        
        .confession-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 
            0 8px 25px rgba(101, 67, 33, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          background: linear-gradient(145deg, #a0815a 0%, #654321 50%, #a0815a 100%);
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
        
        .ornamental-divider {
          text-align: center;
          margin: 30px 0;
          position: relative;
        }
        
        .ornamental-divider::before,
        .ornamental-divider::after {
          content: '';
          position: absolute;
          top: 50%;
          width: 30%;
          height: 1px;
          background: linear-gradient(to right, transparent, #8b7765, transparent);
        }
        
        .ornamental-divider::before { left: 0; }
        .ornamental-divider::after { right: 0; }
        
        .status-message {
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          font-family: 'Crimson Text', serif;
          position: relative;
          overflow: hidden;
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
      `}</style>
      
      <div className="parchment-bg" style={{ 
        minHeight: '100vh', 
        padding: '40px 20px',
        backgroundAttachment: 'fixed'
      }}>
        <div style={{ 
          maxWidth: '600px', 
          margin: '0 auto',
          position: 'relative'
        }}>
          
          {/* Vintage Header */}
          <div className="fade-in" style={{ 
            textAlign: 'center', 
            marginBottom: '40px',
            position: 'relative'
          }}>
            <div className="gentle-float candle-flicker" style={{ 
              fontSize: '3rem', 
              marginBottom: '10px' 
            }}>🕯️</div>
            <h1 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '2.5rem',
              fontWeight: 300,
              color: '#3c2415',
              marginBottom: '8px',
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
            }}>
              Anonymous Confession
            </h1>
            <p style={{
              fontFamily: 'Crimson Text, serif',
              fontSize: '1.1rem',
              color: '#6d5a47',
              fontStyle: 'italic',
              margin: 0
            }}>
              Pour your heart onto parchment, dear soul
            </p>
            
            <div className="ornamental-divider">
              <span style={{ 
                fontSize: '1.5rem',
                color: '#8b7765',
                background: 'linear-gradient(135deg, #f7f3e9, #f1ead5)',
                padding: '0 15px'
              }}>❦</span>
            </div>
          </div>

          {/* Main Form */}
          <div className="aged-paper ornate-border fade-in" style={{ 
            padding: '40px',
            borderRadius: '12px',
            position: 'relative'
          }}>
            
            {/* Decorative corner flourishes */}
            <div style={{
              position: 'absolute',
              top: '15px',
              left: '15px',
              fontSize: '1.2rem',
              color: '#8b7765',
              opacity: 0.6
            }}>❦</div>
            <div style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              fontSize: '1.2rem',
              color: '#8b7765',
              opacity: 0.6
            }}>❦</div>
            <div style={{
              position: 'absolute',
              bottom: '15px',
              left: '15px',
              fontSize: '1.2rem',
              color: '#8b7765',
              opacity: 0.6
            }}>❦</div>
            <div style={{
              position: 'absolute',
              bottom: '15px',
              right: '15px',
              fontSize: '1.2rem',
              color: '#8b7765',
              opacity: 0.6
            }}>❦</div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              
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
                  style={{ width: '100%' }}
                />
              </div>

              {/* Anonymous Toggle */}
              <div className="aged-paper" style={{ 
                padding: '24px',
                borderRadius: '8px',
                border: '1px solid rgba(139, 119, 101, 0.3)',
                background: 'rgba(249, 246, 240, 0.5)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '12px'
                }}>
                  <span style={{ fontSize: '1.5rem' }}>🎭</span>
                  <span className="vintage-label" style={{ margin: 0, fontSize: '1.2rem' }}>
                    Cloak of Anonymity
                  </span>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <input
                    type="checkbox"
                    id="anonymous"
                    checked={formData.isAnonymous}
                    onChange={(e) => setFormData({...formData, isAnonymous: e.target.checked})}
                    className="vintage-checkbox"
                  />
                  <label htmlFor="anonymous" style={{
                    fontFamily: 'Crimson Text, serif',
                    fontSize: '1rem',
                    color: '#3c2415',
                    cursor: 'pointer'
                  }}>
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
                    style={{ width: '100%' }}
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
                  rows={12}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="My dearest...&#10;&#10;For so long I have carried these words in my heart, and now I find the courage to set them free upon this parchment...&#10;&#10;With all the love I dare not speak aloud,&#10;A secret admirer"
                  className="confession-textarea"
                  maxLength={2000}
                  style={{ width: '100%' }}
                />
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '12px',
                  fontSize: '0.9rem'
                }}>
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
              <div style={{ 
                textAlign: 'center', 
                paddingTop: '20px' 
              }}>
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
                  <h3 style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.4rem',
                    margin: '0 0 8px 0'
                  }}>
                    Your confession has taken flight!
                  </h3>
                  <p style={{
                    fontFamily: 'Crimson Text, serif',
                    fontSize: '1rem',
                    margin: 0,
                    fontStyle: 'italic'
                  }}>
                    Like a dove carrying precious words, your message shall reach their heart.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="status-message status-error fade-in">
                  <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>🥀💔🕯️</div>
                  <h3 style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.4rem',
                    margin: '0 0 8px 0'
                  }}>
                    Alas, fate has intervened...
                  </h3>
                  <p style={{
                    fontFamily: 'Crimson Text, serif',
                    fontSize: '1rem',
                    margin: 0,
                    fontStyle: 'italic'
                  }}>
                    Fear not, dear heart. Your words remain safe. Please try once more.
                  </p>
                </div>
              )}
            </form>
          </div>
          
          {/* Footer Quote */}
          <div className="fade-in" style={{ 
            textAlign: 'center', 
            marginTop: '40px',
            padding: '20px'
          }}>
            <p style={{
              fontFamily: 'Crimson Text, serif',
              fontSize: '0.95rem',
              color: '#6d5a47',
              fontStyle: 'italic',
              margin: 0,
              lineHeight: 1.6
            }}>
              &quot;The heart that loves is always young, and the soul that confesses finds peace.&quot;
            </p>
            <div style={{ 
              marginTop: '10px',
              fontSize: '1.2rem',
              opacity: 0.6
            }}>❦</div>
          </div>
        </div>
      </div>
    </>
  );
}