fetch('http://localhost:3000/ramens')
.then(resp => resp.json())
.then(ramen => ramen.forEach(item => {
    let ramenImg = document.createElement('img')
    let ramenMenu = document.querySelector('#ramen-menu')
    ramenImg.src = item.image
    ramenImg.setAttribute('id', `${item.id}`)
    ramenImg.addEventListener('click', () => {
        let focusedRamenImg = document.querySelector('.detail-image')
        let focusedRamenName = document.querySelector('.name')
        let focusedRamenRestaurant = document.querySelector('.restaurant')
        let ramenRating = document.querySelector('#rating-display')
        let ramenComment = document.querySelector('#comment-display')
        focusedRamenImg.src = item.image
        focusedRamenName.textContent = item.name
        focusedRamenRestaurant.textContent = item.restaurant
        ramenRating.textContent = item.rating
        ramenComment.textContent = item.comment 
    })
    ramenMenu.appendChild(ramenImg)
}))

let form = document.querySelector('form')
form.addEventListener('submit', (e) =>{
    e.preventDefault()
    let newRamenName = e.target.name.value
    let newRamenRestaurant = e.target.restaurant.value
    let newRamenImg = e.target.image.value
    let newRamenRating = e.target.rating.value
    let newRamenComment = e.target['new-comment'].value
    let ramenImg = document.createElement('img')
    let ramenMenu = document.querySelector('#ramen-menu')
    ramenImg.src = newRamenImg
    ramenImg.addEventListener('click', () => {
        let focusedRamenImg = document.querySelector('.detail-image')
        let focusedRamenName = document.querySelector('.name')
        let focusedRamenRestaurant = document.querySelector('.restaurant')
        let ramenRating = document.querySelector('#rating-display')
        let ramenComment = document.querySelector('#comment-display')
        focusedRamenImg.src = newRamenImg
        focusedRamenName.textContent = newRamenName
        focusedRamenRestaurant.textContent = newRamenRestaurant
        ramenRating.textContent = newRamenRating
        ramenComment.textContent = newRamenComment  
})
ramenMenu.appendChild(ramenImg)
form.reset()
})
