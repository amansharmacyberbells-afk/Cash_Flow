def calculate_cash_drivers(data: dict) -> dict:
    revenue = float(data.get("revenue", 0))
    current_net_profit = float(data.get("currentNetProfit", 0))
    revenue_change_percent = float(data.get("revenueChangePercent", 0))

    revenue_change = revenue * (revenue_change_percent / 100)
    potential_net_profit = current_net_profit + revenue_change
    potential_increase = potential_net_profit - current_net_profit

    return {
        "revenueChange": revenue_change,
        "potentialNetProfit": potential_net_profit,
        "potentialIncrease": potential_increase,
    }
