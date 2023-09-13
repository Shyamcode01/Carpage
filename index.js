// banner section API 
let sliderApi=[
    {
        id:1,
        image:'image/slider (1).jpg'
    },
    {
        id:2,
        image:'image/slider (2).jpg'
    },
    {
        id:3,
        image:'image/slider (3).jpg'
    },
]


let banners=document.querySelector('.banners');
 
// map function use 
sliderApi.map((item,id)=>{
    let{image}=item;
    banners.innerHTML+=`
    <div class="banner">
                <img src="${image}" alt="banner-img">
            </div>
    `
})


// banner 

let index=0;


let BannerShow=()=>{
    
    let banner=document.querySelectorAll('.banner');
    for(let i=0;i<banner.length;i++){
        banner[i].style.display="none"
    }
    index++;
    if(index > banner.length){index=1}
    banner[index-1].style.display="block";
    setTimeout(BannerShow,2000)
}
BannerShow();

// cards api 
let CardApi=[
    {
        id:1,
        image:'image/car (1).jpg',
        title:'Mahindra suv',
        category:'SUV',
        price:'2.5 L',
    },
    {
        id:2,
        image:'image/car (2).jpg',
        title:'Mahindra suv',
        category:'Hatchback',
        price:'3.5 L',
    },
    {
        id:3,
        image:'image/car (3).jpg',
        title:'Mahindra suv',
        category:'Sedan',
        price:'1.5 L',
    },
    {
        id:4,
        image:'image/car (14).jpg',
        title:'Mahindra suv',
        category:'SUV',
        price:'2.5 L',
    },
    {
        id:5,
        image:'image/car (3).jpg',
        title:'Mahindra suv',
        category:'Hatchback',
        price:'2.4 L',
    },
    {
        id:6,
        image:'image/car (16).jpg',
        title:'Mahindra suv',
        category:'Sedan',
        price:'2.5 l',
    },
    {
        id:7,
        image:'image/car (17).jpg',
        title:'Mahindra suv',
        category:'SUV',
        price:'2.5 l',
    },
    {
        id:8,
        image:'image/car (15).jpg',
        title:'Mahindra suv',
        category:'SUV',
        price:'2.5 l',
    },
    {
        id:9,
        image:'image/car (14).jpg',
        title:'Mahindra suv',
        category:'SUV',
        price:'2.5 l',
    },
    {
        id:10,
        image:'image/car (10).jpg',
        title:'Mahindra suv',
        category:'Hatchback',
        price:'2.5 l',
    },
    {
        id:11,
        image:'image/car (11).jpg',
        title:'Mahindra suv',
        category:'Sedan',
        price:'2.5 l',
    },
]

// map function use card 
let cards25=document.querySelector('.cards25');

CardApi.map((item)=>{
    let {image,title,price,category}=item;
    cards25.innerHTML+=`
    <div class="card15"data-name="${category}">
                <img src="${image}"class="img-fluid" alt="card">
                <div class="titl">${title}</div>
                <div class="price text-danger">${price}</div>
                <div class="btn2">View</div>

            </div>
    `
})

// card slide 
let filterbtn=document.querySelectorAll('.btn1');
let cards15=document.querySelectorAll('.card15');

let showbtn=(e)=>{
    document.querySelector('.activebtn').classList.remove('activebtn');
    e.target.classList.add('activebtn');

    cards15.forEach((card)=>{
        card.classList.add('hidecard');
        if(card.dataset.name===e.target.dataset.name || e.target.dataset.name ==='All'){
            card.classList.remove('hidecard')
        }
    })

}

 filterbtn.forEach((btn)=>{
    btn.addEventListener('click',showbtn);
 })




//  card btn next preview 

 
let container12=document.querySelectorAll('.container12');

let rightbtn=document.querySelector('.rightkey');
let lefttbtn=document.querySelector('.leftkey');

container12.forEach((item,i)=>{
   
    let containt=item.getBoundingClientRect();
    let containtwidth=containt.width;
    rightbtn.addEventListener('click',()=>{
        item.scrollLeft+=containtwidth;

    })
    lefttbtn.addEventListener('click',()=>{
        item.scrollLeft-=containtwidth;

    })
        
    })

 
    // lates car code api

    let LatestApi=[
        {
            id:1,
            image:'image/car (10).jpg',
            title:'Mahindra suv',
            category:'SUV',
            price:'2.5 L',
        },
        {
            id:2,
            image:'image/car (12).jpg',
            title:'Mahindra suv',
            category:'Hatchback',
            price:'3.5 L',
        },
        {
            id:3,
            image:'image/car (13).jpg',
            title:'Mahindra suv',
            category:'Sedan',
            price:'1.5 L',
        },
        {
            id:4,
            image:'image/car (14).jpg',
            title:'Mahindra suv',
            category:'SUV',
            price:'2.5 L',
        },
        {
            id:5,
            image:'image/car (3).jpg',
            title:'Mahindra suv',
            category:'Hatchback',
            price:'2.4 L',
        },
       
        
    ]

    // map function use card 
let latestcard=document.querySelector('.latestcard');

LatestApi.map((item)=>{
    let {image,title,price,category}=item;
    latestcard.innerHTML+=`
    <div class="card15"data-name="${category}">
                <img src="${image}"class="img-fluid" alt="card">
                <div class="titl">${title}</div>
                <div class="price text-danger">${price}</div>
                <div class="btn2">View</div>

            </div>
    `
})

//  card nex preview latest card 

let container2=document.querySelectorAll('.box2');

let rightbtn2=document.querySelector('.rightkey2');
let lefttbtn2=document.querySelector('.leftkey2');

container2.forEach((item,i)=>{
   
    let containt=item.getBoundingClientRect();
    let containtwidth=containt.width;
    rightbtn2.addEventListener('click',()=>{
        item.scrollLeft+=containtwidth;

    })
    lefttbtn2.addEventListener('click',()=>{
        item.scrollLeft-=containtwidth;

    })
        
    })