import { css } from 'glamor'

const memoizeClassName = fn => {
    // Memo will hold a list of string keys with string values (classNames).
    const memo = {};

    // Return the wrapped function.
    return (...args) => {
        // Create a key by joining all args.
        const key = args.join('_') || '__no_args__';

        // Check if is already memoized, if so return the result.
        if (memo[key]) return memo[key];

        // Create a new entry in the memo with the generated className.
        memo[key] = css(fn(...args)).toString();

        // Return the newly generated className.
        return memo[key]
    }
};

export default memoizeClassName
