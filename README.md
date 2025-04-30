# RoadmapViz Community Visualization

A rich, multi-lane roadmap/timeline for Looker Studio, with customizable bars, milestones, and a bottom dashboard summary.

## Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run locally:
   ```bash
   npm start
   # Opens http://localhost:1234
   ```

## Build & Deploy

1. Build bundle:
   ```bash
   npm run build
   ```
2. Host the `build/` folder on an HTTPS server (GCS, Netlify, GitHub Pages, etc.)
3. In Looker Studio: Resource → Developer → Enable Developer Mode → Manage added data sources → Community visualizations → Add your HTTPS URL

## Data Requirements

- **Dimensions**: `Lane` (string), `Label` (string), `Category` (string)
- **Metrics**: `StartDate`, `EndDate` (milliseconds since epoch)

## Style Options

- **Bar Height**: Height of each bar in pixels
- **Lane Spacing**: Vertical distance between lanes in pixels
```