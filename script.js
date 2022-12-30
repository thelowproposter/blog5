
        const toggleMenu = () => {
          const display = document.getElementsByClassName('open_nav')[0].style.display;
          if (display === 'none') {
            document.getElementsByClassName('open_nav')[0].style.display = "flex";
          } else {
            document.getElementsByClassName('open_nav')[0].style.display = "none";
          }
        }

        const toggleMenuMob = () => {
          const display = document.getElementsByClassName('open_nav')[1].style.display;
          if (display === 'none') {
            document.getElementsByClassName('open_nav')[1].style.display = "flex";
          } else {
            document.getElementsByClassName('open_nav')[1].style.display = "none";
          }
        }

        setTimeout(() => {
          const desk = [document.querySelector('.Navigation-desk'),document.querySelector('.About-desk'),document.querySelector('.Gallery-desk'),document.querySelector('.Testimonials-desk'),document.querySelector('.Contact-desk')];
          const desk_navs = [document.querySelector('.Home_nav-desk'),document.querySelector('.About_nav-desk'),document.querySelector('.Gallery_nav-desk'),document.querySelector('.Testimonials_nav-desk'),document.querySelector('.Contact_nav-desk')];

          const mob = [document.querySelector('.Navigation-mob'),document.querySelector('.About-mob'),document.querySelector('.Gallery-mob'),document.querySelector('.Testimonials-mob'),document.querySelector('.Contact-mob')];
          const mob_navs = [document.querySelector('.Home_nav-mob'),document.querySelector('.About_nav-mob'),document.querySelector('.Gallery_nav-mob'),document.querySelector('.Testimonials_nav-mob'),document.querySelector('.Contact_nav-mob')];

          const pp_tos = [document.querySelector('.Home_nav-desk-pp_tos'),document.querySelector('.About_nav-desk-pp_tos'),document.querySelector('.Gallery_nav-desk-pp_tos'),document.querySelector('.Testimonials_nav-desk-pp_tos'),document.querySelector('.Contact_nav-desk-pp_tos')];

          if (desk[1] !== null) {
            for (const i in desk) {
              desk_navs[i].addEventListener('click', () => desk[i].scrollIntoView({block: "center", behavior: "smooth"}));
            }
          }
          if (mob[1] !== null) {
            for (const i in mob) {
              mob_navs[i].addEventListener('click', () => mob[i].scrollIntoView({block: "center", behavior: "smooth"}));
            }
          }
          for (const i in pp_tos) {
            pp_tos[i].addEventListener('click', () => history.back());
          }
        }, 1000);