const div = document.querySelector('.div')




axios('https://fakestoreapi.com/products')
.then((res)=>{
    console.log(res.data);
    res.data.map((item)=>{
        div.innerHTML += `
        <div class="card" style="width: 18rem;">
      <img width="200" src="${item.image}"  alt="products" />
      <hr />
      <div class="card-body">
        <p class="card-title">Title: ${item.title}</p>
       <p>Category: ${item.category}</p> <p>Id: ${item.id}</p> <p>Price: ${item.price}</p>
        <a href="#" class="btn btn-primary">Add to cart</a>
      </div>
    </div>`

    })

   

})

