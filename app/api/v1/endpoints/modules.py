from fastapi import APIRouter, HTTPException
from app.modules.pipe_sizing.schemas import PipeSizingInput, PipeSizingOutput
from app.modules.pipe_sizing.service import calculate as calculate_pipe_sizing
from app.modules.spray_aeration.schemas import SprayAerationInput, SprayAerationOutput
from app.modules.spray_aeration.service import calculate as calculate_spray_aeration
from app.modules.mixing_reaction.schemas import MixingReactionInput, MixingReactionOutput
from app.modules.mixing_reaction.service import calculate as calculate_mixing_reaction
from app.modules.settling_tank.schemas import SettlingTankInput, SettlingTankOutput
from app.modules.settling_tank.service import calculate as calculate_settling_tank
from app.modules.filtration.schemas import FiltrationInput, FiltrationOutput
from app.modules.filtration.service import calculate as calculate_filtration

router = APIRouter()

@router.post("/pipe-sizing/calculate", response_model=PipeSizingOutput)
async def calculate_pipe_sizing_endpoint(input_data: PipeSizingInput):
    try:
        result = calculate_pipe_sizing(input_data)
        return result
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.post("/spray-aeration/calculate", response_model=SprayAerationOutput)
async def calculate_spray_aeration_endpoint(input_data: SprayAerationInput):
    try:
        result = calculate_spray_aeration(input_data)
        return result
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.post("/mixing-reaction/calculate", response_model=MixingReactionOutput)
async def calculate_mixing_reaction_endpoint(input_data: MixingReactionInput):
    try:
        result = calculate_mixing_reaction(input_data)
        return result
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.post("/settling-tank/calculate", response_model=SettlingTankOutput)
async def calculate_settling_tank_endpoint(input_data: SettlingTankInput):
    try:
        result = calculate_settling_tank(input_data)
        return result
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.post("/filtration/calculate", response_model=FiltrationOutput)
async def calculate_filtration_endpoint(input_data: FiltrationInput):
    try:
        result = calculate_filtration(input_data)
        return result
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.post("/chain/calculate")
async def calculate_chain():
    return {"message": "Module chain calculation - to be implemented"}

