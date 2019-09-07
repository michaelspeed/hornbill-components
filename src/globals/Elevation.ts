export const Elevation = {
    0: 0 as 0,
    1: 1 as 1,
    2: 2 as 2,
    3: 3 as 3,
    4: 4 as 4
}

export type Elevation = typeof Elevation[keyof typeof Elevation]
