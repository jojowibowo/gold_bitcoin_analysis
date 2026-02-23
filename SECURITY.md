# Security Policy

## External Dependencies

This project has been optimized for production by replacing CDN-hosted libraries with local/package-managed alternatives. Below is the list of third-party endpoints and their status:

### External Endpoints (Required)

| Endpoint | Purpose | Status |
|----------|---------|--------|
| `public.tableau.com` | Tableau Public dashboard embed | **External (Required)** |
| `https://public.tableau.com/javascripts/api/viz_v1.js` | Tableau JavaScript API | **External (Required)** |

### Local/Package-Managed Dependencies

All other external resources have been replaced with local alternatives:

| Library | Previous (CDN) | Current (Local) |
|---------|---------------|-----------------|
| Tailwind CSS | `tailwindcss.js` (CDN) | Built via `npm run build` → `dist/styles.css` |
| Chart.js | `chart.umd.js` (CDN) | Copy from node_modules → `dist/chart.umd.min.js` |
| Icons | Font Awesome CSS | Inline SVG in HTML (no external CSS) |

### How lioncity.html Works

The main HTML file (`lioncity.html`) uses:
- **Inline JavaScript**: All functionality is embedded directly in the HTML (not bundled)
- **dist/styles.css**: Compiled Tailwind CSS
- **dist/chart.umd.min.js**: Chart.js loaded directly (not bundled with esbuild)
- **Inline SVG**: All icons are embedded as SVG (no Font Awesome CSS needed)

### Security Recommendations

1. **Tableau Embed**: The Tableau embed script loads from `public.tableau.com`. This is an external dependency that cannot be localized. Consider:
   - Adding Content Security Policy (CSP) headers to restrict script sources
   - Using Subresource Integrity (SRI) for the Tableau embed script if possible

2. **SRI (Subresource Integrity)**: For production deployment, consider adding SRI hashes to external script tags:
   
```
html
   <script src="https://public.tableau.com/javascripts/api/viz_v1.js" 
           integrity="sha384-..." 
           crossorigin="anonymous"></script>
   
```

3. **CSP Headers**: Recommended CSP for this page:
   
```
   default-src 'self';
   script-src 'self' 'unsafe-inline' https://public.tableau.com;
   style-src 'self' 'unsafe-inline';
   img-src 'self' data: https://public.tableau.com;
   
```

### Reporting Security Issues

If you discover a security vulnerability, please report it via the project's issue tracker.

### Last Updated

2026-02-22
