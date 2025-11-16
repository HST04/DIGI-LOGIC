"""
Estimate CPU/memory usage before ML tasks. Lightweight, uses standard library only.
"""
import multiprocessing

def estimate_cpu_usage(num_tasks=1):
    cpu_count = multiprocessing.cpu_count()
    # Very simple heuristic: 1 task ~ 10% of a CPU core
    est_pct = min(100, num_tasks * 10)
    return {'cpu_count': cpu_count, 'estimated_percent': est_pct}
