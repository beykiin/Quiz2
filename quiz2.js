// let btn=document.getElementById("btn")
// let asalMi=document.getElementById("asalMi")
// let count=0
// btn.onclick=()=>{
//     let sayi=+asalMi.value
//     for(let i=2;i<(sayi/2)+1;i++){
//         if(sayi%i==0){
//             count++
//             alert("Sayınız asal değildir.")
//             break
//         }
//     }
//     if(count==0){
//         alert("Sayınız asaldır.")
//     }
//     count=0
// }

// let btn=document.getElementById("btn")
// let box=document.getElementById("box")
// let count=0

// btn.onclick=()=>{
    
//     let div=document.createElement("div")
//     // if(count!=0){
//     //     box.removeChild(box.lastChild)
//     // }
    
//     if(count<=0){
//     div.style.height="100px"
//     div.style.width="100px"
//     div.style.backgroundColor="orangered"
//     div.style.border="7px solid black"
//     div.style.marginTop="10px"
    
//     }
//     else if(count<=1){
//     div.style.height="100px"
//     div.style.width="100px"
//     div.style.backgroundColor="blue"
//     div.style.border="7px solid black"
//     div.style.marginTop="10px"
    
//     }
//     else if(count<=2){
//     div.style.height="100px"
//     div.style.width="100px"
//     div.style.backgroundColor="yellow"
//     div.style.border="7px solid black"
//     div.style.marginTop="10px"
    
//     }
//     else if(count<=3){
//     div.style.height="100px"
//     div.style.width="100px"
//     div.style.backgroundColor="red"
//     div.style.border="7px solid black"
//     div.style.marginTop="10px"
    
//     }
//     else{
//     div.style.height="100px"
//     div.style.width="100px"
//     div.style.backgroundColor="green"
//     div.style.border="7px solid black"
//     div.style.marginTop="10px"
    
//     }
    
//     box.appendChild(div)
//     // count++
//     count++
// }

// Bir 500px 500px div etiketi içerisine sıralı bir şekilde div oluşturun ama en fazla 9 div oluşturabilirsin 9 dan sonra her oluşturmaya başladığında sayı artmayacak 100px 100px

// BENİM YAPTIĞIM
// let btn=document.getElementById("btn")
// let box=document.getElementById("box")
// let count=0

// btn.onclick=()=>{
//     let div=document.createElement("div")
//     if(count==9){
//         div.removeChild(div.lastChild)
//     }
//     else{
//         div.style.height="100px"
//         div.style.width="100px"
//         div.style.border="15px solid black"
//         div.style.backgroundColor="orangered"
//         div.style.display="inline-flex"
//         div.style.marginLeft="25px"
//         div.style.marginTop="25px"
        
//     }
//     box.appendChild(div)
//     count++

// }

//HOCANIN YAPTIĞI
// let btn=document.getElementById("btn")
// let box=document.getElementById("box")
// let count=0

// btn.onclick=()=>{
//     if(count>8){
        //box.removeChild(box.lastChild)  // SON ÇOCUĞU SİLE FİRSTCHİLD İLK ÇOCUĞU SİLER
//         box.replaceChildren()  // Reomve children ise tekrar baştan başlatmaya yarıyor silip baştan devam ediyor
//         count=0
//     }
//     count++
//     box.style.display="flex"
//     box.style.flexWrap="wrap"
//     box.style.justifyContent="space-around"
//     box.style.alignItems="center"
//     let div=document.createElement("div")
//     div.style.width="100px"
//     div.style.height="100px"
//     div.style.border="15px solid black"
//     div.style.backgroundColor="purple"
//     div.style.display="inline-flex"

//     box.appendChild(div)
// }

// let intervalId;
// function bgCol(){
//     intervalId=setInterval(changeCol,1000)
// }

// function changeCol(){
//     let r=Math.floor(Math.random()*255)
//     let g=Math.floor(Math.random()*255)
//     let b=Math.floor(Math.random()*255)
//     document.body.style.backgroundColor=`rgb(${r},${g},${b})`
// }

// 7 adet renk belirle bunlar dönsün

// let setIntervalId;
function bgCol(){
    setIntervalId=setInterval(changeCol,1000)
}
function changeCol(){
    let coloList=["blue","red","green","pink","purple","black","orangered"]
    let col=coloList[Math.floor(Math.random()*coloList.length)]
    document.body.style.backgroundColor=col
}

let stopColor=document.getElementById("stopColor")
let start=document.getElementById("start")
let setIntervalId;

function bgCol(){
    setIntervalId=setInterval(changeCol,50) //CLEARINTERVAL DURDURMAK İÇİN TEMİZLEME İŞLEMİ
}
function changeCol(){
    let coloList=["blue","red","green","pink","purple","black","orangered"]
    let col=coloList[Math.floor(Math.random()*coloList.length)]
    document.body.style.backgroundColor=col
}

function stopChange(){
    clearInterval(setIntervalId)
}
stopColor.onclick=()=>stopChange()
start.onclick=()=>bgCol()