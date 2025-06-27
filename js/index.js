let font = '';
let paletteNumber = 'zero';
let quote = 1;
let skills = ["JavaScript", "TypeScript", "Express Js", "Mongoose", "Sequelize", "MongoDB", "Git", "Github"
    , "Nest Js", "Docker", "Web Sockets.io", "PostgreSQL", "GraphQL"
];
let skillsResult = "";
let ProjectsResult = "";
let CertificatesResult = "";
let Projects = [
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
        case 'five':
            document.documentElement.style.setProperty(color1, palette5.clr1);
            document.documentElement.style.setProperty(color2, palette5.clr2);
            document.documentElement.style.setProperty(color3, palette5.clr3);
            document.documentElement.style.setProperty(color4, palette5.clr4);
            break;
        case 'six':
            document.documentElement.style.setProperty(color1, palette6.clr1);
            document.documentElement.style.setProperty(color2, palette6.clr2);
            document.documentElement.style.setProperty(color3, palette6.clr3);
            document.documentElement.style.setProperty(color4, palette6.clr4);
            break;
        case 'seven':
            document.documentElement.style.setProperty(color1, palette7.clr1);
            document.documentElement.style.setProperty(color2, palette7.clr2);
            document.documentElement.style.setProperty(color3, palette7.clr3);
            document.documentElement.style.setProperty(color4, palette7.clr4);
            break;




    }
    AOS.init();

    Projects.forEach(item => {
        ProjectsResult += ` 
        <div class="mainCon col-md-4 m-3 ${item.category}">
<div class="secCon">
<div class="Category">${item.type}</div>
<div class="title">${item.name}</div>
<div class="linkCon">
<a href="${item.link}" target="_blank">
<i class="fa-brands fa-github"></i>
</a>
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
        skillsResult += `<li class="col-md-3 px-5" data-aos="fade-up">
              <div class="my-3 py-3">${item}</div>
            </li>`
    });


    $(".skillsItems").html(skillsResult);


})


let palette1 = {
    clr1: "#0c134f",
    clr2: "#1d267d",
    clr3: "#5c469c",
    clr4: "#d4adfc"
}
let palette2 = {
    clr1: "#40128b",
    clr2: "#9336b4",
    clr3: "#dd58d6",
    clr4: "#ffe79b"
}
let palette3 = {
    clr1: "#F5F5F5",
    clr2: "#48CFCB",
    clr3: "#229799",
    clr4: "#424242"
}

let palette4 = {
    clr1: "#fff5e0",
    clr2: "#ff6969",
    clr3: "#bb2525",
    clr4: "#141e46"
}
let palette5 = {
    clr1: "#040d12",
    clr2: "#183d3d",
    clr3: "#5c8374",
    clr4: "#93b1a6"
}
let palette6 = {
    clr1: "#0c0c0c",
    clr2: "#481e14",
    clr3: "#9b3922",
    clr4: "#f2613f"
}
let palette7 = {
    clr1: "#003092",
    clr2: "#00879E",
    clr3: "#FFAB5B",
    clr4: "#FFF2DB"
}




const color1 = "--clr1";
const color2 = "--clr2";
const color3 = "--clr3";
const color4 = "--clr4";






$('.palette1').click(() => {

    localStorage.setItem('palette', 'one');
    document.documentElement.style.setProperty(color1, palette1.clr1);
    document.documentElement.style.setProperty(color2, palette1.clr2);
    document.documentElement.style.setProperty(color3, palette1.clr3);
    document.documentElement.style.setProperty(color4, palette1.clr4);

});
$('.palette2').click(() => {

    localStorage.setItem('palette', 'two');
    document.documentElement.style.setProperty(color1, palette2.clr1);
    document.documentElement.style.setProperty(color2, palette2.clr2);
    document.documentElement.style.setProperty(color3, palette2.clr3);
    document.documentElement.style.setProperty(color4, palette2.clr4);

});
$('.palette3').click(() => {

    localStorage.setItem('palette', 'three');
    document.documentElement.style.setProperty(color1, palette3.clr1);
    document.documentElement.style.setProperty(color2, palette3.clr2);
    document.documentElement.style.setProperty(color3, palette3.clr3);
    document.documentElement.style.setProperty(color4, palette3.clr4);

});
$('.palette4').click(() => {

    localStorage.setItem('palette', 'four');
    document.documentElement.style.setProperty(color1, palette4.clr1);
    document.documentElement.style.setProperty(color2, palette4.clr2);
    document.documentElement.style.setProperty(color3, palette4.clr3);
    document.documentElement.style.setProperty(color4, palette4.clr4);

});
$('.palette5').click(() => {

    localStorage.setItem('palette', 'five');
    document.documentElement.style.setProperty(color1, palette5.clr1);
    document.documentElement.style.setProperty(color2, palette5.clr2);
    document.documentElement.style.setProperty(color3, palette5.clr3);
    document.documentElement.style.setProperty(color4, palette5.clr4);

});
$('.palette6').click(() => {

    localStorage.setItem('palette', 'six');
    document.documentElement.style.setProperty(color1, palette6.clr1);
    document.documentElement.style.setProperty(color2, palette6.clr2);
    document.documentElement.style.setProperty(color3, palette6.clr3);
    document.documentElement.style.setProperty(color4, palette6.clr4);

});
$('.palette7').click(() => {

    localStorage.setItem('palette', 'seven');
    document.documentElement.style.setProperty(color1, palette7.clr1);
    document.documentElement.style.setProperty(color2, palette7.clr2);
    document.documentElement.style.setProperty(color3, palette7.clr3);
    document.documentElement.style.setProperty(color4, palette7.clr4);

});




setInterval(() => {
    quote++;
    if (quote > 3) {
        quote = 1;
    }
    $(`.myName${quote}`).css({ display: 'inline-block' });
    $(`.myName${quote}`).siblings().css({ display: 'none' });

}, 5000)