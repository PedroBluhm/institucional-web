export const site = {
  name: "Bluhmwerk Tecnologia",
  shortName: "Bluhmwerk",
  url: "https://www.bluhmwerk.com",
  description:
    "Software sob medida para operações que não podem parar. Suite Compartilha, integração sistêmica e controle real.",
  tagline: "Inteligência que rastreia, tecnologia que entrega.",
  manifesto: "Se o seu processo é único, sua tecnologia também deve ser.",
  contact: {
    email: "comercial@bluhmwerk.com",
    phone: "+55 11 92104-5407",
    phoneRaw: "+5511921045407",
    whatsappNumber: "5511921045407",
    whatsappPrefilledMessage:
      "Olá Bluhmwerk! Vim pelo site e quero conversar sobre um projeto.",
    address: "São Paulo — SP, Brasil",
  },
  founded: 2021,
  founder: "Pedro Bluhm",
} as const;

export const whatsappLink = (() => {
  const message = encodeURIComponent(site.contact.whatsappPrefilledMessage);
  return `https://wa.me/${site.contact.whatsappNumber}?text=${message}`;
})();
