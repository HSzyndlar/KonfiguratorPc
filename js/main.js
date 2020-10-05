const mb = [
    {
        id:1,
        name:"Gigabyte B450 AORUS ELITE",
        price: 409,
        producent: "Gigabyte",
        socet: "AM4",
    },
    {
        id:2,
        name:"Gigabyte X570 GAMING X",
        price: 769,
        producent: "Gigabyte",
        socet: "AM4",
    },
    {
        id:3,
        name:"Gigabyte GA-A320M-S2H",
        price: 239,
        producent: "Gigabyte",
        socet: "AM4",
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
    {
        id:4,
        name:"Gigabyte GeForce RTX 2060 OC 6GB GDDR6",
        price: 1399,
        producent: "Gigabyte",
    },
]
const pro = [
    {
        id:1,
        name:"Procesor Intel Core i5-10400F, 2.9GHz",
        price: 699,
        producent: "Intel",
        socet: "1200",
    },
    {
        id:2,
        name:"Procesor Intel Core i7-10700K, 3.8GHz",
        price: 1773,
        producent: "Intel",
        socet: "1200",
    },
    {
        id:3,
        name:"Procesor AMD Ryzen 5 3600, 3.6GHz",
        price: 929,
        producent: "Amd",
        socet: "AM4",
    },
]

const zasilacz = [
    {
        id:1,
        name:"SilentiumPC Vero L3 500W",
        price: 219,
        producent: "SilentiumPC",
    },
    {
        id:2,
        name:"be quiet! SYSTEM POWER 9 500W",
        price: 237,
        producent: "be quiet!",
    },
    {
        id:3,
        name:"SilentiumPC Vero M3 600W ",
        price: 259,
        producent: "SilentiumPC",
    },
]
const obudowy = [
    {
        id:1,
        name:"SilentiumPC Signum SG7V TG ",
        price: 329,
        producent: "SilentiumPC",
    },
    {
        id:2,
        name:"SilentiumPC Signum SG7V Evo TG ARGB",
        price: 389,
        producent: "SilentiumPC",
    },
    {
        id:3,
        name:"Genesis Irid 400 ARGB",
        price: 359,
        producent: "Genesis",
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
    {
        name:'zasilacz',
        price: 0,
    },
    {
        name:'obudowy',
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
    const summaryZasilacz = document.getElementById("summaryZasilacz")
    const summaryObudowy = document.getElementById("summaryObudowy")

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

    else if (SelectId == "zasilacz") {
        summaryZasilacz.innerHTML = zasilacz[strAtt - 1].name + " " + zasilacz[strAtt - 1].price
        cart[1].price = zasilacz[strAtt - 1].price
        cart[1].name = zasilacz[strAtt - 1].name
    }
    else if (SelectId == "obudowy") {
        summaryObudowy.innerHTML = obudowy[strAtt - 1].name + " " + obudowy[strAtt - 1].price
        cart[1].price = obudowy[strAtt - 1].price
        cart[1].name = obudowy[strAtt - 1].name
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
for (let i=0; i<zasilacz.length; i++){
    addOpt("zasilacz", zasilacz[i].id, zasilacz[i].name)
}
for (let i=0; i<obudowy.length; i++){
    addOpt("obudowy", obudowy[i].id, obudowy[i].name)
}

//document.write("mainboard:",cart[0].name, " ", cart[0].price)