export const getData = (topic) => {
  if (topic === 'All') {
    return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=eedbda38963643fea83c42c9fa310c40`)
  }
  return fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${topic}&apiKey=eedbda38963643fea83c42c9fa310c40`) 
}