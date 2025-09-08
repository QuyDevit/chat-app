import React from "react";
import { Link } from "react-router";
import { Logo } from "./common";

export default function RegisterSection() {
  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = "🔄 Đang tạo tài khoản...";
    submitBtn.disabled = true;

    setTimeout(() => {
      alert("Tạo tài khoản thành công! Chào mừng bạn đến với GameBuddy!");
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      // Redirect to home after successful registration
      window.location.href = "/";
    }, 2000);
  };

  // This function is no longer needed with routing

  return (
    <section id="register" className="flex justify-center items-center section-content relative">
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
                className="flex-1 py-3 px-4 rounded-md font-medium transition-all hover:text-white text-slate-400 text-center"
              >
                Đăng Nhập
              </Link>
              <Link
                to="/register"
                id="register-tab"
                className="flex-1 py-3 px-4 rounded-md font-medium transition-all auth-tab-active text-center"
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
        <div className="min-h-screen lg:max-w-md relative flex items-center justify-center px-4">
          <div className="max-w-md w-full">
            <div className="bg-slate-900 p-8 rounded-xl border border-slate-700">
              <div className="text-center mb-8">
                <h2 className="font-bold text-3xl text-white mb-2">Đăng Ký</h2>
              </div>

              <form className="space-y-6" onSubmit={handleRegister}>
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-slate-300 mb-2">
                    Tên Đăng Nhập
                  </label>
                  <input
                    id="username"
                    type="text"
                    required
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-green-500 transition-colors"
                    placeholder="Chọn tên đăng nhập"
                    autoComplete="username"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-green-500 transition-colors"
                    placeholder="Nhập địa chỉ email"
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
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-green-500 transition-colors"
                    placeholder="Tạo mật khẩu mạnh"
                    autoComplete="new-password"
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-300 mb-2">
                    Xác Nhận Mật Khẩu
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    required
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-green-500 transition-colors"
                    placeholder="Nhập lại mật khẩu"
                    autoComplete="new-password"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    required
                    className="w-4 h-4 text-green-600 bg-slate-700 border-slate-600 rounded focus:ring-green-500"
                    autoComplete="off"
                    name="terms"
                  />
                  <span className="ml-2 text-sm text-slate-300">
                    Tôi đồng ý với{" "}
                    <a href="#" className="text-green-400 hover:text-green-300">
                      Điều khoản dịch vụ
                    </a>{" "}
                    và{" "}
                    <a href="#" className="text-green-400 hover:text-green-300">
                      Chính sách bảo mật
                    </a>
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 py-2 rounded-lg font-semibold text-white hover:scale-105 transition-transform"
                >
                  🚀 Tạo Tài Khoản
                </button>
              </form>

              <div className="mt-6 text-center text-sm">
                <p className="text-slate-400">
                  <span className="mr-2">Đã có tài khoản?</span>
                  <Link to="/login" className="text-green-400 hover:text-green-300 font-medium transition-colors">
                    Đăng nhập
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
