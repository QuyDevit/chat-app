import { useState } from "react";
import { Link } from "react-router";
import { BackgroundVideo } from "./common/Video";
import VideoModal from "./common/VideoModal";

export default function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoSrc = "/videos/background.mp4";

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <BackgroundVideo src={videoSrc} overlay={true} />

        {/* Fallback gradient background */}
        <div className="absolute inset-0 from-slate-900 via-slate-800 to-green-900 opacity-90"></div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="font-orbitron font-black text-3xl md:text-5xl mb-6 text-white bg-clip-text text-transparent">
              DELTA FORCE
            </h1>
            <p className="text-base md:text-1.5xl text-white mb-8 max-w-3xl mx-auto">
              Kết nối với các chiến binh Delta Force tinh nhuệ. Tìm đội hình của bạn, thống trị chiến trường và tạo nên
              những mối liên kết bất khả phá vỡ.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/search"
              className="military-green px-4 sm:px-8 py-2 sm:py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform glow-effect inline-block text-center"
            >
              🎯 Tìm Đồng Đội
            </Link>
            <button
              className="border-2 border-green-500 sm:px-8 sm:py-4 px-4 py-2 rounded-lg font-semibold text-lg hover:bg-green-500/20 transition-colors"
              onClick={() => setIsVideoModalOpen(true)}
            >
              📺 Xem Trailer
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-green-400">15,000+</div>
              <div className="text-slate-400">Người Chơi Hoạt Động</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-blue-400">2,500+</div>
              <div className="text-slate-400">Đội Hình Đã Tạo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-orange-400">98%</div>
              <div className="text-slate-400">Tỷ Lệ Ghép Đôi Thành Công</div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal - sử dụng cùng video */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoSrc={videoSrc}
        title="GameBuddy - Delta Force Trailer"
        poster="/images/poster/poster.jpg"
      />
    </>
  );
}
