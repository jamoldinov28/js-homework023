const wrapperEl = document.querySelector(".wrapper")
const loadingEl = document.querySelector(".loading")
const btnEl = document.querySelector(".btn")

const cardEl = document.querySelector(".card")
const backTopEl = document.querySelector(".back-top")

const BASE_URL = "https://dummyjson.com"

const perPageCount = 31
let total = 0

   async function fetchData(endpoint) {
   const response = await fetch(`${BASE_URL}${endpoint}`)
   response
   .json()
   .then((res)=> {
       createCard(res)
       total = res.total
   })
   .catch((err) => console.log(err))
   .finally(()=> {
       loadingEl.style.display = "none"
       herobtnEl.removeAttribute("disabled")
       herobtnEl.textContent = "See more"
   })
}
window.addEventListener("load", ()=>{
    careateLoading(perPageCount)
    fetchData(`/users?limit=${perPageCount}`)
})


function careateCard(data){
    data.users.forEach(user =>{
        const divEl = document.createElement("div")
        divEl.className = "card"
        divEl.innerHTML = `
           <img src= ${user.image} alt="">
            <h1>firstName: ${user.firstName} </h1>
            <h1>lastName: ${user.lastName}</h1>
            <p>birthDate: ${user.birthDate}</p>
            <p>age: ${user.age}</p>
            <p>gender: ${user.gender}</p>
            <p>height: ${user.height}</p>
            <p>weight: ${user.weight}</p>
            <p>phone: ${user.phone}</p>
            <h2>email: ${user.email}</h2>
        `
        wrapperEl.appendChild(divEl)
    })
}

function careateLoading(n){
    loadingEl.style.display = "grid"
    loadingEl.innerHTML = null
    Array(n).fill().forEach(()=>{
        const div = document.createElement("div")
        div.className = "loading__item"
        div.innerHTML = `
            <div class="loading__image  to-left"></div>
            <div class="loading__title  to-left"></div>
            <div class="loading__title  to-left"></div>
        `
        loadingEl.appendChild(div)
        
    })
}
let offset = 10
btnEl.addEventListener("click", ()=>{
    btnEl.setAttribute("disabled", true)
    btnEl.textContent = "Loading..."
    createLoading(perPageCount)
    offset++
    if(total <= perPageCount + (offset * perPageCount)){
        btnEl.style.display = "none"
    }
    fetchData(`/users?limit=${perPageCount}&skip=${offset * perPageCount}`)
})

window.addEventListener("scroll", ()=>{     
    console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop > 150){
        cardEl.classList.add("dark")
        backTopEl.style.bottom = "20px"
        backTopEl.style.transform = "scale(1)"
    }else{
        cardEl.classList.remove("dark")
        backTopEl.style.bottom = "-40px"
        backTopEl.style.transform = "scale(0)"
    }
})

// {
    
// const herowrapperEl = document.querySelector(".hero__wrapper")
// const loadingEl = document.querySelector(".loading")
// const herobtnEl = document.querySelector(".hero__btn")
// const navbarEl = document.querySelector(".navbar")
// const backTopEl = document.querySelector(".back-top")


// const BASE_URL = "https://dummyjson.com"

// const perPageCount = 3
// let total = 0

// async function fetchData(endpoint){
//     const response = await fetch(`${BASE_URL}${endpoint}`)
//     response
//         .json()
//         .then((res)=> {
//             createCard(res)
//             total = res.total
//         })
//         .catch((err) => console.log(err))
//         .finally(()=> {
//             loadingEl.style.display = "none"
//             herobtnEl.removeAttribute("disabled")
//             herobtnEl.textContent = "See more"
//         })
// }

// window.addEventListener("load", ()=>{
//     createLoading(perPageCount)
//     fetchData(`/posts?limit=${perPageCount}`)
// })

// function createLoading(n){
//     loadingEl.style.display = "grid"
//     loadingEl.innerHTML = null
//     Array(n).fill().forEach(()=>{
//         const div = document.createElement("div")
//         div.className = "loading__item"
//         div.innerHTML = `
//             <div class="loading__image to-left"></div>
//             <div class="loading__title to-left"></div>
//             <div class="loading__title to-left"></div>
//         `
//         loadingEl.appendChild(div)
//     })
// }

// function createCard(data){
//     data.posts.forEach(posts=> {
//         const divEl = document.createElement("div")
//         divEl.className = "card"
//         divEl.innerHTML = `
//            <div class="hero__card">
//                 <h2>${posts.title}</h2>
//                 <p>${posts.body}</p>
//                 <h2> ${posts.tags} </h2> 
//             <div class="hero__topic">
//                 <div class="hero__text">
//                     <p>likes: ${posts.reactions.likes}</p>
//                     <p>dislikes: ${posts.reactions.dislikes}</p>
//                 </div>
//                 <div class="hero__text">
//                     <p>views: ${posts.views}</p>
//                     <p>userId: ${posts.userId}</p>
//                 </div>
//             </div>
//             </div>
//         </div>    
//         `
//         herowrapperEl.appendChild(divEl)    
//     })
// }

// let offset = 10
// herobtnEl.addEventListener("click", ()=>{
//     herobtnEl.setAttribute("disabled", true)
//     herobtnEl.textContent = "Loading..."
//     createLoading(perPageCount)
//     offset++
//     if(total <= perPageCount + (offset * perPageCount)){
//         herobtnEl.style.display = "none"
//     }
//     fetchData(`/posts?limit=${perPageCount}&skip=${offset * perPageCount}`)
// })

// window.addEventListener("scroll", ()=>{   
//     console.log(document.documentElement.scrollTop);
//     if(document.documentElement.scrollTop > 150){
//         navbarEl.classList.add("dark")
//         backTopEl.style.bottom = "20px"
//         backTopEl.style.transform = "scale(1)"
//     }else{
//         navbarEl.classList.remove("dark")
//         backTopEl.style.bottom = "-40px"
//         backTopEl.style.transform = "scale(0)"
//     }
// })
// }





window.addEventListener("scroll", ()=>{   
    console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop > 150){
        navbarEl.classList.add("dark")
        backTopEl.style.bottom = "20px"
        backTopEl.style.transform = "scale(1)"
    }else{
        navbarEl.classList.remove("dark")
        backTopEl.style.bottom = "-40px"
        backTopEl.style.transform = "scale(0)"
    }
})