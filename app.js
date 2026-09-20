(()=>{
  const cfg=window.REPORTE_DOCENTE_CONFIG||{};
  const frame=document.getElementById('appFrame');
  const loader=document.getElementById('loader');
  const fallback=document.getElementById('fallback');
  const direct=document.getElementById('directLink');

  if(!cfg.APP_URL){
    fallback.classList.add('show');
    fallback.textContent='Falta configurar la URL de Google Apps Script.';
    return;
  }

  frame.src=cfg.APP_URL;
  direct.href=cfg.APP_URL;

  let loaded=false;
  frame.addEventListener('load',()=>{
    loaded=true;
    setTimeout(()=>loader.classList.add('hide'),250);
  });

  setTimeout(()=>{
    if(!loaded) fallback.classList.add('show');
  },8000);

  if('serviceWorker' in navigator){
    window.addEventListener('load',()=>{
      navigator.serviceWorker.register('./sw.js').catch(()=>{});
    });
  }
})();
