export function WaveformViewer() {
  return (
    <div className="h-[240px] bg-[#0f1420] border-t border-[#1a2033] flex flex-col">
      {/* Header */}
      <div className="h-10 border-b border-[#1a2033] flex items-center px-4">
        <h3 className="text-sm">Waveform Viewer</h3>
      </div>

      {/* Waveforms */}
      <div className="flex-1 overflow-auto p-4">
        <div className="space-y-4">
          
          {/* CLK Signal */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-gray-400 w-16">CLK</span>
            <div className="flex-1 h-12 relative">
              <svg width="100%" height="100%" className="border border-[#1a2033] rounded bg-[#0a0e1a]">
                {/* Grid lines */}
                <line x1="0" y1="24" x2="100%" y2="24" stroke="#1a2033" strokeWidth="1" strokeDasharray="2,2" />
                
                {/* Clock signal */}
                <path
                  d="M 20 40 L 20 8 L 60 8 L 60 40 L 100 40 L 100 8 L 140 8 L 140 40 L 180 40 L 180 8 L 220 8 L 220 40 L 260 40 L 260 8 L 300 8 L 300 40"
                  stroke="#4d9fff"
                  strokeWidth="2"
                  fill="none"
                  className="drop-shadow-[0_0_4px_rgba(77,159,255,0.6)]"
                />
              </svg>
            </div>
          </div>

          {/* Q[0] Signal */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-gray-400 w-16">Q[0]</span>
            <div className="flex-1 h-12 relative">
              <svg width="100%" height="100%" className="border border-[#1a2033] rounded bg-[#0a0e1a]">
                <line x1="0" y1="24" x2="100%" y2="24" stroke="#1a2033" strokeWidth="1" strokeDasharray="2,2" />
                
                {/* Signal */}
                <path
                  d="M 20 40 L 60 40 L 60 8 L 140 8 L 140 40 L 220 40 L 220 8 L 300 8"
                  stroke="#00ff88"
                  strokeWidth="2"
                  fill="none"
                  className="drop-shadow-[0_0_4px_rgba(0,255,136,0.6)]"
                />
              </svg>
            </div>
          </div>

          {/* Q[1] Signal */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-gray-400 w-16">Q[1]</span>
            <div className="flex-1 h-12 relative">
              <svg width="100%" height="100%" className="border border-[#1a2033] rounded bg-[#0a0e1a]">
                <line x1="0" y1="24" x2="100%" y2="24" stroke="#1a2033" strokeWidth="1" strokeDasharray="2,2" />
                
                {/* Signal */}
                <path
                  d="M 20 40 L 140 40 L 140 8 L 300 8"
                  stroke="#00ff88"
                  strokeWidth="2"
                  fill="none"
                  className="drop-shadow-[0_0_4px_rgba(0,255,136,0.6)]"
                />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
