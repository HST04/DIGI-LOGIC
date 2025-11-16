// Simple in-memory undo/redo stack for circuit edits
export class UndoRedo {
  constructor(){ this.past=[]; this.future=[]; }
  push(state){ this.past.push(JSON.parse(JSON.stringify(state))); this.future=[]; }
  undo(current){ if(this.past.length){ this.future.push(current); return this.past.pop(); } return null; }
  redo(){ if(this.future.length) return this.future.pop(); return null; }
}
