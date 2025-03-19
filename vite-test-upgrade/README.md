# Vite Test Upgrade

This project is a simple React application that demonstrates the use of the Web Speech API to convert selected text to speech. It includes a custom hook that listens for text selection and displays a play button above the selected text.

## Project Structure

```
vite-test-upgrade
├── src
│   ├── App.tsx                # Main application component
│   ├── hooks
│   │   └── useTextToSpeech.ts # Custom hook for text-to-speech functionality
│   ├── App.module.scss        # Styles for the App component
├── package.json               # npm configuration file
├── tsconfig.json              # TypeScript configuration file
└── README.md                  # Project documentation
```

## Features

- Displays a paragraph indicating that the app is a work in progress.
- Allows users to select text and convert it to speech using a play button.

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd vite-test-upgrade
npm install
```

## Usage

To run the application, use the following command:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to see the app in action.

## License

This project is licensed under the MIT License.