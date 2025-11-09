import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, AlertTriangle, AlertCircle, Shield, Brain, Activity, PlayCircle, RotateCcw } from 'lucide-react';
import { Button } from './ui/button';

interface BackendDashboardProps {
  demoStep: number;
  onStartDemo: () => void;
  onReset: () => void;
}

export function BackendDashboard({ demoStep, onStartDemo, onReset }: BackendDashboardProps) {
  return (
    <div className="space-y-6">
      {/* Control Buttons */}
      <div className="flex gap-4 justify-center">
        {demoStep === 0 && (
          <Button
            onClick={onStartDemo}
            className="text-white px-8 py-6 rounded-xl shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #0064B7 0%, #742C9F 100%)',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '18px'
            }}
          >
            <PlayCircle className="w-6 h-6 mr-2" />
            Start Call Simulation
          </Button>
        )}
        {demoStep > 0 && (
          <Button
            onClick={onReset}
            className="text-white px-6 py-4 rounded-xl"
            style={{
              background: 'rgba(255,255,255,0.1)',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Reset Demo
          </Button>
        )}
      </div>

      {/* Network Intelligence Check */}
      <div className="rounded-3xl p-8 shadow-2xl" style={{
        background: 'linear-gradient(135deg, rgba(0, 100, 183, 0.15) 0%, rgba(116, 44, 159, 0.15) 100%)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        <h3 className="text-white text-2xl mb-8" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}>
          Network Intelligence Check — Powered by CAMARA APIs
        </h3>

        <div className="grid grid-cols-5 gap-4 mb-6">
          <CAMARACard
            title="Device Status"
            status="Verified"
            icon={<CheckCircle className="w-7 h-7" />}
            color="green"
            delay={0.5}
            active={demoStep >= 1}
          />
          <CAMARACard
            title="Number Verification"
            status="Verified"
            icon={<CheckCircle className="w-7 h-7" />}
            color="green"
            delay={1.5}
            active={demoStep >= 1}
          />
          <CAMARACard
            title="KYC Match"
            status="Suspicious"
            icon={<AlertTriangle className="w-7 h-7" />}
            color="orange"
            delay={2.5}
            active={demoStep >= 1}
          />
          <CAMARACard
            title="SIM Swap"
            status="Alert"
            icon={<AlertCircle className="w-7 h-7" />}
            color="red"
            delay={3.5}
            active={demoStep >= 1}
          />
          <CAMARACard
            title="Device Swap"
            status="Alert"
            icon={<AlertCircle className="w-7 h-7" />}
            color="red"
            delay={4.5}
            active={demoStep >= 1}
          />
        </div>

        {/* Network Trust Score */}
        <AnimatePresence>
          {demoStep >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 5.5 }}
            >
              <div className="bg-black/30 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Network Trust Score
                  </span>
                  <span className="text-red-400 text-lg">72 – High Risk</span>
                </div>
                <div className="w-full h-5 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full"
                    style={{
                      background: 'linear-gradient(90deg, #22c55e 0%, #f59e0b 50%, #ef4444 100%)'
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2, delay: 6 }}
                  >
                    <motion.div
                      className="h-full w-1 bg-white shadow-lg"
                      style={{ marginLeft: '72%' }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 7.5 }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Deepfake Detection Engine */}
      <AnimatePresence>
        {demoStep >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(116, 44, 159, 0.15) 0%, rgba(0, 200, 215, 0.15) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <h3 className="text-white text-2xl mb-8" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}>
              Deepfake Detection Engine (Librosa + Deep Learning)
            </h3>

            {/* AI Waveform Visualization */}
            <div className="mb-8 bg-black/40 rounded-2xl p-8 flex items-center justify-center" style={{ height: '140px' }}>
              <WaveformAnimation />
            </div>

            {/* Processing Steps */}
            <div className="grid grid-cols-5 gap-4 mb-8">
              <ProcessingStep title="Secure Capture" delay={1.5} />
              <ProcessingStep title="Signal Processing" delay={2.5} />
              <ProcessingStep title="Feature Extraction" delay={3.5} />
              <ProcessingStep title="Deepfake Detection" delay={4.5} />
              <ProcessingStep title="Decision Output" delay={5.5} />
            </div>

            {/* Result */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 6.5 }}
              className="bg-red-500/20 border-2 border-red-400 rounded-2xl p-6 text-center"
            >
              <Brain className="w-10 h-10 text-red-400 mx-auto mb-3" />
              <p className="text-white text-xl" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>
                Synthetic Probability = 84% (High Risk)
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Alert Banner */}
      <AnimatePresence>
        {demoStep >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 7.5 }}
            className="rounded-3xl p-8 text-center shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.3) 0%, rgba(220, 38, 38, 0.3) 100%)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(239, 68, 68, 0.5)'
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <h3 className="text-white text-3xl mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}>
                🚨 Call Disconnected — AI Voice Fraud Detected
              </h3>
            </motion.div>
            <p className="text-red-200 text-lg">Secured by Telstra Network and CAMARA APIs</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* End State */}
      <AnimatePresence>
        {demoStep >= 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 9 }}
            className="text-center"
          >
            <motion.p
              className="text-2xl"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '600',
                background: 'linear-gradient(90deg, #742C9F, #00C8D7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💜 Built for Telstra Connected Future Hackathon ❤️
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface CAMARACardProps {
  title: string;
  status: string;
  icon: React.ReactNode;
  color: 'green' | 'orange' | 'red' | 'blue';
  delay: number;
  active: boolean;
}

