import { motion } from 'motion/react';
import { CheckCircle, Circle } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
}

const steps = [
  { id: 1, label: "It all starts with a call…", minStep: 1 },
  { id: 2, label: "Telstra's AI begins analysing the network.", minStep: 1 },
  { id: 3, label: "CAMARA APIs validate the connection in real time.", minStep: 1 },
  { id: 4, label: "The user picks up… but something feels off.", minStep: 2 },
  { id: 5, label: "AI listens for authenticity — voice doesn't match.", minStep: 2 },
  { id: 6, label: "Deepfake detected. Call terminated automatically.", minStep: 2 },
  { id: 7, label: "You stay protected with Fair Dinkum.", minStep: 2 }
];

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  if (currentStep === 0) return null;

  return (
    <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40">
      <div
        className="rounded-3xl p-8 backdrop-blur-lg"
        style={{
          background: 'rgba(0, 33, 71, 0.85)',
          border: '2px solid rgba(0, 200, 215, 0.3)',
          boxShadow: '0 12px 48px rgba(0, 0, 0, 0.6)',
          maxWidth: '420px'
        }}
      >
        <h3
          className="text-white mb-8 text-center"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '24px',
            fontWeight: '700',
            textShadow: '0 0 15px rgba(0, 200, 215, 0.6)'
          }}
        >
          Demo Flow
        </h3>
        <div className="space-y-5">
          {steps.map((step, index) => {
            const isActive = currentStep >= step.minStep;
            const isCurrentlyHighlighted = 
              (currentStep === 1 && step.id <= 3) ||
              (currentStep === 2 && step.id > 3);
            
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isActive ? 1 : 0.3,
                  x: 0 
                }}
                transition={{ delay: index * 0.15 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 mt-1">
                  {isActive ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      <CheckCircle
                        className="w-7 h-7"
                        style={{
                          color: isCurrentlyHighlighted ? '#00C8D7' : '#22c55e',
                          filter: isCurrentlyHighlighted ? 'drop-shadow(0 0 8px rgba(0, 200, 215, 0.8))' : 'none'
                        }}
                      />
                    </motion.div>
                  ) : (
                    <Circle className="w-7 h-7 text-gray-500" />
                  )}
                </div>
                <p
                  className="flex-1 leading-relaxed"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '17px',
                    color: isActive ? (isCurrentlyHighlighted ? '#00C8D7' : '#ffffff') : '#6b7280',
                    fontWeight: isCurrentlyHighlighted ? '600' : '400',
                    textShadow: isCurrentlyHighlighted ? '0 0 10px rgba(0, 200, 215, 0.4)' : 'none'
                  }}
                >
                  {step.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
