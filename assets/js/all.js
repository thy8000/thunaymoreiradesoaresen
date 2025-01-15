/**
 * Link da galeria: https://images2.imgbox.com/1e/0e/KXVOdeVU_o.png
 */

document.addEventListener('alpine:init', () => {
   Alpine.data('header', () => ({
      menuItems: [
         {
            ID: 1,
            name: 'About me',
            element: document.querySelector('#about-me'),
         },
         {
            ID: 2,
            name: 'Services',
            element: document.querySelector('#services'),
         },
         {
            ID: 3,
            name: 'Skills',
            element: document.querySelector('#skills'),
         },
         {
            ID: 4,
            name: 'Professional experience',
            element: document.querySelector('#experience'),
         },
         {
            ID: 5,
            name: 'Projects',
            element: document.querySelector('#projects'),
         },
      ],
      displayMenu: false,

      goToElement(element) {
         this.displayMenu = false

         element.scrollIntoView({behavior: 'smooth'})
      },
   }))

   Alpine.data('hero', () => ({
      socials: [
         {
            ID: 1,
            link: 'https://github.com/thy8000',
            image: '../thunaymoreiradesoares2/assets/images/github.svg',
         },
         {
            ID: 2,
            link: 'https://www.linkedin.com/in/thunay-moreira-de-soares-6219a0162/',
            image: '../thunaymoreiradesoares2/assets/images/linkedin.svg',
         },
         {
            ID: 3,
            link: 'mailto:thunaymoreiradesoares@gmail.com',
            image: '../thunaymoreiradesoares2/assets/images/mail.svg',
         },
         {
            ID: 4,
            link: 'https://drive.google.com/file/d/1ZvNuqc9GHQZyejmlgHA_j69WYDPqC0g8',
            image: '../thunaymoreiradesoares2/assets/images/cv.svg',
         },
         {
            ID: 5,
            link: 'https://wa.me/5511971092159',
            image: '../thunaymoreiradesoares2/assets/images/whatsapp.svg',
         },
      ],
   }))

   Alpine.data('services', () => ({
      servicesType: [
         {
            ID: 1,
            image: '../thunaymoreiradesoares2/assets/images/html.svg',
            title: 'Front-end Development',
            description:
               'I transform creative designs in dynamic and intuitive websites. I use the latest technologies to give an amazing user experience. ',
         },
         {
            ID: 2,
            image: '../thunaymoreiradesoares2/assets/images/code.svg',
            title: 'Back-end Development',
            description: 'I construct amazing, escalable and secure systems.',
         },
         {
            ID: 3,
            image: '../thunaymoreiradesoares2/assets/images/wordpress.svg',
            title: 'Wordpress Development',
            description:
               'I use one of the most used CMS in the world to create Websites and content management. I construct responsive and functional themes for your Wordpress website.',
         },
         {
            ID: 4,
            image: '../thunaymoreiradesoares2/assets/images/gear.svg',
            title: 'Suport and Maintenance',
            description:
               'I offer continuous maintenance services to make your website and online presence remains updated, secure and functional.',
         },
      ],
   }))

   Alpine.data('skills', () => ({
      skillsList: [
         {
            ID: 1,
            name: 'HTML5',
            percent: 95,
            level: 'Advanced',
         },
         {
            ID: 2,
            name: 'CSS3',
            percent: 85,
            level: 'Advanced',
         },
         {
            ID: 3,
            name: 'JavaScript',
            percent: 88,
            level: 'Advanced',
         },
         {
            ID: 4,
            name: 'PHP',
            percent: 93,
            level: 'Advanced',
         },
         {
            ID: 5,
            name: 'Wordpress',
            percent: 90,
            level: 'Advanced',
         },
         {
            ID: 6,
            name: 'SASS',
            percent: 60,
            level: 'Intermediate',
         },
         {
            ID: 7,
            name: 'jQuery',
            percent: 70,
            level: 'Intermediate',
         },
         {
            ID: 8,
            name: 'NextJS',
            percent: 65,
            level: 'Intermediate',
         },
         {
            ID: 9,
            name: 'ReactJS',
            percent: 35,
            level: 'Basic',
         },
         {
            ID: 10,
            name: 'TailwindCSS',
            percent: 90,
            level: 'Advanced',
         },
      ],
   }))

   Alpine.data('projects', () => ({
      tab: 'all',
      projects: [
         {
            ID: 1,
            type: 'web',
            image: 'https://images2.imgbox.com/9c/f7/bbiOSoZK_o.png',
            title: 'IT9 Digital Marketing',
            description: 'Responsive website using HTML, CSS, JS, Bootstrap, PHP and Wordpress.',
            link1: {
               name: 'Website',
               link: 'https://it9.com.br/',
            },
            link2: {
               name: '',
               link: '',
            },
         },
         {
            ID: 2,
            type: 'web',
            image: 'https://images2.imgbox.com/d3/d4/TwBGnEmc_o.png',
            title: 'Magalhães & Sipert Lawyer Society',
            description: 'Responsive website using HTML, CSS, JS, Bootstrap, PHP and Wordpress.',
            link1: {
               name: 'Website',
               link: 'https://mslaw.com.br/',
            },
            link2: {
               name: 'Github',
               link: 'https://github.com/thy8000/magalhes-sipert-sociedade-de-advogados',
            },
         },
         {
            ID: 3,
            type: 'web',
            image: 'https://images2.imgbox.com/7c/e8/EaWRK9TQ_o.png',
            title: 'FCTK Lawyer Society',
            description: 'Responsive website using HTML, CSS, JS, PHP and Wordpress.',
            link1: {
               name: 'Website',
               link: 'https://fctk.com.br/',
            },
            link2: {
               name: '',
               link: '',
            },
         },
         {
            ID: 4,
            type: 'web',
            image: 'https://images2.imgbox.com/a3/52/R0c1arv1_o.png',
            title: 'Acetec',
            description: 'Responsive website using HTML, CSS, JS, PHP and Wordpress.',
            link1: {
               name: 'Website',
               link: 'https://casadotnt.com.br/',
            },
            link2: {
               name: '',
               link: '',
            },
         },
         {
            ID: 5,
            type: 'web',
            image: 'https://images2.imgbox.com/b7/57/hAjlX6CD_o.png',
            title: 'Dra. Andrea Signoretti',
            description: 'Responsive website made with Wordpress and Elementor.',
            link1: {
               name: 'Website',
               link: 'https://andreasignoretti.com.br/',
            },
            link2: {
               name: '',
               link: '',
            },
         },
         {
            ID: 6,
            type: 'web',
            image: 'https://images2.imgbox.com/89/1d/IwbdhduE_o.png',
            title: 'Altabase',
            description: 'Responsive website using HTML, CSS, TailwindCSS, JQuery, PHP and Wordpress.',
            link1: {
               name: 'Website',
               link: 'https://altabase.com.br/',
            },
            link2: {
               name: 'Github',
               link: 'https://github.com/thy8000/obrasoft',
            },
         },
         {
            ID: 7,
            type: 'web',
            image: 'https://images2.imgbox.com/c1/98/va0tn2y4_o.png',
            title: 'Altaboards',
            description: 'Responsive website made in HTML, CSS, TailwindCSS, JQuery, PHP and Wordpress.',
            link1: {
               name: 'Website',
               link: 'https://www.altaboards.com/',
            },
            link2: {
               name: 'Github',
               link: 'https://github.com/thy8000/altaboards',
            },
         },
         {
            ID: 8,
            type: 'web',
            image: 'https://images2.imgbox.com/a7/f0/ds4cVRt7_o.png',
            title: 'Portfolio 1.0',
            description: 'Responsive website made in HTML, CSS and JQuery. First portuguese version of my portfolio.',
            link1: {
               name: 'Website',
               link: 'https://thy8000.github.io/thunaymoreiradesoares/',
            },
            link2: {
               name: 'Github',
               link: 'https://github.com/thy8000/thunaymoreiradesoares',
            },
         },
         {
            ID: 9,
            type: 'games',
            image: 'https://images2.imgbox.com/1e/0e/KXVOdeVU_o.png',
            title: 'Kitsune',
            description: 'Mobile game made with Unity and C# for an TCC Project.',
            link1: {
               name: 'Behance',
               link: 'https://www.behance.net/gallery/90303541/Kitsune',
            },
            link2: {
               name: '',
               link: '',
            },
         },
         {
            ID: 10,
            type: 'mobile',
            image: 'https://images2.imgbox.com/f0/06/gblpRkns_o.png',
            title: 'Highlighter',
            description: 'Mobile app made with Android Studio and Java for an University project.',
            link1: {
               name: 'Behance',
               link: 'https://www.behance.net/gallery/79960877/Highlighter',
            },
            link2: {
               name: 'Github',
               link: 'https://github.com/thy8000/Highlighter-App',
            },
         },
         {
            ID: 11,
            type: 'others',
            image: 'https://images2.imgbox.com/4c/2d/Ud5niPDR_o.png',
            title: 'Infomarket',
            description: 'Desktop app made with Visual Studio, C# and .NET for an University project.',
            link1: {
               name: 'Behance',
               link: 'https://www.behance.net/gallery/80153453/Infomarket',
            },
            link2: {
               name: 'Github',
               link: 'https://github.com/thy8000/Infomarket',
            },
         },
         {
            ID: 12,
            type: 'others',
            image: '../thunaymoreiradesoares2/assets/images/book-finder.png',
            title: 'Book Finder',
            description: 'Website made with Vite, Vue.js, React and TailwindCSS for an personal project.',
            link1: {
               name: 'Github',
               link: 'https://github.com/thy8000/book-finder-app',
            },
            link2: {
               name: '',
               link: '',
            },
         },
      ],
   }))
})

