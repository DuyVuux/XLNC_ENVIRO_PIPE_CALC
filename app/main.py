from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.api.v1 import api_router

app = FastAPI(
    title="XLNC Automated Water Treatment Calculation System",
    description="API for water treatment engineering calculations",
    version="1.0.0",
    docs_url="/api/docs",
    redoc_url="/api/redoc",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix=settings.API_V1_PREFIX)

@app.get("/")
async def root():
    return {
        "message": "XLNC Automated Water Treatment Calculation System API",
        "version": "1.0.0",
        "docs": "/api/docs"
    }

@app.get("/health")
async def health():
    return {"status": "healthy"}

