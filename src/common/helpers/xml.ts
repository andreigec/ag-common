export const convertXmlToJson = async (p: { xmlData: string }) => {
  const parser = new XMLParser();
  const ret = parser.parse(p.xmlData);
  return ret;
};

export class XMLParser {
  private stack: any[] = [];
  private currentObject: any = {};

  parse(xmlData: string): any {
    const parser = new XMLReader();
    parser.onStartElement = this.onStartElement.bind(this);
    parser.onEndElement = this.onEndElement.bind(this);
    parser.onText = this.onText.bind(this);
    parser.parse(xmlData);

    return this.currentObject;
  }

  private onStartElement(name: string, attributes: any) {
    let newObject: any = {};
    if (Object.keys(attributes).length > 0) {
      newObject = { ...newObject, ...attributes };
    }
    this.stack.push(this.currentObject);
    const parent = this.stack[this.stack.length - 1];
    if (!parent[name]) {
      parent[name] = newObject;
    } else if (Array.isArray(parent[name])) {
      parent[name].push(newObject);
    } else {
      parent[name] = [parent[name], newObject];
    }

    this.currentObject = newObject;
  }

  private onEndElement() {
    this.currentObject = this.stack.pop() || {};
  }

  private onText(text: string) {
    if (text.trim().length > 0) {
      if (!this.currentObject['$text']) {
        this.currentObject['$text'] = text.trim();
      } else {
        this.currentObject['$text'] += text.trim();
      }
    }
  }
}

class XMLReader {
  private buffer: string = '';

  onStartElement: (name: string, attributes: any) => void = () => {};
  onEndElement: (name: string) => void = () => {};
  onText: (text: string) => void = () => {};

  parse(xmlData: string) {
    this.buffer = xmlData.replace(/\r\n/g, '').replace(/\n/g, '');

    const regex = /<\/?([^\s>]+)(\s*[^>]*?)?>|([^<>]+)/g;
    let match;

    while ((match = regex.exec(this.buffer))) {
      const [line, startTag, attributes, text] = match;

      if (text) {
        this.onText(text);
      } else if (line.startsWith('</')) {
        this.onEndElement(startTag.slice(1));
      } else {
        const attributeObj: any = {};

        if (attributes) {
          const attrRegex = /\s*([^=\s]+)=(?:"([^"]+)"|'([^']+)')/g;
          let attrMatch;
          while ((attrMatch = attrRegex.exec(attributes))) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const [_, key, value1, value2] = attrMatch;
            const cleanValue = value1 || value2;
            attributeObj[key] = cleanValue;
          }
        }

        this.onStartElement(startTag, attributeObj);
      }
    }
  }
}
