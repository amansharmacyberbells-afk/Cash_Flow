def calculate_comparison_ratios(data: dict) -> dict:
    business = data.get("business", {})
    benchmark = data.get("benchmark", {})

    output = {}
    for key, value in business.items():
        benchmark_value = float(benchmark.get(key, 0))
        business_value = float(value)
        output[key] = {
            "business": business_value,
            "benchmark": benchmark_value,
            "delta": business_value - benchmark_value,
            "status": "good" if business_value >= benchmark_value else "attention",
        }
    return output
