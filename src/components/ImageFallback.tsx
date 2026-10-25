import React, { useState } from 'react';
import { Dumbbell } from 'lucide-react';

interface ImageFallbackProps {
  src: string;
  alt: string;
  className?: string;
  categoryLabel?: string;
}

export const ImageFallback: React.FC<ImageFallbackProps> = ({
  src,
  alt,
  className = '',
  categoryLabel = 'FORGE ATHLETICS'
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-neutral-900 ${className}`}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={() => setHasError(true)}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ) : null}

      {/* Zero-broken-image fallback container */}
      {(!isLoaded || hasError) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#181B1E] via-[#111315] to-[#15261D]">
          <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-3 text-[#C7FF3D]">
            <Dumbbell className="w-6 h-6 stroke-[1.75]" />
          </div>
          <span className="text-xs uppercase tracking-widest text-[#C7FF3D] font-mono mb-1">
            {categoryLabel}
          </span>
          <p className="text-sm font-medium text-neutral-300 max-w-[200px] line-clamp-2">
            {alt}
          </p>
        </div>
      )}
    </div>
  );
};
