// PAPELERÍA VEINTINUEVE — catálogo editable
// Los precios, descripciones y existencias son datos de demostración. Modifícalos según tu proyecto.
const products = [
 {id:1,name:"Lápiz de grafito HB",category:"escritura",categoryName:"Artículos de escritura",description:"Lápiz de grafito para escribir, dibujar y realizar actividades escolares con trazos definidos.",icon:"✏️",tag:"BÁSICO",price:"$3.00 MXN",presentation:"Pieza",stock:"Disponible",features:["Graduación HB","Cuerpo de madera","Ideal para escuela y oficina"],image:"https://images.unsplash.com/photo-1667687435942-4fdff73a3ed6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
 {id:2,name:"Bolígrafos",category:"escritura",categoryName:"Artículos de escritura",description:"Bolígrafos de uso diario para tomar apuntes, llenar formatos y escribir con comodidad.",icon:"🖊️",tag:"FAVORITO",price:"$7.00 MXN",presentation:"Pieza",stock:"Disponible",features:["Tinta azul","Punta mediana","Cuerpo ligero"],image:"https://plus.unsplash.com/premium_photo-1760662482274-b90c8050fd69?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
 {id:3,name:"Marcadores fluorescentes",category:"escritura",categoryName:"Artículos de escritura",description:"Resalta información importante en apuntes, libros y documentos con colores llamativos.",icon:"🖍️",tag:"COLOR",price:"$32.00 MXN",presentation:"Paquete con 4 piezas",stock:"Disponible",features:["Cuatro colores surtidos","Punta biselada","Tinta de secado rápido"],image:"https://images.unsplash.com/photo-1580569214296-5cf2bffc5ccd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
 {id:4,name:"Plumones de colores",category:"escritura",categoryName:"Artículos de escritura",description:"Plumones para colorear, hacer títulos, lettering y dar personalidad a tus trabajos.",icon:"🖊️",tag:"CREATIVIDAD",price:"$48.00 MXN",presentation:"Paquete con 12 piezas",stock:"Disponible",features:["12 colores","Punta mediana","Para papel y cartulina"],image:"https://images.unsplash.com/photo-1679785580069-657e6d23698c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
 {id:5,name:"Cuaderno profesional",category:"cuadernos",categoryName:"Cuadernos y libretas",description:"Cuaderno para organizar apuntes, tareas y actividades de cada materia.",icon:"📓",tag:"ESCOLAR",price:"$25.00 MXN",presentation:"100 hojas",stock:"Disponible",features:["Pasta resistente","Hojas rayadas","Encuadernado espiral"],image:"https://images.unsplash.com/photo-1787640619073-3dcb10c316c4?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
 {id:6,name:"Libreta de notas",category:"cuadernos",categoryName:"Cuadernos y libretas",description:"Libreta compacta para registrar ideas, recordatorios, listas y pendientes.",icon:"📔",tag:"ORGANIZA",price:"$35.00 MXN",presentation:"Pieza",stock:"Disponible",features:["Diseño compacto","Pasta flexible","Hojas rayadas"],image:"https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=85"},
 {id:7,name:"Cuaderno de dibujo",category:"cuadernos",categoryName:"Cuadernos y libretas",description:"Cuaderno con hojas adecuadas para bocetos, ilustraciones y ejercicios de dibujo.",icon:"📒",tag:"ARTE",price:"$38.00 MXN",presentation:"Pieza",stock:"Disponible",features:["Hojas blancas","Pasta rígida","Formato mediano"],image:"https://plus.unsplash.com/premium_photo-1669904022364-2395d17d24c1?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
 {id:8,name:"Hojas blancas tamaño carta",category:"papel",categoryName:"Hojas y cartulinas",description:"Papel blanco para impresiones, tareas, documentos y actividades escolares.",icon:"📄",tag:"PAPEL",price:"$95.00 MXN",presentation:"Paquete con 500 hojas",stock:"Disponible",features:["Tamaño carta","Color blanco","Uso escolar y oficina"],image:"https://images.unsplash.com/photo-1630734242539-98264700d612?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
 {id:9,name:"Cartulina de colores",category:"papel",categoryName:"Hojas y cartulinas",description:"Cartulina para elaborar carteles, portadas, maquetas y proyectos creativos.",icon:"🗂️",tag:"PROYECTOS",price:"$5.00 MXN",presentation:"Pliego individual",stock:"Colores surtidos",features:["Varios colores","Superficie uniforme","Fácil de recortar"],image:"https://images.unsplash.com/photo-1534082753658-1dcb40af5719?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
 {id:10,name:"Hojas de colores tamaño carta",category:"papel",categoryName:"Hojas y cartulinas",description:"Papel de colores para recortar, pegar y crear composiciones escolares.",icon:"🎨",tag:"COLOR",price:"$3.00 MXN",presentation:"Hoja individual",stock:"Disponible",features:["Colores variados","Ideal para manualidades","Fácil manipulación"],image:"https://images.unsplash.com/photo-1647967359199-154cc8bd7942?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
 {id:11,name:"Juego geométrico",category:"escolar",categoryName:"Material escolar",description:"Conjunto de instrumentos básicos para actividades de geometría y matemáticas.",icon:"📐",tag:"ESCOLAR",price:"$23.00 MXN",presentation:"Set de 4 piezas",stock:"Disponible",features:["Regla","Escuadras","Transportador"],image:"https://www.officedepot.com.mx/medias/100063130.jpg-1200ftw?context=bWFzdGVyfHJvb3R8MjI2Njk4fGltYWdlL2pwZWd8YUdReEwyZ3laaTh4TURnM056TTVOVFU1T1RNNU1DOHhNREF3TmpNeE16QXVhbkJuWHpFeU1EQm1kSGN8MjA1OTNlMjExNWI4YTY0Y2EwYjgwMGYwODFjMTgzMzYxZGQ4OGY5M2JkNTNlNGVjMTI5MDBkNmUwOTc0ZTMzZA"},
 {id:13,name:"Tijeras escolares",category:"escolar",categoryName:"Material escolar",description:"Tijeras de punta redondeada para recortar papel y realizar trabajos escolares.",icon:"✂️",tag:"ESCOLAR",price:"$8.00 MXN",presentation:"Pieza",stock:"Disponible",features:["Punta redondeada","Mango ergonómico","Uso escolar"],image:"https://images.unsplash.com/photo-1785508279029-561060595880?q=80&w=748&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
 {id:14,name:"Caja de colores",category:"escolar",categoryName:"Material escolar",description:"Lápices de colores para ilustrar, colorear y desarrollar actividades creativas.",icon:"🖍️",tag:"COLOR",price:"$42.00 MXN",presentation:"Caja con 12 colores",stock:"Disponible",features:["12 tonos","Cuerpo de madera","Fáciles de sacar punta"],image:"https://images.unsplash.com/photo-1608056777644-6a4eca28d510?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
 {id:15,name:"Folder tamaño carta",category:"oficina",categoryName:"Archivo y oficina",description:"Folder para clasificar, transportar y proteger documentos importantes.",icon:"📁",tag:"ORGANIZACIÓN",price:"$4.00 MXN",presentation:"Pieza",stock:"Colores surtidos",features:["Tamaño carta","Colores variados","Para archivo y escuela"],image:"https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
 {id:16,name:"Notas adhesivas",category:"oficina",categoryName:"Archivo y oficina",description:"Notas removibles para recordatorios, pendientes y señalización de documentos.",icon:"🗒️",tag:"ORGANIZA",price:"$24.00 MXN",presentation:"Block de 100 hojas",stock:"Disponible",features:["Adhesivo removible","Color amarillo","Tamaño compacto"],image:"https://images.unsplash.com/photo-1641355527446-232d7f1f2c10?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
 {id:17,name:"Grapadora de escritorio",category:"oficina",categoryName:"Archivo y oficina",description:"Herramienta para mantener documentos y hojas organizados en el trabajo o la escuela.",icon:"📎",tag:"OFICINA",price:"$55.00 MXN",presentation:"Pieza",stock:"Disponible",features:["Diseño compacto","Para uso de escritorio","Compatible con grapas estándar"],image:"https://images.unsplash.com/photo-1592121998877-e28f92ef1c13?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
 {id:18,name:"Clips metálicos",category:"oficina",categoryName:"Archivo y oficina",description:"Clips para sujetar temporalmente hojas, notas y documentos sin perforarlos.",icon:"📎",tag:"OFICINA",price:"$10.00 MXN",presentation:"Caja con 100 piezas",stock:"Disponible",features:["Metal resistente","Tamaño estándar","Caja organizadora"],image:"https://plus.unsplash.com/premium_photo-1726754485048-ae3dad141699?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
 {id:19,name:"Pinturas escolares",category:"manualidades",categoryName:"Manualidades",description:"Pinturas para proyectos artísticos, carteles y actividades de expresión plástica.",icon:"🎨",tag:"CREATIVIDAD",price:"$55.00 MXN",presentation:"Set de 6 colores",stock:"Disponible",features:["Colores surtidos","Uso escolar","Aplicación con pincel"],image:"https://images.unsplash.com/photo-1623658229453-86b927f82b63?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
 {id:20,name:"Pinceles escolares",category:"manualidades",categoryName:"Manualidades",description:"Pinceles para aplicar pintura y realizar detalles en trabajos y proyectos creativos.",icon:"🖌️",tag:"ARTE",price:"$30.00 MXN",presentation:"Paquete con 5 piezas",stock:"Disponible",features:["Varios tamaños","Mango ligero","Para distintas técnicas"],image:"https://plus.unsplash.com/premium_photo-1677456380741-b8b442d7a181?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
 {id:21,name:"Foami de colores",category:"manualidades",categoryName:"Manualidades",description:"Material flexible para decoraciones, figuras, maquetas y proyectos manuales.",icon:"🟩",tag:"MANUALIDADES",price:"$5.00 MXN",presentation:"Pliego individual",stock:"Colores surtidos",features:["Textura flexible","Fácil de recortar","Variedad de colores"],image:"https://plus.unsplash.com/premium_photo-1667811364407-6ee044ad34f0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
 {id:22,name:"Copias en blanco y negro",category:"servicios",categoryName:"Copias e impresiones",description:"Servicio de fotocopiado de documentos escolares, personales y de oficina.",icon:"▤",tag:"SERVICIO",price:"Desde $0.50 MXN",presentation:"Por hoja tamaño carta",stock:"Consultar horario",features:["Tamaño carta","Impresión monocromática","Precio de ejemplo"],image:"https://images.unsplash.com/photo-1570929057588-6952f7dd2305?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
 {id:23,name:"Impresiones a color",category:"servicios",categoryName:"Copias e impresiones",description:"Impresión de archivos digitales a color para tareas, formatos y materiales de apoyo.",icon:"🖨️",tag:"SERVICIO",price:"Desde $2.00 MXN",presentation:"Por hoja tamaño carta",stock:"Consultar disponibilidad",features:["Impresión a color","Desde archivo digital","Precio de ejemplo"],image:"https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=85"},
 {id:24,name:"Engargolado",category:"servicios",categoryName:"Copias e impresiones",description:"Servicio de encuadernación para presentar y proteger trabajos, reportes y proyectos.",icon:"📚",tag:"SERVICIO",price:"Desde $20.00 MXN",presentation:"Según número de hojas",stock:"Consultar disponibilidad",features:["Acabado práctico","Ideal para proyectos","Precio de ejemplo"],image:"https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=85"}
];

const categoryNames = {todos:"Todos los productos",escritura:"Artículos de escritura",cuadernos:"Cuadernos y libretas",papel:"Hojas y cartulinas",escolar:"Material escolar",oficina:"Archivo y oficina",manualidades:"Manualidades",servicios:"Copias e impresiones"};

// Productos que aparecen en la portada. Cambia sus IDs para destacar otros artículos.
const featuredProductIds = [2, 5, 19];
function renderFeaturedProducts(){
 const container=document.querySelector("#featuredGrid");
 if(!container) return;
 const labels={2:"PARA ESCRIBIR",5:"ORGANIZA TUS IDEAS",19:"DA COLOR A TUS PROYECTOS"};
 container.innerHTML=featuredProductIds.map(id=>products.find(p=>p.id===id)).filter(Boolean).map(p=>`
  <button class="featured-card reveal" type="button" data-featured-id="${p.id}" aria-label="Ver ${p.name}">
   <span class="featured-card-label">DESTACADO</span>
   <img src="${p.image}" alt="${p.name}" loading="lazy">
   <span class="featured-card-copy"><small>${p.categoryName}</small><strong>${p.name}</strong><span>${labels[p.id]||"UNA OPCIÓN PARA TI"}</span><b>${p.price}　↗</b></span>
  </button>`).join("");
 observeRevealElements(container);
}

const productGrid=document.querySelector("#productGrid"),categoryList=document.querySelector("#categoryList"),searchInput=document.querySelector("#productSearch"),sortSelect=document.querySelector("#productSort"),count=document.querySelector("#productCount"),note=document.querySelector("#activeCategoryNote");
let activeCategory="todos",searchTerm="",sortMode="featured";
const priceNumber = value => Number((value.match(/[\d.]+/g)||["0"]).join(""));
function sortProducts(items){
 const sorted=[...items];
 if(sortMode==="name-asc") sorted.sort((a,b)=>a.name.localeCompare(b.name,"es"));
 if(sortMode==="price-asc") sorted.sort((a,b)=>priceNumber(a.price)-priceNumber(b.price));
 if(sortMode==="price-desc") sorted.sort((a,b)=>priceNumber(b.price)-priceNumber(a.price));
 if(sortMode==="category") sorted.sort((a,b)=>a.categoryName.localeCompare(b.categoryName,"es")||a.name.localeCompare(b.name,"es"));
 return sorted;
}
function renderProducts(){
 const matches=products.filter(p=>(activeCategory==="todos"||p.category===activeCategory)&&`${p.name} ${p.categoryName} ${p.description}`.toLowerCase().includes(searchTerm));
 const filtered=sortProducts(matches);
 count.textContent=filtered.length;note.textContent=`${categoryNames[activeCategory]} · ${filtered.length} ${filtered.length===1?"resultado":"resultados"}`;
 if(!filtered.length){productGrid.innerHTML='<div class="empty-state"><div style="font-size:34px">⌕</div><strong>No encontramos productos</strong><p>Prueba con otra palabra o categoría.</p></div>';return;}
 productGrid.innerHTML=filtered.map(p=>`<article class="product-card reveal" tabindex="0" role="button" aria-label="Ver ficha de ${p.name}" data-product-id="${p.id}"><div class="product-visual"><img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.hidden=false"><span class="visual-placeholder" hidden>${p.icon}</span><span class="product-tag">${p.tag}</span></div><div class="product-info"><span class="product-category">${p.categoryName}</span><h3>${p.name}</h3><p>${p.description}</p><div class="product-card-bottom"><span>${p.price}</span><span>↗</span></div></div></article>`).join("");
 observeRevealElements(productGrid);
}

// Animaciones de entrada: se activan cuando cada bloque entra en pantalla.
let revealObserver;
function observeRevealElements(root=document){
 const elements=root.querySelectorAll(".reveal, .reveal-left, .reveal-right");
 if(!("IntersectionObserver" in window)){elements.forEach(el=>el.classList.add("is-visible"));return;}
 if(!revealObserver){
  revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
   if(entry.isIntersecting){entry.target.classList.add("is-visible");revealObserver.unobserve(entry.target);}
  }),{threshold:0.12,rootMargin:"0px 0px -35px 0px"});
 }
 elements.forEach(el=>revealObserver.observe(el));
}
function prepareRevealElements(){
 document.querySelectorAll(".hero-copy, .hero-art, .about-grid, .purpose-card, .catalog-heading, .catalog-toolbar, .service-banner, .contact-copy, .contact-form, .footer-main").forEach((el,index)=>{
  if(!el.classList.contains("reveal")&&!el.classList.contains("reveal-left")&&!el.classList.contains("reveal-right")) el.classList.add(index%2===0?"reveal":"reveal-right");
 });
 observeRevealElements();
}
function setCategory(c){activeCategory=c;document.querySelectorAll(".category-chip").forEach(b=>{const selected=b.dataset.category===c;b.classList.toggle("active",selected);b.setAttribute("aria-pressed",selected);});renderProducts();}
categoryList.addEventListener("click",e=>{const b=e.target.closest("[data-category]");if(b)setCategory(b.dataset.category);});
searchInput.addEventListener("input",e=>{searchTerm=e.target.value.trim().toLowerCase();renderProducts();});
sortSelect.addEventListener("change",e=>{sortMode=e.target.value;renderProducts();});
const modal=document.querySelector("#productModal"),modalImage=document.querySelector("#modalImage");
let lastFocusedProduct=null;
function openProduct(p){
 document.querySelector("#modalCategory").textContent=p.categoryName.toUpperCase();document.querySelector("#modalTitle").textContent=p.name;document.querySelector("#modalDescription").textContent=p.description;
 document.querySelector("#modalPrice").textContent=p.price;document.querySelector("#modalPresentation").textContent=p.presentation;document.querySelector("#modalStock").textContent=p.stock;
 document.querySelector("#modalDetails").innerHTML=`<span>DETALLES DEL PRODUCTO</span><ul>${p.features.map(f=>`<li>${f}</li>`).join("")}</ul>`;
 const message=encodeURIComponent(`Hola, Papelería Veintinueve. Me interesa este producto: ${p.name}. ¿Me pueden compartir más información y confirmar su disponibilidad?`);
 const modalContact=document.querySelector("#modalContact");
 modalContact.href=`https://wa.me/525657529951?text=${message}`;
 lastFocusedProduct=document.activeElement;
 modalImage.innerHTML="";
 const image=document.createElement("img");
 image.src=p.image;
 image.alt=p.name;
 image.addEventListener("error",()=>{modalImage.innerHTML="<span>29</span>";},{once:true});
 modalImage.appendChild(image);
 modal.classList.remove("is-expanded","is-collapsed");modal.style.translate="";modal.querySelector(".product-modal").style.translate="";
 modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";document.querySelector("#modalClose").focus();
}
function closeModal(){
 modal.classList.remove("open","is-expanded","is-collapsed");modal.style.translate="";modal.querySelector(".product-modal").style.translate="";modal.setAttribute("aria-hidden","true");document.body.style.overflow="";
 if(lastFocusedProduct && typeof lastFocusedProduct.focus==="function") lastFocusedProduct.focus();
}
productGrid.addEventListener("click",e=>{const card=e.target.closest("[data-product-id]");if(card){const p=products.find(x=>x.id===Number(card.dataset.productId));if(p)openProduct(p);}});
productGrid.addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target.matches("[data-product-id]")){e.preventDefault();const p=products.find(x=>x.id===Number(e.target.dataset.productId));if(p)openProduct(p);}});
document.querySelector("#featuredGrid").addEventListener("click",e=>{const card=e.target.closest("[data-featured-id]");if(card){const p=products.find(x=>x.id===Number(card.dataset.featuredId));if(p)openProduct(p);}});
document.querySelector("#modalClose").addEventListener("click",closeModal);modal.addEventListener("click",e=>{if(e.target===modal)closeModal();});document.addEventListener("keydown",e=>{if(e.key==="Escape"&&modal.classList.contains("open"))closeModal();});

// Ficha arrastrable: con mouse en escritorio y con dedo en móviles.
const modalDragHandle=document.querySelector("#modalDragHandle");
let dragStartY=0,dragDeltaY=0,draggingModal=false;
const isSmallScreen=()=>window.matchMedia("(max-width: 650px)").matches;
modalDragHandle.addEventListener("pointerdown",e=>{
 if(!modal.classList.contains("open"))return;
 draggingModal=true;dragStartY=e.clientY;dragDeltaY=0;
 modalDragHandle.setPointerCapture(e.pointerId);
 modal.classList.add("is-dragging");modal.querySelector(".product-modal").classList.add("is-dragging");
 e.preventDefault();
});
modalDragHandle.addEventListener("pointermove",e=>{
 if(!draggingModal)return;
 dragDeltaY=e.clientY-dragStartY;
 if(isSmallScreen()){modal.style.translate=`0 ${Math.max(-90,Math.min(190,dragDeltaY))}px`;}
 else{const limit=Math.max(80,(window.innerHeight-modal.querySelector(".product-modal").offsetHeight)/2-18);modal.querySelector(".product-modal").style.translate=`0 ${Math.max(-limit,Math.min(limit,dragDeltaY))}px`;}
});
function finishModalDrag(){
 if(!draggingModal)return;draggingModal=false;modal.classList.remove("is-dragging");modal.querySelector(".product-modal").classList.remove("is-dragging");
 if(isSmallScreen()){
  modal.style.translate="";
  if(dragDeltaY < -55){modal.classList.add("is-expanded");modal.classList.remove("is-collapsed");}
  else if(dragDeltaY > 155){closeModal();}
  else if(dragDeltaY > 55){modal.classList.add("is-collapsed");modal.classList.remove("is-expanded");}
 }else{
  // En escritorio la ficha permanece donde el usuario la dejó.
  const panel=modal.querySelector(".product-modal");
  if(Math.abs(dragDeltaY)<8)panel.style.translate="";
 }
 dragDeltaY=0;
}
modalDragHandle.addEventListener("pointerup",finishModalDrag);
modalDragHandle.addEventListener("pointercancel",finishModalDrag);

document.querySelectorAll("[data-footer-category]").forEach(a=>a.addEventListener("click",()=>setCategory(a.dataset.footerCategory)));
const menuToggle=document.querySelector("#menuToggle"),mainNav=document.querySelector("#mainNav");menuToggle.addEventListener("click",()=>{const open=mainNav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",open);});mainNav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{mainNav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");}));
document.querySelector("#year").textContent=new Date().getFullYear();
document.querySelector("#contactForm").addEventListener("submit",e=>{e.preventDefault();const d=new FormData(e.currentTarget);const body=encodeURIComponent(`Hola, Papelería Veintinueve.\n\nMi nombre: ${d.get("name")}\nMi teléfono o correo: ${d.get("email")||"No proporcionado"}\n\nMensaje: ${d.get("message")}`);window.open(`https://wa.me/525657529951?text=${body}`,"_blank","noopener,noreferrer");});
renderFeaturedProducts();
prepareRevealElements();
renderProducts();
