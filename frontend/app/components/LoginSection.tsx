import React from "react";
import { Link } from "react-router";
import { Logo } from "./common";

export default function LoginSection() {
  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = "🔄 Đang đăng nhập...";
    submitBtn.disabled = true;

    setTimeout(() => {
      alert("Đăng nhập thành công! Chào mừng bạn trở lại GameBuddy!");
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      // Redirect to home after successful login
      window.location.href = "/";
    }, 2000);
  };

  // This function is no longer needed with routing

  return (
    <section id="login" className="flex justify-center items-center section-content relative">
      <img
        src="/images/poster/background-login.jpg"
        alt="background-login"
        className="absolute inset-0 w-full h-full object-cover mt-16"
      />
      <div className="min-h-screen flex gap-32">
        <div className="hidden lg:flex lg:min-w-xs to-slate-800 relative overflow-hidden">
          <div className="relative z-10 flex flex-col justify-center px-4 py-12">
            <div className="flex bg-slate-800/50 rounded-lg p-1 mb-8">
              <Link
                to="/login"
                id="login-tab"
                className="flex-1 py-3 px-4 rounded-md font-medium transition-all auth-tab-active text-center"
              >
                Đăng Nhập
              </Link>
              <Link
                to="/register"
                id="register-tab"
                className="flex-1 py-3 px-4 rounded-md font-medium transition-all text-slate-400 hover:text-white text-center"
              >
                Đăng Ký
              </Link>
            </div>
            <div className="mb-8">
              <Logo size="large" />
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔍</span>
                </div>
                <div>
                  <h3 className="font-orbitron font-bold text-xl text-white">Tìm Kiếm Free</h3>
                  <p className="text-blue-200">Kết nối với đồng đội miễn phí</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="font-orbitron font-bold text-xl text-white">Kỹ Năng Thượng Thừa</h3>
                  <p className="text-orange-200">Nâng cao trình độ chiến đấu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-screen lg:min-w-md relative flex items-center justify-center px-4">
          <div className="max-w-md w-full">
            <div className="bg-slate-900 p-8 rounded-xl border border-slate-700">
              <div className="text-center mb-8">
                <h2 className="font-bold text-3xl text-white mb-2">Đăng nhập</h2>
              </div>

              <form className="space-y-6" onSubmit={handleLogin}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email hoặc Tên Đăng Nhập
                  </label>
                  <input
                    id="email"
                    type="text"
                    required
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-green-500 transition-colors"
                    placeholder="Nhập email hoặc tên đăng nhập"
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                    Mật Khẩu
                  </label>
                  <input
                    id="password"
                    type="password"
                    required
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Nhập mật khẩu"
                    autoComplete="current-password"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-green-600 bg-slate-700 border-slate-600 rounded focus:ring-green-500"
                    />
                    <span className="ml-2 text-sm text-slate-300">Ghi nhớ đăng nhập</span>
                  </label>
                  <a href="#" className="text-sm text-green-400 hover:text-green-300 transition-colors">
                    Quên mật khẩu?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 py-2 rounded-lg font-semibold text-white hover:scale-105 transition-transform"
                >
                  🎮 Đăng Nhập
                </button>
              </form>

              <div className="mt-6 text-center text-sm">
                <p className="text-slate-400">
                  <span className="mr-2">Chưa có tài khoản?</span>
                  <Link to="/register" className="text-green-400 hover:text-green-300 font-medium transition-colors">
                    Đăng ký ngay
                  </Link>
                </p>
              </div>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-600"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-slate-800 text-slate-400">Hoặc đăng nhập với</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button className="w-full bg-slate-700 hover:bg-slate-600 border border-slate-600 rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors">
                    🎮 Steam
                  </button>
                  <button className="w-full bg-slate-700 hover:bg-slate-600 border border-slate-600 rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors">
                    🎯 Discord
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
