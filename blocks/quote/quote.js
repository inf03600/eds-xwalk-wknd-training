import { fetchPlaceholders } from '../../scripts/aem.js';

export default async function decorate(block) {
  const [quoteWrapper] = block.children;

  const blockquote = document.createElement('blockquote');
  blockquote.textContent = quoteWrapper.textContent.trim();
  quoteWrapper.replaceChildren(blockquote);

  const placeholders = await fetchPlaceholders();
  const { quoteText } = placeholders;
  blockquote.append(quoteText);
  quoteWrapper.replaceChildren(quoteText);
  
    // console.log('quote loaded');
    // const placeholders = await fetchPlaceholders();
    // console.log('loaded placeholders',placeholders);
    // if(placeholders.quoteText) {
    //     //const suffix = document.createElement('div');
    //     //suffix.className='quoteText';
    //     quoteWrapper.textContent= placeholders.quoteText;
    //     block.appendChild(blockquote);
    // }
}