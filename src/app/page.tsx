// src/app/page.tsx
import RetroLetter from "@/components/RetroLetter";

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      padding: '48px 16px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'fixed',
        inset: '0',
        pointerEvents: 'none'
      }}>
        <div style={{
          position: 'absolute',
          top: '80px',
          left: '40px',
          width: '128px',
          height: '128px',
          background: '#d4af37',
          opacity: '0.1',
          borderRadius: '50%',
          filter: 'blur(16px)'
        }} className="animate-float"></div>
        <div style={{
          position: 'absolute',
          top: '33.333333%',
          right: '80px',
          width: '96px',
          height: '96px',
          background: '#b7410e',
          opacity: '0.15',
          borderRadius: '50%',
          filter: 'blur(12px)',
          animationDelay: '1s'
        }} className="animate-float"></div>
        <div style={{
          position: 'absolute',
          bottom: '128px',
          left: '25%',
          width: '160px',
          height: '160px',
          background: '#ffbf00',
          opacity: '0.08',
          borderRadius: '50%',
          filter: 'blur(24px)',
          animationDelay: '2s'
        }} className="animate-float"></div>
      </div>

      <div style={{
        position: 'relative',
        zIndex: '10',
        maxWidth: '1152px',
        margin: '0 auto'
      }}>
        {/* Enhanced Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '64px'
        }} className="animate-fade-in">
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <h1 style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              color: '#fefdf8',
              marginBottom: '24px',
              fontWeight: 'bold',
              textShadow: '0 25px 50px rgba(0, 0, 0, 0.25)'
            }}>
              Anonymous Letters
            </h1>
            <div style={{
              position: 'absolute',
              top: '-16px',
              right: '-16px',
              width: '64px',
              height: '64px',
              background: '#d4af37',
              opacity: '0.6',
              borderRadius: '50%',
              filter: 'blur(4px)',
              animation: 'float 2s ease-in-out infinite alternate'
            }}></div>
          </div>
          
          <div style={{ maxWidth: '768px', margin: '0 auto' }}>
            <p style={{
              color: '#fefdf8',
              fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
              marginBottom: '16px',
              fontFamily: "'Merriweather', serif",
              lineHeight: '1.6',
              textShadow: '0 4px 8px rgba(0, 0, 0, 0.25)'
            }}>
              Send heartfelt messages to someone special without fear of judgment.
            </p>
            <p style={{
              color: '#f9f6f0',
              fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
              fontFamily: "'Dancing Script', cursive",
              fontStyle: 'italic'
            }}>
              &ldquo;The most beautiful words are often the hardest to say in person&rdquo; ✨
            </p>
          </div>

          {/* Decorative divider */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '32px',
            gap: '16px'
          }}>
            <div style={{
              width: '64px',
              height: '2px',
              background: '#d4af37'
            }}></div>
            <div style={{
              width: '32px',
              height: '32px',
              background: '#d4af37',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontFamily: "'Dancing Script', cursive"
            }}>♡</div>
            <div style={{
              width: '64px',
              height: '2px',
              background: '#d4af37'
            }}></div>
          </div>
        </div>

        {/* Main Letter Component */}
        <RetroLetter />

        {/* Enhanced Footer */}
        <div style={{
          textAlign: 'center',
          marginTop: '80px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          <div style={{
            maxWidth: '512px',
            margin: '0 auto',
            padding: '24px',
            background: 'rgba(254, 253, 248, 0.1)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            borderRadius: '8px',
            backdropFilter: 'blur(4px)'
          }}>
            <p style={{
              color: '#fefdf8',
              fontFamily: "'Dancing Script', cursive",
              fontSize: '1.125rem',
              fontStyle: 'italic',
              lineHeight: '1.6'
            }}>
              &ldquo;The most beautiful things in life are not seen or touched, but felt with the heart.&rdquo;
            </p>
            <p style={{
              color: '#f9f6f0',
              fontSize: '0.875rem',
              marginTop: '8px'
            }}>— Helen Keller</p>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px',
            color: 'rgba(249, 246, 240, 0.8)',
            fontSize: '0.875rem',
            flexWrap: 'wrap'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span>🔒</span>
              <span>Completely Anonymous</span>
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span>💝</span>
              <span>Safe &amp; Respectful</span>
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span>✨</span>
              <span>From the Heart</span>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}