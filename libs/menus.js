export const getMenu = async id => {
  if (id == "main") {
    return {
      links: [
        {
          name: {
            en: "Home",
            fr: "Accueil"
          },
          url: "/"
        },
        {
          name: {
            en: "Blog",
            fr: "Blog"
          },
          url: "/blog"
        },
        {
          name: {
            en: "Services",
            fr: "Services"
          },
          url: "/services"
        },
        {
          name: {
            en: "Case studies",
            fr: "Études de cas"
          },
          url: "/case-studies"
        },
        {
          name: {
            en: "Contact",
            fr: "Contact"
          },
          url: "/contact"
        }
      ]
    };
  }
};
