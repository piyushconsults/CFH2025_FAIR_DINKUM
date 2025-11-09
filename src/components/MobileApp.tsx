import { motion, AnimatePresence } from 'motion/react';
import { Phone, PhoneOff, Clock, AlertTriangle, Shield, Search } from 'lucide-react';
import { Button } from './ui/button';

interface MobileAppProps {
  demoStep: number;
  onAcceptCall: () => void;
}

export function MobileApp({ demoStep, onAcceptCall }: MobileAppProps) {
  return (
    <div className="relative mx-auto" style={{ width: '420px' }}>
      {/* Mobile Frame */}
      <div className="relative bg-white rounded-[40px] shadow-2xl overflow-hidden" style={{
        height: '800px',
        border: '12px solid #1a1a1a'
      }}>
        {/* Status Bar */}
        <div className="bg-white h-8 flex items-center justify-between px-8 text-xs">
          <span>9:41</span>
          <div className="flex gap-1">
            <div className="w-4 h-3 border border-black rounded-sm"></div>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative h-full bg-gradient-to-b from-slate-50 to-slate-100">
          <AnimatePresence mode="wait">
            {demoStep === 0 && <IdleScreen key="idle" />}
            {demoStep === 1 && <IncomingCallScreen key="incoming" onAccept={onAcceptCall} />}
            {demoStep === 2 && <CallInProgress key="progress" />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function IdleScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full flex flex-col items-center justify-center p-6"
    >
      <div className="text-center">
        <Shield className="w-32 h-32 mx-auto mb-8 text-blue-600" />
        <h2 className="text-3xl mb-5" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}>
          Fair Dinkum
        </h2>
        <p className="text-gray-600 text-lg mb-10">AI-Powered Fraud Protection</p>
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-between mb-5">
            <span className="text-gray-700 text-lg">Protection Status</span>
            <span className="text-green-600 text-lg">Active</span>
          </div>
          <div className="text-base text-gray-500">
            Calls Blocked Today: 3
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function IncomingCallScreen({ onAccept }: { onAccept: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="h-full flex flex-col items-center justify-between p-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0064B7 0%, #002147 100%)' }}
    >
      {/* Animated Wave Background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%']
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear'
        }}
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)'
        }}
      />

      <div className="flex-1 flex flex-col items-center justify-center relative z-10">
        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-6 shadow-2xl">
          <Phone className="w-16 h-16 text-blue-600" />
        </div>

        <h3 className="text-white text-2xl mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>
          Incoming Call
        </h3>
        <p className="text-white text-4xl mb-3">+61 491 234 567</p>
        <p className="text-blue-200 text-xl mb-8">Unknown Caller</p>

        {/* AI Scanning Indicator */}
        <motion.div
          className="bg-white/20 backdrop-blur-md rounded-2xl px-8 py-5 flex items-center gap-4 mb-6"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
          <span className="text-white text-base" style={{ fontFamily: 'Inter, sans-serif' }}>AI Defence scanning in progress…</span>
        </motion.div>

        {/* Risk Warning */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 7 }}
          className="bg-red-500/30 backdrop-blur-md border-2 border-red-400 rounded-2xl px-8 py-5"
        >
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-red-300 flex-shrink-0 mt-1" />
            <div>
              <p className="text-white text-lg mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>
                ⚠️ Network Risk Score: 72
              </p>
              <p className="text-red-200 text-base">Pick this call with caution</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-6 w-full relative z-10">
        <button
          className="flex-1 bg-red-500 hover:bg-red-600 text-white rounded-full py-7 flex items-center justify-center gap-3 shadow-lg transition-all text-lg"
          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}
        >
          <PhoneOff className="w-7 h-7" />
          Reject
        </button>
        <button
          onClick={onAccept}
          className="flex-1 text-white rounded-full py-7 flex items-center justify-center gap-3 shadow-lg transition-all text-lg"
          style={{
            background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: '600'
          }}
        >
          <Phone className="w-7 h-7" />
          Accept
        </button>
      </div>

      {/* Branding */}
      <p className="text-white/50 text-sm mt-5 relative z-10">Powered by Fair Dinkum</p>
    </motion.div>
  );
}

function CallInProgress() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full flex flex-col p-6"
      style={{ background: 'linear-gradient(135deg, #0064B7 0%, #002147 100%)' }}
    >
      {/* Timer */}
      <div className="text-center text-white mb-8 pt-4">
        <Clock className="w-8 h-8 mx-auto mb-3" />
        <div className="text-3xl" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>
          00:01:45
        </div>
      </div>

      {/* Risk Cards */}
      <div className="space-y-5 mb-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
          className="bg-white rounded-2xl p-6 shadow-lg"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-700 text-lg" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>
              Network Intel Check
            </span>
            <span className="text-red-600 text-lg">Risk Score: -72</span>
          </div>
          <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-red-500 to-red-600"
              initial={{ width: 0 }}
              animate={{ width: '72%' }}
              transition={{ duration: 1.5, delay: 1.8 }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.5 }}
          className="bg-white rounded-2xl p-6 shadow-lg"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-700 text-lg" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>
              Deepfake Check
            </span>
            <span className="text-orange-600 text-lg">Risk Score: -64</span>
          </div>
          <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-orange-500 to-orange-600"
              initial={{ width: 0 }}
              animate={{ width: '64%' }}
              transition={{ duration: 1.5, delay: 2.8 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Alert Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 6.5 }}
        className="bg-red-500/20 backdrop-blur-md border-2 border-red-400 rounded-2xl p-6 mb-6"
      >
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-8 h-8 text-red-300 flex-shrink-0 mt-1" />
          <div>
            <p className="text-white text-lg mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>
              ⚠️ Synthetic Voice Detected
            </p>
            <p className="text-red-200 text-base">Confidence: 92%</p>
          </div>
        </div>
      </motion.div>

      {/* Auto Disconnect Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: [1, 1.05, 1] }}
        transition={{ delay: 7.5, scale: { duration: 1, repeat: Infinity } }}
        className="w-full bg-red-600 text-white rounded-full py-6 flex items-center justify-center gap-3 shadow-lg text-lg"
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: '600',
          boxShadow: '0 0 30px rgba(239, 68, 68, 0.6)'
        }}
      >
        <PhoneOff className="w-7 h-7" />
        Auto Disconnecting & Report
      </motion.button>

      {/* SMS Alert */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 8.5 }}
        className="mt-6 bg-white rounded-2xl p-5 shadow-lg border-l-4 border-red-500"
      >
        <p className="text-gray-800 text-base mb-2">
          ⚠️ Synthetic voice detected. Fraud prevented successfully.
        </p>
        <p className="text-gray-400 text-sm">2:17 PM</p>
      </motion.div>

      {/* Call Logs Preview */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 9.5 }}
        className="mt-auto"
      >
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-white text-base">Recent Activity</span>
            <Search className="w-5 h-5 text-white/70" />
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between text-red-300">
              <span>+61 491 234 567</span>
              <span>Blocked</span>
            </div>
            <div className="flex items-center justify-between text-green-300">
              <span>Dad</span>
              <span>Safe</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
