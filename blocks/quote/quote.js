import { fetchPlaceholders } from '../../scripts/aem.js';
const placeholders = await fetchPlaceholders();

export default function decorate(block) {
  const [quoteWrapper] = block.children;

  const blockquote = document.createElement('blockquote');
  blockquote.textContent = quoteWrapper.textContent.trim();
  quoteWrapper.replaceChildren(blockquote);

  const { quoteText } = placeholders;
  blockquote.append(quoteText);
  quoteWrapper.replaceChildren(quoteText);

}

