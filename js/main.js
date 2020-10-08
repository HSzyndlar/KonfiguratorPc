const mb = [
    {
        id:1,
        name:"Gigabyte B450 AORUS ELITE",
        price: 409,
        producent: "Gigabyte",
        socet: "AM4",
        img: "GIGABYTE-B450-Aorus-Elite-ATX.jpg"
    },
    {
        id:2,
        name:"Gigabyte X570 GAMING X",
        price: 769,
        producent: "Gigabyte",
        socet: "AM4",
        img: "GIGABYTE-X570-Gaming-X.jpg"
    },
    {
        id:3,
        name:"Gigabyte GA-A320M-S2H",
        price: 239,
        producent: "Gigabyte",
        socet: "AM4",
        img: "GA_A320M_S2H_1.jpg"
    },
]

const gfx = [
    {
        id:1,
        name:"MSI GeForce GTX 1650 D6 Gaming X 4GB GDDR6",
        price: 745,
        producent: "MSI",
        img: "GeForce-GTX-1650.jpg"
    },
    {
        id:2,
        name:"Gigabyte GeForce GTX 1660 Gaming OC 6GB GDDR5",
        price: 999,
        producent: "Gigabyte",
        img: "Gigabyte-GeForce-GTX-1660.jpg"
    },
    {
        id:3,
        name:"MSI GeForce GTX 1660 GAMING X 6GB GDDR5",
        price: 1139,
        producent: "Gigabyte",
        img: "msi-gtx-1660-super-gaming-x.jpg"
    },
    {
        id:4,
        name:"Gigabyte GeForce RTX 2060 OC 6GB GDDR6",
        price: 1399,
        producent: "Gigabyte",
        img: "Gigabyte-GeForce-RTX-2060.jpg"
    },
]
const pro = [
    {
        id:1,
        name:"Procesor Intel Core i5-10400F, 2.9GHz",
        price: 699,
        producent: "Intel",
        socet: "1200",
        img: "intel-core-i5-f-10.jpg"
    },
    {
        id:2,
        name:"Procesor Intel Core i7-10700K, 3.8GHz",
        price: 1773,
        producent: "Intel",
        socet: "1200",
        img: "Procesor-Intel-Core-i7-10700K.jpg"
    },
    {
        id:3,
        name:"Procesor AMD Ryzen 5 3600, 3.6GHz",
        price: 929,
        producent: "Amd",
        socet: "AM4",
        img: "AMD-Ryzen-5-3600.jpg"
    },
]

const ram = [
    {
        id:1,
        name:"Gammix D10, DDR4, 16 GB, 3200MHz, CL16 ",
        price: 289,
        producent: "ADATA",
        img: "Gammix-D10-DDR4-16GB.jpg"
    },
    {
        id:2,
        name:"IRDM, DDR4, 16 GB, 3600MHz, CL17",
        price: 327,
        producent: "GoodRam ",
        img: "pamiec-dimm-ddr4-goodram.jpg"
    },
    {
        id:3,
        name:"Vengeance RGB PRO, DDR4, 16 GB, 3200MHz, CL16",
        price: 359,
        producent: "Corsair ",
        img: "Vengeance-RGB-PRO.jpg"
    },
]

