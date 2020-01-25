import Quill from "quill";

const Embed = Quill.import("blots/embed");

class MentionBlot extends Embed {
  static create(data) {
    const denotationChar = document.createElement("a");
    denotationChar.innerText = data.value;
    denotationChar.dataset["mention"] = `${data.id}`;
    return denotationChar;
  }

  static setDataValues(element, data) {
    const domNode = element;
    Object.keys(data).forEach(key => {
      domNode.dataset[key] = data[key];
    });
    return domNode;
  }

  static value(domNode) {
    return domNode.dataset;
  }
}

MentionBlot.blotName = "mention";
MentionBlot.tagName = "span";
MentionBlot.className = "mention";

Quill.register(MentionBlot);
