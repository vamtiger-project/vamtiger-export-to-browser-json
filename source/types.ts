export enum Selector {
    jsonScript = 'script[type="application/json"]'
}

export enum Extension {
    json = 'json',
    js = 'js'
}

export enum StringConstant {
    nothing = '',
    period = '.',
    space = ' ',
    backTick = '`'
}

export enum CommandlineArgument {
    file = 'file'
}

export enum CommandlineArgumentShort {
    file = 'f'
}

export enum MimeType {
    json = 'application/json'
}

export interface IExportToBrowserJson {
    file: string;
}

export interface IGetExportText {
    fileText: string;
    name: string;
}

export const regex = {
    newlines: /\n/msg,
    multiSpaces: /\s{2,}/msg,
    backTicks: /`/msg,
    doubleQuotes: /"/msg
}