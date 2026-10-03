import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { TUTORIAL_POSTER_URL, TUTORIAL_VIDEO_URL } from '../constants';

interface TutorialModalProps {
  onClose: () => void;
}

const TutorialModal: React.FC<TutorialModalProps> = ({ onClose }) => {
  const closeRef = useRef<HTMLButtonElement>(null);

  // Close on Escape and move focus into the dialog
  useEffect(() => {
    closeRef.current?.focus();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="tutorial-title"
    >
      <div
        className="w-full max-w-5xl bg-[#1C1C1C] rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 sm:px-5 border-b border-white/10">
          <div>
            <h2 id="tutorial-title" className="font-serif italic text-xl text-white">
              How to use Reminisce.
            </h2>
            <p className="font-mono text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest">
              Video Tutorial
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 rounded-full text-white hover:bg-white/10 transition-all"
            title="Close (Esc)"
            aria-label="Close tutorial"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <video
          src={TUTORIAL_VIDEO_URL}
          poster={TUTORIAL_POSTER_URL}
          className="w-full max-h-[75vh] bg-black"
          controls
          autoPlay
          playsInline
        />
      </div>
    </div>
  );
};

export default TutorialModal;
