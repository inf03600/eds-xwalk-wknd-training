import { fetchPlaceholders } from '/scripts/placeholders.js';


export default function decorate(block) {
  const [quoteWrapper] = block.children;

  const blockquote = document.createElement('blockquote');
  blockquote.textContent = quoteWrapper.textContent.trim();
  quoteWrapper.replaceChildren(blockquote);
}

export default async function decorate(block) {
	const placeholders = await fetchPlaceholders();
  blockquote.append(placeholders);

}
