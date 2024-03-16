export function getData() {
  return fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=eedbda38963643fea83c42c9fa310c40')
    .then(response => response.json())
}