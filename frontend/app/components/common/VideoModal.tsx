import { TrailerVideo } from "./Video";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title?: string;
  poster?: string;
}

export default function VideoModal({ isOpen, onClose, videoSrc, title = "Game Trailer", poster }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal Content */}
      <div className="relative bg-slate-900 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Video Player */}
        <div className="p-4">
          <TrailerVideo src={videoSrc} poster={poster} className="w-full aspect-video" />
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-700">
          <div className="text-center text-slate-400 text-sm">Nhấn ESC hoặc click bên ngoài để đóng</div>
        </div>
      </div>
    </div>
  );
}
