import { Users, Shield, ShieldCheck, HeartPulse, Flame, Briefcase, Car, Plane, Scale, FileText, BadgeCent, Gavel } from 'lucide-react';

export const cabinetServices = [
  {
    id: "rh",
    title: "Ressources Humaines & Conformité",
    icon: Users,
    short: "Sécurisation de la conformité sociale et gestion optimisée de votre personnel.",
    details: "Mise en conformité sociale (CNPS, contrats de travail), immatriculation employeur et employés, audit RH et diagnostic social, rédaction et sécurisation des contrats, gestion disciplinaire et organisation du personnel."
  },
  {
    id: "recouvrement",
    title: "Recouvrement & Créances",
    icon: BadgeCent,
    short: "Optimisation de votre trésorerie par des stratégies de recouvrement efficaces.",
    details: "Stratégies de recouvrement amiable et contentieux. Relance, négociation avec les débiteurs, suivi rigoureux des impayés, optimisation du cash-flow et sécurisation de vos engagements clients."
  },
  {
    id: "contentieux",
    title: "Juridique & Contentieux",
    icon: Gavel,
    short: "Résolution stratégique de vos litiges commerciaux, civils et sociaux.",
    details: "Gestion des litiges commerciaux et sociaux, rédaction de mises en demeure, constitution et suivi des dossiers juridiques, négociation et résolution amiable des conflits pour protéger au mieux vos intérêts industriels et commerciaux."
  }
];

export const enoraServices = [
  {
    id: "sinistres",
    title: "Gestion des Sinistres",
    icon: FileText,
    short: "Accompagnement complet dans la déclaration et le suivi de vos sinistres.",
    details: "Notre équipe prend en charge la gestion intégrale de vos sinistres (constitution du dossier, analyse technique, négociation avec les assureurs, suivi expert) afin de garantir une indemnisation juste et rapide, tout en vous épargnant les lourdeurs administratives."
  },
  {
    id: "prev",
    title: "Prévention des Risques",
    icon: Shield,
    short: "Anticipez et minimisez les dangers pouvant impacter votre activité.",
    details: "Nous menons des audits détaillés de vos infrastructures (logistique, transport, industrie) et processus pour identifier les vulnérabilités. ENORA vous propose ensuite des plans d'action sur mesure pour prévenir des accidents ou des pertes structurelles et financières."
  },
  {
    id: "sante",
    title: "Assurance Santé",
    icon: HeartPulse,
    short: "Des couvertures médicales adaptées à vous et à vos collaborateurs.",
    details: "Nous vous conseillons sur les meilleures offres d'assurance maladie au Cameroun et à l'international pour garantir l'accès aux meilleurs soins, pour votre famille ou pour structurer la politique santé de votre entreprise."
  },
  {
    id: "rc",
    title: "Responsabilité Civile",
    icon: Scale,
    short: "Protégez votre entreprise contre les dommages causés à des tiers.",
    details: "Une erreur, une omission ou un accident dans le cadre de votre activité ? L'assurance Responsabilité Civile Professionnelle couvre les conséquences pécuniaires des dommages corporels, matériels ou immatériels causés à des tiers."
  },
  {
    id: "incendie",
    title: "Assurance Incendie",
    icon: Flame,
    short: "Sécurisez votre patrimoine immobilier et matériel face au feu.",
    details: "Garantit vos biens immobiliers, vos stocks et matériels d'exploitation contre les dommages résultant d'un incendie, d'une explosion ou de la chute de la foudre, pour assurer la pérennité de votre entreprise."
  },
  {
    id: "voyage",
    title: "Assurance Voyage",
    icon: Plane,
    short: "Partez l'esprit tranquille, nous couvrons vos déplacements.",
    details: "Que ce soit pour des voyages d'affaires ou vos voyages personnels, nous vous couvrons contre les imprévus : urgences médicales à l'étranger, annulations, pertes de bagages et rapatriement."
  },
  {
    id: "auto",
    title: "Assurance Véhicules",
    icon: Car,
    short: "Protection complète pour vos flottes commerciales et privées.",
    details: "Des garanties tous risques à la responsabilité civile obligatoire, nous structurons la meilleure couverture possible pour optimiser les coûts et sécuriser la mobilité logistique de votre entreprise au Cameroun."
  },
  {
    id: "struct",
    title: "Structuration Couverture",
    icon: Briefcase,
    short: "Optimisation de vos contrats d'assurance (ratio coût/bénéfice).",
    details: "Audit approfondi de vos polices d'assurance existantes. Nous restructurons vos contrats pour éliminer les doublons, couvrir les trous de garantie et négocier de meilleures primes auprès de nos partenaires (locaux et internationaux)."
  },
  {
    id: "vie",
    title: "Assurance Vie",
    icon: ShieldCheck,
    short: "Préparez l'avenir et protégez vos proches financièrement.",
    details: "Nous vous aidons à constituer une épargne solide et à prévoir la transmission harmonieuse de votre patrimoine familial ou professionnel. Une garantie essentielle pour la sécurité de vos ayants droit."
  }
];

