import React, { useState } from "react";
import { IMAGES, getImagePath } from "../../utils/images";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  lazy?: boolean;
  fallback?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export default function Image({
  src,
  alt,
  className = "",
  lazy = true,
  fallback = IMAGES.LOGO.MAIN,
  onLoad,
  onError
}: ImageProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  return (
    <div className={`relative ${className}`}>
      {/* Loading state */}
      {isLoading && (
        <div className="absolute inset-0 bg-slate-700 animate-pulse rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-slate-600 border-t-green-500 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-slate-800 rounded-lg flex items-center justify-center">
          <div className="text-center text-slate-400">
            <div className="text-lg mb-1">🖼️</div>
            <div className="text-xs">Image not found</div>
          </div>
        </div>
      )}

      {/* Main image */}
      <img
        src={hasError ? fallback : getImagePath(src)}
        alt={alt}
        className="w-full h-full object-contain transition-opacity duration-300"
        style={{
          opacity: isLoading ? 0 : 1
        }}
        loading={lazy ? "lazy" : "eager"}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
}

// Logo component - optimized for fast loading
export function Logo({ size = "medium", className = "" }: { size?: "small" | "medium" | "large"; className?: string }) {
  const sizes = {
    small: "w-auto h-10 sm:w-auto sm:h-10",
    medium: "w-auto h-10 sm:w-auto sm:h-12",
    large: "w-auto h-10 sm:w-auto sm:h-14"
  };

  return (
    <div className={`${sizes[size]} ${className} flex items-center justify-center bg-slate-800/20 rounded-lg`}>
      <img
        src={IMAGES.LOGO.MAIN}
        alt="GameBuddy Logo"
        className="w-full h-full object-contain"
        loading="eager"
        decoding="sync"
        style={{
          imageRendering: "auto",
          backfaceVisibility: "hidden"
        }}
        onError={(e) => {
          // Fallback to text if image fails to load
          const target = e.target as HTMLImageElement;
          target.style.display = "none";
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = '<span class="text-green-500 font-bold text-lg">GameBuddy</span>';
          }
        }}
      />
    </div>
  );
}
