const stars=[
'The Undertaker','Brock Lesnar','John Cena','Roman Reigns','Seth Rollins',
'Dean Ambrose','Randy Orton','Triple H','Bray Wyatt','Daniel Bryan','Batista',
'Kane','Big Show','Dolph Ziggler','Kevin Owens','Cesaro','Ryback'
];
const roster=document.getElementById('roster');
function render(list){
roster.innerHTML='';
list.forEach(s=>{
const d=document.createElement('div');
d.className='card';
d.textContent=s;
roster.appendChild(d);
});
}
render(stars);
document.getElementById('searchBox').addEventListener('input',e=>{
const q=e.target.value.toLowerCase();
render(stars.filter(s=>s.toLowerCase().includes(q)));
});
function toggleTheme(){document.body.classList.toggle('light');}
function playTheme(){document.getElementById('rawTheme').play();}
function showMatch(){document.getElementById('match').classList.toggle('hidden');}
