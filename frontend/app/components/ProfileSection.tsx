import { useState } from "react";

export default function ProfileSection() {
  const [profile] = useState({
    name: "GhostRecon",
    level: 47,
    rating: 5,
    stats: {
      winLoss: 2.7,
      kdr: 1.9,
      gamesPlayed: 1247,
      hoursPlayed: 342,
      squadWins: 89
    },
    preferences: {
      gameMode: "Chiến Thuật Đặc Biệt",
      role: "Tấn Công / Trưởng Đội",
      region: "Bắc Mỹ (EST)",
      communication: "Ưu Tiên Voice Chat",
      playTime: "Tối & Cuối Tuần"
    },
    bio: "Veteran Delta Force player with over 300 hours of tactical gameplay experience. I specialize in assault operations and team coordination. Looking for serious players who value strategic communication and objective-focused gameplay. I'm available most evenings and weekends for squad operations."
  });

  const loadoutItems = [
    { icon: "🔫", type: "Primary", name: "M4A1 Carbine" },
    { icon: "🔫", type: "Secondary", name: "Glock 19" },
    { icon: "💣", type: "Tactical", name: "Frag Grenade" },
    { icon: "🎯", type: "Equipment", name: "Red Dot Sight" }
  ];

  const handleSendMessage = () => {
    console.log("Sending message to", profile.name);
    // In a real app, this would open a chat interface
  };

  const handleInviteToSquad = () => {
    console.log("Inviting", profile.name, "to squad");
    // In a real app, this would send a squad invitation
  };

  const handleAddFriend = () => {
    console.log("Adding", profile.name, "as friend");
    // In a real app, this would send a friend request
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="font-orbitron font-bold text-4xl text-center my-12">Hồ Sơ Người Chơi</h2>

      <div className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-4xl font-bold backdrop-blur-sm">
              {profile.name.charAt(0)}
            </div>
            <div>
              <h3 className="font-orbitron font-bold text-3xl">{profile.name}</h3>
              <p className="text-green-100 text-lg">Chiến Binh Tinh Nhuệ</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-300">{"★".repeat(profile.rating)}</span>
                <span className="ml-2 text-green-100">Cấp {profile.level}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Stats */}
            <div>
              <h4 className="font-orbitron font-bold text-xl mb-4 text-green-400">Thống Kê Chiến Đấu</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Tỷ Lệ Thắng/Thua</span>
                  <span className="font-semibold text-green-400">{profile.stats.winLoss}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Tỷ Lệ Giết/Chết</span>
                  <span className="font-semibold text-blue-400">{profile.stats.kdr}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Trận Đã Chơi</span>
                  <span className="font-semibold">{profile.stats.gamesPlayed.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Giờ Chơi</span>
                  <span className="font-semibold">{profile.stats.hoursPlayed}h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Thắng Đội Hình</span>
                  <span className="font-semibold text-orange-400">{profile.stats.squadWins}</span>
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div>
              <h4 className="font-orbitron font-bold text-xl mb-4 text-blue-400">Sở Thích</h4>
              <div className="space-y-3">
                <div>
                  <span className="text-slate-400 block">Chế Độ Game Yêu Thích</span>
                  <span className="font-semibold">{profile.preferences.gameMode}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Vai Trò Ưa Thích</span>
                  <span className="font-semibold">{profile.preferences.role}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Khu Vực</span>
                  <span className="font-semibold">{profile.preferences.region}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Giao Tiếp</span>
                  <span className="font-semibold">{profile.preferences.communication}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Thời Gian Chơi</span>
                  <span className="font-semibold">{profile.preferences.playTime}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="mt-8">
            <h4 className="font-orbitron font-bold text-xl mb-4 text-orange-400">About Me</h4>
            <p className="text-slate-300 leading-relaxed">{profile.bio}</p>
          </div>

          {/* Loadout */}
          <div className="mt-8">
            <h4 className="font-orbitron font-bold text-xl mb-4 text-purple-400">Favorite Loadout</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {loadoutItems.map((item, index) => (
                <div key={index} className="bg-slate-700/50 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-sm text-slate-400">{item.type}</div>
                  <div className="font-semibold">{item.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mt-8">
            <button
              className="military-green px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
              onClick={handleSendMessage}
            >
              💬 Send Message
            </button>
            <button
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors"
              onClick={handleInviteToSquad}
            >
              🎮 Invite to Squad
            </button>
            <button
              className="border border-slate-600 px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors"
              onClick={handleAddFriend}
            >
              👥 Add Friend
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
