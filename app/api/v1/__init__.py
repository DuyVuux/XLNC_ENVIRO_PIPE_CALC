from fastapi import APIRouter
from app.api.v1.endpoints import auth, modules

api_router = APIRouter()

api_router.include_router(auth.router, prefix="/auth", tags=["authentication"])
api_router.include_router(modules.router, prefix="/modules", tags=["modules"])

