# Contributing

Coding style and conventions:
- Frontend uses vanilla JS (ES modules) and plain CSS; keep modules small and testable.
- Backend is Python 3.8+ using FastAPI. Keep ML code pure NumPy.
- No persistence or user-data storage. Add tests for components and simulation behavior.

Folder conventions:
- `frontend/` UI, editor and simulation engine code
- `backend/` FastAPI app, ML code under `backend/ml`, and utilities under `backend/utils`
- `docs/` design docs and guides

When adding code:
- Document exported functions in each module.
- Add unit tests where feasible (not included in the initial stub).
