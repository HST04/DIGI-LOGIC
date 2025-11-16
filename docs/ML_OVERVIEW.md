# ML Overview

ML responsibilities (lightweight, local):
- Suggest where to add buffers for high fanout nets.
- Classify circuits as combinational or sequential.
- Detect common anti-patterns (combinational loops, unusual fanout) using heuristics + simple models.

Constraints:
- Models are implemented with NumPy only. No TensorFlow/PyTorch.
- The ML server runs on localhost and requires user explicit action to send circuit snapshots. No automatic data collection.
- Users must opt-in to suggestions. No circuit data is stored permanently.
