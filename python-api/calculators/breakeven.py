def calculate_breakeven(data: dict) -> dict:
    fixed_costs = float(data.get("fixedCosts", 0))
    variable_cost_percent = float(data.get("variableCostPercent", 0)) / 100
    actual_sales = float(data.get("actualSales", 0))

    denominator = 1 - variable_cost_percent
    breakeven_sales = fixed_costs / denominator if denominator else 0
    margin_of_safety = actual_sales - breakeven_sales
    margin_of_safety_percent = (margin_of_safety / actual_sales * 100) if actual_sales else 0

    return {
        "breakevenSales": breakeven_sales,
        "marginOfSafety": margin_of_safety,
        "marginOfSafetyPercent": margin_of_safety_percent,
    }
