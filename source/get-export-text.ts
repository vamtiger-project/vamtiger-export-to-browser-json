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

export default ({ fileText, name }: IGetExportText) => `(() => {
    const selector = '${prefix}[data-name="${name}"]';
    const existingScript = document.head.querySelector(selector);
    const script = !existingScript && document.createElement('script');
    const json = script && {
        json: "${fileText}"
    };

    if (script) {
        script.dataset.name = '${name}';
        script.type = '${MimeType.json}';
        script.innerHTML = JSON.stringify(json);
        document.head.appendChild(script);
    }
})();`
.trim()
.replace(multiSpaces, space)
.replace(newlines, space);