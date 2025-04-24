export const apiList = [
  {
    slug: 'quote',
    title: 'Random Quote',
    description: 'Returns a random quote for developers.',
    endpoint: '/api/quote',
    tags: ['fun', 'text', 'random'],
    buttonText: 'Get Quote',
  },
  {
    slug: 'github-repos',
    title: 'GitHub Starred Repos',
    description: 'Fetches starred repos from GitHub.',
    endpoint: '/api/github/repos',
    tags: ['github', 'projects'],
    buttonText: 'Fetch Repos',
  },
]
