import React, { useState, useRef, useEffect } from "react";

interface VideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  poster?: string;
  onLoad?: () => void;
  onError?: () => void;
  fallbackImage?: string;
}

export default function Video({
  src,
  className = "",
  autoPlay = false,
  muted = true,
  loop = false,
  controls = false,
  poster,
  onLoad,
  onError,
  fallbackImage
}: VideoProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsLoading(false);
      onLoad?.();
    };

    const handleError = () => {
      setIsLoading(false);
      setHasError(true);
      onError?.();
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    // Timeout để tránh loading mãi nếu video không load được
    const timeoutId = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
        setHasError(true);
      }
    }, 5000); // 5 giây timeout

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("error", handleError);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      clearTimeout(timeoutId);
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("error", handleError);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, [onLoad, onError, isLoading]);

  // Hiển thị fallback nếu có lỗi
  if (hasError && fallbackImage) {
    return (
      <div className={`relative ${className}`}>
        <img src={fallbackImage} alt="Video fallback" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-2xl mb-2">🎬</div>
            <div className="text-sm">Video không khả dụng</div>
            <div className="text-xs mt-1">Vui lòng thay thế file video</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {/* Loading state */}
      {isLoading && (
        <div className="absolute inset-0 bg-slate-800 flex items-center justify-center z-10">
          <div className="text-center text-slate-400">
            <div className="w-8 h-8 border-4 border-slate-600 border-t-green-500 rounded-full animate-spin mx-auto mb-2"></div>
            <div className="text-sm">Đang tải video...</div>
            <div className="text-xs mt-1">Nếu loading quá lâu, video có thể không hợp lệ</div>
          </div>
        </div>
      )}

      {/* Video element - chỉ sử dụng MP4 */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        controls={controls}
        poster={poster}
        playsInline
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Play overlay for background videos */}
      {!controls && !isPlaying && !autoPlay && (
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer z-20">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
          </div>
        </div>
      )}
    </div>
  );
}

// Background Video component
export function BackgroundVideo({
  src,
  className = "",
  overlay = true
}: {
  src: string;
  className?: string;
  overlay?: boolean;
}) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Video
        src={src}
        className="w-full h-full"
        autoPlay
        muted
        loop
        controls={false}
        fallbackImage="/images/poster/poster.jpg"
      />
      {overlay && <div className="absolute inset-0 bg-black/40"></div>}
    </div>
  );
}

// Trailer Video component
export function TrailerVideo({ src, className = "", poster }: { src: string; className?: string; poster?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Video
        src={src}
        className="w-full h-full rounded-lg"
        controls
        poster={poster}
        fallbackImage="/images/poster/poster.jpg"
      />
    </div>
  );
}
