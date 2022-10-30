/* Pre_carregamento */
const pre_carregamento = document.querySelector("div.fundo");
const caixa01 = document.querySelector("div.load");
const caixa02 = document.querySelector("div.load2");
const caixa03 = document.querySelector("section.load3");

function preCarregamento() {
  pre_carregamento.style.opacity = "1";
  caixa01.style.display = "none";
  caixa02.style.display = "none";
  caixa03.style.display = "none";

  setTimeout(() => {
      pre_carregamento.style.display = "none";
      caixa01.style.display = "flex";
      caixa02.style.display = "table";
      caixa03.style.display = "table";

  }, 7000);
}

/* Menu Responsivo */ 
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";

      this.handleClick = this.handleClick.bind(this);
  
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
          link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                index / 6 + 0.3
              }s`);
        });
      }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }
    
    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
      }

    init() {
        if(this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav",
    ".nav li",
  );
  mobileNavbar.init();