document.addEventListener('DOMContentLoaded', () => {
   var scrollMagicController = new ScrollMagic.Controller()

   var scrollMagicScene = new ScrollMagic.Scene({
      triggerElement: '#header .fade-in-3',
      reverse: false,
   })
      .setClassToggle('#header .fade-in-3', 'show')
      .addTo(scrollMagicController)

   scrollMagicScene = new ScrollMagic.Scene({
      triggerElement: '#top-hero .fade-in-3',
      reverse: false,
   })
      .setClassToggle('#top-hero .fade-in-3', 'show')
      .addTo(scrollMagicController)

   scrollMagicScene = new ScrollMagic.Scene({
      triggerElement: '#about-me .fade-in',
      reverse: false,
   })
      .setClassToggle('#about-me .fade-in', 'show')
      .addTo(scrollMagicController)

   scrollMagicScene = new ScrollMagic.Scene({
      triggerElement: '#services .fade-in',
      reverse: false,
   })
      .setClassToggle('#services .fade-in', 'show')
      .addTo(scrollMagicController)

   scrollMagicScene = new ScrollMagic.Scene({
      triggerElement: '#skills .fade-in',
      reverse: false,
   })
      .setClassToggle('#skills .fade-in', 'show')
      .addTo(scrollMagicController)

   scrollMagicScene = new ScrollMagic.Scene({
      triggerElement: '#experience .fade-in',
      reverse: false,
   })
      .setClassToggle('#experience .fade-in', 'show')
      .addTo(scrollMagicController)

   scrollMagicScene = new ScrollMagic.Scene({
      triggerElement: '#projects .fade-in-2',
      reverse: false,
   })
      .setClassToggle('#projects .fade-in-2', 'show')
      .addTo(scrollMagicController)
})
