# **Gold and Bitcoin as Inflation Hedges: A Regime-Dependent, Data-Driven Analysis for Singaporean Retail Investors**


## [**Dashboard**](https://public.tableau.com/views/LionCityFinAIInflationHedgeDashboard/AIInflationHedgeDashboard)  
![Project Dashboard](https://github.com/jojowibowo/gold_bitcoin_analysis/blob/main/visualizations/AI%20Inflation%20Hedge%20Dashboard.png?raw=true)


## **Executive Summary**

Developed a regime-aware, AI-assisted decision-support framework for Lion City FinAI to help Singaporean retail investors evaluate gold and Bitcoin as inflation hedges. The project addresses the lack of clarity and conflicting narratives regarding these assets amid rising inflation uncertainty, providing a structured, data-driven alternative to simplistic hedging claims and static asset interpretations.


## **The Business Problem**

Singaporean retail investors struggle with fragmented and contradictory information when evaluating inflation hedges. Existing tools rely on isolated indicators and raw returns, failing to capture macroeconomic regime shifts or the conditional behavior of assets. This creates high cognitive load and misaligned analytical sophistication, hindering informed financial decision-making during periods of macro-financial stress.

    
## **The Goal**

The project aims to develop an interpretable, regime-based dashboard that clarifies when gold or Bitcoin function as effective inflation hedges. Key goals include constructing normalized 0–100 stress indices, distinguishing between macro-driven and sentiment-driven market regimes using machine learning, and delivering these insights through a mobile-friendly interface to enhance retail investor risk awareness and decision support.

    
## **The Process**
    
Integrated macroeconomic analysis and machine learning into an end-to-end workflow. I resampled eight years of daily data to a weekly frequency, applied Winsorization to manage outliers, and engineered features across five conceptual dimensions. Conducted correlation diagnostics and trained Random Forest models to identify regime-dependent relationships, translating these statistical insights into a functional dashboard.
        

## **Tools & Method**  

### **A. Tools**

-   **Programming Languages:** Python
    
-   **Data Manipulation & Math:** pandas, NumPy
    
-   **Machine Learning & Statistics:** scikit-learn, statsmodels
    
-   **Visualization:** matplotlib, seaborn, Plotly
    
-   **Data Sources:** Yahoo Finance, FRED, SingStat, MAS, Alternative.me
    

### **B. Methods**

-   **Data Cleaning:** Winsorization (1st and 99th percentiles), Forward-filling (max 5-week gap)
    
-   **Preprocessing:** Weekly frequency resampling (Friday observations), Log return calculation
    
-   **Feature Engineering:** Lagged feature creation (t-1 to t-4 weeks), Period-over-period percentage changes (MoM, YoY)
    
-   **Analytical Techniques:** Pearson and Spearman correlation diagnostics, Time-series overlay analysis
    
-   **Modeling:** Random Forest regression, Time-based train-test splitting (70% training / 30% testing)
    
-   **Operationalization:** Percentile-based normalization (0–100 scaling), Regime classification


## **The Output**

Delivered a mobile-friendly dashboard using 0–100 normalized stress indices and regime signals derived from 410 observations. Analysis revealed gold lacks short-term inflation correlation (r=0.017), acting instead as a stress diversifier, while Bitcoin is sentiment-driven, with sentiment accounting for 50.5% of its top-feature importance. Investors should use gold defensively and Bitcoin tactically.


## **Scope of Work/Achievements**

-   Built an AI-assisted dashboard using 410 weekly observations to provide Singaporean retail investors with regime-aware inflation hedging insights.
    
-   Identified that sentiment variables drive 50.5% of Bitcoin's return behavior, enabling more accurate sentiment-conditional risk assessments for investors.
    
-   Developed normalized 0–100 stress indices for inflation and sentiment, reducing cognitive load for retail investors by simplifying signals.
    
-   Validated gold's role as a diversifying asset with a 0.017 correlation to headline CPI, clarifying its defensive utility.


## **Ethical Commitment**

-   **Author's Commitment:**

As the sole researcher and author of this capstone project, I commit to:

1. **Transparency:** Fully disclosing all data sources, methods, and limitations
2. **Academic Integrity:** Conducting research with honesty and intellectual rigor
3. **User Protection:** Prioritizing investor education and risk awareness over persuasive narratives
4. **Responsible Reporting:** Avoiding sensationalism, exaggeration, or misleading claims
5. **Continuous Improvement:** Updating findings if material errors discovered post-submission

-   **Acknowledgment of Uncertainty:**

This project operates within the bounds of empirical social science. While statistical methods provide structured insights, **financial markets are inherently uncertain**. All findings should be interpreted with humility and skepticism, recognizing that:

This framework aspires to be **useful for structured thinking** while remaining transparent about its wrongness (limitations).
