const puppeteer = require('puppeteer');
var readline = require('readline-sync');

var CREDS = {};
CREDS.username = readline.question("Username : ");
CREDS.password = readline.question("Password : ",{ hideEchoBack: true });


async function run() {
  const browser = await puppeteer.launch({executablePath: './chrome-linux/chrome',args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  const url = "http://10.0.3.9:8090";
// dom element selectors
const USERNAME_SELECTOR = '#username';
const PASSWORD_SELECTOR = '#password';
const BUTTON_SELECTOR = '#loginbutton';

  await page.goto(url);

await page.click(USERNAME_SELECTOR);
await page.keyboard.type(CREDS.username);

await page.click(PASSWORD_SELECTOR);
await page.keyboard.type(CREDS.password);

await page.click(BUTTON_SELECTOR);
await page.waitFor(2000);

await page.screenshot({ path: 'status.png'});
console.log("See status.png to know login status.Chrome is currently opened and waiting on url " + url);
  //browser.close();
}

run();
