import React from "react";

export type SafeFC<Props> = (
    props: Props & { children?: React.ReactElement | string | number },
    ctx?: any,
) => React.ReactElement | null;

export function defineSafeFC<Props extends {}>(
    displayName: string,
    component: SafeFC<Props>,
    propsAreEqual?: (prevProps: Props, nextProps: Props) => boolean,
) {
    Reflect.defineProperty(component, "displayName", { value: displayName });
    return React.memo(component, propsAreEqual) as SafeFC<Props>;
}
