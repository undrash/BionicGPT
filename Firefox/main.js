function boldFirstHalfOfWords(text) {
  const words = text.split(' ');

  const newWords = words.map((word) => {
    const halfIndex = Math.floor(word.length / 2);
    const boldLength = word.length % 2 === 0 ? halfIndex : halfIndex + 1;

    return `<b style="font-weight:900">${word.slice(
      0,
      boldLength
    )}</b>${word.slice(boldLength)}`;
  });

  return newWords.join(' ');
}

function processTextNode(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    const wrapper = document.createElement('span');
    wrapper.innerHTML = boldFirstHalfOfWords(node.textContent);
    node.parentNode.replaceChild(wrapper, node);
  } else {
    for (let child of node.childNodes) {
      processTextNode(child);
    }
  }
}

function init() {
  const body = document.body;
  processTextNode(body);
}

setTimeout(() => {
  init();
}, 250);
