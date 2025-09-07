export default function WhyChooseUs() {
  const features = [
    {
      icon: "🎮",
      title: "Ghép Đôi Thông Minh",
      description:
        "Thuật toán tiên tiến ghép đôi bạn với người chơi dựa trên trình độ kỹ năng, phong cách chơi và sở thích giao tiếp.",
      color: "text-green-400"
    },
    {
      icon: "👥",
      title: "Tạo Đội Hình",
      description:
        "Tạo hoặc tham gia các đội hình chiến thuật với những người chơi có cùng cách tiếp cận chiến lược và lịch chơi game.",
      color: "text-blue-400"
    },
    {
      icon: "🏆",
      title: "Lợi Thế Cạnh Tranh",
      description: "Theo dõi hiệu suất, leo bảng xếp hạng và thể hiện thành tích của bạn với cộng đồng.",
      color: "text-orange-400"
    }
  ];

  return (
    <div className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-center mb-16">Tại Sao Chọn GameBuddy?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800/80 p-8 rounded-xl card-hover border border-slate-700 backdrop-blur-sm"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className={`font-orbitron font-bold text-xl mb-4 ${feature.color}`}>{feature.title}</h3>
              <p className="text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
