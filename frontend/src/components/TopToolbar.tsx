import { Play, StepForward, Pause, ZoomIn, ZoomOut, Grid3x3, Moon, Undo2, Redo2, Cpu } from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

export function TopToolbar() {
  return (
    <div className="h-14 bg-[#0f1420] border-b border-[#1a2033] flex items-center px-4 gap-4">
      {/* Left - Branding */}
      <div className="flex items-center gap-2">
        <Cpu className="size-5 text-[#00ff88]" />
        <span className="text-sm">Local Digital Circuit Simulator</span>
      </div>
      
      {/* Center - Simulation Controls */}
      <div className="flex-1 flex items-center justify-center gap-2">
        <Button className="bg-[#00ff88] hover:bg-[#00dd77] text-black gap-2">
          <Play className="size-4" />
          Run Simulation
        </Button>
        <Button variant="secondary" className="gap-2 bg-[#1a2033] hover:bg-[#242d44]">
          <StepForward className="size-4" />
          Step
        </Button>
        <Button variant="outline" className="gap-2 border-[#1a2033] hover:bg-[#1a2033]">
          <Pause className="size-4" />
          Pause
        </Button>
      </div>
      
      {/* Right - Tool Buttons */}
      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon" className="hover:bg-[#1a2033]">
          <ZoomIn className="size-4" />
        </Button>
        <Button variant="ghost" size="icon" className="hover:bg-[#1a2033]">
          <ZoomOut className="size-4" />
        </Button>
        <Button variant="ghost" size="icon" className="hover:bg-[#1a2033]">
          <Grid3x3 className="size-4" />
        </Button>
        <Button variant="ghost" size="icon" className="hover:bg-[#1a2033]">
          <Moon className="size-4" />
        </Button>
        
        <Separator orientation="vertical" className="h-6 mx-1 bg-[#1a2033]" />
        
        <Button variant="ghost" size="icon" className="hover:bg-[#1a2033]">
          <Undo2 className="size-4" />
        </Button>
        <Button variant="ghost" size="icon" className="hover:bg-[#1a2033]">
          <Redo2 className="size-4" />
        </Button>
      </div>
    </div>
  );
}
