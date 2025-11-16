import { Badge } from './ui/badge';

export function CircuitCanvas() {
  return (
    <div className="flex-1 bg-[#0a0e1a] overflow-hidden flex flex-col">
      {/* Canvas Header */}
      <div className="h-12 bg-[#0f1420] border-b border-[#1a2033] flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <h3 className="text-sm">Circuit Canvas</h3>
          <Badge variant="outline" className="border-[#1a2033] text-gray-400 text-xs">
            Live Preview off — click Run
          </Badge>
        </div>
      </div>

      {/* Canvas Area */}
      <div className="flex-1 overflow-auto relative" style={{
        backgroundImage: `
          linear-gradient(#1a2033 1px, transparent 1px),
          linear-gradient(90deg, #1a2033 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px',
      }}>
        {/* Mock Circuit Components */}
        <div className="absolute inset-0 p-8">
          
          {/* AND Gate */}
          <div className="absolute left-40 top-32">
            <div className="relative bg-[#0f1420] border-2 border-[#2a3555] rounded-lg px-6 py-4 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="flex flex-col gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#ff6b35] border border-[#ff6b35] shadow-[0_0_8px_rgba(255,107,53,0.6)]" />
                  <div className="w-2 h-2 rounded-full bg-[#ff6b35] border border-[#ff6b35] shadow-[0_0_8px_rgba(255,107,53,0.6)]" />
                </div>
                <span className="text-[#00ff88] font-mono px-2">&</span>
                <div className="w-2 h-2 rounded-full bg-[#00ff88] border border-[#00ff88] shadow-[0_0_8px_rgba(0,255,136,0.6)]" />
              </div>
              <div className="text-xs text-gray-400 mt-2 text-center">AND U1</div>
            </div>
          </div>

          {/* D Flip-Flop */}
          <div className="absolute left-[500px] top-32">
            <div className="relative bg-[#0f1420] border-2 border-[#2a3555] rounded-lg px-6 py-5 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">D</span>
                    <div className="w-2 h-2 rounded-full bg-[#00ff88] border border-[#00ff88] shadow-[0_0_8px_rgba(0,255,136,0.6)]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">CLK</span>
                    <div className="w-2 h-2 rounded-full bg-[#ff6b35] border border-[#ff6b35] shadow-[0_0_8px_rgba(255,107,53,0.6)]" />
                  </div>
                </div>
                <span className="text-[#4d9fff] font-mono">D</span>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#00ff88] border border-[#00ff88] shadow-[0_0_8px_rgba(0,255,136,0.6)]" />
                    <span className="text-xs text-gray-400">Q</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#ff6b35] border border-[#ff6b35] shadow-[0_0_8px_rgba(255,107,53,0.6)]" />
                    <span className="text-xs text-gray-400">Q̄</span>
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-400 mt-2 text-center">D FF U2</div>
            </div>
          </div>

          {/* LED */}
          <div className="absolute left-[750px] top-44">
            <div className="relative bg-[#0f1420] border-2 border-[#2a3555] rounded-lg px-4 py-3 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00ff88] border border-[#00ff88] shadow-[0_0_8px_rgba(0,255,136,0.6)]" />
                <div className="w-6 h-6 rounded-full bg-[#00ff88] shadow-[0_0_16px_rgba(0,255,136,0.8)]" />
              </div>
              <div className="text-xs text-gray-400 mt-2 text-center">LED1</div>
            </div>
          </div>

          {/* Wires */}
          <svg className="absolute inset-0 pointer-events-none" style={{ width: '100%', height: '100%' }}>
            {/* Wire from AND to DFF (logic 1 - green) */}
            <path
              d="M 310 170 L 500 170"
              stroke="#00ff88"
              strokeWidth="2"
              fill="none"
              className="drop-shadow-[0_0_4px_rgba(0,255,136,0.6)]"
            />
            
            {/* Wire from DFF to LED (logic 1 - green) */}
            <path
              d="M 630 155 L 750 155"
              stroke="#00ff88"
              strokeWidth="2"
              fill="none"
              className="drop-shadow-[0_0_4px_rgba(0,255,136,0.6)]"
            />

            {/* Wire showing logic 0 (red) */}
            <path
              d="M 500 185 L 450 185 L 450 250"
              stroke="#ff6b35"
              strokeWidth="2"
              fill="none"
              className="drop-shadow-[0_0_4px_rgba(255,107,53,0.6)]"
            />
          </svg>

        </div>
      </div>
    </div>
  );
}
