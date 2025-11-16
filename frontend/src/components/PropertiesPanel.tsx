import { Input } from './ui/input';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Switch } from './ui/switch';
import { Button } from './ui/button';
import { Alert, AlertDescription } from './ui/alert';
import { AlertTriangle, Sparkles } from 'lucide-react';

export function PropertiesPanel() {
  return (
    <div className="w-[320px] bg-[#0f1420] border-l border-[#1a2033] overflow-y-auto">
      <div className="p-4 space-y-6">
        
        {/* Inspector Section */}
        <div className="space-y-3">
          <h3 className="text-sm">Inspector</h3>
          <div className="bg-[#1a2033] rounded-lg p-4 space-y-4">
            <div className="text-sm text-[#4d9fff]">D Flip-Flop U1</div>
            
            <div className="space-y-2">
              <Label htmlFor="label" className="text-xs text-gray-400">Label</Label>
              <Input
                id="label"
                placeholder="U1"
                className="bg-[#0a0e1a] border-[#2a3555] h-8 text-sm"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="delay" className="text-xs text-gray-400">Delay (ns)</Label>
              <Input
                id="delay"
                type="number"
                placeholder="5"
                className="bg-[#0a0e1a] border-[#2a3555] h-8 text-sm"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="inputs" className="text-xs text-gray-400">Number of inputs</Label>
              <Input
                id="inputs"
                type="number"
                placeholder="2"
                className="bg-[#0a0e1a] border-[#2a3555] h-8 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Net & Bus Info */}
        <div className="space-y-3">
          <h3 className="text-sm">Net & Bus Info</h3>
          <div className="bg-[#1a2033] rounded-lg p-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="signal" className="text-xs text-gray-400">Signal Name</Label>
              <Input
                id="signal"
                placeholder="DATA[3:0]"
                className="bg-[#0a0e1a] border-[#2a3555] h-8 text-sm font-mono"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Checkbox id="highlight" className="border-[#2a3555]" />
              <Label htmlFor="highlight" className="text-xs text-gray-400 cursor-pointer">
                Highlight on canvas
              </Label>
            </div>
          </div>
        </div>

        {/* ML Suggestions */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-[#4d9fff]" />
              <h3 className="text-sm">AI Suggestions</h3>
            </div>
            <Switch className="data-[state=checked]:bg-[#4d9fff]" />
          </div>
          
          {/* Suggestion Card 1 */}
          <div className="bg-[#1a2033] rounded-lg p-4 space-y-3 border border-[#2a3555]">
            <div>
              <div className="text-sm text-[#00ff88] mb-1">Add 4-bit counter</div>
              <p className="text-xs text-gray-400">
                Detected a clock signal. Consider adding a counter to create a frequency divider.
              </p>
            </div>
            <div className="flex gap-2">
              <Button size="sm" className="bg-[#00ff88] hover:bg-[#00dd77] text-black h-7 text-xs">
                Accept
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-[#0a0e1a] h-7 text-xs">
                Ignore
              </Button>
            </div>
          </div>

          {/* Suggestion Card 2 */}
          <div className="bg-[#1a2033] rounded-lg p-4 space-y-3 border border-[#2a3555]">
            <div>
              <div className="text-sm text-[#4d9fff] mb-1">Group shift register</div>
              <p className="text-xs text-gray-400">
                Multiple flip-flops detected in series. Group them into a shift register subcircuit?
              </p>
            </div>
            <div className="flex gap-2">
              <Button size="sm" className="bg-[#4d9fff] hover:bg-[#3d8fee] text-white h-7 text-xs">
                Group
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-[#0a0e1a] h-7 text-xs">
                Ignore
              </Button>
            </div>
          </div>
        </div>

        {/* Warnings */}
        <div className="space-y-3">
          <h3 className="text-sm">Warnings</h3>
          <Alert className="bg-[#1a2033] border-[#ff9f40]">
            <AlertTriangle className="size-4 text-[#ff9f40]" />
            <AlertDescription className="text-xs text-gray-300 ml-2">
              2 floating inputs and 1 potential combinational loop detected.
            </AlertDescription>
          </Alert>
        </div>

      </div>
    </div>
  );
}
