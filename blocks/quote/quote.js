import { fetchPlaceholders } from '/scripts/placeholders.js';


export default async function decorate(block) {
  const [quoteWrapper] = block.children;

  const blockquote = document.createElement('blockquote');
  blockquote.textContent = quoteWrapper.textContent.trim();
  quoteWrapper.replaceChildren(blockquote);

  const placeholders = await fetchPlaceholders();
  const myQuote = placeholders.quoteText;
  const blockquotetext = block.querySelector('blockquote');
  if (blockquote) {
    blockquote.textContent = myQuote;
  }
}
