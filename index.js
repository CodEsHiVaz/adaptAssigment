const puppeteer = require("puppeteer");
(async () => {
  let scrapurl =
    "https://www.officedepot.com/a/browse/ergonomic-office-chairs/N=5+593065&amp;cbxRefine=1429832/";
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(scrapurl);
  //   await page.click("#sorter", { delay: 1000 });

  await page.select(
    "#sorter",
    "/catalog/search.do;jsessionid=0000HUwrRcBbvO4xXJ_atzbdHHU:17h4h7ceo?seoText=ergonomic-office-chairs&%252525253BcbxRefine=1429832&N=5+593065&recordsPerPageNumber=24&Ns=p_AVERAGE_RATING%7C1"
  );
  await page.waitForSelector("#productView");

  await page.waitForSelector("#productView");

  let data = await page.evaluate(() => {
    let products = [];

    $(".productView")
      .children()
      .each(() => {
        let name = document.querySelector(".desc_text>a").textContent;
        products.push(name);
      });
   

    return {
      name,
    };
  });
    console.log(data);
  await browser.close();
})();
