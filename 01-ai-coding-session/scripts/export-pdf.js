import puppeteer from 'puppeteer'
import { PDFDocument } from 'pdf-lib'
import fs from 'fs'
import path from 'path'

const WIDTH = 1440
const HEIGHT = 810
const SRC = 'dist/index.html'
const OUT = 'dist/slides.pdf'

async function waitForSlideReady(page, index) {
  // 1. Wait until the target slide carries the `active` class
  await page.waitForFunction(
    (i) => document.querySelectorAll('.slide')[i]?.classList.contains('active'),
    { timeout: 5000 },
    index
  )

  // 2. Wait for the slide's fade-in transition + all fadeUp content animations
  //    to fully finish, using the Web Animations API (deterministic, no guessing).
  await page.evaluate(async (i) => {
    const slide = document.querySelectorAll('.slide')[i]
    if (!slide) return

    // Wait for images inside the slide to load
    const imgs = Array.from(slide.querySelectorAll('img'))
    await Promise.all(
      imgs.map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise((r) => {
              img.addEventListener('load', r, { once: true })
              img.addEventListener('error', r, { once: true })
            })
      )
    )

    // Wait for every running CSS animation/transition on the slide subtree to finish
    const anims = slide.getAnimations({ subtree: true })
    await Promise.all(anims.map((a) => a.finished.catch(() => {})))
  }, index)

  // 3. One more frame to be safe
  await new Promise((r) => setTimeout(r, 100))
}

async function main() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport({ width: WIDTH, height: HEIGHT, deviceScaleFactor: 2 })
  await page.goto('file://' + path.resolve(SRC), { waitUntil: 'networkidle0' })

  const total = await page.evaluate(() => document.querySelectorAll('.slide').length)
  console.log('Total slides:', total)

  const pdfDoc = await PDFDocument.create()

  for (let i = 0; i < total; i++) {
    if (i > 0) await page.keyboard.press('ArrowRight')
    await waitForSlideReady(page, i)

    const shot = await page.screenshot({ type: 'png' })
    const img = await pdfDoc.embedPng(shot)
    const pdfPage = pdfDoc.addPage([WIDTH, HEIGHT])
    pdfPage.drawImage(img, { x: 0, y: 0, width: WIDTH, height: HEIGHT })
    console.log('Captured slide', i + 1, '/', total)
  }

  fs.writeFileSync(OUT, await pdfDoc.save())
  await browser.close()
  console.log('PDF generated:', OUT)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
