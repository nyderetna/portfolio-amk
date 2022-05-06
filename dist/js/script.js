// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top')

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Klik diluar hamburger
window.addEventListener('click', function(e) {
    if(e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// Dark Mode Toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
    if(darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// Adjust Toggle with selected Theme
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
  }

// Matrix Effect
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext("2d");
  
//   let cw = window.innerWidth;
//   let ch = window.innerHeight;
  let cw = 1903;
  let ch = window.innerHeight;
  
  canvas.height = ch;
  canvas.width = cw;
  
  window.addEventListener('resize', function(event) {
      let cw = window.innerWidth;
      let ch = window.innerHeight;
      canvas.height = ch;
      canvas.width = cw;
      let maxColumns = cw/fontSize;
      if(fallingCharArr.length < maxCharCount)
      {
          let fallingChar = new FallingChar(Math.floor(Math.random() * maxColumns) * fontSize, Math.random() * ch/2 - 50)
          fallingCharArr.push(fallingChar)
      }
      ctx.fillStyle = "rgba(0,0,0,0.05)"
      ctx.fillRect(0,0,cw,ch)
      for(let i = 0; i < fallingCharArr.length && frames % 2 == 0; i++) {
          fallingCharArr[i].draw(ctx)
      }
  
      requestAnimationFrame(update);
      frames++;
  }, true);
  
  let charArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8',"A","B","Г","Д","Ԑ","И","Ө","Л","Ч","M","H","C","T","V","X"];
  
  let maxCharCount = 70;
  let fallingCharArr = [];
  let fontSize = 17;
  let maxColumns = cw/fontSize;
  
  let frames = 0;
  
  class FallingChar {
      constructor(x,y)
      {
          this.x = x;
          this.y = y;
      }
  
      draw(ctx) {
          this.value = charArr[Math.floor(Math.random() * (charArr.length - 1))].toUpperCase()
          this.speed = Math.random() * fontSize * 3 /4 + fontSize * 3/4
  
          ctx.fillStyle = "rgba(0,255,0)"
          ctx.font = fontSize + "px san-serif"
          ctx.fillText(this.value, this.x, this.y)
          this.y += this.speed;
  
          if(this.y > ch) {
              this.y = Math.random() * ch/2 - 50
              this.x = Math.floor(Math.random() * maxColumns) * fontSize
              this.speed = (-Math.random() * fontSize * 3) / 4 + (fontSize * 3) / 4; 
          }
      }
  }
  
  let update = () => {
      if(fallingCharArr.length < maxCharCount)
      {
          let fallingChar = new FallingChar(Math.floor(Math.random() * maxColumns) * fontSize, Math.random() * ch/2 - 50)
          fallingCharArr.push(fallingChar)
      }
      ctx.fillStyle = "rgba(0,0,0,0.05)"
      ctx.fillRect(0,0,cw,ch)
      for(let i = 0; i < fallingCharArr.length && frames % 2 == 0; i++) {
          fallingCharArr[i].draw(ctx)
      }
  
      requestAnimationFrame(update);
      frames++;

      ctx.fillText("D   A   N   I   E   L      P   A   U   L   Y      R  E  T  R  A  U  B  U  N", (canvas.width / 2) - 215, (canvas.height / 2) - 90);
      ctx.fillText("😎😎😎😎😎😎😎😎😎😎😎", (canvas.width / 2) - 110, (canvas.height / 2));
      ctx.fillText("🔽 S  C  R  O  L  L     D  O  W  N 🔽", (canvas.width / 2) - 110, (canvas.height / 2) + 100);
  };
  
  update();