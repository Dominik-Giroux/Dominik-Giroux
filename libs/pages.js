const pages = {
  home: {
    url: {
      en: "/",
      fr: "/"
    },
    title: {
      en: "Digital Marketing Expert - Dominik Giroux",
      fr: "Expert Marketing Digital - Dominik Giroux"
    },
    description: {
      en: "",
      fr: ""
    }
  },
  about: {
    url: {
      en: "about",
      fr: "about"
    },
    title: {
      en: "About",
      fr: "À propos"
    },
    description: {
      en: "",
      fr: ""
    }
  },
  caseStudies: {
    url: {
      en: "case-studies",
      fr: "case-studies"
    },
    title: {
      en: "Case studies",
      fr: "Études de cas"
    },
    description: {
      en: "",
      fr: ""
    }
  },
  services: {
    url: {
      en: "services",
      fr: "services"
    },
    title: {
      en: "Services",
      fr: "Services"
    },
    description: {
      en: "",
      fr: ""
    }
  },
  blog: {
    url: {
      en: "blog",
      fr: "blogue"
    },
    title: {
      en: "Blog",
      fr: "Blogue"
    },
    description: {
      en: "",
      fr: ""
    }
  },
  contact: {
    url: {
      en: "contact",
      fr: "contact"
    },
    title: {
      en: "Contact",
      fr: "Contact"
    },
    description: {
      en: "Tell me about your project and it'll be my pleasure to evaluate it for you",
      fr: "Parlez-moi de votre projet et il me fera grand plaisir de l'évaluer"
    }
  },
  privacy: {
    url: {
      en: "privacy-policy",
      fr: "politique-de-confidentialite"
    },
    title: {
      en: "Privacy policy",
      fr: "Politique de confidentialité"
    },
    description: {
      en: "",
      fr: ""
    }
  }
};

export const getPage = async id => {
  return pages[id];
};
