const div = document.querySelector('.div')




axios('https://fakestoreapi.com/products')
.then((res)=>{
    // console.log(res.data);
    res.data.map((item)=>{
        div.innerHTML += `
        <div class="card" style="width: 18rem;">
      <img id="image" width="200" height="200" class="card-img-top" src="${item.image}"  alt="products" />
      <hr />
      <div class="card-body">
        <p class="card-title">Title: ${item.title}</p>
       <p>Category: ${item.category}</p> <p>Id: ${item.id}</p> <p>Price: ${item.price}</p>
        <a href="#" class="btn btn-primary">Add to cart</a>
      </div>
    </div>`

    })
    

    })

    .catch((err)=>{
      console.log(err);

})



function filtered(btn) {
 axios('https://fakestoreapi.com/products')
.then((res)=>{
    // console.log(res.data);

    div.innerHTML = ''
    console.log(btn.innerHTML);
    const filtereditems = res.data.filter(item => item.category === btn.innerHTML)
    console.log(filtereditems);
    filtereditems.map((item)=>{
        div.innerHTML += `
        <div class="card" style="width: 18rem;">
      <img id="image" width="200" height="200" class="card-img-top" src="${item.image}"  alt="products" />
      <hr />
      <div class="card-body">
        <p class="card-title">Title: ${item.title}</p>
       <p>Category: ${item.category}</p> <p>Id: ${item.id}</p> <p>Price: ${item.price}</p>
        <a href="#" class="btn btn-primary">Add to cart</a>
      </div>
    </div>`

    })
    

    })

    .catch((err)=>{
      console.log(err);

})

  
}


function AllItems() {

  axios('https://fakestoreapi.com/products')
.then((res)=>{
  div.innerHTML = ''
    // console.log(res.data);
    res.data.map((item)=>{
        div.innerHTML += `
        <div class="card" style="width: 18rem;">
      <img id="image" width="200" height="200" class="card-img-top" src="${item.image}"  alt="products" />
      <hr />
      <div class="card-body">
        <p class="card-title">Title: ${item.title}</p>
       <p>Category: ${item.category}</p> <p>Id: ${item.id}</p> <p>Price: ${item.price}</p>
        <a href="#" class="btn btn-primary">Add to cart</a>
      </div>
    </div>`

    })
    

    })

    .catch((err)=>{
      console.log(err);

})
  
}

