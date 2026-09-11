function setLanguage(lang) {
  document.body.setAttribute('data-lang', lang);
  const btnJp = document.getElementById('btn-jp');
  const btnEn = document.getElementById('btn-en');
  
  if (lang === 'jp') {
    if(btnJp) btnJp.classList.add('active');
    if(btnEn) btnEn.classList.remove('active');
  } else {
    if(btnEn) btnEn.classList.add('active');
    if(btnJp) btnJp.classList.remove('active');
  }
}
