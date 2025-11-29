from app.modules.pipe_sizing.schemas import PipeSizingInput, PipeSizingOutput
from app.modules.pipe_sizing.logic import calculate_pipe_sizing


def calculate(input_data: PipeSizingInput) -> PipeSizingOutput:
    return calculate_pipe_sizing(input_data)




