const populations = [
  "12,406名前後",
  "12,403名前後",
  "12,409名前後",
  "12,406名ほど",
  "12,4◯6名前後"
];

const weathers = [
  "薄曇り、ところにより記憶",
  "霧、のち曖昧",
  "晴れのようなもの",
  "静穏、夕方から輪郭不安定",
  "小雨、または気配"
];

const arrivals = [
  "あなたはまだ到着していません",
  "到着記録を確認しています",
  "すでに来訪済みの可能性があります",
  "北口のような場所へお進みください",
  "現在地が現在地ではありません"
];

const broadcasts = [
  "本日も市民の皆さまは落ち着いてご不在ください。",
  "ただいま一部地域で昨日が発生しています。",
  "正確な情報は、なるべく古いものをご確認ください。",
  "帰路は往路と一致しない場合があります。",
  "夕方以降、川沿いで光のみ流れる見込みです。"
];

function rotateText(id, list, interval = 4200) {
  const el = document.getElementById(id);
  if (!el) return;

  let index = 0;
  setInterval(() => {
    index = (index + 1) % list.length;
    el.style.opacity = 0.2;
    setTimeout(() => {
      el.textContent = list[index];
      el.style.opacity = 1;
    }, 220);
  }, interval);
}

rotateText("population", populations, 4300);
rotateText("weather", weathers, 5200);
rotateText("arrival", arrivals, 6100);
rotateText("broadcast", broadcasts, 7000);

const menuButton = document.getElementById("menuButton");
const mobileNav = document.getElementById("mobileNav");

if (menuButton && mobileNav) {
  menuButton.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
  });

  mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
    });
  });
}

const reveals = document.querySelectorAll(".section, .hero, .site-footer");
reveals.forEach(el => el.classList.add("reveal"));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

const heroTitle = document.querySelector(".hero h1 span");
const titleVariants = [
  "けれど、ようこそ。",
  "でも、ようこそ。",
  "たぶん、ようこそ。",
  "確認のうえ、ようこそ。"
];

if (heroTitle) {
  let titleIndex = 0;
  setInterval(() => {
    titleIndex = (titleIndex + 1) % titleVariants.length;
    heroTitle.style.opacity = 0.35;
    setTimeout(() => {
      heroTitle.textContent = titleVariants[titleIndex];
      heroTitle.style.opacity = 1;
    }, 180);
  }, 9000);
}
