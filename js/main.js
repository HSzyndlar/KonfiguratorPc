const mb = [
    {
        id:1,
        name:"Gigabyte B450 AORUS ELITE",
        price: 409,
        producent: "Gigabyte",
    },
    {
        id:2,
        name:"Gigabyte X570 GAMING X",
        price: 769,
        producent: "Gigabyte",
    },
    {
        id:3,
        name:"Gigabyte X570 GAMING X",
        price: 769,
        producent: "Gigabyte",
    },
]

const gfx = [
    {
        id:1,
        name:"MSI GeForce GTX 1650 D6 Gaming X 4GB GDDR6",
        price: 745,
        producent: "MSI",
    },
    {
        id:2,
        name:"Gigabyte GeForce GTX 1660 Gaming OC 6GB GDDR5",
        price: 999,
        producent: "Gigabyte",
    },
    {
        id:3,
        name:"MSI GeForce GTX 1660 GAMING X 6GB GDDR5",
        price: 1139,
        producent: "Gigabyte",
    },
]
const pro = [
    {
        id:1,
        name:"Procesor Intel Core i5-10400F, 2.9GHz",
        price: 699,
        producent: "Intel",
    },
    {
        id:2,
        name:"Procesor Intel Core i7-10700K, 3.8GHz",
        price: 1773,
        producent: "Intel",
    },
    {
        id:3,
        name:"Procesor AMD Ryzen 5 3600, 3.6GHz",
        price: 929,
        producent: "Amd",
    },
]

cart = [
    {
        name:'mainboard',
        price: 0,
    },
    {
        name:'graphic card',
        price: 0,
    },
    {
        name:'processor',
        price: 0,
    },

]


let summaryCompHandler = document.getElementById("summaryComp")

function addOpt(elem,optValue, textOpt) {
    let select1 = document.getElementById(elem);
    option = document.createElement("option");
    option.setAttribute("value", optValue);
    const textOption = document.createTextNode(textOpt);
    option.appendChild(textOption);
    select1.appendChild(option);
}
function SelectedItemValue(SelectId) {
    const selectedItem = document.getElementById(SelectId)
    let strAtt = selectedItem.options[selectedItem.selectedIndex].getAttribute('value');
    console.log("Wybrany element ma ID:" + strAtt);

    const summaryCpu = document.getElementById("summaryCpu")
    const summaryMb = document.getElementById("summaryMb")
    const summaryGfx = document.getElementById("summaryGfx")

    if (SelectId == "cpu") {
        summaryCpu.innerHTML = pro[strAtt - 1].name + " " + pro[strAtt - 1].price
        cart[2].price = pro[strAtt - 1].price
        cart[2].name = pro[strAtt - 1].name
    }
    else if (SelectId == "mb") {
        summaryMb.innerHTML = mb[strAtt - 1].name + " " + mb[strAtt - 1].price
        cart[0].price = mb[strAtt - 1].price
        cart[0].name = mb[strAtt - 1].name
       // document.getElementById("summaryMainboard").innerHTML="mainboard:"+cart[0].name+ " "+cart[0].price;
    }
    else if (SelectId == "gpu") {
        summaryGfx.innerHTML = gfx[strAtt - 1].name + " " + gfx[strAtt - 1].price
        cart[1].price = gfx[strAtt - 1].price
        cart[1].name = gfx[strAtt - 1].name
    }
    else
    {}

    document.getElementById("sumAll").innerHTML="<b>Suma:"+(cart[0].price+cart[1].price+cart[2].price)+"</b>"
    //return(parseInt(strAtt));



}
for (let i=0; i<mb.length; i++){
    addOpt("mb", mb[i].id, mb[i].name)
}
for (let i=0; i<gfx.length; i++){
    addOpt("gpu", gfx[i].id, gfx[i].name)
}
for (let i=0; i<pro.length; i++){
    addOpt("cpu", pro[i].id, pro[i].name)
}

//document.write("mainboard:",cart[0].name, " ", cart[0].price)