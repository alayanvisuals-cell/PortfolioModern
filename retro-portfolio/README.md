# Retro Portfolio

Welcome to the Retro Portfolio project! This is a single-page interactive portfolio website designed for a video editor and motion graphics artist, featuring a retro pixelated operating system desktop aesthetic.

## Project Structure

The project is organized as follows:

```
retro-portfolio
├── index.html          # Main HTML file for the portfolio
├── css
│   ├── style.css       # Main styles for the portfolio
│   └── windows.css     # Styles for draggable windows
├── js
│   ├── main.js         # Main JavaScript for interactivity
│   ├── windows.js      # JavaScript for window behavior
│   └── desktop.js      # Functions related to the desktop environment
├── assets
│   ├── fonts
│   │   └── PressStart2P.ttf  # Pixel font for typography
│   ├── icons
│   │   ├── about-me.png       # Icon for "About Me"
│   │   ├── commercial.png      # Icon for "Commercial Work"
│   │   └── passion.png         # Icon for "Passion Projects"
│   └── videos
│       ├── sample-1.mp4       # Placeholder video 1
│       ├── sample-2.mp4       # Placeholder video 2
│       └── sample-3.mp4       # Placeholder video 3
├── data
│   └── portfolio.json          # Structured data for the portfolio
└── README.md                   # Project documentation
```

## Features

- **Retro Aesthetic**: The website mimics a 90s/early 2000s operating system desktop with pixelated icons and fonts.
- **Interactive Windows**: Clickable and draggable windows for "About Me", "Commercial Work", and "Passion Projects".
- **Video Thumbnails**: Each project folder contains video thumbnails that can be clicked to play videos.
- **Responsive Design**: Primarily designed for desktop but responsive for various screen sizes.

## Instructions

### Replacing Videos and Text

1. **Videos**: To replace the placeholder videos, navigate to the `assets/videos/` directory and replace `sample-1.mp4`, `sample-2.mp4`, and `sample-3.mp4` with your own video files. Ensure the new files have the same names or update the references in the JavaScript files accordingly.

2. **Text Content**: The text content for the "About Me" section and skills list can be found in the `data/portfolio.json` file. Update the JSON structure to reflect your personal information, skills, and contact details.

### Running the Project

1. Open `index.html` in your web browser to view the portfolio.
2. Ensure that all assets are correctly linked and available in their respective directories.

## Additional Setup

- Ensure you have a modern web browser for the best experience.
- For any modifications or enhancements, feel free to edit the CSS and JavaScript files as needed.

Enjoy showcasing your work in this retro-themed portfolio!