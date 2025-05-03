const loadProductos = document.getElementById("loadProductos");
const information = document.getElementsByClassName("card-text");
const prices = document.getElementsByClassName("price");
const img = document.getElementsByClassName("bd-placeholder-img");
const urlAPI = "https://api.escuelajs.co/api/v1/products";

function getData() {
    const options = {"method": "GET"}
    fetch(urlAPI, options)
        .then((response) => {
            response.json().then((res) => {
                for (let i = 0; i < information.length; i++ ){
                    insertDescription(information[i], res[i], prices[i], img[i]);
                }
                
            });
        })
        .catch((err) => {
            alert("Existe un problema, intente más tarde :)");
        });
}

function insertDescription(classCardText, res, classPrice, classImg){

    classCardText.innerText = `${res.title} \n\n ${res.description}`
    classPrice.innerText = `$${res.price}`

    classImg.insertAdjacentHTML("beforeend", `
        <image referrerpolicy="no-referrer" href="${res.images[1]}" width="100%" height="100%"/>
        `)
}


loadProductos.addEventListener("click", function(event){
    event.preventDefault();
    getData();

});