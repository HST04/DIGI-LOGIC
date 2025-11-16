// UI helpers: toolbar, dialogs, theme switching, palette population
export function initUI(){
  const themeSelect = document.getElementById('theme-select');
  themeSelect.addEventListener('change', (e)=>{
    if(e.target.value === 'Dark') document.body.classList.add('dark');
    else document.body.classList.remove('dark');
  });

  // Populate a minimal component palette
  const list = document.getElementById('component-list');
  ['AND','OR','NOT','DFF','MUX','DECODER','COUNTER','BUS'].forEach((name)=>{
    const btn = document.createElement('button');
    btn.textContent = name;
    btn.className = 'comp-btn';
    btn.draggable = true;
    btn.addEventListener('dragstart', ev=>{
      ev.dataTransfer.setData('text/plain', name);
    });
    list.appendChild(btn);
  });
}
