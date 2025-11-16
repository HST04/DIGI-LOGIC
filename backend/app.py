"""
Local-only FastAPI backend for ML suggestions and analysis.
Binds to 127.0.0.1 only. No persistence, no database.
"""
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Any, Dict
import uvicorn

from backend.ml import model as ml_model
from backend.utils import pattern_detector

app = FastAPI(title='LocalDigitalCircuitSimulator ML API')
model = ml_model.SimpleModel()

class CircuitPayload(BaseModel):
    circuit: Dict[str, Any]

@app.post('/suggest_components')
async def suggest_components(payload: CircuitPayload):
    # Return suggestions for improving or completing the circuit
    suggestions = model.suggest_components(payload.circuit)
    return {"suggestions": suggestions}

@app.post('/detect_errors')
async def detect_errors(payload: CircuitPayload):
    errors = pattern_detector.find_issues(payload.circuit)
    return {"issues": errors}

@app.post('/classify_circuit')
async def classify_circuit(payload: CircuitPayload):
    cls = model.classify(payload.circuit)
    return {"class": cls}

@app.post('/simplify')
async def simplify(payload: CircuitPayload):
    simplified = model.simplify(payload.circuit)
    return {"circuit": simplified}

if __name__ == '__main__':
    # Bind to localhost only per rules
    uvicorn.run('backend.app:app', host='127.0.0.1', port=8000, log_level='info')
