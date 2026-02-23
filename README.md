# Lion City Strategy 2026: Gold & Bitcoin Analysis

A single-page HTML dashboard for analyzing Gold and Bitcoin investment strategies with interactive regime simulation.

## Features

- Interactive Gold vs Bitcoin analysis with correlation charts
- Regime-based simulator (Stress vs Sentiment)
- BI sidebar with Tableau embed integration
- Responsive dashboard design

## Project Structure

```
gold_bitcoin_analysis/
├── lioncity.html           # Main HTML dashboard file
├── index.html              # Portfolio/index page with project overview
├── dist/
│   └── app.js              # Built JavaScript bundle
├── reports/
│   ├── gold_bitcoin_analysis.pdf    # Analysis report
│   └── gold_bitcoin_presentation.pdf # Presentation deck
├── visualisations/
│   ├── AI Inflation Hedge Dashboard.png
│   ├── generated_image_d6bdd84c.png
│   └── ChatGPT Image Feb 22, 2026, 11_09_01 AM.png
├── README.md               # This file
└── SECURITY.md             # Security policy
```

## Usage

1. Open `lioncity.html` in a browser for the main dashboard
2. Open `index.html` for the portfolio/project overview

## External Dependencies

- **Tableau Public**: https://public.tableau.com - Used for BI dashboard embed
  - This is the ONLY external dependency
  - All other libraries are local
  - Icons use inline SVG (no Font Awesome CSS required)

## How lioncity.html Works

- **Styles**: Uses inline CSS or local stylesheet
- **Chart.js**: Loaded from dist/ directory
- **Icons**: Uses inline SVG (no Font Awesome CSS needed)
- **JavaScript**: Bundled in dist/app.js

## Security Notes

See SECURITY.md for details on external endpoints.

## Credits

- Dashboard: Jojo Wibowo
- Data: N=410 weeks, ML Random Forest model
