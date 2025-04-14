# Car Theft Analysis in India

## Project Overview

This comprehensive data visualization project explores car theft patterns across India, utilizing interactive and static visualizations to uncover insights into vehicle theft trends, recovery rates, and associated factors.

## Dataset Details

- **Source**: [Kaggle](https://www.kaggle.com)
- **Records**: 10,000 car theft incidents
- **Attributes**: 22 key features including car brand, model, theft location, security measures, and recovery status

## Visualizations

### 1. Interactive Choropleth Map
- **Focus**: Geographic distribution of car thefts and recovery outcomes
- **Key Features**:
  - Color-coded state-wise theft volumes
  - Hover tooltips with detailed state information
  - Legend indicating missing data

### 2. Interactive Stacked Bar Chart
- **Focus**: Vehicle thefts across major car brands
- **Key Features**:
  - Breakdown of recovered vs. non-recovered vehicles
  - Interactive hover details
  - Brand-wise theft and recovery statistics

### 3. Interactive Recovery Aids Bar Chart
- **Focus**: Impact of recovery aids on car recovery
- **Key Features**:
  - Radio button selection for different recovery aids
  - Percentage comparisons
  - Hover functionality for precise insights

### 4. Interactive Line Chart
- **Focus**: Daily theft trends with 30-day rolling average
- **Key Features**:
  - Daily and monthly trend lines
  - Zoomable interface
  - Full-year timeline analysis

### 5. Static Heatmap
- **Focus**: Theft frequency by car type and time of day
- **Key Features**:
  - Color-coded intensity of thefts
  - Car type vs. time period analysis

## Responsive Design

### Media Queries

The project implements responsive design through CSS media queries, specifically addressing screen height variations:

#### Screen Height < 925px
- Reduced font sizes
- Compact visualization layouts
- Adjusted padding and margins

#### Screen Height < 711px
- Further font size reduction
- Minimal spacing
- Alternative view for smaller screens (button to open visualization)

#### Responsive Strategies
- Dynamic component rendering based on screen height
- Fallback button for visualizations on very small screens
- Maintained readability and information density

## Technologies Used

### Frontend
- React
- Framer Motion
- CSS

### Data Visualization
- Plotly
- Folium
- D3.js
- Altair

### Data Processing
- Pandas

Project Link: [https://car-theft-india-analysis.vercel.app/](https://car-theft-india-analysis.vercel.app/)
