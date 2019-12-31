import {_api_key, article_url, lang} from './restconfig';
export async function getArticles() {
  try {
    let article = await fetch(`${article_url}?language=${lang}`, {
      headers: {
        'X-API-KEY': _api_key,
      },
    });
    let result = await article.json();
    article = null;
    console.log(result.articles);
    console.log(result.article);

    return result.articles;
  } catch (error) {
    throw error;
  }
}
