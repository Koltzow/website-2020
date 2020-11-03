export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5fa1e38f3081121de74b6695',
                  title: 'Sanity Studio',
                  name: 'website-2020-studio',
                  apiId: '25339a36-03ea-42d5-a2a5-cecb3576f342'
                },
                {
                  buildHookId: '5fa1e38f92aa8c252bf38143',
                  title: 'Portfolio Website',
                  name: 'website-2020-web',
                  apiId: '6eedded1-0462-408e-b3ef-3602066b73d1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Koltzow/website-2020',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://website-2020-web.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
