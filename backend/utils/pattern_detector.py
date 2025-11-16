"""
Pattern detection helpers: shift-register detection, loop detection, fanout/fanin analysis.
"""

def find_issues(circuit_json):
    issues = []
    nets = circuit_json.get('nets', {})
    # Fanout analysis
    for net_id, net in nets.items():
        fo = len(net.get('nodes',[]))
        if fo>8:
            issues.append({'type':'high_fanout','net':net_id,'fanout':fo})
    # TODO: implement shift-register detection heuristics, combinational loops
    return issues
