# Travel List App

A React-based application for creating and managing your travel packing list. Never forget essential items for your trip again!

![Travel List App](https://github.com/username/travel-list/raw/main/screenshots/app-preview.png)

## 🌟 Features

- Add items to your packing list with quantity specification
- Mark items as packed/unpacked
- Sort items by input order, description, or packed status
- Delete individual items or clear the entire list
- Track packing progress with real-time statistics
- Persistent data storage via backend API

## 🛠️ Tech Stack

- **Frontend**: 
  - React.js (with Hooks)
  - TypeScript
  - CSS for styling
  - Vite as build tool

- **Backend**:
  - Laravel API (accessed via axios)
  - RESTful endpoints for CRUD operations

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Laravel backend API running on localhost:8000 (or update API endpoints in code)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/travel-list.git
   cd travel-list
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and visit `http://localhost:5173` (or the port shown in your terminal)

## 🔄 API Integration

The app connects to a Laravel backend API with the following endpoints:

- `GET /api/items` - Fetch all packing list items
- `POST /api/items` - Add a new item
- `PATCH /api/items/{id}` - Update an item's status
- `DELETE /api/items/{id}` - Delete a specific item
- `DELETE /api/items` - Clear all items

Make sure your backend server is running and accessible at the expected URL (configured as `http://127.0.0.1:8000` by default).

## 📦 Project Structure

```
travel-list/
├── src/
│   ├── components/
│   │   ├── App.tsx       # Main application component
│   │   ├── Form.tsx      # Form for adding new items
│   │   ├── Item.tsx      # Individual item component
│   │   ├── Logo.tsx      # App logo component
│   │   ├── PackingList.tsx # List of items with sorting options
│   │   └── Stats.tsx     # Statistics component
│   ├── App.css           # Application styles
│   ├── index.css         # Global styles
│   └── main.tsx          # Entry point
├── public/
│   └── vite.svg          # Vite logo
├── index.html            # HTML template
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## 🧩 Components

- **App**: Main component that manages state and coordinates other components
- **Logo**: Displays the application logo and title
- **Form**: Allows users to add new items with quantity
- **PackingList**: Displays all items with sorting options
- **Item**: Represents a single item with checkbox and delete button
- **Stats**: Shows packing progress and statistics

## 🏗️ Building for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgements

- React.js team for the amazing framework
- Vite team for the lightning-fast build tool
- All open-source contributors whose libraries made this project possible
