<style>
  /* 1. Reset and Background */
  body { 
    background-color: #f4f7f6; 
    font-family: 'Inter', -apple-system, sans-serif; 
    color: #1a1c23;
    margin: 0; padding: 0;
  }
  
  /* 2. Professional Container */
  .main-content { 
    max-width: 1000px; 
    margin: 0 auto; 
    padding: 40px 20px; 
  }

  /* 3. The "Hero" Card */
  .hero-section {
    background: linear-gradient(135deg, #00b894 0%, #0984e3 100%);
    color: white;
    padding: 60px 40px;
    border-radius: 24px;
    margin-bottom: 40px;
    box-shadow: 0 20px 40px rgba(0, 184, 148, 0.2);
  }

  /* 4. Modern Dashboard Card */
  .card {
    background: white;
    border-radius: 20px;
    padding: 24px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.05);
    margin-bottom: 30px;
    border: 1px solid rgba(0,0,0,0.05);
  }

  /* 5. Clean Buttons */
  .btn-primary {
    background: #00b894;
    color: white;
    padding: 12px 24px;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 600;
    transition: 0.3s;
    display: inline-block;
  }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0,184,148,0.3); }

  /* 6. Typography */
  h1 { font-size: 2.5rem; margin: 0; font-weight: 800; }
  h2 { color: #2d3436; font-weight: 700; margin-top: 0; }
</style>

<div class="main-content">

<div class="hero-section">
  <h1>Lion City FinAI</h1>
  <p>Gold & Bitcoin as Inflation Hedges: A Regime-Dependent AI Analysis</p>
  <div style="margin-top: 20px;">
    <a href="mailto:jojowibowo@proton.me" class="btn-primary">Contact Analyst</a>
    <a href="https://www.linkedin.com/in/jojo-wibowo/" class="btn-primary" style="background: rgba(255,255,255,0.2); margin-left: 10px;">LinkedIn</a>
  </div>
</div>

# Gold & Bitcoin as Inflation Hedges
**Project by Jojo Wibowo**

---

## **Live Interactive Dashboard**  

<div class="card">
  <h2>📊 Interactive Strategy Dashboard</h2>
  <div id='vizContainer' style='width: 100%;'>
    <div class='tableauPlaceholder' id='viz1707000000000' style='position: relative; width: 100%;'>
        <object class='tableauViz' style='display:none;'>
            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
            <param name='name' value='LionCityFinAIInflationHedgeDashboard/AIInflationHedgeDashboard' />
            <param name='toolbar' value='yes' />
            <param name='display_static_image' value='no' />
            <param name='display_spinner' value='yes' />
        </object>
    </div>
</div>

<script type='text/javascript'>
    var divElement = document.getElementById('viz1707000000000');
    var vizElement = divElement.getElementsByTagName('object')[0];
    function resizeViz() {
        var width = divElement.offsetWidth;
        vizElement.style.width = '100%';
        vizElement.style.height = (width > 800) ? '850px' : '1150px';
    }
    resizeViz();
    window.onresize = resizeViz;
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
</script>
</div>

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
