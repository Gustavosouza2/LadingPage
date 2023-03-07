// import icons
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";

// import images
import AboutImg from "../src/assets/img/about.png";
import Feature1Img from "../src/assets/img/features/feature1.png";
import Feature2Img from "../src/assets/img/features/feature2.png";
import Feature3Img from "../src/assets/img/features/feature3.png";
import Feature4Img from "../src/assets/img/features/feature4.png";
import Avatar1Img from "../src/assets/img/testimonials/avatar1.png";
import Avatar2Img from "../src/assets/img/testimonials/avatar2.png";
import Avatar3Img from "../src/assets/img/testimonials/avatar3.png";
import LogoV2 from "../src/assets/img/logo-v2.png";
import HeroImage from "../src/assets/img/hero-img.png";
import Feature1BgImg from "../src/assets/img/features/feature1_bg.png";
import Feature2BgImg from "../src/assets/img/features/feature2_bg.png";
import Feature3BgImg from "../src/assets/img/features/feature3_bg.png";
import Feature4BgImg from "../src/assets/img/features/feature4_bg.png";

export const navigationData = [
  {
    name: "Deliver",
    href: "#",
  },
  {
    name: "Sobre",
    href: "#",
  },
  {
    name: "Características",
    href: "#",
  },
  {
    name: "Inscrever-se",
    href: "#",
  },
];

export const heroData = {
  title: `Encomendar produtos mais rápido e mais fácil`,
  subtitle:
    "Peça suas comidas favoritas a qualquer momento e nós as entregaremos onde você estiver.",
  btnText: "Iniciar",
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title: "Saiba um pouco mais sobre nós",
  subtitle:
    " Somos uma empresa vocacionada para a distribuição de produtos por entrega em sua casa ou no local onde se encontre, com a melhor qualidade de entrega.",
};

export const featuresData = {
  title: "Alguns Serviços que Oferecemos",
  subtitle:
    "Com a nossa app poderá visualizar o percurso da sua encomenda, desde a nossa sede local até ao local onde se encontra. Procure o aplicativo agora!",
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: "Pagamento efetuado",
      description: "Pague com cartão Visa ou PayPal e sem muita enrolação",
      linkText: "Ler Mais",
      delay: "400",
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: "Encontre seu produto",
      description: "Oferecemos venda de produtos através da Internet..",
      linkText: "Ler Mais",
      delay: "700",
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: "Imprimir",
      description:
        "O serviço de impressão oferece conveniência se algum dia você precisar imprimir dados, basta editar tudo e imprimir.",
      linkText: "Ler Mais",
      delay: "1000",
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: "Produto Recebido",
      description:
        "Em nosso aplicativo você pode ver o tempo de atraso do seu pedido...",
      linkText: "Ler Mais",
      delay: "1300",
    },
  ],
};

export const testimonialsData = [
  {
    image: Avatar1Img,
    name: "Serena",
    web: "rena.com",
    message:
      "O tempo de entrega foi bastante satisfatório, as informações fornecidas no site eram precisas e o pedido chegou dentro do prazo estipulado. Os preços foram muito baixos e não havia taxas ocultas, o que é bastante importante para mim..",
    delay: "300",
  },
  {
    image: Avatar2Img,
    name: "Natalia",
    web: "nataliya.com",
    message:
      "Fiquei satisfeita com as opções de pagamento disponíveis, pois pude escolher a que melhor se adequava às minhas necessidades. Além disso, tive uma ótima experiência com o atendimento ao cliente, que foi bastante solícito e prestativo.",
    delay: "600",
  },
  {
    image: Avatar3Img,
    name: "Lucas",
    web: "lucas.com",
    message:
      "No geral, minha experiência com este site de entregas foi muito positiva e eu o recomendaria a outras pessoas.",
    delay: "900",
  },
];

export const ctaData = {
  title: "Entre em Contato Conosco ",
  subtitle: "Obtenha 1 semana grátis limitada, experimente nossos recursos!",
  btnText1: "Ler Mais",
  btnText2: "Solicitar Demonstração",
};

export const footerData = {
  logo: LogoV2,
  address: "Product São Paulo, Avenida Paulista BMW 99388",
  email: "info@ladingpage.project",
  phone: "1-232-7788 (11)",
  list1: [
    {
      name: "Perfil",
      href: "#",
    },
    {
      name: "Características",
      href: "#",
    },
    {
      name: "Carreiras",
      href: "#",
    },
    {
      name: "DW News",
      href: "#",
    },
  ],
  list2: [
    {
      name: "Suporte",
      href: "#",
    },
    {
      name: "Inscreva-se",
      href: "#",
    },
    {
      name: "Guia",
      href: "#",
    },
    {
      name: "Relatórios",
      href: "#",
    },
    {
      name: "Q & A",
      href: "#",
    },
  ],
  socialList: [
    {
      icon: <FaLinkedinIn />,
      href: "#",
    },
    {
      icon: <FaInstagram />,
      href: "#",
    },
    {
      icon: <FaGithub />,
      href: "#",
    },
  ],
};

export const copyrightData = {
  text: "© Gustavo Souza, 2023. All rights reserved. Company Registration Number: 09833888.",
  icon: <BsChatDotsFill />,
};
