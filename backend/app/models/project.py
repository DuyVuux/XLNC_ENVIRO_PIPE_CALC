from sqlalchemy import Column, String, DateTime, ForeignKey, Text
from sqlalchemy.dialects.postgresql import UUID, JSONB
from sqlalchemy.orm import relationship
import uuid
from datetime import datetime
from app.db.base import Base


class Project(Base):
    __tablename__ = "projects"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=False)
    name = Column(String, nullable=False)
    description = Column(Text, nullable=True)
    water_type = Column(String, nullable=True)
    scale = Column(String, nullable=True)
    metadata = Column(JSONB, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    calculations = relationship("Calculation", back_populates="project")


class Calculation(Base):
    __tablename__ = "calculations"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    calculation_id = Column(String, unique=True, index=True, nullable=False)
    project_id = Column(UUID(as_uuid=True), ForeignKey("projects.id"), nullable=True)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=True)
    module = Column(String, nullable=False)
    module_version = Column(String, nullable=True)
    formula_set_version = Column(String, nullable=True)
    prompt_version = Column(String, nullable=True)
    inputs = Column(JSONB, nullable=False)
    outputs = Column(JSONB, nullable=False)
    intermediates = Column(JSONB, nullable=True)
    safety_checks = Column(JSONB, nullable=True)
    warnings = Column(JSONB, nullable=True)
    confidence = Column(String, nullable=True)
    technical_report = Column(JSONB, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    project = relationship("Project", back_populates="calculations")


class ModuleChain(Base):
    __tablename__ = "module_chains"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    project_id = Column(UUID(as_uuid=True), ForeignKey("projects.id"), nullable=True)
    chain_sequence = Column(String, nullable=False)
    chain_config = Column(JSONB, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)




