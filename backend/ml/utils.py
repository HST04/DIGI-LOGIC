"""
Feature extraction helpers for the ML model. Keep pure NumPy-friendly.
"""
import numpy as np

def extract_features(circuit_json):
    comps = circuit_json.get('components', {})
    nets = circuit_json.get('nets', {})
    num_components = len(comps)
    num_nets = len(nets)
    avg_fanout = 0.0
    if num_nets>0:
        avg_fanout = np.mean([len(n.get('nodes',[])) for n in nets.values()])
    return np.array([num_components, num_nets, avg_fanout], dtype=float)
