export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f6903e9eaa1682228a2ea43',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-i7y1sy4t',
                  apiId: 'c6a8ad5a-89a8-4788-8064-471f8329204c'
                },
                {
                  buildHookId: '5f6903e93fc26523e6d16975',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-go5bm3ey',
                  apiId: '226ab86f-a746-4cc1-b93c-d8d17cc62e17'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/davidubanyi/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-go5bm3ey.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
