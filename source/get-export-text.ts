import {
    IGetExportText,
    Selector,
    MimeType,
    StringConstant,
    regex
} from './types';

const { jsonScript: prefix } = Selector;
const { multiSpaces, newlines  } = regex;
const { space } = StringConstant;

const { stringify } = JSON;

export default ({ text, name }: IGetExportText) => {
    const jsonText = stringify({
        name,
        text
    });
    const exportText = `(() => {
        const { stringify } = JSON;
        const selector = '${prefix}[data-name="${name}"]';
        const existingScript = document.querySelector(selector);
        const script = !existingScript && document.createElement('script');

        if (script) {
            script.type = 'application/json';
            script.dataset.name = '${name}';
            script.innerHTML = stringify(${jsonText});

            document.head.appendChild(script);
        }
    })()`.trim();

    return exportText;
}