function CAMARACard({ title, status, icon, color, delay, active }: CAMARACardProps) {
  const colors = {
    green: {
      bg: 'rgba(34, 197, 94, 0.2)',
      border: 'rgba(34, 197, 94, 0.5)',
      text: '#22c55e',
      glow: '0 0 20px rgba(34, 197, 94, 0.5)'
    },
    orange: {
      bg: 'rgba(245, 158, 11, 0.2)',
      border: 'rgba(245, 158, 11, 0.5)',
      text: '#f59e0b',
      glow: '0 0 20px rgba(245, 158, 11, 0.5)'
    },
    red: {
      bg: 'rgba(239, 68, 68, 0.2)',
      border: 'rgba(239, 68, 68, 0.5)',
      text: '#ef4444',
      glow: '0 0 20px rgba(239, 68, 68, 0.5)'
    },
    blue: {
      bg: 'rgba(0, 200, 215, 0.2)',
      border: 'rgba(0, 200, 215, 0.5)',
      text: '#00C8D7',
      glow: '0 0 20px rgba(0, 200, 215, 0.5)'
    }
  };

  const colorScheme = colors[color];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={active ? {
        opacity: 1,
        scale: 1,
        boxShadow: [colorScheme.glow, 'none', colorScheme.glow]
      } : { opacity: 0.3, scale: 0.8 }}
      transition={{
        delay,
        duration: 0.4,
        boxShadow: { duration: 2, repeat: Infinity, delay: delay + 0.5 }
      }}
      className="rounded-xl p-5 text-center"
      style={{
        background: colorScheme.bg,
        border: `2px solid ${colorScheme.border}`
      }}
    >
      <div className="flex items-center justify-center mb-3" style={{ color: colorScheme.text }}>
        {icon}
      </div>
      <p className="text-white text-sm mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
        {title}
      </p>
      <p className="text-sm" style={{ color: colorScheme.text, fontWeight: '600' }}>
        {status}
      </p>
    </motion.div>
  );
}

function ProcessingStep({ title, delay }: { title: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-cyan-500/20 border-2 border-cyan-400/50 rounded-xl p-4 text-center"
    >
      <motion.div
        className="w-10 h-10 mx-auto mb-3 bg-cyan-400 rounded-full flex items-center justify-center"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ delay: delay + 0.5, duration: 0.5 }}
      >
        <CheckCircle className="w-6 h-6 text-white" />
      </motion.div>
      <p className="text-cyan-300 text-sm" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '500' }}>
        {title}
      </p>
    </motion.div>
  );
}

function WaveformAnimation() {
  return (
    <div className="flex items-center justify-center gap-1 h-full">
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1 rounded-full"
          style={{
            background: 'linear-gradient(180deg, #00C8D7, #ef4444)',
            height: '20px'
          }}
          animate={{
            height: [
              '20px',
              `${Math.random() * 80 + 20}px`,
              '20px'
            ]
          }}
          transition={{
            duration: 0.5 + Math.random() * 0.5,
            repeat: Infinity,
            delay: i * 0.05
          }}
        />
      ))}
    </div>
  );
}
