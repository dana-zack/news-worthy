describe('User flows for application', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=eedbda38963643fea83c42c9fa310c40', {
      statusCode: 200,
      fixture: "mock-all"
    });
    cy.visit('http://localhost:3000/');
  });

  it('loads the home page and renders expected elements', () => {
    cy.get('h1').contains('NewsWorthy')
    cy.get('.toggle-btn').should('have.length', 8)
    cy.get('.toggle-btn').contains('All').should('have.class', 'active')
    cy.get('.toggle-btn').contains('Business').should('not.have.class', 'active')
    cy.get('.toggle-btn').contains('Entertainment').should('not.have.class', 'active')
    cy.get('.toggle-btn').contains('General').should('not.have.class', 'active')
    cy.get('.toggle-btn').contains('Health').should('not.have.class', 'active')
    cy.get('.toggle-btn').contains('Science').should('not.have.class', 'active')
    cy.get('.toggle-btn').contains('Sports').should('not.have.class', 'active')
    cy.get('.toggle-btn').contains('Technology').should('not.have.class', 'active')
    cy.get('.card').should('have.length', 3)
    cy.get('.card').first().contains('MOCK 2024 NFL free-agency tracker: From Danielle Hunter to Jamal Adams, see where top 150 players land - The Athletic')
    cy.get('.card').first().find('img').should('have.attr', 'src', 'https://cdn.theathletic.com/app/uploads/2024/03/07191019/0308_NFL_Top150FA.png');
    cy.get('.card').first().contains('NFL free agency begins at noon Monday when the tampering window opens. Track the best available players (and where they land) right here.')
    cy.get('.card').first().contains('03-15-2024')
    cy.get('.card').last().contains('MOCK Photos: Bees swarm stadium at BNP Paribas Open, halting match - Desert Sun')
    cy.get('.card').last().find('img').should('have.attr', 'src', 'https://www.desertsun.com/gcdn/authoring/authoring-images/2024/03/14/PPAS/72979314007-20240314-bnp-paribas-open-thursday-004.jpg?crop=2997,1686,x0,y249&width=2997&height=1686&format=pjpg&auto=webp');
    cy.get('.card').last().contains('A BNP Paribas Open match between Carlos Alcaraz and Alexander Zverev was halted Thursday when a swarm of bees descended on the Indian Wells stadium.')
    cy.get('.card').last().contains('03-14-2024')
  })

  it(`allows user to click on an article, view that article's details, and return back to home page`, () => {
    cy.get('.card').first().click()
    cy.get('h2').contains('MOCK 2024 NFL free-agency tracker: From Danielle Hunter to Jamal Adams, see where top 150 players land - The Athletic')
    cy.get('img').should('have.attr', 'src', 'https://cdn.theathletic.com/app/uploads/2024/03/07191019/0308_NFL_Top150FA.png')
    cy.get('.details-source').contains('Source: The Athletic')
    cy.get('.details-date').contains('03-15-2024')
    cy.get('.details-content').contains('NFL free agency is in full swing, with the legal tampering window opening Monday and the new league year beginning Wednesday at 4 p.m. ET. These are my updated rankings and scouting reports of the t… [+97690 chars]')
    cy.get('.back-btn').contains('Back').click()
    cy.get('h1').contains('NewsWorthy')
    cy.get('.toggle-btn').should('have.length', 8)
    cy.get('.toggle-btn').contains('All').should('have.class', 'active')
    cy.get('.toggle-btn').contains('Business').should('not.have.class', 'active')
    cy.get('.toggle-btn').contains('Entertainment').should('not.have.class', 'active')
    cy.get('.toggle-btn').contains('General').should('not.have.class', 'active')
    cy.get('.toggle-btn').contains('Health').should('not.have.class', 'active')
    cy.get('.toggle-btn').contains('Science').should('not.have.class', 'active')
    cy.get('.toggle-btn').contains('Sports').should('not.have.class', 'active')
    cy.get('.toggle-btn').contains('Technology').should('not.have.class', 'active')
    cy.get('.card').should('have.length', 3)
    cy.get('.card').first().contains('MOCK 2024 NFL free-agency tracker: From Danielle Hunter to Jamal Adams, see where top 150 players land - The Athletic')
    cy.get('.card').first().find('img').should('have.attr', 'src', 'https://cdn.theathletic.com/app/uploads/2024/03/07191019/0308_NFL_Top150FA.png');
    cy.get('.card').first().contains('NFL free agency begins at noon Monday when the tampering window opens. Track the best available players (and where they land) right here.')
    cy.get('.card').first().contains('03-15-2024')
    cy.get('.card').last().contains('MOCK Photos: Bees swarm stadium at BNP Paribas Open, halting match - Desert Sun')
    cy.get('.card').last().find('img').should('have.attr', 'src', 'https://www.desertsun.com/gcdn/authoring/authoring-images/2024/03/14/PPAS/72979314007-20240314-bnp-paribas-open-thursday-004.jpg?crop=2997,1686,x0,y249&width=2997&height=1686&format=pjpg&auto=webp');
    cy.get('.card').last().contains('A BNP Paribas Open match between Carlos Alcaraz and Alexander Zverev was halted Thursday when a swarm of bees descended on the Indian Wells stadium.')
    cy.get('.card').last().contains('03-14-2024')
  })

  it('filters by business and renders expected elements', () => {
    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines?country=us&category=Business&apiKey=eedbda38963643fea83c42c9fa310c40', {
      statusCode: 200,
      fixture: "mock-business"
    }).as('stubBusiness');
    cy.get('.toggle-btn').contains('Business').click()
    cy.wait('@stubBusiness')
    cy.get('.toggle-btn').contains('All').should('not.have.class', 'active')
    cy.get('.toggle-btn').contains('Business').should('have.class', 'active')
    cy.get('.toggle-btn').contains('Entertainment').should('not.have.class', 'active')
    cy.get('.toggle-btn').contains('General').should('not.have.class', 'active')
    cy.get('.toggle-btn').contains('Health').should('not.have.class', 'active')
    cy.get('.toggle-btn').contains('Science').should('not.have.class', 'active')
    cy.get('.toggle-btn').contains('Sports').should('not.have.class', 'active')
    cy.get('.toggle-btn').contains('Technology').should('not.have.class', 'active')
    cy.get('.card').should('have.length', 3)
    cy.get('.card').first().contains('MOCK Social media giant Meta under investigation for alleged drug sales on its platforms: WSJ - Fox Business')
    cy.get('.card').first().find('img').should('have.attr', 'src', 'https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/08/0/0/GettyImages-1579872617-copy.jpg?ve=1&tl=1');
    cy.get('.card').first().contains('Tech giant Meta, parent company of social media apps Facebook and Instagram, is being probed by federal authorities related to the sale of illicit substances via its platforms.')
    cy.get('.card').first().contains('03-16-2024')
    cy.get('.card').last().contains('MOCK Lottery winner claims colossal $1.765B Powerball ticket from October - Fox Business')
    cy.get('.card').last().find('img').should('have.attr', 'src', 'https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2024/03/0/0/Powerball.jpg?ve=1&tl=1');
    cy.get('.card').last().contains(`A person representing a group of lottery players has come forward to claim October's massive $1.765 billion Powerball jackpot win`)
    cy.get('.card').last().contains('03-16-2024')
  })

  it(`notifies user if API call fails`, () => {
    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=eedbda38963643fea83c42c9fa310c40', {
      statusCode: 500
    });
    cy.get('.error-msg').contains('Loading...');
  })

  it(`notifies user if url is non-existent and allows user to return home`, () => {
    cy.visit('http://localhost:3000/potato')
    cy.get('.not-found-msg').contains('Page not found!')
    cy.get('.return-btn').contains('Return to Home').click()
    cy.get('h1').contains('NewsWorthy')
    cy.get('.toggle-btn').should('have.length', 8)
    cy.get('.toggle-btn').contains('All').should('have.class', 'active')
    cy.get('.toggle-btn').contains('Business').should('not.have.class', 'active')
    cy.get('.toggle-btn').contains('Entertainment').should('not.have.class', 'active')
    cy.get('.toggle-btn').contains('General').should('not.have.class', 'active')
    cy.get('.toggle-btn').contains('Health').should('not.have.class', 'active')
    cy.get('.toggle-btn').contains('Science').should('not.have.class', 'active')
    cy.get('.toggle-btn').contains('Sports').should('not.have.class', 'active')
    cy.get('.toggle-btn').contains('Technology').should('not.have.class', 'active')
    cy.get('.card').should('have.length', 3)
    cy.get('.card').first().contains('MOCK 2024 NFL free-agency tracker: From Danielle Hunter to Jamal Adams, see where top 150 players land - The Athletic')
    cy.get('.card').first().find('img').should('have.attr', 'src', 'https://cdn.theathletic.com/app/uploads/2024/03/07191019/0308_NFL_Top150FA.png');
    cy.get('.card').first().contains('NFL free agency begins at noon Monday when the tampering window opens. Track the best available players (and where they land) right here.')
    cy.get('.card').first().contains('03-15-2024')
    cy.get('.card').last().contains('MOCK Photos: Bees swarm stadium at BNP Paribas Open, halting match - Desert Sun')
    cy.get('.card').last().find('img').should('have.attr', 'src', 'https://www.desertsun.com/gcdn/authoring/authoring-images/2024/03/14/PPAS/72979314007-20240314-bnp-paribas-open-thursday-004.jpg?crop=2997,1686,x0,y249&width=2997&height=1686&format=pjpg&auto=webp');
    cy.get('.card').last().contains('A BNP Paribas Open match between Carlos Alcaraz and Alexander Zverev was halted Thursday when a swarm of bees descended on the Indian Wells stadium.')
    cy.get('.card').last().contains('03-14-2024')
  })
})