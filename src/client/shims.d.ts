import { defineSafeFC as FN } from "@/utils/defineSafeFC";

declare global {
    const defineSafeFC: typeof FN;
}
