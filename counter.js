
function Counter(interval) {

    let _ = auto({
        count: 0
    })

    setInterval(() => { _.count += 1; }, interval);

    _.append({
        parent: null,
        el: (_) => document.createElement('div'),
        tl: (_) => _.el.innerHTML = `The count is: ${_.count}`,
        ap: (_) => _.parent && _.el ? _.parent.append(_.el) : []
    })

    return _;
}

let counter0 = Counter(500);
let counter1 = Counter(1000);
let counter2 = Counter(1500);

counter0.parent = document.querySelector("#root0");
counter1.parent = document.querySelector("#root1");
counter2.parent = document.querySelector("#root2");

// -- notes --

// we could also use auto to create / add these to the dom

// auto({

//     counter0: Counter(500),
//     counter1: Counter(1000),
//     counter2: Counter(1500),

//     add0: (_) => _.counter0 ? _.counter0.parent = document.querySelector("#root0") : [],
//     add1: (_) => _.counter1 ? _.counter1.parent = document.querySelector("#root1") : [],
//     add2: (_) => _.counter2 ? _.counter2.parent = document.querySelector("#root2") : []

// })

// why?

// well, let's say you have a variable in the browser for the interval ( perhaps
// a slider). then you can tie this to the interval creation - as you change
// the slider new elements are created, and then automatically added to
// the parent.

