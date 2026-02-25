def calculate_ratios(data: dict) -> dict:
    current_assets = float(data.get("currentAssets", 0))
    current_liabilities = float(data.get("currentLiabilities", 0))
    total_liabilities = float(data.get("totalLiabilities", 0))
    total_equity = float(data.get("totalEquity", 0))

    current_ratio = current_assets / current_liabilities if current_liabilities else 0
    debt_to_equity = total_liabilities / total_equity if total_equity else 0
    working_capital = current_assets - current_liabilities

    return {
        "currentRatio": current_ratio,
        "debtToEquity": debt_to_equity,
        "workingCapital": working_capital,
    }
