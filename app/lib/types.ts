export interface Feature {
    title: string,
    text: string
}

export interface Step {
    title: string,
    text: string,
    img_url?: string,
}

export interface Plan {
    price: number,
    planName: string,
    features: string[]
}