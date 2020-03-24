export let i = 0;

export function* increaser() {
    while(true) {
        yield ++i;
    }
}

export const inc = increaser();