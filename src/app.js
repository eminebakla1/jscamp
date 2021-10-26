console.log("Merhaba Kodlama.io")

//JS type safe değildir
let dolarBugun = 9.30

let dolarDun = 9.20

{
  let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11

console.log(euroDun)

//array dizi
//camelCasing 
//PascalCasing 
let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredileri"]

console.log("<ul>")
for (let index = 0; index<konutKredileri.length; index++)//0 dan başla 3 den küçük olduğu sürece devam et her döngüde i'yi bir artır.
 {
    console.log("<li>"+konutKredileri[index]+"</li>")
    
}
console.log("</ul>")

{/* <ul>
    <li>Konut kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
    </ul> */
}

console.log (konutKredileri)
