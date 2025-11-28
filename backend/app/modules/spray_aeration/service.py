from app.modules.spray_aeration.schemas import SprayAerationInput, SprayAerationOutput
from app.modules.spray_aeration.logic import calculate_spray_aeration


def calculate(input_data: SprayAerationInput) -> SprayAerationOutput:
    return calculate_spray_aeration(input_data)



