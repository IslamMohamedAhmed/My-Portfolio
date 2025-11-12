let font = '';
let paletteNumber = 'zero';
let quote = 1;
/*
 { name: "HTML", icon: `<i class="fs-1 devicon-html5-plain"></i>` },
    { name: "CSS", icon: `<i class="fs-1 devicon-css3-plain"></i>` },
    { name: "Bootstrap", icon: `<i class="fs-1 devicon-bootstrap-plain"></i>` },
    { name: "rxjs", icon: `<i class="fs-1 devicon-rxjs-plain"></i>` },
    { name: "jQuery", icon: `<i class="fs-1 devicon-jquery-plain"></i>` },
    { name: "Angular", icon: `<i class="fs-1 devicon-angular-plain"></i>` },
    { name: "Dev Icon", icon: `<i class="fs-1 devicon-devicon-plain"></i>` },
 */
let skills = [
    { name: "VS Code", icon: `<i class="fs-1 devicon-vscode-plain"></i>` },
    { name: "Node Js", icon: `<i class="fs-1 devicon-nodejs-plain"></i>` },
    { name: "JavaScript", icon: `<i class="fs-1 devicon-javascript-plain"></i>` },
    { name: "TypeScript", icon: `<i class="fs-1 devicon-typescript-plain"></i>` },
    { name: "Express Js", icon: `<i class="fs-1 devicon-express-original"></i>` },
    { name: "Nodemon", icon: `<i class="fs-1 devicon-nodemon-plain"></i>` },
    { name: "Mongoose", icon: `<i class="fs-1 devicon-mongoose-original"></i>` },
    { name: "MongoDB", icon: `<i class="fs-1 devicon-mongodb-plain"></i>` },
    { name: "Prisma", icon: `<i class="fs-1 devicon-prisma-original"></i>` },
    { name: "PostgresQL", icon: `<i class="fs-1 devicon-postgresql-plain"></i>` },
    { name: "GraphQL API's", icon: `<i class="fs-1 devicon-graphql-plain"></i>` },
    { name: "Nest Js", icon: `<i class="fs-1 devicon-nestjs-original"></i>` },
    { name: "Socket.io", icon: `<i class="fs-1 devicon-socketio-original"></i>` },
    { name: "Git", icon: `<i class="fs-1 devicon-git-plain"></i>` },
    { name: "Github", icon: `<i class="fs-1 devicon-github-original"></i>` },
    { name: "Postman API", icon: `<i class="fs-1 devicon-postman-plain"></i>` },
    { name: "Docker", icon: `<i class="fs-1 devicon-docker-plain"></i>` },
    { name: "NPM", icon: `<i class="fs-1 devicon-npm-original-wordmark"></i>` },
    { name: "JSON", icon: `<i class="fs-1 devicon-json-plain"></i>` },
    {
        name: "Sequelize", icon: `<i class="fs-1 devicon-sequelize-plain"></i>`
    },
    // { name: "Bun", icon: `<i class="fs-1 devicon-bun-plain"></i>` },
    { name: "MySQL", icon: `<i class="fs-1 devicon-mysql-original"></i>` },
    // { name: "Fastify", icon: `<i class="fs-1 devicon-fastify-plain"></i>` }
];
let skillsResult = "";
let ProjectsResult = "";
let CertificatesResult = "";
let Projects = [
    {
        name: "Fresh-Cart-App", type: "Mongoose", category: "c2",
        framework: "Express Js", link: "https://github.com/IslamMohamedAhmed/Fresh-Cart-App-Final",
        documentation: "https://documenter.getpostman.com/view/42697493/2sB3WsMywv"
    },

];

let certificates = [
    { topic: "Databases", Source: "Manara Tech", ImageSource: "Certificates/Certificate 1 DB.png" },
    { topic: "Relational Databases with Sql", Source: "Manara Tech", ImageSource: "Certificates/Certificate 2 DB.png" },
    { topic: "Foundation of Databases", Source: "Manara Tech", ImageSource: "Certificates/Certificate 3 DB.png" },
    { topic: "Modern JavaScript", Source: "Manara Tech", ImageSource: "Certificates/Modern JS.png" }
];





