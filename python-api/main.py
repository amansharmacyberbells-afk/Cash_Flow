from fastapi import FastAPI
from pydantic import BaseModel

from calculators.profit_loss import calculate_profit_loss
from calculators.breakeven import calculate_breakeven
from calculators.cash_drivers import calculate_cash_drivers
from calculators.balance_sheet import calculate_ratios
from calculators.ratios import calculate_comparison_ratios

app = FastAPI(title="Business Analysis Calculation API")


class Payload(BaseModel):
    data: dict


@app.get("/health")
def health() -> dict:
    return {"status": "ok"}


@app.post("/calculate/profit-loss")
def profit_loss(payload: Payload) -> dict:
    return calculate_profit_loss(payload.data)


@app.post("/calculate/breakeven")
def breakeven(payload: Payload) -> dict:
    return calculate_breakeven(payload.data)


@app.post("/calculate/cash-drivers")
def cash_drivers(payload: Payload) -> dict:
    return calculate_cash_drivers(payload.data)


@app.post("/calculate/ratios")
def ratios(payload: Payload) -> dict:
    return calculate_comparison_ratios(payload.data)


@app.post("/calculate/scenario")
def scenario(payload: Payload) -> dict:
    return {"scenario": payload.data, "message": "Scenario endpoint scaffold"}


@app.post("/calculate/plant-purchase")
def plant_purchase(payload: Payload) -> dict:
    return {"plantPurchase": payload.data, "message": "Plant purchase endpoint scaffold"}


@app.post("/calculate/balance-sheet")
def balance_sheet(payload: Payload) -> dict:
    return calculate_ratios(payload.data)
