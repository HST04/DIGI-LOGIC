# Architecture

This repository contains a local digital circuit simulator with a browser-based frontend and a Python ML suggestion engine running on localhost.

- Frontend (frontend/): HTML/CSS/JS editor, simulator, waveform viewer. Runs fully offline from local files. No persistence.
- Backend (backend/): FastAPI app exposing analysis and ML suggestion endpoints. Binds to 127.0.0.1 only. ML code uses NumPy only.
- No database. No user data written to disk except model_state/weights.json (placeholder). The design intentionally avoids saving user circuits.

Data flow:
- Frontend maintains an in-memory circuit graph.
- When the user requests suggestions, the frontend POSTs the circuit snapshot to the backend ML endpoints.
- Backend analyzes and returns suggestions; no user circuit data is stored server-side.
