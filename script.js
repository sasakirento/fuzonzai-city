{\rtf1\ansi\ansicpg932\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const populations = [\
  "12,406\uc0\u21517 \u21069 \u24460 ",\
  "12,403\uc0\u21517 \u21069 \u24460 ",\
  "12,409\uc0\u21517 \u21069 \u24460 ",\
  "12,406\uc0\u21517 \u12411 \u12393 ",\
  "12,4\uc0\u9711 6\u21517 \u21069 \u24460 "\
];\
\
const weathers = [\
  "\uc0\u34180 \u26311 \u12426 \u12289 \u12392 \u12371 \u12429 \u12395 \u12424 \u12426 \u35352 \u25014 ",\
  "\uc0\u38695 \u12289 \u12398 \u12385 \u26326 \u26151 ",\
  "\uc0\u26228 \u12428 \u12398 \u12424 \u12358 \u12394 \u12418 \u12398 ",\
  "\uc0\u38745 \u31311 \u12289 \u22805 \u26041 \u12363 \u12425 \u36650 \u37101 \u19981 \u23433 \u23450 ",\
  "\uc0\u23567 \u38632 \u12289 \u12414 \u12383 \u12399 \u27671 \u37197 "\
];\
\
const arrivals = [\
  "\uc0\u12354 \u12394 \u12383 \u12399 \u12414 \u12384 \u21040 \u30528 \u12375 \u12390 \u12356 \u12414 \u12379 \u12435 ",\
  "\uc0\u21040 \u30528 \u35352 \u37682 \u12434 \u30906 \u35469 \u12375 \u12390 \u12356 \u12414 \u12377 ",\
  "\uc0\u12377 \u12391 \u12395 \u26469 \u35370 \u28168 \u12415 \u12398 \u21487 \u33021 \u24615 \u12364 \u12354 \u12426 \u12414 \u12377 ",\
  "\uc0\u21271 \u21475 \u12398 \u12424 \u12358 \u12394 \u22580 \u25152 \u12408 \u12362 \u36914 \u12415 \u12367 \u12384 \u12373 \u12356 ",\
  "\uc0\u29694 \u22312 \u22320 \u12364 \u29694 \u22312 \u22320 \u12391 \u12399 \u12354 \u12426 \u12414 \u12379 \u12435 "\
];\
\
const broadcasts = [\
  "\uc0\u26412 \u26085 \u12418 \u24066 \u27665 \u12398 \u30342 \u12373 \u12414 \u12399 \u33853 \u12385 \u30528 \u12356 \u12390 \u12372 \u19981 \u22312 \u12367 \u12384 \u12373 \u12356 \u12290 ",\
  "\uc0\u12383 \u12384 \u12356 \u12414 \u19968 \u37096 \u22320 \u22495 \u12391 \u26152 \u26085 \u12364 \u30330 \u29983 \u12375 \u12390 \u12356 \u12414 \u12377 \u12290 ",\
  "\uc0\u27491 \u30906 \u12394 \u24773 \u22577 \u12399 \u12289 \u12394 \u12427 \u12409 \u12367 \u21476 \u12356 \u12418 \u12398 \u12434 \u12372 \u30906 \u35469 \u12367 \u12384 \u12373 \u12356 \u12290 ",\
  "\uc0\u24112 \u36335 \u12399 \u24448 \u36335 \u12392 \u19968 \u33268 \u12375 \u12394 \u12356 \u22580 \u21512 \u12364 \u12354 \u12426 \u12414 \u12377 \u12290 ",\
  "\uc0\u22805 \u26041 \u20197 \u38477 \u12289 \u24029 \u27839 \u12356 \u12391 \u20809 \u12398 \u12415 \u27969 \u12428 \u12427 \u35211 \u36796 \u12415 \u12391 \u12377 \u12290 "\
];\
\
function rotateText(id, list, interval = 4200) \{\
  const el = document.getElementById(id);\
  if (!el) return;\
\
  let index = 0;\
  setInterval(() => \{\
    index = (index + 1) % list.length;\
    el.style.opacity = 0.2;\
    setTimeout(() => \{\
      el.textContent = list[index];\
      el.style.opacity = 1;\
    \}, 220);\
  \}, interval);\
\}\
\
rotateText("population", populations, 4300);\
rotateText("weather", weathers, 5200);\
rotateText("arrival", arrivals, 6100);\
rotateText("broadcast", broadcasts, 7000);\
\
const menuButton = document.getElementById("menuButton");\
const mobileNav = document.getElementById("mobileNav");\
\
if (menuButton && mobileNav) \{\
  menuButton.addEventListener("click", () => \{\
    mobileNav.classList.toggle("open");\
  \});\
\
  mobileNav.querySelectorAll("a").forEach(link => \{\
    link.addEventListener("click", () => \{\
      mobileNav.classList.remove("open");\
    \});\
  \});\
\}\
\
const reveals = document.querySelectorAll(".section, .hero, .site-footer");\
reveals.forEach(el => el.classList.add("reveal"));\
\
const observer = new IntersectionObserver((entries) => \{\
  entries.forEach(entry => \{\
    if (entry.isIntersecting) \{\
      entry.target.classList.add("visible");\
    \}\
  \});\
\}, \{ threshold: 0.12 \});\
\
reveals.forEach(el => observer.observe(el));\
\
const heroTitle = document.querySelector(".hero h1 span");\
const titleVariants = [\
  "\uc0\u12369 \u12428 \u12393 \u12289 \u12424 \u12358 \u12371 \u12381 \u12290 ",\
  "\uc0\u12391 \u12418 \u12289 \u12424 \u12358 \u12371 \u12381 \u12290 ",\
  "\uc0\u12383 \u12406 \u12435 \u12289 \u12424 \u12358 \u12371 \u12381 \u12290 ",\
  "\uc0\u30906 \u35469 \u12398 \u12358 \u12360 \u12289 \u12424 \u12358 \u12371 \u12381 \u12290 "\
];\
\
if (heroTitle) \{\
  let titleIndex = 0;\
  setInterval(() => \{\
    titleIndex = (titleIndex + 1) % titleVariants.length;\
    heroTitle.style.opacity = 0.35;\
    setTimeout(() => \{\
      heroTitle.textContent = titleVariants[titleIndex];\
      heroTitle.style.opacity = 1;\
    \}, 180);\
  \}, 9000);\
\}\
}