const hero = {
  title: {
    en: "Digital Marketing Expert",
    fr: "Expert Marketing Numérique"
  },
  description: {
    en: "I am a developer with a passion for creating exceptional websites and digital marketing strategies. Together, we can elevate your online presence to an unprecedented level.",
    fr: "Je suis un développeur passionné par la création de sites web exceptionels et de stratégies de marketing numérique. Ensemble, nous pouvons rehausser votre présence en ligne à un niveau sans précédent."
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

const sections = {
  hero,
  servicesList
};

export const getSection = async id => {
  return sections[id];
};
