// Quản lý đường dẫn hình ảnh cần thiết

export const IMAGES = {
  // Logo
  LOGO: {
    MAIN: "/images/logo/main-logo.png"
  }
} as const;

// Helper functions
export const getImagePath = (path: string): string => {
  return path.startsWith("/") ? path : `/${path}`;
};

// Export types
export type LogoType = keyof typeof IMAGES.LOGO;
