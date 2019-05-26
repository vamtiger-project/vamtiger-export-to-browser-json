export declare enum Selector {
    jsonScript = "script[type=\"application/json\"]"
}
export declare enum Extension {
    json = "json",
    js = "js"
}
export declare enum StringConstant {
    nothing = "",
    period = ".",
    space = " ",
    backTick = "`"
}
export declare enum CommandlineArgument {
    file = "file"
}
export declare enum CommandlineArgumentShort {
    file = "f"
}
export declare enum MimeType {
    json = "application/json"
}
export interface IExportToBrowserJson {
    file: string;
}
export interface IGetExportText {
    text: string;
    name: string;
}
export declare const regex: {
    newlines: RegExp;
    multiSpaces: RegExp;
    backTicks: RegExp;
    doubleQuotes: RegExp;
};
