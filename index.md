# **Gold & Bitcoin as Inflation Hedges**  
### **A Regime-Dependent Analysis for Singaporean Retail Investors**  
**By Jojo Wibowo** | [LinkedIn](https://www.linkedin.com/in/jojo-wibowo/) | [jojowibowo@proton.me](mailto:jojowibowo@proton.me)

---

## **Live Interactive Dashboard**  



<div id='vizContainer' style='position: relative; width: 100%; display: flex; justify-content: center; padding: 20px 0;'>
    <div class='tableauPlaceholder' id='viz1707000000000' style='position: relative; width: 95%; max-width: 1000px;'>
        <object class='tableauViz' style='display:none;'>
            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
            <param name='embed_code_version' value='3' /> 
            <param name='site_root' value='' />
            <param name='name' value='LionCityFinAIInflationHedgeDashboard/AIInflationHedgeDashboard' />
            <param name='tabs' value='no' />
            <param name='toolbar' value='yes' />
            <param name='animate_transition' value='yes' />
            <param name='display_static_image' value='no' />
            <param name='display_spinner' value='yes' />
            <param name='display_overlay' value='yes' />
            <param name='display_count' value='yes' />
            <param name='language' value='en-US' />
            <param name='filter' value='publish=yes' />
        </param>
        </object>
    </div>
</div>

<script type='text/javascript'>
    var divElement = document.getElementById('viz1707000000000');
    var vizElement = divElement.getElementsByTagName('object')[0];
    
    // This logic ensures the dashboard doesn't truncate
    if ( divElement.offsetWidth > 800 ) { 
        vizElement.style.minWidth='700px'; vizElement.style.maxWidth='1000px';
        vizElement.style.width='100%'; vizElement.style.height='850px';
    } else { 
        vizElement.style.width='100%'; vizElement.style.height='1100px'; 
    }
    
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
</script>



_A mobile-friendly interface featuring normalized 0–100 stress bars for Macro Stress and Sentiment. Developed as part of the **Lion City FinAI** framework._

---

## **Project Summary**  
Developed a regime-aware, AI-assisted decision-support framework to help Singaporean retail investors navigate the "Retail Dilemma." Traditional inflation hedges often fail during macro-financial stress; this project provides a data-driven alternative to static investment claims.

### **The Problem**  
Singaporean investors face fragmented information and conflicting narratives. Static tools fail to capture **regime shifts**, leading to misaligned risk assessments for assets like Gold and Bitcoin during periods of high inflation.

### **The Solution:** "Traffic Light" Indicators  
-   **Gold (The Stabilizer):** Identified as a Macro-Stress Stabilizer (0.017 correlation to CPI). It functions as a defensive hedge against currency shocks rather than a direct inflation tracker.
    
-   **Bitcoin (The Sentiment Asset):** Characterized as a Sentiment-Driven Risk Asset. 50.5% of its top-feature importance is derived from market mood (Fear & Greed Index).

---

## **Key Analytical Insights**  
> [!IMPORTANT]
> 
> **Core Strategy:** Use Gold defensively for macro stability and Bitcoin tactically for sentiment-based growth.

| **Asset** | **Key Driver** | **2026 Strategy** |
| :--- | :--- | :--- |
| **Gold** | Macro Stress / USD-SGD Vol | Buy during High Macro Stress (>60) |
| **Bitcoin** | Market Sentiment | Tactical exposure during Greed (>50) |

### **Model Performance Proof**  

-   **Predictive Edge:** The Logistic Regression model achieved **60.6% accuracy** in predicting Bitcoin's directional movement.
    
-   **Feature Dominance:** In the Random Forest model, the **Crypto Fear & Greed Index** was the single most influential variable (Importance: **0.3204**), far outweighing traditional macro indicators.

---

## **Technical Implementation (Scope & Responsibility)**  
### **Data Pipeline & Methods**  
As the **Analyst**, I managed the end-to-end data pipeline involving 410 weekly observations:

-   **Data Engineering:** Integrated disparate sources (Yahoo Finance, FRED, SingStat) and applied **Winsorization** to mitigate the impact of extreme market outliers.
    
-   **Feature Engineering:** Developed normalized 0–100 stress indices and percentile-based scaling to simplify complex signals for retail users.
    
-   **Modeling:** Benchmarked Linear Regression, Random Forest, and Logistic Regression to determine the most interpretable regime signals.
    
### **Tools & Stack**  
`Python` `Pandas` `Scikit-Learn` `Tableau` `Yahoo Finance API`

---

## **Project Assets**  
-   **[Full Technical Analysis](./analysis.html)** – _A web-ready deep dive into the code and cleaning logic._
    
-   **[Detailed Strategy Report (PDF)](https://github.com/jojowibowo/gold_bitcoin_analysis/blob/main/reports/gold_bitcoin_analysis.pdf)** – _Executive summary and 2026 outlook._
    
-   **[Cleaned Master Dataset](https://github.com/jojowibowo/gold_bitcoin_analysis/blob/main/data/gold_bitcoin_analysis.xlsx)** – _The processed 410-observation dataset._

---

## **Ethical Commitment**  
As a researcher for Lion City FinAI, I prioritize **User Protection** and **Transparency** over persuasive narratives.

_"All models are wrong, but some are useful." — George Box_

---

## **Contact & Collaboration**  

I am currently seeking opportunities in **Data Analytics and Financial Research**.

-   **Email:** [jojowibowo@proton.me](mailto:jojowibowo@proton.me)
    
-   **LinkedIn:** [linkedin.com/in/jojo-wibowo](https://www.linkedin.com/in/jojo-wibowo/)
    
-   **Location:** Remote
    

---
