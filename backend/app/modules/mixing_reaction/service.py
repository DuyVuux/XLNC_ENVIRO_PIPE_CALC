from app.modules.mixing_reaction.schemas import MixingReactionInput, MixingReactionOutput
from app.modules.mixing_reaction.logic import calculate_mixing_reaction


def calculate(input_data: MixingReactionInput) -> MixingReactionOutput:
    return calculate_mixing_reaction(input_data)




