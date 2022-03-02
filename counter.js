
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