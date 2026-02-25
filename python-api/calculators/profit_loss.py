def calculate_profit_loss(data: dict) -> dict:
    revenue = float(data.get("revenue", 0))
    opening_stock = float(data.get("openingStock", 0))
    purchases = float(data.get("purchases", 0))
    closing_stock = float(data.get("closingStock", 0))
    total_expenses = float(data.get("totalExpenses", 0))

    cogs = opening_stock + purchases - closing_stock
    gross_profit = revenue - cogs
    net_profit = gross_profit - total_expenses
    gross_margin = (gross_profit / revenue * 100) if revenue else 0
    net_margin = (net_profit / revenue * 100) if revenue else 0

    return {
        "cogs": cogs,
        "grossProfit": gross_profit,
        "netProfit": net_profit,
        "grossMarginPercent": gross_margin,
        "netMarginPercent": net_margin,
    }
