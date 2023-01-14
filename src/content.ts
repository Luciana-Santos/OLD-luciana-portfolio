const content = {
  sobreLinks: [
    {
      id: Math.round(Math.random() * 99999),
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/luciana-dss/',
    },
    {
      id: Math.round(Math.random() * 99999),
      name: 'GitHub',
      url: 'https://github.com/Luciana-Santos',
    },
  ],
  sobreTechs: [
    {
      id: Math.round(Math.random() * 99999),
      name: 'HTML',
      icon: 'https://raw.githubusercontent.com/Luciana-Santos/Lucianadss-portfolio/main/src/assets/img/html-icon.png',
    },
    {
      id: Math.round(Math.random() * 99999),
      name: 'SASS',
      icon: 'https://raw.githubusercontent.com/Luciana-Santos/Lucianadss-portfolio/main/src/assets/img/sass-icon.png',
    },
    {
      id: Math.round(Math.random() * 99999),
      name: 'JavaScript',
      icon: 'https://i.postimg.cc/D0sMZxQD/Group-6.png',
    },
    {
      id: Math.round(Math.random() * 99999),
      name: 'TypeScript',
      icon: 'https://i.postimg.cc/Y2mVbSc3/Group-32.png',
    },
    {
      id: Math.round(Math.random() * 99999),
      name: 'React',
      icon: 'https://raw.githubusercontent.com/Luciana-Santos/Lucianadss-portfolio/main/src/assets/img/react-icon.png',
    },
  ],
  projects: [
    {
      id: Math.round(Math.random() * 99999),
      title: 'Sistema Solar',
      description: 'Projeto de conclusão do curso de JavaScript da Origamid.',
      techs: [
        {
          label: 'HTML',
          icon: './assets/img/html-icon.png',
        },
        {
          label: 'SASS',
          icon: './assets/img/sass-icon.png',
        },
        {
          label: 'JavaScript',
          icon: './assets/img/javascript-icon.png',
        },
      ],
      links: {
        live: 'https://sistema-solar-luciana.netlify.app/',
        code: 'https://github.com/Luciana-Santos/sistema_solar',
      },
      imagem:
        'https://github.com/Luciana-Santos/Lucianadss-portfolio/blob/main/src/assets/img/sistema_solar-preview.jpg?raw=true',
    },
    {
      id: Math.round(Math.random() * 99999),
      title: 'Luciana - Portfólio',
      description: 'Portfólio criado para exibir projetos já concluídos.',
      techs: [
        {
          label: 'HTML',
          icon: './assets/img/html-icon.png',
        },
        {
          label: 'SASS',
          icon: './assets/img/sass-icon.png',
        },
        {
          label: 'JavaScript',
          icon: './assets/img/javascript-icon.png',
        },
      ],
      links: {
        live: 'https://lucianadss.netlify.app/',
        code: 'https://github.com/Luciana-Santos/Lucianadss-portfolio',
      },
      imagem:
        'https://github.com/Luciana-Santos/Lucianadss-portfolio/blob/main/src/assets/img/portfolio-preview.jpg?raw=true',
    },
    {
      id: Math.round(Math.random() * 99999),
      title: 'Lista de Leitura',
      description: 'App para cadastro de livros e progresso de leitura.',
      techs: [
        {
          label: 'HTML',
          icon: './assets/img/html-icon.png',
        },
        {
          label: 'SASS',
          icon: './assets/img/sass-icon.png',
        },
        {
          label: 'JavaScript',
          icon: './assets/img/javascript-icon.png',
        },
      ],
      links: {
        live: 'https://lista-de-leitura.netlify.app/',
        code: 'https://github.com/Luciana-Santos/lista-de-leitura',
      },
      imagem:
        'https://github.com/Luciana-Santos/Lucianadss-portfolio/blob/main/src/assets/img/booklist-preview.png?raw=true',
    },
  ],
};

export default content;
