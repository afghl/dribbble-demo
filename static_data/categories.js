export const names = ['sort', 'list', 'timeframe']

export const list = {
  sort: [
    { name: 'Popular', key: 'all'},
    { name: 'Recent', key: 'recent'},
    { name: 'Most Viewed', key: 'views'},
    { name: 'Most Commented', key: 'comments'}
  ],
  list: [
    { name: 'Shots', key: 'all'},
    { name: 'Debuts', key: 'debuts'},
    { name: 'Team Shots', key: 'teams'},
    { name: 'Playoffs', key: 'playoffs'},
    { name: 'Rebounds', key: 'rebounds'},
    { name: 'Animated GIFs', key: 'animated'},
    { name: 'Shots with Attachments', key: 'attachments'}
  ],
  timeframe: [
    { name: 'Now', key: 'all'},
    { name: 'This Past Week', key: 'week'},
    { name: 'This Past Month', key: 'month'},
    { name: 'This Past Year', key: 'year'},
    { name: 'All Time', key: 'ever'}
  ]
}
