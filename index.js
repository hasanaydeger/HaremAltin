const puppeteer = require('puppeteer');
let eskiDeger ="-";
let calis=0;

async function getPrices(){
    aksiyon();
    console.log("burda degere bakıyorzu"+eskiDeger)
    return await eskiDeger;
}

async function aksiyon() {
    if (calis==0){
    calis=1;
       //async function getPrices (){
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch({
        headless: false // setting this to true will not run the UI        
    });

    console.log("async çalıştı")
    const page= await browser.newPage();
    //await page.goto('https://www.haremaltin.com/', {timeout: 0});
    await page.setDefaultNavigationTimeout(0);
    let status = await page.goto('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js/', {
        waitUntil: 'load',
        // Remove the timeout
        timeout: 0
    });
    status = status.status();
    if (status != 404) {
        console.log(`Probably HTTP response status code 200 OK.` + status);
        //...
    }else{
        console.log('hata dönmeliydi ' + status);
    };

    await page.goto('https://www.haremaltin.com/');
    await page.setDefaultNavigationTimeout(7000);
    await page.waitUntil;

    const sec='body > section.currency-gold.container > div > div.col-lg-8 > div';
    let element = await page.$(sec);
    const hasSatis = '#satis__genel__ALTIN';
    const onsSatis='#satis__genel__ONS';
    const usdAlis='#alis__genel__USDTRY';
    const euroAlis='#alis__genel__EURTRY';
    const gumusSatis='#satis__genel__GUMUSTRY';

    await page.waitForSelector(sec);
    console.log("for başı")
  //let json = await element.$eval(innerTextSelector,(elem)=> elem.textContent);
  //eskiDeger=json;
    
  let aaa=0;
  
  for(let i =0;i< 30 ;i=0){
    let hasSatis_catch = await element.$eval(hasSatis,(elem)=> elem.textContent);
    let onsSatis_catch = await element.$eval(onsSatis,(elem)=> elem.textContent);
    let  usdAlis_catch = await element.$eval(usdAlis ,(elem)=> elem.textContent);
    let euroAlis_catch = await element.$eval(euroAlis,(elem)=> elem.textContent);
    let gumusSatis_catch = await element.$eval(gumusSatis,(elem)=> elem.textContent);

    eskiDeger=` {
                    "haremAltin":{ "hasSatis":${sayiyaCevir(hasSatis_catch)},
                                   "onsSatis":${sayiyaCevir(onsSatis_catch)},
                                   "usdAlis":${sayiyaCevir(usdAlis_catch)},
                                   "euroAlis":${sayiyaCevir(euroAlis_catch)},
                                   "gumusSatis":${sayiyaCevir(gumusSatis_catch)}
                                   }
                }`;
    aaa++;
     //consolabas(aaa);
     
     }
          //  await browser.close();
       // hesapla(json);

     //




    }else{

    }

}




//düzgün çaılaş bozuk olmayan kod
// let eskiDeger ="-";


// function alarmiyak(){
//    return eskiDeger;

// }


// async function getPrices (){
//     const puppeteer = require('puppeteer');
//     const browser = await puppeteer.launch();


//     function degerler(){
//         return eskiDeger;
//     }


//     const page= await browser.newPage();






//     //await page.goto('https://www.haremaltin.com/', {timeout: 0});
//     await page.setDefaultNavigationTimeout(0);
//     let status = await page.goto('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js/', {
//         waitUntil: 'load',
//         // Remove the timeout
//         timeout: 0
//     });



//     status = status.status();
//     if (status != 404) {
//         console.log(`Probably HTTP response status code 200 OK.` + status);
//         //...
//     }else{
//         console.log('hata dönmeliydi ' + status);
//     };

//     await page.goto('https://www.haremaltin.com/');
//     await page.setDefaultNavigationTimeout(7000);
//     await page.waitUntil;

//     const sec='body > section.currency-gold.container > div > div.col-lg-8 > div';
//     let element = await page.$(sec);
//     const innerTextSelector = '#satis__genel__ALTIN';
//     await page.waitForSelector(sec);


//             let json = await element.$eval(innerTextSelector,(elem)=> elem.textContent);
//             console.log("bişiy");
//             await browser.close();
//        // hesapla(json);
//         if(eskiDeger==json.toString()){

//         }else{
//             eskiDeger=json;

//        return sayiyaCevir(json);

//         }

// }

//düzgün çalışan bozuk olmayan kod























































//dosyadan metin okuyan kod bloğu babiş
//  const puppeteer = require('puppeteer');
//  const fs = require('fs');

// (async () => {
//    const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//    page.on('console', msg => console.log(msg.text()));
//    await page.exposeFunction('readfile', async filePath => {
//      return new Promise((resolve, reject) => {
//        fs.readFile(filePath, 'utf8', (err, text) => {
//          if (err) reject(err);
//          else resolve(text);
//        });
//      });
//    });
//    await page.evaluate(async () => {
//      //// use window.readfile to read contents of a file
//      const content = await window.readfile('index.js');
//      console.log(content);
//    });
//    await browser.close();
//  })();



// (async () => {
// const browser = await puppeteer.launch();
// const page= await browser.newPage();
// await page.goto('https://www.haremaltin.com/');
// //await browser.close();

// const sec='body > section.currency-gold.container > div > div.col-lg-8 > div';
// let element = await page.$(sec);
// const innerTextSelector = '#satis__genel__ALTIN';
// await page.waitForSelector(sec);


// let eskiDeger ="-";

//     for(let i =0;i< 30 ;i=0){
//     let json = await element.$eval(innerTextSelector,(elem)=> elem.textContent);

//     if(eskiDeger==json.toString()){

//     }else{
//         eskiDeger=json;
//     consolabas(json);
//     }
//     }

// })();

function sayiyaCevir(deger){
    return deger.replace(".","").replace(",",".")
}
let ceyrekAltin={};
function consolabas(deger){
    let ceyrekAltin_degeri=((sayiyaCevir(deger)*100)+100)/100;

    ceyrekAltin=jsonYap(ceyrekAltin_degeri);
    console.log(deger)
    console.log(ceyrekAltin)

console.log( ceyrekAltin)

}

function jsonYap(deger){
    return {"ceyrekAltin":deger};


}



module.exports={getPrices}