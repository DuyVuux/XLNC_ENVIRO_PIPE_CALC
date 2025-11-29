from app.modules.settling_tank.schemas import SettlingTankInput, SettlingTankOutput
from app.modules.settling_tank.logic import calculate_settling_tank


def calculate(input_data: SettlingTankInput) -> SettlingTankOutput:
    return calculate_settling_tank(input_data)




