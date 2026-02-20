
export enum Language {
  IT = 'IT',
  EN = 'EN',
  DE = 'DE',
  FR = 'FR',
  ES = 'ES'
}

export interface SectionItem {
  id: string;
  title: Record<language, string="">;
  description: Record<language, string="">;
  icon: string;
  link?: string;
  category: 'checkin' | 'checkout' | 'rules' | 'wifi' | 'house' | 'local' | 'transport';
}

export interface GuideData {
  propertyName: string;
  hostName: string;
  hostImage: string;
  location: string;
  address: string;
  coordinates: { lat: number; lng: number };
  contacts: {
    phone: string;
    whatsapp: string;
    email: string;
  };
  wifi: {
    name: string;
    password: string;
  };
  sections: SectionItem[];
}

export interface TranslationSet {
  welcome: string;
  yourHost: string;
  copyWifi: string;
  copied: string;
  addressCopied: string;
  getDirections: string;
  contactHost: string;
  adminMode: string;
  guestView: string;
  saveChanges: string;
  magicPolish: string;
  arrival: string;
  departure: string;
  checkinInstructions: string;
  checkoutInstructions: string;
  checkoutChecklist: string;
  msgArriving: string;
  msgCheckout: string;
  msgHelp: string;
  leaveReview: string;
  reviewText: string;
  checklist: {
    keys: string;
    lights: string;
    trash: string;
    windows: string;
  };
}

export const TRANSLATIONS: Record<language, translationset=""> = {
  [Language.IT]: {
    welcome: "Benvenuti a Dimora Sorriso",
    yourHost: "Il tuo Host",
    copyWifi: "Copia Password WiFi",
    copied: "Copiato!",
    addressCopied: "Indirizzo copiato!",
    getDirections: "Come arrivare",
    contactHost: "Contattaci",
    adminMode: "Modalità Gestore",
    guestView: "Vista Ospite",
    saveChanges: "Salva Modifiche",
    magicPolish: "Perfeziona con AI",
    arrival: "Arrivo",
    departure: "Partenza",
    checkinInstructions: "Istruzioni Check-in",
    checkoutInstructions: "Istruzioni Check-out",
    checkoutChecklist: "Prima di andare via",
    msgArriving: "Sto arrivando!",
    msgCheckout: "Ho fatto il check-out",
    msgHelp: "Ho bisogno di aiuto",
    leaveReview: "Lascia una recensione",
    reviewText: "Ti è piaciuto il soggiorno? Lasciaci 5 stelle!",
    checklist: {
      keys: "Chiavi nella cassetta",
      lights: "Luci e aria condizionata spente",
      trash: "Rifiuti buttati",
      windows: "Finestre chiuse"
    }
  },
  [Language.EN]: {
    welcome: "Welcome to Dimora Sorriso",
    yourHost: "Your Host",
    copyWifi: "Copy WiFi Password",
    copied: "Copied!",
    addressCopied: "Address copied!",
    getDirections: "Get Directions",
    contactHost: "Contact Us",
    adminMode: "Host Mode",
    guestView: "Guest View",
    saveChanges: "Save Changes",
    magicPolish: "Polish with AI",
    arrival: "Arrival",
    departure: "Departure",
    checkinInstructions: "Check-in Instructions",
    checkoutInstructions: "Check-out Instructions",
    checkoutChecklist: "Before you leave",
    msgArriving: "I am arriving!",
    msgCheckout: "I have checked out",
    msgHelp: "I need help",
    leaveReview: "Leave a review",
    reviewText: "Did you enjoy your stay? Leave us 5 stars!",
    checklist: {
      keys: "Keys returned to box",
      lights: "Lights & AC turned off",
      trash: "Trash disposed",
      windows: "Windows closed"
    }
  },
  [Language.DE]: {
    welcome: "Willkommen in der Dimora Sorriso",
    yourHost: "Ihr Gastgeber",
    copyWifi: "WLAN-Passwort kopieren",
    copied: "Kopiert!",
    addressCopied: "Adresse kopiert!",
    getDirections: "Anfahrt",
    contactHost: "Kontakt",
    adminMode: "Host-Modus",
    guestView: "Gast-Ansicht",
    saveChanges: "Änderungen speichern",
    magicPolish: "Mit KI verfeinern",
    arrival: "Anreise",
    departure: "Abreise",
    checkinInstructions: "Check-in Anweisungen",
    checkoutInstructions: "Check-out Anweisungen",
    checkoutChecklist: "Bevor Sie gehen",
    msgArriving: "Ich komme an!",
    msgCheckout: "Ich habe ausgecheckt",
    msgHelp: "Ich brauche Hilfe",
    leaveReview: "Bewertung abgeben",
    reviewText: "Hat es Ihnen gefallen? Hinterlassen Sie uns 5 Sterne!",
    checklist: {
      keys: "Schlüssel in der Box",
      lights: "Licht & Klimaanlage aus",
      trash: "Müll entsorgt",
      windows: "Fenster geschlossen"
    }
  },
  [Language.FR]: {
    welcome: "Bienvenue à Dimora Sorriso",
    yourHost: "Votre Hôte",
    copyWifi: "Copier le mot de passe WiFi",
    copied: "Copié !",
    addressCopied: "Adresse copiée !",
    getDirections: "Comment arriver",
    contactHost: "Contactez-nous",
    adminMode: "Mode Hôte",
    guestView: "Vue Invité",
    saveChanges: "Enregistrer les modifications",
    magicPolish: "Peaufiner avec l'IA",
    arrival: "Arrivée",
    departure: "Départ",
    checkinInstructions: "Instructions d'arrivée",
    checkoutInstructions: "Instructions de départ",
    checkoutChecklist: "Avant de partir",
    msgArriving: "J'arrive !",
    msgCheckout: "J'ai fait le check-out",
    msgHelp: "J'ai besoin d'aide",
    leaveReview: "Laisser un avis",
    reviewText: "Vous avez aimé votre séjour ? Laissez-nous 5 étoiles !",
    checklist: {
      keys: "Clés dans le boîtier",
      lights: "Lumières et climatisation éteintes",
      trash: "Poubelles vidées",
      windows: "Fenêtres fermées"
    }
  },
  [Language.ES]: {
    welcome: "Bienvenidos a Dimora Sorriso",
    yourHost: "Tu Anfitrión",
    copyWifi: "Copiar contraseña WiFi",
    copied: "¡Copiado!",
    addressCopied: "¡Dirección copiada!",
    getDirections: "Cómo llegar",
    contactHost: "Contáctanos",
    adminMode: "Modo Anfitrión",
    guestView: "Vista Huésped",
    saveChanges: "Guardar cambios",
    magicPolish: "Perfeccionar con IA",
    arrival: "Llegada",
    departure: "Salida",
    checkinInstructions: "Instrucciones de llegada",
    checkoutInstructions: "Instrucciones de salida",
    checkoutChecklist: "Antes de irte",
    msgArriving: "¡Estoy llegando!",
    msgCheckout: "He hecho el check-out",
    msgHelp: "Necesito ayuda",
    leaveReview: "Dejar una reseña",
    reviewText: "¿Te gustó tu estancia? ¡Déjanos 5 estrellas!",
    checklist: {
      keys: "Llaves en la caja",
      lights: "Luces y aire acondicionado apagados",
      trash: "Basura tirada",
      windows: "Ventanas cerradas"
    }
  }
};