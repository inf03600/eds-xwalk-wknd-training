import { fetchPlaceholders } from '../../scripts/aem.js';

export default async function decorate(block) {
  const [quoteWrapper] = block.children;

  const blockquote = document.createElement('blockquote');
  blockquote.textContent = quoteWrapper.textContent.trim();
  quoteWrapper.replaceChildren(blockquote);

  const placeholders = await fetchPlaceholders();
  const quoteContent = placeholders['quotetext'];
  if (quoteContent) {
    const quoteElement = document.createElement('blockquote');
    quoteElement.textContent = quoteContent;
    quoteWrapper.replaceChildren(quoteElement);
  }

}