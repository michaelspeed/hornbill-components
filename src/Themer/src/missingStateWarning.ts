import hasOwnProperty from "./hasOwnProperty";
import isDev from "./isDev";

function missingStateWarning({ items, props, cb }) {
    if (!isDev) return
    props.forEach(prop => {
        if (!hasOwnProperty(items, prop)) {
            cb(prop)
        }
    })
}

export default missingStateWarning