const zasilacz = [
    {
        id:1,
        name:"SilentiumPC Vero L3 500W",
        price: 219,
        producent: "SilentiumPC",
        img: "SilentiumPC-Vero-L3-500W.jpg"
    },
    {
        id:2,
        name:"be quiet! SYSTEM POWER 9 500W",
        price: 237,
        producent: "be quiet!",
        img: "be-quiet!.jpg"
    },
    {
        id:3,
        name:"SilentiumPC Vero M3 600W ",
        price: 259,
        producent: "SilentiumPC",
        img: "SilentiumPC-Vero-M3-600W.jpg"
    },
]
const obudowy = [
    {
        id:1,
        name:"SilentiumPC Signum SG7V TG ",
        price: 329,
        producent: "SilentiumPC",
        img: "SilentiumPC-Signum.jpg"
    },
    {
        id:2,
        name:"SilentiumPC Signum SG7V Evo TG ARGB",
        price: 389,
        producent: "SilentiumPC",
        img: "spc250-spc-signum-sg7v-evo-tg-argb-03.jpg"
    },
    {
        id:3,
        name:"Genesis Irid 400 ARGB",
        price: 359,
        producent: "Genesis",
        img: "Genesis-Irid-400.jpg"
    },
]
const monitor = [
    {
        id:1,
        name:"Monitor Samsung S24R350",
        price: 529,
        producent: "Samsung",
        img: "Samsung-S24R350.jpg"
    },
    {
        id:2,
        name:"Monitor Acer Nitro VG240Ybmiix",
        price: 568,
        producent: "Acer",
        img: "Acer-Nitro.jpg"
    },
    {
        id:3,
        name:"Monitor LG 27GL850-B",
        price: 2149,
        producent: "LG",
        img: "Monitor-LG.jpg"
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
    {
        name:'ram',
        price: 0,
    },
    {
        name:'monitor',
        price: 0,
    },
]


let summaryCompHandler = document.getElementById("summaryComp")

function sumCart(koszyk){
    console.log("Ilość elementów w Koszyku"+koszyk.length)
    let cena = 0;

    for(let i=0; i<koszyk.length; i++)
        cena = cena + koszyk[i].price
    return cena;

}

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
    const summaryMonitor = document.getElementById("summaryMonitor")

    if (SelectId == "cpu") {
        summaryCpu.innerHTML = "<td><img src='img/"+pro[strAtt - 1].img+"'></td> "+" <td>"+ pro[strAtt - 1].name + "</td><td>" + pro[strAtt - 1].price+ "</td>"
        cart[2].price = pro[strAtt - 1].price
        cart[2].name = pro[strAtt - 1].name
    }
    else if (SelectId == "mb") {
        summaryMb.innerHTML ="<td><img src='img/"+mb[strAtt - 1].img+"'></td> "+"<td>" + mb[strAtt - 1].name + "</td><td>" + mb[strAtt - 1].price+ "</td>"
        cart[0].price = mb[strAtt - 1].price
        cart[0].name = mb[strAtt - 1].name
       // document.getElementById("summaryMainboard").innerHTML="mainboard:"+cart[0].name+ " "+cart[0].price;
    }
    else if (SelectId == "gpu") {
        summaryGfx.innerHTML = "<td><img src='img/"+gfx[strAtt - 1].img+"'></td> "+" <td>" + gfx[strAtt - 1].name + "</td><td>" + gfx[strAtt - 1].price+ "</td>"
        cart[1].price = gfx[strAtt - 1].price
        cart[1].name = gfx[strAtt - 1].name
    }

    else if (SelectId == "zasilacz") {
        summaryZasilacz.innerHTML = "<td><img src='img/"+zasilacz[strAtt - 1].img+"'></td> "+" <td>" + zasilacz[strAtt - 1].name + "</td><td>" + zasilacz[strAtt - 1].price+ "</td>"
        cart[3].price = zasilacz[strAtt - 1].price
        cart[3].name = zasilacz[strAtt - 1].name
    }
    else if (SelectId == "obudowy") {
        summaryObudowy.innerHTML = "<td><img src='img/"+obudowy[strAtt - 1].img+"'></td> "+" <td>"+obudowy[strAtt - 1].name + "</td><td>" + obudowy[strAtt - 1].price+ "</td>"
        cart[4].price = obudowy[strAtt - 1].price
        cart[4].name = obudowy[strAtt - 1].name
    }
    else if (SelectId == "ram") {
        summaryRam.innerHTML = "<td><img src='img/"+ram[strAtt - 1].img+"'></td> "+" <td>"+ram[strAtt - 1].name + "</td><td>" + ram[strAtt - 1].price+ "</td>"
        cart[5].price = ram[strAtt - 1].price
        cart[5].name = ram[strAtt - 1].name
    }
    else if (SelectId == "monitor") {
        summaryMonitor.innerHTML = "<td><img src='img/"+monitor[strAtt - 1].img+"'></td> "+" <td>"+monitor[strAtt - 1].name + "</td><td>" + monitor[strAtt - 1].price+ "</td>"
        cart[6].price = monitor[strAtt - 1].price
        cart[6].name = monitor[strAtt - 1].name
    }
    else
    {}

    document.getElementById("sumAll").innerHTML="<b>Suma:"+ sumCart(cart)+"zł</b>"
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
for (let i=0; i<ram.length; i++){
    addOpt("ram", ram[i].id, ram[i].name)
}
for (let i=0; i<monitor.length; i++){
    addOpt("monitor", monitor[i].id, monitor[i].name)
}


//document.write("mainboard:",cart[0].name, " ", cart[0].price)