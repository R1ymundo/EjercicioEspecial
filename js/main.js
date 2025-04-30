const loadProductos = document.getElementById("loadProductos");
const information = document.getElementsByClassName("card-text");
const prices = document.getElementsByClassName("price");
const urlAPI = "https://api.escuelajs.co/api/v1/products";

function getData() {
    const options = {"method": "GET"}
    fetch(urlAPI, options)
        .then((response) => {
            response.json().then((res) => {
                for (let i = 0; i < information.length; i++ ){
                    insertTittleDescription(information[i], res[i], prices[i]);
                }
                
                console.log("Funciona");
            });
        })
        .catch((err) => {
            console.log("No Funciona");
        });
}


function insertTittleDescription(classCardText, res, classPrice){
    classCardText.innerText = `${res.title} \n\n ${res.description}`
    classPrice.innerText = `$${res.price}`
    
}

getData();