export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '62d8fd8349eccb7e40b6251b',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-8ojrn1oo',
                  apiId: '89b2d2bf-eefe-4fd9-ad9f-ba694d7c876f'
                },
                {
                  buildHookId: '62d8fd8449eccb7ecbb62269',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-z9pvpzix',
                  apiId: '39cf70a7-2414-453a-a3df-46970920de12'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ruairimcn/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-z9pvpzix.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
