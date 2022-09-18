export const getMenu = async id => {
  if (id == "main") {
    return {
      links: [
        {
          name: {
            en: "Home",
            fr: "Accueil"
          },
          url: {
            en: "",
            fr: ""
          }
        },
        {
          name: {
            en: "About",
            fr: "À propos"
          },
          url: {
            en: "about",
            fr: "a-propos"
          }
        },
        {
          name: {
            en: "Services",
            fr: "Services"
          },
          url: {
            en: "services",
            fr: "services"
          }
        },
        {
          name: {
            en: "Case studies",
            fr: "Études de cas"
          },
          url: {
            en: "case-studies",
            fr: "etudes-de-cas"
          }
        },
        {
          name: {
            en: "Contact",
            fr: "Contact"
          },
          url: {
            en: "contact",
            fr: "contact"
          }
        }
      ]
    };
  }
};
