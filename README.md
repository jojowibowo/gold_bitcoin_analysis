# Lion City Strategy 2026: Gold & Bitcoin Analysis

A single-page HTML dashboard for analyzing Gold and Bitcoin investment strategies with interactive regime simulation.

## Features

- Interactive Gold vs Bitcoin analysis with correlation charts
- Regime-based simulator (Stress vs Sentiment)
- BI sidebar with Tableau embed integration
- Responsive dashboard design

## Setup & Build

### Prerequisites

- Node.js 18+ 
- npm

### Installation

```
bash
npm install
```

### Build

```
bash
npm run build
```

This will generate:
- `dist/styles.css` - Compiled Tailwind CSS
- `dist/chart.umd.min.js` - Chart.js library (copy from node_modules)

### Development

```
bash
# Watch mode for CSS
npm run watch:css
```

Or run both builds in watch mode:

```
bash
npm run dev
```

## Project Structure

```
lioncityfinai/
├── lioncity.html       # Main HTML file (lives in root, references dist/)
├── package.json        # NPM dependencies and scripts
├── tailwind.config.cjs # Tailwind CSS configuration
├── postcss.config.cjs  # PostCSS configuration
├── src/
│   ├── styles/
│   │   └── tailwind.css    # Tailwind source styles
│   └── js/
│       ├── chart-init.js   # Chart.js initialization (reference only)
│       ├── ui.js          # UI functions (reference only)
│       └── init.js        # Main initialization (reference only)
└── dist/
    ├── styles.css          # Built CSS (generated)
    └── chart.umd.min.js   # Chart.js library (copy from node_modules)
```

## Usage

1. Run `npm install` to install dependencies
2. Run `npm run build` to build CSS
3. Copy `node_modules/chart.js/dist/chart.umd.js` to `dist/chart.umd.min.js`
4. Open `lioncity.html` in a browser (from root directory)

**Note:** The main HTML file uses **inline JavaScript** - the JavaScript code is embedded directly in `lioncity.html`, not loaded from a separate bundle. The `src/js/` files are provided as reference for future development.

## External Dependencies

- **Tableau Public**: https://public.tableau.com - Used for BI dashboard embed
  - This is the ONLY remaining external dependency
  - All other libraries (Tailwind, Chart.js) are local
  - Icons use inline SVG (no Font Awesome CSS required)

## How lioncity.html Works

- **Styles**: Loads `dist/styles.css` (compiled Tailwind)
- **Chart.js**: Loads `dist/chart.umd.min.js` directly
- **Icons**: Uses inline SVG (no Font Awesome CSS needed)
- **JavaScript**: All functionality is inline within the HTML

## Security Notes

See SECURITY.md for details on external endpoints.

## Credits

- Dashboard: Jojo Wibowo
- Data: N=410 weeks, ML Random Forest model
