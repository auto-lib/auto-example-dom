
// import { h, Fragment } from 'start-dom-jsx'

let data = { name: 'Luna the cat', age: 2 }

// check out https://esbuild.github.io/content-types/#jsx

export default () =>

    <div>
      <img src="/cat1.jpg"/>
      <p>
        This is { data.name }, who is { data.age } years old
      </p>
    </div>