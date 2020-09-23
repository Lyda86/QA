const playwright = require('playwright-chromium');

jest.setTimeout(90000);
let browser;
let context;
let page;

describe("Homework",()=>{
  test("1",async()=>{
    browser = await playwright.chromium.launch({headless: false});
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://bitaps.com");
    await page.click('#top-menu > div.btn-group > div:nth-child(1) > div > a');
    await page.click('#collapse-menu-net > a.dropdown-item.ethereum-logo-menu');
    await page.waitForSelector('text=ETH/USD');
    await browser.close();
  });
  test("2",async()=>{
    browser = await playwright.chromium.launch({headless: false});
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://bitaps.com");
    await page.click('#sticky > div.container-fluid.col-xl-11 > div > div.col.menu-picto-wrap.moon > i');
    await page.waitForSelector('[data-theme="dark"]');
    await page.click('#sticky > div.container-fluid.col-xl-11 > div > div.col.menu-picto-wrap.moon > i');
    await page.waitForSelector('[data-theme="light"]');
    await browser.close();
  });
  test("3",async()=>{
    browser = await playwright.chromium.launch({headless: false});
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://bitaps.com");
    await page.click('#search-box');
    await page.type('#search-box', '0000000000000000000562d1f1ce908e031507a7bb7d1c8c48458af8b3d75f0f'); //Передаем блок в поле поиска
    await page.keyboard.press('Enter');
    await page.waitForSelector('text = 649512'); //Номер блока
    await browser.close();
  });
  test("4",async()=>{
    browser = await playwright.chromium.launch({headless: false});
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://bitaps.com");
    await page.click('#search-box');
    await page.type('#search-box', '24e7afe16aa2efb8b8a1bffbe18fb2cbfa6bf6fec4d5ace2bfbb708d54941a0c'); //транзакция
    await page.keyboard.press('Enter');
    await page.waitForSelector('text=38a856cf727c2b73f2089ecc44d50c72c93e97b58a2a22dce0665e88c57d7fc3'); //хеш
    await browser.close();
  });
  test("5",async()=>{
    browser = await playwright.chromium.launch({headless: false});
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://bitaps.com");
    await page.click('#search-box');
    await page.type('#search-box', '36LTvMMa7sUphuU5Vgj2QEtwYwmPsGnKUZ'); //адрес
    await page.keyboard.press('Enter');
    await page.waitForSelector('[href="/36LTvMMa7sUphuU5Vgj2QEtwYwmPsGnKUZ"]');
    await browser.close();
  });
  test('6',async()=>{
    browser = await playwright.chromium.launch({headless: false});
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://www.w3schools.com/html/html_iframe.asp');
    const frame = await page.frame({url:'https://www.w3schools.com/html/default.asp'});
    await frame.type('.exerciseprecontainer > input:nth-child(1)', 'hello');
    await browser.close();
  }); 
});

