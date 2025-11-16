interface ComponentChipProps {
  label: string;
  icon: string;
}

export function ComponentChip({ label, icon }: ComponentChipProps) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-[#1a2033] rounded-lg cursor-grab hover:bg-[#242d44] hover:shadow-lg hover:shadow-[#00ff88]/10 transition-all border border-[#242d44] hover:border-[#00ff88]/30">
      <span className="text-[#00ff88] font-mono">{icon}</span>
      <span className="text-sm">{label}</span>
    </div>
  );
}
