// Entry point for the frontend app. Connects UI, canvas and simulation modules.
import { initUI } from './ui.js';
import { initCanvas } from './canvas.js';
import { initSimulation } from './sim.js';

window.addEventListener('DOMContentLoaded', () => {
  initUI();
  initCanvas(document.getElementById('circuit-canvas'));
  initSimulation();
  console.log('LocalDigitalCircuitSimulator frontend initialized');
});
