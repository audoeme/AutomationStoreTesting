import { test } from '@playwright/test';
import { LandingPage } from '../src/pages/LandingPage';
import { SearchResultsPage } from '../src/pages/SearchResultsPage';
import { validSearches } from '../src/data/searchData.json'

test('Buscar produtos pelo campo de busca e validar resultados', async ({ page }) => {
  const home = new LandingPage(page);
  const resultsPage = new SearchResultsPage(page);

  await home.open();

  for (const term of validSearches) {
    await home.searchFor(term);

    await resultsPage.validateSearchPage();
    await resultsPage.validateProductsFound();
  
  };

})