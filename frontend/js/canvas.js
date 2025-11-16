// Canvas editor: simple drag-drop, grid rendering, pan/zoom hooks and connection stubs
export function initCanvas(canvas){
  if(!canvas) return;
  canvas.width = canvas.clientWidth * devicePixelRatio;
  canvas.height = canvas.clientHeight * devicePixelRatio;
  const ctx = canvas.getContext('2d');
  ctx.scale(devicePixelRatio, devicePixelRatio);

  function drawGrid(){
    const w = canvas.clientWidth; const h = canvas.clientHeight; const g = 20;
    ctx.clearRect(0,0,w,h);
    ctx.strokeStyle = 'rgba(0,0,0,0.04)';
    for(let x=0;x<w;x+=g){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke();}
    for(let y=0;y<h;y+=g){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();}
  }

  drawGrid();
  // Basic drag-drop receiver
  canvas.addEventListener('dragover', ev=>ev.preventDefault());
  canvas.addEventListener('drop', ev=>{
    ev.preventDefault();
    const comp = ev.dataTransfer.getData('text/plain');
    console.log('Dropped:',comp,'at',ev.offsetX,ev.offsetY);
    // TODO: add component instance to circuit model
  });
}
