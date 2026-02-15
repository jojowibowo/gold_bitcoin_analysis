# Gold & Bitcoin as Inflation Hedges
### A Regime-Dependent Analysis for Singaporean Retail Investors
**By Jojo Wibowo** | [LinkedIn](https://www.linkedin.com/in/jojo-wibowo/) | [GitHub Repo](https://jojowibowo.github.io/gold_bitcoin_analysis/)

---

## Live Interactive Dashboard
[![View Dashboard](https://github.com/jojowibowo/gold_bitcoin_analysis/blob/main/visualizations/AI%20Inflation%20Hedge%20Dashboard.png?raw=true)](https://public.tableau.com/views/LionCityFinAIInflationHedgeDashboard/AIInflationHedgeDashboard)

*A mobile-friendly interface featuring normalized 0–100 stress bars for Macro Stress and Sentiment.*

---

## Project Summary
Developed a regime-aware, AI-assisted decision-support framework for **Lion City FinAI**. This project clarifies the "Retail Dilemma" by distinguishing between macro-driven and sentiment-driven market regimes using machine learning.

### The Problem
Singaporean investors face fragmented info. Static tools fail to capture macroeconomic regime shifts, leading to misaligned risk assessments during financial stress.

### The Solution: "Traffic Light" Indicators
- **Gold:** Identified as a **Macro-Stress Stabilizer** (0.017 correlation to CPI; defensive utility).
- **Bitcoin:** Identified as a **Sentiment-Driven Risk Asset** (50.5% of model importance driven by fear/greed).

---

## Key Analytical Insights
> [!IMPORTANT]
> **Investors should use Gold defensively and Bitcoin tactically.**

| Asset | Key Driver | 2026 Strategy |
| :--- | :--- | :--- |
| **Gold** | Macro Stress / USD-SGD Vol | Buy during High Macro Stress (>60) |
| **Bitcoin** | Market Sentiment | Tactical exposure during Greed (>50) |

---

## Technical Implementation
### Data Pipeline & Methods
- **Preprocessing:** Winsorization (outlier management) and Forward-filling.
- **Modeling:** Random Forest Regression on 410 weekly observations.
- **Engineering:** Percentile-based normalization for 0–100 scaling.

### Tools
`Python` `Pandas` `Scikit-Learn` `Tableau` `Yahoo Finance API`

---

## Project Assets
- [Full Technical Notebook (Jupyter)](./gold_bitcoin_analysis.ipynb)
- [Detailed Strategy Report (PDF)](./gold_bitcoin_analysis.pdf)
- [Cleaned Master Dataset (CSV)](./gold_bitcoin_analysis.xlsx - Master_Data_Final.csv)

---

## 🛡️ Ethical Commitment
As the researcher for Lion City FinAI, I prioritize **User Protection** and **Transparency** over persuasive narratives. 
*"All models are wrong, but some are useful."*
