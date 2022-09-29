const hero = {
  title: {
    en: "Digital Marketing Expert",
    fr: "Expert Marketing Numérique"
  },
  description: {
    en: "Driven by purpose, making the web a better place one website at a time with innovative web design and digital marketing strategies.",
    fr: "Poussé par la passion, j'innove le web un site à la fois avec ma créativité et des stratégies de marketing numérique novatrice."
  },
  cta: {
    text: {
      en: "Tell me about your project",
      fr: "Parlez-moi de votre projet"
    },
    url: {
      en: "contact",
      fr: "contact"
    }
  }
};

const heading = {
  subheading: {
    en: "With more than 10 years of experience in web development and digital marketing",
    fr: "Avec plus de 10 ans d'expérience dans le développement web et marketing numérique"
  },
  heading: {
    en: "Let's work together to unleash your business true potential",
    fr: "Travaillons ensemble pour libérer le plein potentiel de votre entreprise"
  },
  description: {
    en: "Together, Let's create tailored web solutions to reach unprecedented goals ✨",
    fr: "Ensemble nous pouvons créer des solutions web qui vous permettront d'atteindre des résultats spectaculaires ✨"
  }
};

const iconsList = {
  items: [
    {
      title: {
        en: "Consulting & training",
        fr: "Consultation & formation"
      },
      description: {
        en: "Consulting services and personalized web training to help you with the success of your project",
        fr: "Services-conseils et formations Web personnalisés pour vous aider avec la réussite de votre projet"
      },
      iconPath: `
        <path
          fill-rule="evenodd"
          d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
          clip-rule="evenodd"
        />
        <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
        `
    },
    {
      title: {
        en: "Web design",
        fr: "Conception Web"
      },
      description: {
        en: "Turnkey service, accompanied from the first meeting until the success of your project, including the design and development of your web application",
        fr: "Service clé en main, accompagné de la première rencontre jusqu'au succès de votre projet, incluant le design et le développement de votre application web"
      },
      iconPath: `
        <path
          fill-rule="evenodd"
          d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
          clip-rule="evenodd"
        />
      `
    },
    {
      title: {
        en: "Technologies",
        fr: "Technologies"
      },
      description: {
        en: "Let's find the best possible solution for your project, weaving together the best technologies available on the market",
        fr: "Trouvons la meilleure solution possible pour votre projet, en associant les meilleures technologies disponibles sur le marché"
      },
      iconPath: `
        <path
          fill-rule="evenodd"
          d="M4.5 9.75a6 6 0 0111.573-2.226 3.75 3.75 0 014.133 4.303A4.5 4.5 0 0118 20.25H6.75a5.25 5.25 0 01-2.23-10.004 6.072 6.072 0 01-.02-.496z"
          clip-rule="evenodd"
        />
      `
    },
    {
      title: {
        en: "Technical SEO",
        fr: "SEO Technique"
      },
      description: {
        en: "A poorly optimized website is costing you thousands of dollars in lost customers. With a complete SEO audit, let's expose and correct the flaws in your site that prevent you from succeeding",
        fr: "Un site web mal optimisé vous coutes des milliers de dollars en clients perdu. Avec un audit SEO complet, exposons et corrigons les failles de votre site qui vous empêchent votre réussite"
      },
      iconPath: `
        <path
          fill-rule="evenodd"
          d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
          clip-rule="evenodd"
        />
        `
    },
    {
      title: {
        en: "Keywords research",
        fr: "Recherche de mots-clés"
      },
      description: {
        en: "Do you have the blank page? A comprehensive keyword research report designed just for you with lots of content ideas to reach potential new customers",
        fr: "Vous avez la page blanche? Un rapport complet de recherche de mots-clés conçu spécialement pour vous avec de nombreuses idées de contenu pour atteindre de nouveaux clients potentiels"
      },
      iconPath: `
        <path
          fill-rule="evenodd"
          d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
          clip-rule="evenodd"
        />
        <path
          fill-rule="evenodd"
          d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z"
          clip-rule="evenodd"
        />
      `
    },
    {
      title: {
        en: "Competitor analysis",
        fr: "Analyse de compétition"
      },
      description: {
        en: "Let's analyze your competitors and find out what they are doing right and what they are doing wrong. We will then use this information to create a strategy to beat them at their own games",
        fr: "Analysons vos concurrents et découvrons ce qu'ils font bien et ce qu'ils font mal. Nous utiliserons ensuite ces informations pour créer une stratégie pour les battre à leurs propres jeux"
      },
      iconPath: `
        <path
          fill-rule="evenodd"
          d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
          clip-rule="evenodd"
        />
      `
    }
  ]
};

const servicesList = {
  title: {
    en: "Available services",
    fr: "Services disponibles"
  },
  services: [
    {
      url: {
        en: "services",
        fr: "services"
      },
      title: {
        en: "Digital Marketing",
        fr: "Marketing Digital"
      },
      description: {
        en: "I build web applications using the latest technologies.",
        fr: "Je construit des applications web en utilisant les dernières technologies."
      },
      icon: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd" />
          </svg>
        `
    },
    {
      url: {
        en: "services",
        fr: "services"
      },
      title: {
        en: "Web Development",
        fr: "Développement Web"
      },
      description: {
        en: "I build web applications using the latest technologies.",
        fr: "Je construit des applications web en utilisant les dernières technologies."
      },
      icon: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd" />
          </svg>
        `
    },
    {
      url: {
        en: "services",
        fr: "services"
      },
      title: {
        en: "Expert Shopify",
        fr: "Expert Shopify"
      },
      description: {
        en: "I build web applications using the latest technologies.",
        fr: "Je construit des applications web en utilisant les dernières technologies."
      },
      icon: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" />
          </svg>
        `
    }
  ]
};

const contactHeading = {
  subheading: {
    en: "With more than 10 years of experience in web development and digital marketing",
    fr: "Avec plus de 10 ans d'expérience dans le développement web et marketing numérique"
  },
  heading: {
    en: "Let's work together to unleash your business true potential",
    fr: "Travaillons ensemble pour libérer le plein potentiel de votre entreprise"
  },
  description: {
    en: "Together, Let's create tailored web solutions to reach unprecedented goals ✨",
    fr: "Ensemble nous pouvons créer des solutions web qui vous permettront d'atteindre des résultats spectaculaires ✨"
  }
};

const sections = {
  hero,
  heading,
  iconsList,
  servicesList,
  contactHeading
};

export const getSection = async id => {
  return sections[id];
};
