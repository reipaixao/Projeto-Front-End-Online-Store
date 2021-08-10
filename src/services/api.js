export async function getCategories() {
  const request = await fetch('https://api.mercadolibre.com/sites/MLB/categories', { header: { mode: 'no-cors' } });
  const json = await request.json();
  return json;
}

export async function getProductsFromCategoryAndQuery(query = '', categoryId = '') {
  const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`);
  const json = await request.json();
  return json;
}
