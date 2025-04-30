const loadProductos = document.getElementById("loadProductos");
const information = document.getElementsByClassName("card-text");
const prices = document.getElementsByClassName("text-body-secondary price");
const urlAPI = "https://api.escuelajs.co/api/v1/products";

function getData() {
    const options = {"method": "GET"}
    fetch(urlAPI, options)
        .then((response) => {
            response.json().then((res) => {
                insertTittleDescription(information[0], res[0]);
                console.log("Funciona");
            });
        })
        .catch((err) => {
            console.log("No Funciona");
        });
}


function insertTittleDescription(classCardText, res){
    classCardText.innerText = `${res.title} \n\n ${res.description}`
    
}

getData();