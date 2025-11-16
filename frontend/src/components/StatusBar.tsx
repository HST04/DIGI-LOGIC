export function StatusBar() {
  return (
    <div className="h-7 bg-[#0f1420] border-t border-[#1a2033] flex items-center justify-between px-4 text-xs text-gray-400">
      <div className="flex items-center gap-6">
        <span>Time: 0 ns</span>
        <span>Components: 0</span>
        <span>Warnings: 0</span>
      </div>
      <div>
        <span>Simulation speed: Normal</span>
      </div>
    </div>
  );
}
