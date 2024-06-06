// function btn(){
// var getInp = document.getElementById('inp')
//     fetch(`https://api.github.com/users/${getInp.value}`)
//     .then(function(data) {
//         return data.json()
        
//     })

//     .then(function(data){
//         var sho= document.getElementById('show')
//         sho.innerHTML += `
//         <div class="card" style="width: 18rem;">
//   <img class="card-img-top" src=${data} alt="Card image cap">
//   <div class="card-body">
//     <h5 class="card-title">${data}</h5>
//     <p class="card-text">${data} </div>
 
//   <div class="card-body">
    
//     <a href=${data} class="card-link">Go to Profile</a>
//   </div>
// </div>`
 
//     })
//     .catch(function(err) {
//         console.log(err)
//     })
// }