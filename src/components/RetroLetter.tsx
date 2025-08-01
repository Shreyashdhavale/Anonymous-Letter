// src/components/RetroLetter.tsx
"use client"; 
import LetterForm from './LetterForm';

export default function RetroLetter() {
  return (
    <>
      <style jsx>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        
        @keyframes seal-bounce {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-4px) rotate(2deg); }
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .animate-float {
          animation: float 2s ease-in-out infinite;
        }
        
        .animate-seal-bounce {
          animation: seal-bounce 3s ease-in-out infinite;
        }
        
        .vintage-paper {
          background: linear-gradient(135deg, #fefdf8 0%, #f9f6f0 25%, #fefdf8 50%, #f4f1e8 75%, #fefdf8 100%);
          box-shadow: 
            inset 0 1px 0 rgba(255, 255, 255, 0.8),
            inset 0 -1px 0 rgba(139, 115, 85, 0.2),
            0 24px 64px rgba(139, 69, 19, 0.3),
            0 12px 32px rgba(107, 68, 35, 0.2);
        }
        
        .letter-shadow {
          transition: all 0.7s ease-out;
          transform: rotate(-0.5deg);
        }
        
        .letter-shadow:hover {
          transform: rotate(0deg) scale(1.02);
        }
        
        .wax-seal {
          background: radial-gradient(circle, #800020 0%, #b7410e 40%, #8b1538 100%);
          box-shadow: 
            0 8px 24px rgba(128, 0, 32, 0.4),
            inset 0 2px 4px rgba(255, 255, 255, 0.3),
            inset 0 -2px 4px rgba(0, 0, 0, 0.3);
        }
      `}</style>
      
      <div style={{
        position: 'relative',
        maxWidth: '1024px',
        margin: '0 auto'
      }} className="animate-slide-up">
        {/* Background shadows for depth */}
        <div style={{
          position: 'absolute',
          inset: '0',
          background: '#6b4423',
          opacity: 0.3,
          borderRadius: '12px',
          transform: 'rotate(2deg) translateX(12px) translateY(12px)',
          filter: 'blur(2px)'
        }}></div>
        <div style={{
          position: 'absolute',
          inset: '0',
          background: '#8b7355',
          opacity: 0.2,
          borderRadius: '12px',
          transform: 'rotate(1deg) translateX(8px) translateY(8px)',
          filter: 'blur(2px)'
        }}></div>
        
        {/* Main Letter Container */}
        <div className="vintage-paper letter-shadow" style={{
          border: '4px solid #8b7355',
          borderRadius: '12px',
          position: 'relative'
        }}>
          
          {/* Decorative Corner Stamps */}
          <div style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            width: '64px',
            height: '64px',
            background: '#d4af37',
            opacity: 0.6,
            borderRadius: '8px',
            transform: 'rotate(-12deg)',
            backgroundImage: 'linear-gradient(45deg, transparent 0%, transparent 2px, #8b7355 2px, #8b7355 4px, transparent 4px), linear-gradient(-45deg, transparent 0%, transparent 2px, #8b7355 2px, #8b7355 4px, transparent 4px)',
            backgroundSize: '8px 8px'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '48px',
            height: '48px',
            background: '#b7410e',
            opacity: 0.5,
            borderRadius: '8px',
            transform: 'rotate(12deg)',
            backgroundImage: 'linear-gradient(45deg, transparent 0%, transparent 2px, #8b7355 2px, #8b7355 4px, transparent 4px), linear-gradient(-45deg, transparent 0%, transparent 2px, #8b7355 2px, #8b7355 4px, transparent 4px)',
            backgroundSize: '8px 8px'
          }}></div>
          
          {/* Wax Seal */}
          <div className="wax-seal animate-seal-bounce" style={{
            position: 'absolute',
            top: '-32px',
            right: '64px',
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{
              color: '#fefdf8',
              fontFamily: "'Dancing Script', cursive",
              fontSize: '1.5rem',
              fontWeight: 'bold'
            }}>♡</span>
          </div>
          
          {/* Letter Header */}
          <div style={{
            borderBottom: '4px double #8b7355',
            paddingBottom: '32px',
            marginBottom: '40px',
            position: 'relative',
            background: 'linear-gradient(to right, #f9f6f0, #fefdf8, #f9f6f0)',
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px'
          }}>
            <div style={{
              position: 'absolute',
              inset: '0',
              opacity: 0.1,
              backgroundImage: 'linear-gradient(45deg, transparent 24%, rgba(139, 115, 85, 0.05) 25%, rgba(139, 115, 85, 0.05) 26%, transparent 27%, transparent 74%, rgba(139, 115, 85, 0.05) 75%, rgba(139, 115, 85, 0.05) 76%, transparent 77%), linear-gradient(-45deg, transparent 24%, rgba(139, 115, 85, 0.05) 25%, rgba(139, 115, 85, 0.05) 26%, transparent 27%, transparent 74%, rgba(139, 115, 85, 0.05) 75%, rgba(139, 115, 85, 0.05) 76%, transparent 77%)'
            }}></div>
            
            <div style={{
              position: 'relative',
              zIndex: 10,
              paddingTop: '48px',
              paddingLeft: '32px',
              paddingRight: '32px'
            }}>
              {/* Ornamental Top Border */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '32px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '32px', height: '2px', background: '#d4af37' }}></div>
                  <div style={{ width: '16px', height: '16px', background: '#d4af37', transform: 'rotate(45deg)' }}></div>
                  <div style={{ width: '48px', height: '2px', background: '#d4af37' }}></div>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    background: '#8b7355',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{ width: '8px', height: '8px', background: '#d4af37', borderRadius: '50%' }}></div>
                  </div>
                  <div style={{ width: '48px', height: '2px', background: '#d4af37' }}></div>
                  <div style={{ width: '16px', height: '16px', background: '#d4af37', transform: 'rotate(45deg)' }}></div>
                  <div style={{ width: '32px', height: '2px', background: '#d4af37' }}></div>
                </div>
              </div>
              
              {/* Date and Location */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '24px',
                color: '#8b7355'
              }}>
                <div style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: '1.125rem',
                  fontStyle: 'italic'
                }}>
                  From the heart...
                </div>
                <div style={{
                  fontFamily: "'Merriweather', serif",
                  fontSize: '0.875rem'
                }}>
                  {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Lined Paper Background for Form */}
          <div style={{
            position: 'relative',
            paddingLeft: '32px',
            paddingRight: '32px',
            paddingBottom: '48px'
          }}>
            {/* Paper Lines */}
            <div style={{
              position: 'absolute',
              left: '32px',
              right: '32px',
              top: '0',
              bottom: '48px',
              opacity: 0.15,
              pointerEvents: 'none',
              backgroundImage: 'linear-gradient(transparent 0px, transparent 24px, rgba(139, 115, 85, 0.2) 25px, rgba(139, 115, 85, 0.2) 26px, transparent 27px)',
              backgroundSize: '100% 27px'
            }}></div>
            
            {/* Red Margin Line */}
            <div style={{
              position: 'absolute',
              left: '80px',
              top: '0',
              bottom: '48px',
              width: '2px',
              background: 'rgba(220, 53, 69, 0.3)'
            }}></div>
            
            {/* Form Content */}
            <div style={{ position: 'relative', zIndex: 10 }}>
              <LetterForm />
            </div>
          </div>

          {/* Decorative Footer */}
          <div style={{
            margin: '0 32px 32px',
            paddingTop: '32px',
            borderTop: '2px dotted #8b7355',
            background: 'linear-gradient(to right, transparent, #f9f6f0, transparent)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
              color: '#8b7355',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div className="animate-float" style={{
                  width: '12px',
                  height: '12px',
                  background: '#d4af37',
                  borderRadius: '50%'
                }}></div>
                <span style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: '1.25rem'
                }}>With sincere feelings</span>
              </div>
              <div style={{
                width: '64px',
                height: '2px',
                background: '#8b7355',
                opacity: 0.5
              }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: '1.25rem'
                }}>Anonymous Sender</span>
                <div className="animate-float" style={{
                  width: '12px',
                  height: '12px',
                  background: '#b7410e',
                  borderRadius: '50%',
                  animationDelay: '0.5s'
                }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="animate-float" style={{
          position: 'absolute',
          top: '-48px',
          left: '-32px',
          width: '96px',
          height: '96px',
          background: '#d4af37',
          opacity: 0.2,
          borderRadius: '50%',
          filter: 'blur(12px)'
        }}></div>
        <div className="animate-float" style={{
          position: 'absolute',
          bottom: '-64px',
          right: '-48px',
          width: '128px',
          height: '128px',
          background: '#b7410e',
          opacity: 0.15,
          borderRadius: '50%',
          filter: 'blur(16px)',
          animationDelay: '1s'
        }}></div>
      </div>
    </>
  );
}