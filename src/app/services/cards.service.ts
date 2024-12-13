import { Injectable } from '@angular/core';
import { ICard } from '../models/card.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private cards: ICard[] = [
    {
      sentiment: "BULLISH",
      title: "Highest YOY Quarterly profit growth",
      description: "Companies undergoing major capacity expansion. Companies where fixed assets have doubled...",
      lastRun: "29 Jan, 5:33 PM",
      stocks: 53,
      author: "Silvia Auer",
      views: 140,
      action: "Follow",
      category: "Score Improvement"
    },
    {
      sentiment: "BEARISH",
      title: "Highest YOY Quarterly profit growth",
      description: "Companies undergoing major capacity expansion. Companies where fixed assets have doubled...",
      lastRun: "29 Jan, 5:33 PM",
      stocks: 53,
      author: "Silvia Auer",
      views: 140,
      action: "Follow",
      category: "Score Improvement"
    },
    {
      sentiment: "BULLISH",
      title: "Top Performing Companies",
      description: "Companies with the best quarterly performance based on revenue and profit margins...",
      lastRun: "29 Jan, 6:00 PM",
      stocks: 75,
      author: "John Doe",
      views: 200,
      action: "Follow",
      category: "Performance"
    },
    {
      sentiment: "BEARISH",
      title: "Companies with Declining Revenues",
      description: "Firms showing significant revenue declines over consecutive quarters...",
      lastRun: "30 Jan, 8:15 AM",
      stocks: 40,
      author: "Jane Smith",
      views: 180,
      action: "Follow",
      category: "Revenue Decline"
    },
    {
      sentiment: "BULLISH",
      title: "Innovative Startups to Watch",
      description: "Promising startups making waves in the tech industry with innovative solutions...",
      lastRun: "30 Jan, 9:30 AM",
      stocks: 65,
      author: "Mike Johnson",
      views: 120,
      action: "Follow",
      category: "Innovation"
    },
    {
      sentiment: "BEARISH",
      title: "Underperforming Market Leaders",
      description: "Market leaders that have recently underperformed due to various factors...",
      lastRun: "30 Jan, 11:00 AM",
      stocks: 90,
      author: "Sarah Brown",
      views: 210,
      action: "Follow",
      category: "Market Analysis"
    },
    {
      sentiment: "BULLISH",
      title: "Top Dividend Paying Stocks",
      description: "Stocks with the highest dividend yields, offering consistent returns to investors...",
      lastRun: "30 Jan, 1:45 PM",
      stocks: 38,
      author: "William Green",
      views: 160,
      action: "Follow",
      category: "Dividends"
    },
    {
      sentiment: "BEARISH",
      title: "Riskiest Stocks",
      description: "Stocks identified as high risk based on volatility and market sentiment...",
      lastRun: "30 Jan, 2:30 PM",
      stocks: 82,
      author: "Emma Wilson",
      views: 190,
      action: "Follow",
      category: "Risk Assessment"
    },
    {
      sentiment: "BULLISH",
      title: "Top Environmentally Friendly Companies",
      description: "Companies making significant strides in sustainability and eco-friendly practices...",
      lastRun: "30 Jan, 3:15 PM",
      stocks: 28,
      author: "Oliver Davis",
      views: 130,
      action: "Follow",
      category: "Sustainability"
    },
    {
      sentiment: "BEARISH",
      title: "Most Volatile Stocks",
      description: "Stocks experiencing high volatility and unpredictable market movements...",
      lastRun: "30 Jan, 4:00 PM",
      stocks: 59,
      author: "Sophia Martin",
      views: 175,
      action: "Follow",
      category: "Volatility"
    }
  ];


  constructor() { }

  getCardsData() {
    return of(this.cards);
  }
}
