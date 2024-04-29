// select landimg page
let landingpage = document.querySelector(".landing-page");

//get aaray of imgs
let imgsarray = ["pngtree-futuristic-shape-abstract-background-chemistry-technology-concept-for-website-image_438818.jpg","pngtree-science-grid-globe-banner-background-image_209974.jpg"];

setInterval(() => {
    //Get randomnumber
    let randomnumberv = math.floor(math.random()* mgsarray.lengh);

    //change background image url
    landingpage. style .backgroundImage = 'url ("imgs/'+ imgsarray [randomNumber]'")'
    
}, interval) 10000;