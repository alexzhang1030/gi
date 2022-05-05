import { basic } from "../data/basic";
import { node } from "../data/node";

export function getAllData(): Record<string, string[]> {
    return {
        basic,
        node,
    };
}