export const clients = [
  { name: "SCT Logistics", sector: "Transit & Logistique", logo: "/logos/clients/sct-logistics.png" },
  { name: "CAM Industries", sector: "Industrie", logo: "/logos/clients/cam-industries.png" },
  { name: "BATIPRO SA", sector: "BTP", logo: "/logos/clients/batipro.png" },
  { name: "AfriTrade Group", sector: "Négoce International", logo: "/logos/clients/afritrade.png" },
  { name: "Port Transit SA", sector: "Transport Maritime", logo: "/logos/clients/port-transit.png" },
  { name: "Société Générale de Manutention", sector: "Manutention Portuaire", logo: "/logos/clients/sgm.png" },
  { name: "Ets. Mballa & Fils", sector: "Distribution", logo: "/logos/clients/mballa.png" },
  { name: "COTCO SA", sector: "Agro-industrie", logo: "/logos/clients/cotco.png" },
  { name: "Douala Freight Services", sector: "Transit", logo: "/logos/clients/douala-freight.png" },
  { name: "Hôtel Akwa Palace", sector: "Hôtellerie", logo: "/logos/clients/akwa-palace.png" },
  { name: "Clinique Le Meridien", sector: "Santé", logo: "/logos/clients/le-meridien.png" },
  { name: "CMA CGM Cameroon", sector: "Shipping", logo: "/logos/clients/cma-cgm.png" },
];

export const partners = [
  { name: "AXA", logo: "/logos/partenaires/axa.png" },
  { name: "Saar", logo: "/logos/partenaires/saar.png" },
  { name: "Chanas Assurances", logo: "/logos/partenaires/chanas.png" },
  { name: "Zenithe", logo: "/logos/partenaires/zenithe.png" },
  { name: "AGC", logo: "/logos/partenaires/agc.png" },
  { name: "Activa", logo: "/logos/partenaires/activa.png" },
  { name: "NSIA", logo: "/logos/partenaires/nsia.png" },
  { name: "AFG", logo: "/logos/partenaires/afg.png" },
  { name: "Royal Onyx", logo: "/logos/partenaires/royal-onyx.png" },
  { name: "ProAssur", logo: "/logos/partenaires/proassur.png" },
  { name: "AREA", logo: "/logos/partenaires/area.png" },
  { name: "CPA", logo: "/logos/partenaires/cpa.png" },
  { name: "Sanlam Allianz", logo: "/logos/partenaires/sanlam-allianz.png" },
  { name: "Prudential Beneficial", logo: "/logos/partenaires/prudential-beneficial.png" },
  { name: "SUNU", logo: "/logos/partenaires/sunu.png" },
  { name: "Wafa Assurance", logo: "/logos/partenaires/wafa.png" },
];
