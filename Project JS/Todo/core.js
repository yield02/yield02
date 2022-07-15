export default function html ([first, ...strings], ...values) {
    return values.reduce(
        (acc, cur) => [...acc, cur, strings.shift()]
        ,[first]
    ).filter(x => x && x !== true || x === 0)
    .join('')
}



export function createStore(reducer) {
    let state = reducer();
    const roots = new Map();

    function rander() {
        for(const [root, component] of roots) {
            const output = component()
            root.innerHTML = output;
        }
    }

    return {
        attach(component, root) {
            roots.set(root, component);
            rander();
        },

        connect(selector = state => state){
            // return component => (props, ...args) => component(Object.assign({}, props, selector(state), ...args));
            return function (component) {
                return function (props, ...args) {
                    return component(Object.assign({}, props, selector(state), ...args));  
                }
            }
        },

        dispatch(action, ...args) {
            state = reducer(state, action, args)
            rander();
        }


    }
}