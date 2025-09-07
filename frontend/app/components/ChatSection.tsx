import React, { useState, useEffect } from "react";

export default function ChatSection() {
  const [currentChannel, setCurrentChannel] = useState("general");
  const [messages, setMessages] = useState<any[]>([]);

  const channelData = {
    general: {
      title: "# Tổng Quát",
      description: "Thảo luận chung về Delta Force và GameBuddy",
      placeholder: "Nhập tin nhắn vào #tổng-quát..."
    },
    tactics: {
      title: "# Chiến Thuật",
      description: "Chia sẻ chiến thuật và kỹ năng chơi game",
      placeholder: "Nhập tin nhắn vào #chiến-thuật..."
    },
    recruitment: {
      title: "# Tuyển Thành Viên",
      description: "Tìm kiếm và tuyển thành viên cho đội hình",
      placeholder: "Nhập tin nhắn vào #tuyển-thành-viên..."
    },
    help: {
      title: "# Hỗ Trợ",
      description: "Nhận hỗ trợ và giải đáp thắc mắc",
      placeholder: "Nhập tin nhắn vào #hỗ-trợ..."
    }
  };

  const switchChannel = (channelId: string) => {
    setCurrentChannel(channelId);
    setMessages([]);
  };

  const sendMessage = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form.querySelector("input") as HTMLInputElement;
    const message = input.value.trim();

    if (!message) return;

    const currentTime = new Date().toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit"
    });

    const newMessage = {
      id: Date.now(),
      user: "Bạn",
      avatar: "B",
      content: message,
      time: currentTime,
      color: "text-green-400",
      bgColor: "from-green-500 to-blue-500"
    };

    setMessages((prev) => [...prev, newMessage]);
    input.value = "";

    // Simulate response
    setTimeout(
      () => {
        const responses = [
          "Hay quá! Tôi cũng đang tìm đồng đội.",
          "Có ai online không? Cần hỗ trợ với mission này.",
          "GG! Trận vừa rồi chơi tuyệt vời.",
          "Ai biết cách unlock weapon mới không?",
          "Squad tôi đang thiếu 1 người, ai join không?"
        ];

        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        const responseMessage = {
          id: Date.now() + 1,
          user: "GamerFriend",
          avatar: "G",
          content: randomResponse,
          time: currentTime,
          color: "text-purple-400",
          bgColor: "from-purple-500 to-pink-500"
        };

        setMessages((prev) => [...prev, responseMessage]);
      },
      1000 + Math.random() * 2000
    );
  };

  return (
    <section id="chat" className="section-content pt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="font-bold text-4xl text-center mb-12">Tin Nhắn Cộng Đồng</h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 min-h-[600px]">
          {/* Chat Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/50 rounded-xl border border-slate-700 h-full flex flex-col">
              <div className="p-4 border-b border-slate-700">
                <h3 className="font-bold text-lg text-green-400">Kênh Chat</h3>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-2">
                  <button
                    onClick={() => switchChannel("general")}
                    className={`w-full text-left px-3 py-2 rounded-lg hover:bg-slate-700 hover:cursor-pointer transition-colors ${currentChannel === "general" ? "bg-slate-700" : ""}`}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400">#</span>
                      <span>Tổng Quát</span>
                      <span className="ml-auto bg-green-600 text-xs px-2 py-1 rounded-full">247</span>
                    </div>
                  </button>

                  <button
                    onClick={() => switchChannel("tactics")}
                    className={`w-full text-left px-3 py-2 rounded-lg hover:bg-slate-700 hover:cursor-pointer transition-colors ${currentChannel === "tactics" ? "bg-slate-700" : ""}`}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-400">#</span>
                      <span>Chiến Thuật</span>
                      <span className="ml-auto bg-slate-600 text-xs px-2 py-1 rounded-full">89</span>
                    </div>
                  </button>

                  <button
                    onClick={() => switchChannel("recruitment")}
                    className={`w-full text-left px-3 py-2 rounded-lg hover:bg-slate-700 hover:cursor-pointer transition-colors ${currentChannel === "recruitment" ? "bg-slate-700" : ""}`}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-orange-400">#</span>
                      <span>Tuyển Thành Viên</span>
                      <span className="ml-auto bg-slate-600 text-xs px-2 py-1 rounded-full">156</span>
                    </div>
                  </button>

                  <button
                    onClick={() => switchChannel("help")}
                    className={`w-full text-left px-3 py-2 rounded-lg hover:bg-slate-700 hover:cursor-pointer transition-colors ${currentChannel === "help" ? "bg-slate-700" : ""}`}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-purple-400">#</span>
                      <span>Hỗ Trợ</span>
                      <span className="ml-auto bg-slate-600 text-xs px-2 py-1 rounded-full">34</span>
                    </div>
                  </button>
                </div>
              </div>

              <div className="p-4 border-t border-slate-700">
                <div className="text-sm text-slate-400">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>1,247 người online</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                    <span>3,891 thành viên</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Main Area */}
          <div className="lg:col-span-3">
            <div className="bg-slate-800/50 rounded-xl border border-slate-700 h-full flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-slate-700">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">
                      {channelData[currentChannel as keyof typeof channelData].title}
                    </h3>
                    <p className="text-sm text-slate-400">
                      {channelData[currentChannel as keyof typeof channelData].description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      className="p-2 hover:bg-slate-700 rounded-lg transition-colors hover:cursor-pointer"
                      title="Tìm kiếm"
                    >
                      🔍
                    </button>
                    <button
                      className="p-2 hover:bg-slate-700 rounded-lg transition-colors hover:cursor-pointers"
                      title="Thông báo"
                    >
                      🔔
                    </button>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4">
                {messages.length === 0 ? (
                  <div className="text-center text-slate-400 py-8">
                    <div className="text-4xl mb-4">💬</div>
                    <p>Chào mừng đến với {channelData[currentChannel as keyof typeof channelData].title}</p>
                    <p className="text-sm">{channelData[currentChannel as keyof typeof channelData].description}</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div key={message.id} className="flex items-start space-x-3">
                        <div
                          className={`w-10 h-10 bg-gradient-to-br ${message.bgColor} rounded-full flex items-center justify-center text-sm font-bold`}
                        >
                          {message.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className={`font-semibold ${message.color}`}>{message.user}</span>
                            <span className="text-xs text-slate-500">Hôm nay lúc {message.time}</span>
                          </div>
                          <p className="text-slate-300">{message.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-slate-700">
                <form onSubmit={sendMessage} className="flex space-x-3">
                  <input
                    type="text"
                    placeholder={channelData[currentChannel as keyof typeof channelData].placeholder}
                    className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-green-500 transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-green-600 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform hover:cursor-pointer"
                  >
                    Gửi
                  </button>
                </form>
                <div className="flex items-center justify-between mt-2 text-xs text-slate-500">
                  <span>Nhấn Enter để gửi tin nhắn</span>
                  <span>Shift + Enter để xuống dòng</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
