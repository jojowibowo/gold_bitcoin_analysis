# **Project Title: AI-Driven Inflation Hedge Strategy for Singaporean Retail Investors (2026 Outlook)**

## **The Business Problem:** As part of **Lion City FinAI**, this project addresses the "Retail Dilemma": traditional inflation advice fails to account for how Gold and Bitcoin behave in different market regimes.
    
## **The Goal:** To determine if Bitcoin or Gold serves as a better store of value against the Singapore Dollar (SGD) through 2026.
    
## **The Data Pipeline:**
    
-   **Timeframe:** 2017–2025 (Monthly & Weekly frequency).
        
-   **Features:** Integrated Singaporean CPI (Headline/Core), US Fed Funds Rate, DXY (Dollar Index), and the **Crypto Fear & Greed Index** for sentiment analysis.
        

## **Key Insights & Performance**

-   **Gold is a Macro-Stress Stabilizer:** It acts as a defensive hedge against currency stress and USD/SGD volatility, rather than just tracking CPI directly.
    
-   **Bitcoin is Sentiment-Driven:** Weekly price movements are heavily influenced by investor mood. The **Fear & Greed Index** was the most important feature in the Bitcoin model, with an importance score of **0.3225**.
    
-   **Model Success:** The **Logistic Regression** model achieved an accuracy of **~60%** and an F1-Score of **0.67** in predicting Bitcoin’s directional movement, providing a viable signal for tactical trading.
