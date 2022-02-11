import './style.css'

import cats from './cats.jsx'

document.querySelector('#app').replaceWith(cats());

//document.querySelector('#app').replaceWith(cats())

/*
document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
*/