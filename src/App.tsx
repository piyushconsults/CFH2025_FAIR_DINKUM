import { useState } from 'react';
import { MobileApp } from './components/MobileApp';
import { BackendDashboard } from './components/BackendDashboard';
import { StepIndicator } from './components/StepIndicator';

export default function App() {
  const [demoStep, setDemoStep] = useState(0);

  const startDemo = () => {
    setDemoStep(1);
    
    // Auto-advance to step 2 after incoming call is shown and risk assessed (7 seconds)
    setTimeout(() => {
      // This allows time for CAMARA validation (5 cards × 0.5s = 2.5s) + 
      // Trust Score (1s) + Risk warning display (3.5s)
    }, 7000);
  };

  const acceptCall = () => {
    setDemoStep(2);
  };

  const resetDemo = () => {
    setDemoStep(0);
  };

  return (
    <div className="w-full min-h-screen overflow-hidden relative" style={{
      background: 'linear-gradient(135deg, #002147 0%, #000B22 100%)'
    }}>
      {/* Header */}
      <div className="text-center py-10">
        <h1 className="text-white" style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '48px',
          fontWeight: '800',
          textShadow: '0 0 25px rgba(0, 200, 215, 0.6)',
          letterSpacing: '0.5px'
        }}>
          Fair Dinkum Prototype
        </h1>
        <div className="w-80 h-1 mx-auto mt-4" style={{
          background: 'linear-gradient(90deg, transparent, #00C8D7, transparent)',
          boxShadow: '0 0 20px rgba(0, 200, 215, 0.8)'
        }}></div>
      </div>

      {/* Step Indicator (Left Side) */}
      <StepIndicator currentStep={demoStep} />

      {/* Main Content Area */}
      <div className="flex items-start justify-center gap-8 px-8 relative">
        {/* Left Panel - Mobile App */}
        <div className="flex-1 max-w-[600px]">
          <div className="text-center mb-8">
            <h2 className="text-white" style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '26px',
              fontWeight: '700',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.6)'
            }}>
              User Mobile View – Powered with Fair Dinkum
            </h2>
          </div>
          <MobileApp demoStep={demoStep} onAcceptCall={acceptCall} />
        </div>

        {/* Vertical Divider */}
        <div className="w-1 h-[800px] self-start" style={{
          background: 'linear-gradient(180deg, #00C8D7 0%, #742C9F 100%)',
          boxShadow: '0 0 20px rgba(0, 200, 215, 0.6), 0 0 40px rgba(116, 44, 159, 0.4)'
        }}></div>

        {/* Right Panel - Backend Dashboard */}
        <div className="flex-1 max-w-[800px]">
          <div className="text-center mb-8">
            <h2 className="text-white" style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '26px',
              fontWeight: '700',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.6)'
            }}>
              Fair Dinkum integrated with Telstra Network Backend
            </h2>
          </div>
          <BackendDashboard demoStep={demoStep} onStartDemo={startDemo} onReset={resetDemo} />
        </div>
      </div>
    </div>
  );
}
