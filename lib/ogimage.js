const fs = require('fs')
const { createCanvas, loadImage } = require('canvas')

export default async function generateOG(post) {
  const width = 1200
  const height = 630

  const canvas = createCanvas(width, height)
  const context = canvas.getContext('2d')

  context.fillStyle = '#000'
  context.fillRect(0, 0, width, height)

  context.font = 'bold 60pt Menlo'
  context.textAlign = 'center'
  context.textBaseline = 'top'
  context.fillStyle = '#3574d4'

  const text = post.title

  const textWidth = context.measureText(text).width
  context.fillRect(600 - textWidth / 2 - 10, 170 - 5, textWidth + 20, 120)
  context.fillStyle = '#fff'
  context.fillText(text, 600, 170)

  context.fillStyle = '#fff'
  context.font = 'bold 30pt Menlo'
  context.fillText('brian.dev', 600, 530)

  loadImage('./public/static/favicons/mstile-150x150.png').then((image) => {
    context.drawImage(image, 340, 515, 70, 70)
    const buffer = canvas.toBuffer('image/png')
    fs.writeFileSync(`./public/static/images/${post.slug}-og.png`, buffer)
  })
}
