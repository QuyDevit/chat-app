# GameBuddy - Delta Force Team Finder

A modern React application designed to help Delta Force players find teammates, create squads, and build a gaming community.

## 🎮 Features

### Core Functionality

- **Player Search**: Find teammates based on skill level, game mode, region, and play style
- **Squad Management**: Create, join, and manage tactical squads
- **Player Profiles**: Detailed player statistics, loadouts, and preferences
- **Community Hub**: Leaderboards, recent activity, and discussion forums

### Design Features

- **Military Theme**: Dark, tactical design with green accents
- **Responsive Layout**: Works on desktop, tablet, and mobile devices
- **Smooth Animations**: Card hover effects and scroll animations
- **Custom Fonts**: Orbitron for headings, Inter for body text

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd frontend
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
app/
├── components/          # React components
│   ├── Navigation.tsx      # Main navigation bar
│   ├── HeroSection.tsx     # Landing page hero
│   ├── WhyChooseUs.tsx     # Features section
│   ├── SearchSection.tsx   # Player search functionality
│   ├── ProfileSection.tsx  # Player profile display
│   ├── SquadsSection.tsx   # Squad management
│   ├── CommunitySection.tsx # Community features
│   └── Footer.tsx          # Site footer
├── routes/              # Application routes
│   └── home.tsx         # Main home page
├── app.css              # Global styles and Tailwind CSS
└── root.tsx             # Root component and metadata
```

## 🎨 Styling

The application uses **Tailwind CSS** with custom components:

- **Custom Gradients**: Military green, accent orange
- **Custom Animations**: Pulse effects, card hover animations
- **Responsive Design**: Mobile-first approach with breakpoints
- **Dark Theme**: Slate color palette with green accents

### Key CSS Classes

- `.gradient-bg`: Main background gradient
- `.military-green`: Green button styling
- `.card-hover`: Hover effects for cards
- `.glow-effect`: Glowing shadow effects
- `.font-orbitron`: Custom heading font
- `.font-inter`: Custom body font

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run typecheck` - TypeScript type checking
- `npm run lint` - ESLint code analysis
- `npm run prettier` - Code formatting

### State Management

The application uses React's built-in state management:

- Local component state with `useState`
- Section navigation state in the main component
- Event handlers for user interactions

### Component Architecture

- **Functional Components**: All components use modern React hooks
- **Props Interface**: TypeScript interfaces for component props
- **Event Handling**: Interactive elements with proper event handlers
- **Responsive Design**: Mobile-first responsive layouts

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Docker Deployment

```bash
docker build -t gamebuddy .
docker run -p 3000:3000 gamebuddy
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🎯 Future Enhancements

- [ ] Real-time chat functionality
- [ ] Voice communication integration
- [ ] Tournament management system
- [ ] Advanced player matching algorithms
- [ ] Mobile app development
- [ ] Social media integration
- [ ] Achievement and badge system
- [ ] Team statistics and analytics

## 📞 Support

For support and questions, please open an issue in the repository or contact the development team.

---

**GameBuddy** - Connecting Delta Force warriors worldwide! 🎮⚔️
