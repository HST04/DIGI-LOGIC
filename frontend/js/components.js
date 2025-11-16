// Component definitions: metadata only. Implement behavior in the sim engine.
export const COMPONENT_LIBRARY = {
  AND:{pins:{in:["A","B"],out:["Y"]},meta:{delay:10,desc:'2-input AND'}},
  OR:{pins:{in:["A","B"],out:["Y"]},meta:{delay:10,desc:'2-input OR'}},
  NOT:{pins:{in:["A"],out:["Y"]},meta:{delay:5,desc:'Inverter'}},
  DFF:{pins:{clk:["CLK"],in:["D"],out:["Q","Qn"]},meta:{setup:5,hold:1,desc:'D flip-flop'}},
  MUX:{pins:{in:["S","A","B"],out:["Y"]},meta:{desc:'2:1 multiplexer'}},
  DECODER:{pins:{in:["A","B"],out:["Y0","Y1","Y2","Y3"]},meta:{desc:'2-to-4 decoder'}},
  COUNTER:{pins:{clk:["CLK"],out:["Q"]},meta:{desc:'Binary counter'}},
  BUS:{pins:{in:[],out:[]},meta:{desc:'Bus grouping'}}
};
