const fs = require('fs')
const path = require('path')

const includePath = path.join(__dirname, 'data', 'decks', 'include')

function getInclude(file) {
  fullPath = path.join(includePath, file)
  console.log(fullPath)
  return fs.readFileSync(fullPath, 'utf8')
}

const includeregex = /^@include\[(.+)\]$/
const fabregex = {
  test: /@fab\[([a-z]+)\]/,
  template: `<i class="fab fa-<<subst>>"></i>`,
}
const fasregex = {
  test: /@fas\[([a-z]+)\]/,
  template: `<i class="fas fa-<<subst>>"></i>`,
}
const slidebg = {
  test: /@slide\[background\="(.+)"\]/,
  template: `  <!-- .slide: data-background="<<subst>>" -->`,
}

const slidebgi = {
  test: /@slide\[background-image\="(.+)"\]/,
  template: `  <!-- .slide: data-background-image="<<subst>>" -->`,
}
const regexes = [fabregex, fasregex, slidebg, slidebgi]

module.exports = (markdown, options) => {
  return new Promise((resolve, reject) => {
    return resolve(
      markdown
        .split('\n')
        .map((line, index) => {
          if (includeregex.test(line)) {
            const match = line.match(includeregex)
            const file = match[1]
            const include = getInclude(file)
            line = include
          }
          return line
        })
        .join('\n')
        .split('\n')
        .map((line, index) => {
          if (includeregex.test(line)) {
            const match = line.match(includeregex)
            const file = match[1]
            const include = getInclude(file)
            line = include
          }
          regexes.forEach(function (regex, index, array) {
            if (regex.test.test(line)) {
              console.log('match', line)
              const subst = line.match(regex.test)[1]
              console.log(subst)
              const template = regex.template.replace('<<subst>>', subst)
              console.log(template)
              line = line.replace(line.match(regex.test)[0], template)
              console.log(line)
            }
          })
          return line
        })
        .join('\n')
    )
  })
}
