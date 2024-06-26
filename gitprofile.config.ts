// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'josuewl', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'AGENDAHUB⚙️Ready to Deploy',
          description:
            'A tecnologia não é apenas sobre o que podemos fazer, mas sobre o que podemos imaginar.',
          imageUrl:
            'https://user-content.wepik.com/projects/746834978/preview-page0.jpg?GoogleAccessId=fc-wepik-bucket-sa%40fc-wepik-pro-rev1.iam.gserviceaccount.com&Expires=1793254624&Signature=Jb5RWXZ42hD3OG%2BCAwlmIX5SDhrBn4k%2B83jLGEf5f5KKoOS9Yr5E1nNEfuD3lAen7085rCJLmlKRqhhCSXvSlnOvRV%2FvS4%2Bob8hvi3yvvjFylcC5MrzuXl8hsa0eUI6YZ4LPgvTyBuMQYSZxiGbN12GHnG%2FyzxkvDUP0L%2FQZFe8aWO2PazFw7cYpHbyxqdmz2BENW6LrQSb6mTjBCND0xYXsBtCjOgh5bKZelPBAvDRjE4mZKBXczIxMPocjw2J71DTBeeZbtYNhDlrx0SybIduYeFhX85I5TNC2Oiyf%2BlSqi7x%2Bx5eZCnn1Ha%2FXEa1sCGerq9IhnsNAH4TqECESXg%3D%3D',
          link: 'https://github.com/josuewl',
        },
        {
          title: 'Condo⚙️Ready to Deploy',
          description:
            'o impossível torna-se possível, o inimaginável torna-se realidade.',
          imageUrl:
            'https://user-content.wepik.com/projects/746829559/preview-page0.jpg?GoogleAccessId=fc-wepik-bucket-sa%40fc-wepik-pro-rev1.iam.gserviceaccount.com&Expires=1793254341&Signature=kBKo%2FS3On3BUeqAJbVbVa1ca%2FRWJidggvSzcZyfYRcjCWMfJzsyrZ%2FJUzb9%2Fhj1oZLWeLB5bumBjOXLKN%2Fob0q8qaWH%2FGz0MAfL%2FTsezQGwiH9Gpt7ffpuihfDIgPT2gGozEUuNVCNzKT4OCmJp72xtR0rvnBcluH5JHFMBBQFGrzLbSUE%2BExtyQtOkUcbAKrDWUqeWo14T28NjKX%2F6fERfanldrU%2FPvr%2B7hq8zQRcJVFV1SV1P8Ag1HbFpfDd2acfujwI7H%2B%2BLm%2BCBmcPOEGNawhalq2TwsiYc4%2FrDmnXSwGT48oXTAmXzcPsqRXeHTaajVEpRezLMJ6twXipIMIw%3D%3D',
          link: 'https://github.com/josuewl',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio de Josué Almeida',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'josue-batista-almeida',
    instagram: 'josuewl',
    phone: '31 991733576',
    email: 'josuealmeida.developer@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C#',
    '.Net',
    'JavaScript',
    'React.js',
    'Node.js',
    'ASPNET MVC',
    'Java',
    'MySQL',
    'Git',
    'CSS',
  ],
  /*
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],*/
  certifications: [
    {
      name: 'Desenvolvedor de Software',
      body: 'Código da credencial: CCC76A6BA135DBC524A8616B926EFCA7',
      year: 'Janeiro 2024',
      link: 'https://web.sistemas.pucminas.br/GAD/DOC/Verificador',
    },
    {
      name: 'Desenvolvimento de uma Aplicação Interativa',
      body: 'Destaque Acadêmico',
      year: 'Janeiro 2024',
      link: 'https://drive.google.com/drive/folders/1Mor5bDM0JwCk6rdy2sUUMkpD2ruFxpKR?usp=drive_link',
    },
    {
      name: 'Cultura Empresarial, Ciência dos Dados e Engenharia de Software',
      body: 'Código da credencial: c2e2b2049ca508b18150f485863288786802',
      year: 'Setembro 2023',
      link: 'https://icei.pucminas.br/talks/verificar_certificado/',
    }
  ],
  educations: [
    {
      institution: 'Pontifíca Universidade Católica de Minas Gerais',
      degree: '3° Análise e Desenvolvimneto de Sistemas',
      from: '2023',
      to: '2025',
    },
  ],
  metas: [
    {
      institution: 'Pós Graduação',
      degree: 'Engenharia de Software',
      from: 'Inicio:',
      to: '2025',
    }
  ],
  /*
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],*/
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  /* Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
    */

  enablePWA: true,
};

export default CONFIG;
