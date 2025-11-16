// Circuit graph model (in-memory). Components, nets, buses, basic validation and connection logic.
export class Circuit {
  constructor(){
    this.components = {}; // id -> {type, pins, x,y,meta}
    this.nets = {}; // netId -> {nodes: [{compId,pin}]}
    this.nextId = 1;
  }
  addComponent(type, x=0, y=0){
    const id = `C${this.nextId++}`;
    this.components[id] = {id,type,x,y};
    return this.components[id];
  }
  connect(compId, pin, netId){
    if(!this.nets[netId]) this.nets[netId] = {id:netId,nodes:[]};
    this.nets[netId].nodes.push({compId,pin});
  }
  toJSON(){ return {components:this.components,nets:this.nets}; }
}
