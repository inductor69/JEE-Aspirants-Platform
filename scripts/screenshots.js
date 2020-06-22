const { join } = require('path')
const puppeteer = require('puppeteer')

const getScreen = async (url, name) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport({
    width: 1280,
    height: 800
  })

  await page.goto(url)
  await page.screenshot({
    path: join(__dirname, 'public', 'static', 'images', `${name}.png`),
    fullPage: true
  })

  await browser.close()
}

(() => {
  const sites = [
  
  ]

  sites.map((site) => {
    getScreen(site.url, site.name)
  })
})()
