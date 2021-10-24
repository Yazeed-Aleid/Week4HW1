

window.onload = async ()=>{

    let response = await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")

    if(response.ok){
       let  books = await response.json()
        console.log(books.items[0].volumeInfo.title);
        console.log(books.items[0].volumeInfo.description);

    }

}



let txt = document.getElementById('txt')
let myvar;
let h1 = document.createElement('h1')

document.body.appendChild(h1)
let time
let y;
function timeOut() {
   
    
    h1.innerHTML = "The timeout has been started"
      y =setTimeout(function()
    {
         h1.innerHTML="The timeout has been triggered!"
         h1.style.color="green"
         
    
     }, 3000);
     



}
// var myVar;
function stop() {
    clearTimeout(y);
}


  
    // .then(res => res.json())
    // .then((result) => {
    //       items= result.items;
    //       console.log(items);
    //     }),
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
    //   function e (error)  {
    //    console.log(error);
    //   }
