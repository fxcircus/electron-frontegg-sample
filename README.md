# Electron Frontegg Sample

This is a sample Electron application that demonstrates integration with Frontegg for authentication.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with your Frontegg credentials:
   ```
   # Client ID from Frontegg Portal ➜ [ENVIRONMENT] ➜ Env Settings page
   VITE_FRONTEGG_CLIENT_ID=your_client_id

   # Login URL (without the /oauth) from Frontegg Portal ➜ [ENVIRONMENT] ➜ Applications ➜ Your app
   VITE_FRONTEGG_BASE_URL=your_base_url
   
   # Application ID (without the /oauth) from Frontegg Portal ➜ [ENVIRONMENT] ➜ Applications ➜ Your app
   VITE_FRONTEGG_APP_ID=your_app_id
   ```

## Development

To run the application in development mode:

```bash
npm run start
```

This will:
- Start the Vite development server
- Launch the Electron application
- Open DevTools automatically

## Building

To build the application for production:

```bash
npm run build
```

The built application will be available in the `dist` directory.

## Features

- Electron application with React
- Frontegg authentication integration
- Automatic login redirect
- User profile display
- Logout functionality

## Project Structure

- `main.js` - Electron main process
- `src/renderer.jsx` - React application entry point
- `index.html` - Application HTML template
- `vite.config.js` - Vite configuration 
