from app.modules.filtration.schemas import FiltrationInput, FiltrationOutput
from app.modules.filtration.logic import calculate_filtration


def calculate(input_data: FiltrationInput) -> FiltrationOutput:
    return calculate_filtration(input_data)