$(".nav-link").click(function () {
    let Href = $(this).attr("linker")
    let sectionOffest = $(Href).offset().top
    $("body,html").animate({ scrollTop: sectionOffest }, 250)
    // $(this).addClass('linkActive')
    // $(this).parent().siblings().find('a').removeClass("linkActive")
});
$(document).ready(() => {

    $(`.myName1`).css({ display: 'inline-block' });
    $(`.myName1`).siblings().css({ display: 'none' });
    // $(`.myName1`).siblings().css({display:'none'});

    paletteNumber = localStorage.getItem('palette');

    switch (paletteNumber) {
        case 'one':
            document.documentElement.style.setProperty(color1, palette1.clr1);
            document.documentElement.style.setProperty(color2, palette1.clr2);
            document.documentElement.style.setProperty(color3, palette1.clr3);
            document.documentElement.style.setProperty(color4, palette1.clr4);
            break;
        case 'two':
            document.documentElement.style.setProperty(color1, palette2.clr1);
            document.documentElement.style.setProperty(color2, palette2.clr2);
            document.documentElement.style.setProperty(color3, palette2.clr3);
            document.documentElement.style.setProperty(color4, palette2.clr4);
            break;
        case 'three':
            document.documentElement.style.setProperty(color1, palette3.clr1);
            document.documentElement.style.setProperty(color2, palette3.clr2);
            document.documentElement.style.setProperty(color3, palette3.clr3);
            document.documentElement.style.setProperty(color4, palette3.clr4);
            break;
        case 'four':
            document.documentElement.style.setProperty(color1, palette4.clr1);
            document.documentElement.style.setProperty(color2, palette4.clr2);
            document.documentElement.style.setProperty(color3, palette4.clr3);
            document.documentElement.style.setProperty(color4, palette4.clr4);
            break;
    }
    AOS.init();

    Projects.forEach(item => {
        ProjectsResult += ` 
       <div class="col-md-2 py-5 d-flex justify-content-center align-item-center">
        <div class="mainCon ${item.category}">
<div class="secCon">
<div class="Category">${item.type}</div>
<div class="title fw-bolder">
<i class="fa-solid fa-star"></i>
${item.name}
<i class="fa-solid fa-star"></i>
</div>
<div class="linkCon">
<a href="${item.link}" title="project" target="_blank">
<i class="fa-solid fa-link"></i>
</a>
<a href="${item.documentation}" title="documentation" target="_blank">
<i class="fa-solid fa-book"></i>
</a>
</div>
<div class="fw-bold">${item.framework}
</div>
</div>
</div>
</div>

  `
    });

    certificates.forEach(item => {
        CertificatesResult += `
        <div data-aos="zoom-out" class="my-5 certificatesItems col-md-4">
       
      <div class="item">
        <div>
        
        <img src="${item.ImageSource}" class="w-100" alt=""></div>
        <div  class="Info text-center">
          <div>${item.topic}</div>
          <div>${item.Source}</div>
        </div>
      </div>

      </div>
       
       `
    });

    $(".videosItems").html(ProjectsResult);
    $(".certificatesImages").html(CertificatesResult);

    var mixer = mixitup(".videosItems", {
        selectors: {
            target: '.videosItems .mainCon'
        },
        animation: {
            duration: 300
        }
    });

    skills.forEach(item => {
        skillsResult += `<li class="col-md-3 d-flex flex-column my-3 px-5" data-aos="fade-up">
        ${item.icon}
              <div class="my-3 fs-4 py-3">${item.name}</div>
            </li>`
    });


    $(".skillsItems").html(skillsResult);


})



let palette1 = {
    clr1: "#F5F5F5",
    clr2: "#48CFCB",
    clr3: "#229799",
    clr4: "#424242"
}

let palette2 = {
    clr1: "#fff5e0",
    clr2: "#ff6969",
    clr3: "#bb2525",
    clr4: "#141e46"
}

let palette3 = {
    clr4: "#003092",
    clr2: "#00879E",
    clr3: "#FFAB5B",
    clr1: "#FFF2DB"
}

let palette4 = {
    clr4: "#FAF8F1",
    clr2: "#FAEAB1",
    clr3: "#34656D",
    clr1: "#334443"
}





const color1 = "--clr1";
const color2 = "--clr2";
const color3 = "--clr3";
const color4 = "--clr4";






$('.theme1').click(() => {

    localStorage.setItem('palette', 'one');
    document.documentElement.style.setProperty(color1, palette1.clr1);
    document.documentElement.style.setProperty(color2, palette1.clr2);
    document.documentElement.style.setProperty(color3, palette1.clr3);
    document.documentElement.style.setProperty(color4, palette1.clr4);

});
$('.theme2').click(() => {

    localStorage.setItem('palette', 'two');
    document.documentElement.style.setProperty(color1, palette2.clr1);
    document.documentElement.style.setProperty(color2, palette2.clr2);
    document.documentElement.style.setProperty(color3, palette2.clr3);
    document.documentElement.style.setProperty(color4, palette2.clr4);

});
$('.theme3').click(() => {

    localStorage.setItem('palette', 'three');
    document.documentElement.style.setProperty(color1, palette3.clr1);
    document.documentElement.style.setProperty(color2, palette3.clr2);
    document.documentElement.style.setProperty(color3, palette3.clr3);
    document.documentElement.style.setProperty(color4, palette3.clr4);

});
$('.theme4').click(() => {

    localStorage.setItem('palette', 'four');
    document.documentElement.style.setProperty(color1, palette4.clr1);
    document.documentElement.style.setProperty(color2, palette4.clr2);
    document.documentElement.style.setProperty(color3, palette4.clr3);
    document.documentElement.style.setProperty(color4, palette4.clr4);

});





setInterval(() => {
    quote++;
    if (quote > 3) {
        quote = 1;
    }
    $(`.myName${quote}`).css({ display: 'inline-block' });
    $(`.myName${quote}`).siblings().css({ display: 'none' });

}, 5000)