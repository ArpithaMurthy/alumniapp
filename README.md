# Alumni App

## Project Setup

### Prerequisites
- Node.js (v16 or later)
- npm

### Installation
1. Clone the repository
2. Install dependencies
   ```bash
   npm install
   ```

### Running the Project
```bash
npm start
```

### Building for Production
```bash
npm run build
```

### Deployment
The project is configured for Azure Static Web Apps deployment via GitHub Actions.

### Adding Assets
- Place photos in `src/assets/photos/`
- Place videos in `src/assets/videos/`
- Supported formats:
  - Photos: .png, .jpg, .jpeg, .svg, .webp
  - Videos: .mp4, .webm, .ogg

## Azure Static Web Apps Configuration
Automatic deployment is configured through GitHub Actions.