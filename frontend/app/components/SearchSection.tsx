import { useState } from "react";

export default function SearchSection() {
  const [filters, setFilters] = useState({
    gameMode: "Tất Cả Chế Độ",
    skillLevel: "Mọi Trình Độ",
    region: "Tất Cả Khu Vực",
    playStyle: "Mọi Phong Cách"
  });

  const [searchResults] = useState([
    {
      id: 1,
      name: "AlphaStrike",
      avatar: "A",
      rating: 4,
      level: "Tinh Nhuệ",
      kdr: 2.4,
      gameMode: "Chiến Thuật Đặc Biệt",
      region: "Bắc Mỹ",
      description:
        "Người chơi chiến thuật giàu kinh nghiệm tìm kiếm đội hình phối hợp. Chuyên về vai trò tấn công và hỗ trợ.",
      avatarGradient: "from-green-500 to-blue-500"
    },
    {
      id: 2,
      name: "ShadowSniper",
      avatar: "S",
      rating: 5,
      level: "Tinh Nhuệ",
      kdr: 3.1,
      gameMode: "Battle Royale",
      region: "Châu Âu",
      description:
        "Chuyên gia tầm xa với kiến thức bản đồ xuất sắc. Tìm kiếm đồng đội chiến lược cho trận đấu cạnh tranh.",
      avatarGradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      name: "TacticalMedic",
      avatar: "T",
      rating: 4,
      level: "Nâng Cao",
      kdr: 1.8,
      gameMode: "Chiến Dịch Hợp Tác",
      region: "Châu Á Thái Bình Dương",
      description:
        "Chuyên gia hỗ trợ tập trung vào phối hợp đội hình và lối chơi dựa trên mục tiêu. Kỹ năng giao tiếp tuyệt vời.",
      avatarGradient: "from-orange-500 to-red-500"
    }
  ]);

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters((prev) => ({ ...prev, [filterType]: value }));
  };

  const handleSearch = () => {
    // Filter results based on selected filters
    const filteredResults = searchResults.filter((player) => {
      if (filters.gameMode !== "Tất Cả Chế Độ" && player.gameMode !== filters.gameMode) return false;
      if (filters.region !== "Tất Cả Khu Vực" && player.region !== filters.region) return false;
      return true;
    });

    // In a real app, this would make an API call
    console.log("Searching with filters:", filters);
    console.log("Filtered results:", filteredResults);
  };

  const handleConnect = (playerId: number) => {
    console.log(`Connecting with player ${playerId}`);
    // In a real app, this would send a connection request
  };

  const handleViewProfile = (playerId: number) => {
    console.log(`Viewing profile of player ${playerId}`);
    // In a real app, this would navigate to the player's profile
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="font-orbitron font-bold text-4xl text-center my-12">Tìm Đồng Đội Hoàn Hảo</h2>

      {/* Search Filters */}
      <div className="bg-slate-800/50 p-6 rounded-xl mb-8 border border-slate-700">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Chế Độ Game</label>
            <select
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-green-500 transition-colors"
              value={filters.gameMode}
              onChange={(e) => handleFilterChange("gameMode", e.target.value)}
            >
              <option>Tất Cả Chế Độ</option>
              <option>Đa Người Chơi PvP</option>
              <option>Chiến Dịch Hợp Tác</option>
              <option>Battle Royale</option>
              <option>Chiến Thuật Đặc Biệt</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Trình Độ Kỹ Năng</label>
            <select
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-green-500 transition-colors"
              value={filters.skillLevel}
              onChange={(e) => handleFilterChange("skillLevel", e.target.value)}
            >
              <option>Mọi Trình Độ</option>
              <option>Người Mới</option>
              <option>Trung Bình</option>
              <option>Nâng Cao</option>
              <option>Tinh Nhuệ</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Khu Vực</label>
            <select
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-green-500 transition-colors"
              value={filters.region}
              onChange={(e) => handleFilterChange("region", e.target.value)}
            >
              <option>Tất Cả Khu Vực</option>
              <option>Bắc Mỹ</option>
              <option>Châu Âu</option>
              <option>Châu Á Thái Bình Dương</option>
              <option>Nam Mỹ</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Phong Cách Chơi</label>
            <select
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-green-500 transition-colors"
              value={filters.playStyle}
              onChange={(e) => handleFilterChange("playStyle", e.target.value)}
            >
              <option>Mọi Phong Cách</option>
              <option>Tấn Công</option>
              <option>Chiến Thuật</option>
              <option>Hỗ Trợ</option>
              <option>Bắn Tỉa</option>
            </select>
          </div>
        </div>

        <button
          className="military-green px-6 py-2 rounded-lg font-medium mt-4 hover:scale-105 transition-transform"
          onClick={handleSearch}
        >
          🔍 Tìm Người Chơi
        </button>
      </div>

      {/* Search Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {searchResults.map((player) => (
          <div key={player.id} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 card-hover">
            <div className="flex items-center mb-4">
              <div
                className={`w-12 h-12 bg-gradient-to-br ${player.avatarGradient} rounded-full flex items-center justify-center text-xl font-bold`}
              >
                {player.avatar}
              </div>
              <div className="ml-3">
                <h3 className="font-semibold text-lg">{player.name}</h3>
                <div className="flex items-center text-sm text-slate-400">
                  <span className="text-yellow-400">
                    {"★".repeat(player.rating)}
                    {"☆".repeat(5 - player.rating)}
                  </span>
                  <span className="ml-2">{player.level}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-sm mb-4">
              <div className="flex justify-between">
                <span className="text-slate-400">Tỷ Lệ T/B:</span>
                <span className="text-green-400 font-medium">{player.kdr}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Chế Độ Ưa Thích:</span>
                <span>{player.gameMode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Khu Vực:</span>
                <span>{player.region}</span>
              </div>
            </div>

            <p className="text-slate-300 text-sm mb-4">{player.description}</p>

            <div className="flex space-x-2">
              <button
                className="flex-1 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                onClick={() => handleConnect(player.id)}
              >
                Kết Nối
              </button>
              <button
                className="px-4 py-2 border border-slate-600 rounded-lg text-sm hover:bg-slate-700 transition-colors"
                onClick={() => handleViewProfile(player.id)}
              >
                Xem Hồ Sơ
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
