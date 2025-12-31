# Wanderlust Store

A modern, premium e-commerce application built with React and Vite, featuring a polished "Morning Mist" aesthetic and comprehensive shopping functionality.

## 🌟 Features

- **Authentication System**: Secure login flow using context-based state management (powered by DummyJSON Auth).
- **Product Catalog**: Dynamic product listing with responsive grid layout and premium card designs.
- **Smart Cart**: 
  - Persistent cart state management.
  - Collapsible bottom-sheet panel for easy access.
  - Real-time total calculation and quantity adjustments.
- **Premium UI/UX**: 
  - **Theme**: "Morning Mist" light theme with subtle gradients and glassmorphism.
  - **Animations**: Smooth transitions, hover effects, and interactive elements.
  - **Typography**: Clean and modern typography using 'Outfit' font family.

## 🛠️ Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Vanilla CSS3 with CSS Variables (Theming & Glassmorphism)
- **State Management**: React Context API (`AuthContext`, `ProductContext`, `CartContext`)

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd reactjs/vite-project
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 📂 Project Structure

```
src/
├── components/      # UI Components (Login, ProductList, Cart)
├── context/         # React Contexts (Auth, Cart, Product)
├── App.css          # Global Styles & Theme Definitions
├── App.jsx          # Main Layout Coordinator
└── main.jsx         # Application Entry Point
```

## 🎨 Theme

The project uses a custom CSS variable system for easy theming:
- **Primary**: Sky Blue (`#0ea5e9`)
- **Background**: Soft White/Blue Gradients
- **Components**: Glassmorphic White Cards

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
