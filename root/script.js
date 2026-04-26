function openModal(id){document.getElementById(id).classList.add('open');document.body.style.overflow='hidden'}
function closeModal(id){document.getElementById(id).classList.remove('open');document.body.style.overflow=''}
function closeOnBg(e,id){if(e.target.id===id)closeModal(id)}
document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelectorAll('.modal-overlay.open').forEach(m=>m.classList.remove('open'));document.body.style.overflow=''}});
const io=new IntersectionObserver(entries=>{entries.forEach(el=>{if(el.isIntersecting){el.target.style.opacity='1';el.target.style.transform='none';el.target.style.transition='opacity 0.55s cubic-bezier(0.22,1,0.36,1),transform 0.55s cubic-bezier(0.22,1,0.36,1)'}})},{threshold:0.1});
[...document.querySelectorAll('.skill-card,.proj-row,.stat')].forEach(el=>{el.style.opacity='0';el.style.transform='translateY(20px)';io.observe(el)});
document.querySelectorAll('.resume-tab').forEach(tab=>{tab.addEventListener('click',()=>{const tabName=tab.getAttribute('data-tab');document.querySelectorAll('.resume-tab').forEach(t=>t.classList.remove('active'));document.querySelectorAll('.resume-panel').forEach(p=>p.classList.remove('active'));tab.classList.add('active');document.getElementById(tabName).classList.add('active')})});
