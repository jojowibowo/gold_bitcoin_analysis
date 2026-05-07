// Portfolio App - Routing and Project Data

// Project Data with ALL content from gold_bitcoin_summary.md
const projects = {
    'alpha': {
        id: 'alpha',
        title: 'Gold & Bitcoin as Inflation Hedges',
        shortTitle: 'Gold & Bitcoin Analysis',
        subtitle: 'A Regime-Dependent Analysis for Singaporean Retail Investors',
        author: 'Jojo Wibowo',
        image: 'https://jojowibowo.github.io/gold_bitcoin_analysis/visualisations/generated_image_d6bdd84c.png?w=400&h=250&fit=crop',
        videoUrl: 'https://jojowibowo.github.io/gold_bitcoin_analysis/visualisations/gold_bitcoin_powerbi.mp4',
        videoPoster: 'https://jojowibowo.github.io/gold_bitcoin_analysis/visualisations/AI Inflation Hedge Dashboard.png?w=800&h=450&fit=crop',
        videoCaption: 'A mobile-friendly interface featuring normalized 0–100 stress bars for Macro Stress and Sentiment. Developed as part of the <strong>Lion City FinAI</strong> framework.',
        dashboardUrl: 'https://jojowibowo.github.io/gold_bitcoin_analysis/lioncity.html',
        presentationUrl: 'https://jojowibowo.github.io/gold_bitcoin_analysis/reports/gold_bitcoin_presentation.pdf',
        
        // Project Summary section
        summary: `Developed a regime-aware, AI-assisted decision-support framework to help Singaporean retail investors navigate the "Retail Dilemma." Traditional inflation hedges often fail during macro-financial stress; this project provides a data-driven alternative to static investment claims.`,
        
        // Problem section
        problem: `Singaporean investors face fragmented information and conflicting narratives. Static tools fail to capture <strong>regime shifts</strong>, leading to misaligned risk assessments for assets like Gold and Bitcoin during periods of high inflation.`,
        
        // Solution section
        solution: {
            gold: '<strong>Gold (The Stabilizer):</strong> Identified as a Macro-Stress Stabilizer (0.017 correlation to CPI). It functions as a defensive hedge against currency shocks rather than a direct inflation tracker.',
            bitcoin: '<strong>Bitcoin (The Sentiment Asset):</strong> Characterized as a Sentiment-Driven Risk Asset. 50.5% of its top-feature importance is derived from market mood (Fear & Greed Index).'
        },
        
        // Key Insights table
        warning: `<strong>Core Strategy:</strong> Use Gold defensively for macro stability and Bitcoin tactically for sentiment-based growth.`,
        insights: [
            { asset: 'Gold', keyDriver: 'Macro Stress / USD-SGD Vol', strategy: 'Buy during High Macro Stress (>60)' },
            { asset: 'Bitcoin', keyDriver: 'Market Sentiment', strategy: 'Tactical exposure during Greed (>50)' }
        ],
        
        // Model Performance
        modelPerformance: {
            logisticRegression: 'The Logistic Regression model achieved <strong>60.6% accuracy</strong> in predicting Bitcoin\'s directional movement.',
            randomForest: 'In the Random Forest model, the <strong>Crypto Fear & Greed Index</strong> was the single most influential variable (Importance: <strong>0.3204</strong>), far outweighing traditional macro indicators.'
        },
        
        // Technical Implementation
        technical: {
            dataPipeline: 'As the <strong>Analyst</strong>, I managed the end-to-end data pipeline involving 410 weekly observations:',
            dataEngineering: 'Integrated disparate sources (Yahoo Finance, FRED, SingStat) and applied <strong>Winsorization</strong> to mitigate the impact of extreme market outliers.',
            featureEngineering: 'Developed normalized 0–100 stress indices and percentile-based scaling to simplify complex signals for retail users.',
            modeling: 'Benchmarked Linear Regression, Random Forest, and Logistic Regression to determine the most interpretable regime signals.'
        },
        
        // Tools
        tools: ['Python', 'Pandas', 'Scikit-Learn', 'Tableau', 'Yahoo Finance API'],
        
        // Ethical Commitment
        ethical1: `As a researcher for Lion City FinAI, I prioritize <strong>User Protection</strong> and <strong>Transparency</strong> over persuasive narratives.`,
        ethical2: `"All models are wrong, but some are useful." — George Box`
    },
    
    // Mock Project Beta
    'beta': {
        id: 'beta',
        title: 'The High-Income Paradox: Unmasking the Hidden Volatility in Grade D Outliers',
        shortTitle: 'High-Income Paradox',
        subtitle: 'From Aggregate Stability to Segment-Specific Risk: A Data-Driven Strategy to Protect $2.8B in Active Capital',
        author: 'Jojo Wibowo',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
        videoUrl: ' ',
        videoPoster: ' ',
        videoCaption: ' ',
        dashboardUrl: ' ',
        presentationUrl: ' ',
        
        // Project Summary section
        summary: `A comprehensive risk audit of a $2.8 Billion active P2P lending portfolio using BigQuery and Python. Identified a critical "High-Income Inversion" anomaly where Grade D high-earners exhibited a 41.67% default rate, leading to strategic underwriting reforms to protect capital reserves.`,

        // Problem section
        problem: `Traditional underwriting models assumed high income equaled low risk. Aggregate portfolio metrics (98.1% TKB30) masked a localized collapse in repayment discipline among high-income outliers in mid-tier risk grades, threatening $46M in concentrated exposure.`,

        // Solution section
        solution: {
            riskIdentification: '<strong>Anomaly Detection:</strong> Engineered a regex-based data pipeline in BigQuery to sanitize more than 122,000 customer records, achieving 100% join integrity and isolating a "High-Income Outlier" segment (bigger than 3 SD income).',
            strategicRemediation: '<strong>Actionable Framework:</strong> Developed a data-driven strategy recommending dynamic DTI caps (30%) for Grade D outliers and manual tax verification for Small Business loans, projected to reduce Expected Loss by 5%.'
        },

        // Key Insights table
        warning: `Results based on actual portfolio data (Oct 2019 - Feb 2026).`,
        insights: [
            { asset: 'Grade D Outliers', keyDriver: 'Over-leverage & High Cost of Living', strategy: 'Implement hard DTI caps for high-income applicants in CA/NY/FL/TX' },
            { asset: 'Small Business Loans', keyDriver: 'Cash-flow volatility vs. reported income', strategy: 'Mandate manual tax transcript verification for loans >$25k' }
        ],

        // Model Performance
        modelPerformance: {
            dataIntegrity: 'Achieved 100% record match rate across customer and loan tables via regex-based ID sanitization, eliminating silent join failures.',
            riskPrediction: 'Identified a 41.67% TKB30 failure rate in the October 2019 Grade D Outlier cohort (vs. 90% for normal borrowers), validating the "High-Income Inversion" hypothesis.'
        },

        // Technical Implementation
        technical: {
            dataPipeline: 'Built a scalable SQL pipeline in BigQuery processing $2.8B in outstanding principal, filtering for active portfolio status (Current, Late, Default) to remove survival bias.',
            dataEngineering: 'Applied regex sanitization (regexp_extract_all) to normalize customer IDs across disparate tables; calculated TKB30, ENR, and cohort performance metrics.',
            featureEngineering: 'Engineered risk features including Debt-to-Income (DTI) ratios, geographic cost-of-living adjustments, and employment tenure segmentation.',
            modeling: 'Conducted Root Cause Analysis (RCA) using Issue Trees and Pareto Analysis; performed Failure Mode and Effects Analysis (FMEA) on proposed underwriting changes.'
        },

        // Tools
        tools: ['BigQuery (SQL)', 'Regex', 'Root Cause Analysis', 'FMEA'],

        // Ethical Commitment
        ethical1: `This analysis prioritizes data integrity and transparency, ensuring that risk models are based on verified cash-flow stability rather than inflated income reports. Recommendations are designed to protect both the lender's capital and the borrower from unsustainable debt loads.`,
        ethical2: ' '
    }
};

