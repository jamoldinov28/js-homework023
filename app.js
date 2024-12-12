const wrapperEl = document.querySelector(".wrapper")
const loadingEl = document.querySelector(".loading")

const cardEl = document.querySelector(".card")
const backTopEl = document.querySelector(".back-top")

const BASE_URL = "https://dummyjson.com"

   async function fetchData(endpoint) {
   const response = await fetch(`${BASE_URL}${endpoint}`)
   response
   .json()
   .then((res)=>careateCard(res))
   .catch((err)=>console.log(err))
   .finally(()=> {
    loadingEl.style.display = "none"
   })
}
window.addEventListener("load", ()=>{
    careateLoading(12)
    fetchData("/users")
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