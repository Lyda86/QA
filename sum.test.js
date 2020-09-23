/*const sum = require('./sum');

describe ('sum function', () => {
    test ('returns 8 for 5+3',()=>{
        const result =sum(5,3);
        expect(result).toEqual(8);
    });
});*/

const playwright = require('playwright-chromium');
jest.setTimeout(30000);
let browser;

afterAll(async ()=>{
    await browser.close();
});
describe("UI", () =>{  
    let page; 
    let browser; 
    /*test("Launch browser > open page", async()=>{
        browser = await playwright.chromium.launch({     
            headless:false, sloMo: 1000,   
        });   

        page = await browser.newPage();  
            await page.goto("https://the-internet.herokuapp.com/");        
            await browser.close(); */
    });

    /*test("Add/Remove Elements", async()=>{
        browser = await playwright.chromium.launch({ 
            headless:false, sloMo: 1000,   
        });    
        page = await browser.newPage();  
        await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
        await page.click('#content > div > button');  
        await page.waitForSelector('.added-manually');   
        await browser.close(); */
beforeAll(async()=>{
    browser = await playwright.chromium.launch({
    headless: false, slowMo: 100,
            })
          });

    test("10 - emulation", async() => {    
        const {webkit, devices} = require('playwright-chromium');    
        const pixel2 = playwright.devices['Pixel 2'];    
        const context = await browser.newContext(devices['Pixel 2']);    
        page = await context.newPage();    
        await page.goto("https://github.com/");            
        await page.click('[class="btn-link d-lg-none mt-1 js-details-target"]');    
        await page.waitForSelector('[href="/login"]');    
        await page.click('[href="/login"]');    
        await page.waitForTimeout(1000);  
    });


afterAll(async ()=>{
    await browser.close();
});
/*describe("UI", () =>{  
    let page;  


    test("the-internet", async()=>{ 
        const context = await browser. playwright.chromium.launch({     
            headless:false, sloMo: 1000,   
        });   

        page = await browser.newPage();  
            await page.goto("https://the-internet.herokuapp.com/notification_message_rendered");        
            await browser.close('[type="click_here"]'); 
            await page.click('[href="/notification_message"]');  
            await page.waitForSelector('#flash');   
            await browser.close(); 
    });
});*/

/*test("10 - emulation", async() => {    
    const {webkit, devices} = require('playwright-chromium');    
    const pixel2 = playwright.devices['Pixel 2'];    
    const context = await browser.newContext(devices['Pixel 2']);    
    page = await context.newPage();    
    await page.goto("https://github.com/");            
    await page.click('[class="btn-link d-lg-none mt-1 js-details-target"]');    
    await page.waitForSelector('[href="/login"]');    
    await page.click('[href="/login"]');    
    await page.waitForTimeout(1000);  
});


afterAll(async ()=>{
await browser.close();
});*/