// Get SVG icon inline
function getIcon(iconName) {
    const icons = {
        'chart': '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/></svg>',
        'external': '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>',
        'link': '<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>',
        'document': '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>'
    };
    return icons[iconName] || '';
}

// Render Projects Grid
function renderProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    
    let html = '';
    for (const [id, project] of Object.entries(projects)) {
        const imageHtml = project.image ? `<img src="${project.image}" alt="${project.title}" class="project-card-image" loading="lazy">` : '';
        html += `
            <div class="project-card" onclick="navigateTo('project/${id}')">
                ${imageHtml}
                <div class="project-card-content">
                    <h3 class="project-card-title">${project.title}</h3>
                    <p class="project-card-desc">${project.subtitle}</p>
                    <span class="project-card-link">
                        View Details
                        <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                    </span>
                </div>
            </div>
        `;
    }
    grid.innerHTML = html;
}

// Render Project Summary
function renderProjectSummary(projectId) {
    const project = projects[projectId];
    const titleEl = document.getElementById('summary-title');
    const contentEl = document.getElementById('summary-content');
    
    if (!project) {
        titleEl.textContent = 'Project Not Found';
        contentEl.innerHTML = `
            <p>The requested project could not be found.</p>
            <a href="#/projects" class="dashboard-link" onclick="navigateTo('projects')">
                ${getIcon('chart')} Back to Projects
            </a>
        `;
        return;
    }
    
    titleEl.innerHTML = project.title + '<br><span style="font-size: 1rem; font-weight: normal; color: var(--text-muted);">' + project.subtitle + '</span>';
    
    // Build tools stack HTML
    const toolsHtml = project.tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('');
    
    // Build insights table HTML
    const insightsHtml = `
        <table>
            <thead>
                <tr>
                    <th>Asset</th>
                    <th>Key Driver</th>
                    <th>2026 Strategy</th>
                </tr>
            </thead>
            <tbody>
                ${project.insights.map(row => `
                    <tr>
                        <td><strong>${row.asset}</strong></td>
                        <td>${row.keyDriver}</td>
                        <td>${row.strategy}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
    
    // Build solution items HTML dynamically
    let solutionItems = '';
    if (project.solution.gold) solutionItems += `<li>${project.solution.gold}</li>`;
    if (project.solution.bitcoin) solutionItems += `<li>${project.solution.bitcoin}</li>`;
    if (project.solution.sentiment) solutionItems += `<li>${project.solution.sentiment}</li>`;
    if (project.solution.visualization) solutionItems += `<li>${project.solution.visualization}</li>`;
    
    // Build video HTML if videoUrl exists
    let videoHtml = '';
    if (project.videoUrl) {
        videoHtml = `
            <div class="video-container" style="margin-bottom: 1.5rem; border-radius: 0.75rem; overflow: hidden; background: #f3f4f6;">
                <video controls style="width: 100%; display: block;" poster="${project.videoPoster || ''}">
                    <source src="${project.videoUrl}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                ${project.videoCaption ? `<p style="padding: 0.75rem 1rem; margin: 0; font-size: 0.875rem; color: var(--text-gray); font-style: italic;">${project.videoCaption}</p>` : ''}
            </div>
        `;
    }
    
    contentEl.innerHTML = `
        ${videoHtml}
        
        <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; margin-bottom: 5rem;">
            <a href="${project.dashboardUrl}" target="_blank" rel="noopener noreferrer" class="dashboard-link">
                ${getIcon('external')} Open Dashboard
            </a>
            <a href="${project.presentationUrl}" target="_blank" rel="noopener noreferrer" class="dashboard-link">
                ${getIcon('document')} Presentation Deck
            </a>
        </div>
        
        <h3>Project Summary</h3>
        <p>${project.summary}</p>
        
        <h3>The Problem</h3>
        <p>${project.problem}</p>
        
        <h3>The Solution: "Traffic Light" Indicators</h3>
        <ul>
            ${solutionItems}
        </ul>
        
        <h3>Key Analytical Insights</h3>
        <blockquote>
            <p>${project.warning}</p>
        </blockquote>
        ${insightsHtml}
        
        <h3>Model Performance Proof</h3>
        <ul>
            <li><strong>Predictive Edge:</strong> ${project.modelPerformance.logisticRegression}</li>
            <li><strong>Feature Dominance:</strong> ${project.modelPerformance.randomForest}</li>
        </ul>
        
        <h3>Technical Implementation (Scope & Responsibility)</h3>
        <h3>Data Pipeline & Methods</h3>
        <p>${project.technical.dataPipeline}</p>
        <ul>
            <li><strong>Data Engineering:</strong> ${project.technical.dataEngineering}</li>
            <li><strong>Feature Engineering:</strong> ${project.technical.featureEngineering}</li>
            <li><strong>Modeling:</strong> ${project.technical.modeling}</li>
        </ul>
        
        <h3>Tools & Stack</h3>
        <div class="tools-stack">${toolsHtml}</div>
        
        <h3>Ethical commitment</h3>
        <blockquote>
            <p>${project.ethical1}</p>
            <br>
            <p>${project.ethical2}</p>
        </blockquote>
    `;
}

// Navigate to a route
function navigateTo(route) {
    window.location.hash = '#/' + route;
}

// Handle routing
function handleRoute() {
    const hash = window.location.hash || '#/cv';
    const route = hash.replace('#/', '');
    
    // Hide all views
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });
    
    // Update nav
    document.querySelectorAll('.nav a').forEach(link => {
        link.classList.remove('active');
    });
    
    if (route === 'cv') {
        document.getElementById('view-cv').classList.add('active');
        document.getElementById('nav-cv').classList.add('active');
    } else if (route === 'projects') {
        document.getElementById('view-projects').classList.add('active');
        document.getElementById('nav-projects').classList.add('active');
    } else if (route.startsWith('project/')) {
        const projectId = route.replace('project/', '');
        renderProjectSummary(projectId);
        document.getElementById('view-project').classList.add('active');
    } else {
        // Not found
        document.getElementById('view-not-found').classList.add('active');
    }
}

// Initialize app
function init() {
    // Render projects grid
    renderProjects();
    
    // Handle initial route
    handleRoute();
    
    // Listen for hash changes (back/forward navigation)
    window.addEventListener('hashchange', handleRoute);
}

// Start the app when DOM is ready
document.addEventListener('DOMContentLoaded', init);
