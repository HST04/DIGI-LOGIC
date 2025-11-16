import { TopToolbar } from './components/TopToolbar';
import { ComponentPalette } from './components/ComponentPalette';
import { CircuitCanvas } from './components/CircuitCanvas';
import { WaveformViewer } from './components/WaveformViewer';
import { PropertiesPanel } from './components/PropertiesPanel';
import { StatusBar } from './components/StatusBar';

export default function App() {
  return (
    <div className="h-screen flex flex-col bg-[#0a0e1a] text-gray-100 overflow-hidden">
      {/* Top Toolbar */}
      <TopToolbar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel - Component Palette */}
        <ComponentPalette />
        
        {/* Center Panel - Canvas + Waveform */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <CircuitCanvas />
          <WaveformViewer />
        </div>
        
        {/* Right Panel - Properties & ML */}
        <PropertiesPanel />
      </div>
      
      {/* Bottom Status Bar */}
      <StatusBar />
    </div>
  );
}
