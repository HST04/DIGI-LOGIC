# Simulation Engine

Design notes for the frontend event-driven simulation engine:

- Scheduler: event queue sorted by time; processes events in chronological order.
- Net model: nets carry values (0,1,X). Drivers are evaluated and net resolution handles 'X' states conservatively.
- Components report output schedule events based on propagation delays in their metadata.
- DFF/clocked elements: handle setup/hold timing checks in simulation instrumentation (not enforced in stub).
- The engine should be entirely in-browser and run on the client-side CPU. No server involvement.
