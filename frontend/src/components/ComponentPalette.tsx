import { ChevronDown, ChevronRight } from 'lucide-react';
import { ComponentChip } from './ComponentChip';
import { useState } from 'react';

export function ComponentPalette() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    basic: true,
    io: true,
    sequential: true,
    dataflow: true,
    subcircuits: true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="w-[260px] bg-[#0f1420] border-r border-[#1a2033] overflow-y-auto">
      <div className="p-4">
        <h2 className="mb-4">Component Palette</h2>
        
        {/* Basic Gates */}
        <div className="mb-4">
          <button
            onClick={() => toggleSection('basic')}
            className="flex items-center gap-2 w-full text-sm text-gray-300 mb-2 hover:text-gray-100"
          >
            {expandedSections.basic ? <ChevronDown className="size-4" /> : <ChevronRight className="size-4" />}
            Basic Gates
          </button>
          {expandedSections.basic && (
            <div className="space-y-2 ml-2">
              <ComponentChip label="AND" icon="&" />
              <ComponentChip label="OR" icon="≥1" />
              <ComponentChip label="NOT" icon="1" />
              <ComponentChip label="NAND" icon="&̄" />
              <ComponentChip label="NOR" icon="≥̄1" />
              <ComponentChip label="XOR" icon="=1" />
              <ComponentChip label="XNOR" icon="=̄1" />
            </div>
          )}
        </div>

        {/* Inputs & Outputs */}
        <div className="mb-4">
          <button
            onClick={() => toggleSection('io')}
            className="flex items-center gap-2 w-full text-sm text-gray-300 mb-2 hover:text-gray-100"
          >
            {expandedSections.io ? <ChevronDown className="size-4" /> : <ChevronRight className="size-4" />}
            Inputs & Outputs
          </button>
          {expandedSections.io && (
            <div className="space-y-2 ml-2">
              <ComponentChip label="Input Switch" icon="⚡" />
              <ComponentChip label="Push Button" icon="⏺" />
              <ComponentChip label="LED" icon="💡" />
              <ComponentChip label="7-Segment" icon="8" />
            </div>
          )}
        </div>

        {/* Sequential */}
        <div className="mb-4">
          <button
            onClick={() => toggleSection('sequential')}
            className="flex items-center gap-2 w-full text-sm text-gray-300 mb-2 hover:text-gray-100"
          >
            {expandedSections.sequential ? <ChevronDown className="size-4" /> : <ChevronRight className="size-4" />}
            Sequential
          </button>
          {expandedSections.sequential && (
            <div className="space-y-2 ml-2">
              <ComponentChip label="D Flip-Flop" icon="D" />
              <ComponentChip label="JK Flip-Flop" icon="JK" />
              <ComponentChip label="Counter" icon="#" />
              <ComponentChip label="Shift Register" icon=">>>" />
            </div>
          )}
        </div>

        {/* Dataflow */}
        <div className="mb-4">
          <button
            onClick={() => toggleSection('dataflow')}
            className="flex items-center gap-2 w-full text-sm text-gray-300 mb-2 hover:text-gray-100"
          >
            {expandedSections.dataflow ? <ChevronDown className="size-4" /> : <ChevronRight className="size-4" />}
            Dataflow
          </button>
          {expandedSections.dataflow && (
            <div className="space-y-2 ml-2">
              <ComponentChip label="MUX" icon="MX" />
              <ComponentChip label="DEMUX" icon="DM" />
              <ComponentChip label="Encoder" icon="EN" />
              <ComponentChip label="Decoder" icon="DC" />
              <ComponentChip label="Tri-state Buffer" icon="▷" />
              <ComponentChip label="Bus" icon="═" />
            </div>
          )}
        </div>

        {/* Subcircuits */}
        <div className="mb-4">
          <button
            onClick={() => toggleSection('subcircuits')}
            className="flex items-center gap-2 w-full text-sm text-gray-300 mb-2 hover:text-gray-100"
          >
            {expandedSections.subcircuits ? <ChevronDown className="size-4" /> : <ChevronRight className="size-4" />}
            Subcircuits
          </button>
          {expandedSections.subcircuits && (
            <div className="space-y-2 ml-2">
              <ComponentChip label="New Subcircuit" icon="+" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
