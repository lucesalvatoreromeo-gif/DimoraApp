import { GuideData, Language } from './types';

export const INITIAL_GUIDE_DATA: GuideData = {
  propertyName: "Dimora Sorriso",
  hostName: "Salvatore",
  hostImage: "https://lh3.googleusercontent.com/d/1rpoY5yZMqhUip1fPrje69AKGF78PN6wu",
  location: "Bari, Italy",
  address: "Via Trevisani, 43, 70123 Bari BA, Italy",
  coordinates: { lat: 41.1235, lng: 16.8625 },
  contacts: {
    phone: "+393890170579",
    whatsapp: "+393890170579",
    email: "info@dimorasorriso.it"
  },
  wifi: {
    name: "DimoraSorriso2.4",
    password: "GuestDimora"
  },
  sections: [
    {
      id: "checkin",
      category: "checkin",
      icon: "key",
      title: {
        IT: "Check-in / Check-out",
        EN: "Check-in / Check-out",
        DE: "Check-in / Check-out",
        FR: "Check-in / Check-out",
        ES: "Check-in / Check-out"
      },
      description: {
        IT: "Il check-in è disponibile dalle ore 15:00 in poi. Le chiavi si trovano nella cassetta di sicurezza accanto al portone d’ingresso; il codice verrà inviato il giorno dell’arrivo. Al momento della partenza, si prega di riporre le chiavi nella cassetta e chiuderla correttamente. ||| Il check-out deve essere effettuato entro le ore 10:00. Prima di lasciare la villa, assicurarsi di spegnere luci, elettrodomestici e chiudere bene porte e finestre. Riporre le chiavi nella cassetta di sicurezza e verificare di non aver dimenticato effetti personali.",
        EN: "Check-in is available from 3:00 PM onwards. The keys are located in the safety box next to the entrance door; the code will be sent on the day of arrival. Upon departure, please return the keys to the box and close it properly. ||| Check-out must be done by 10:00 AM. Before leaving the villa, please ensure to turn off lights, appliances, and securely close doors and windows. Place the keys in the safety box and verify you haven't forgotten any personal belongings.",
        DE: "Der Check-in ist ab 15:00 Uhr möglich. Die Schlüssel befinden sich im Schlüsseltresor neben der Eingangstür; der Code wird am Anreisetag gesendet. Bitte legen Sie die Schlüssel bei der Abreise in den Tresor zurück und schließen Sie ihn ordnungsgemäß. ||| Der Check-out muss bis 10:00 Uhr erfolgen. Bevor Sie die Villa verlassen, stellen Sie bitte sicher, dass Lichter und Geräte ausgeschaltet sind und Fenster und Türen gut verschlossen sind. Legen Sie die Schlüssel in den Tresor und vergewissern Sie sich, dass Sie keine persönlichen Gegenstände vergessen haben.",
        FR: "L'enregistrement est possible à partir de 15h00. Les clés se trouvent dans le coffre à clés à côté de la porte d'entrée ; le code sera envoyé le jour de l'arrivée. Au moment du départ, veuillez remettre les clés dans le coffre et le fermer correctement. ||| Le départ doit être effectué avant 10h00. Avant de quitter la villa, assurez-vous d'éteindre les lumières, les appareils électroménagers et de bien fermer les portes et fenêtres. Remettez les clés dans le coffre à clés et vérifiez de ne rien avoir oublié.",
        ES: "El check-in está disponible a partir de las 15:00 horas. Las llaves se encuentran en la caja de seguridad junto a la puerta de entrada; el código se enviará el día de la llegada. Al momento de la salida, por favor devuelva las llaves a la caja y ciérrela correctamente. ||| El check-out debe realizarse antes de las 10:00 horas. Antes de salir de la villa, asegúrese de apagar luces, electrodomésticos y cerrar bien puertas y ventanas. Guarde las llaves en la caja de seguridad y verifique no haber olvidado objetos personales."
      }
    },
    {
      id: "wifi",
      category: "wifi",
      icon: "wifi",
      title: {
        IT: "Connessione WiFi",
        EN: "WiFi Connection",
        DE: "WLAN-Verbindung",
        FR: "Connexion WiFi",
        ES: "Conexión WiFi"
      },
      description: {
        IT: "Dettagli WiFi",
        EN: "WiFi Details",
        DE: "WLAN-Details",
        FR: "Détails WiFi",
        ES: "Detalles WiFi"
      }
    },
    {
      id: "video_guides",
      category: "house",
      icon: "video",
      title: {
        IT: "Video Guide",
        EN: "Video Tutorials",
        DE: "Video-Anleitungen",
        FR: "Guides Vidéo",
        ES: "Guías en Video"
      },
      description: {
        IT: "Guida Macchina Caffè ITA | https://drive.google.com/file/d/1QEl2VjhwS-b6l0Ktvei_UPNRc566hEXQ/view?usp=sharing",
        EN: "Coffee Machine Guide ENG | https://drive.google.com/file/d/1B8IjADYQM_NOxg85HYa_mtXqkyyaHrwo/view?usp=sharing",
        DE: "Kaffeemaschinen-Ratgeber DE | https://drive.google.com/file/d/11hpGBuTYBAEBMoAtgux0AvjqClbApeQw/view?usp=sharing",
        FR: "Guide des machines à café FRA | https://drive.google.com/file/d/19R7T023h8-sxHpZ-CpaezJY2izJZMYyZ/view?usp=sharing",
        ES: "Guía de máquinas de café ES | https://drive.google.com/file/d/193Mc8CdOJ1jPRA_9IfhYE5W4VjHoyiDn/view?usp=sharing"
      }
    },
    {
      id: "rules",
      category: "rules",
      icon: "clipboard-list",
      title: {
        IT: "Regole della Casa",
        EN: "House Rules",
        DE: "Hausregeln",
        FR: "Règlement Intérieur",
        ES: "Reglas de la Casa"
      },
      description: {
        IT: "NON FUMARE: Si prega di non fumare o svapare in casa.\nNO OSPITI: È tassativamente vietato introdurre persone di cui non sia stato registrato il documento d'identità e senza il consenso della struttura.\nNO ANIMALI: Vietato l'ingresso agli animali domestici.\nNO FESTE O EVENTI: Non sono ammesse feste o eventi. L'uso di droghe e il consumo eccessivo di alcol sono vietati.\nDANNI O GUASTI: Si prega di segnalare immediatamente all'host eventuali danni o malfunzionamenti in modo da poter riparare o sostituire l'oggetto danneggiato.\nSILENZIO NOTTURNO: Si prega di rispettare il silenzio nelle ore notturne (22:00 – 8:00).\nRISPARMIO ENERGETICO: Spegnere luci, aria condizionata ed elettrodomestici quando si esce.\nRIFIUTI: Smaltire i rifiuti correttamente.",
        EN: "NO SMOKING: Please do not smoke or vape inside the house.\nNO GUESTS: It is strictly forbidden to bring in unregistered guests without host consent. ID registration is mandatory.\nNO PETS: Pets are not allowed.\nNO PARTIES OR EVENTS: Parties or events are not allowed. Drug use and excessive alcohol consumption are prohibited.\nDAMAGES OR FAULTS: Please report any damage or malfunctions to the host immediately.\nNIGHT SILENCE: Please respect silence during night hours (22:00 – 8:00).\nECO-FRIENDLY: Turn off lights, air conditioning, and appliances when leaving.\nWASTE DISPOSAL: Please dispose of waste correctly.",
        DE: "RAUCHVERBOT: Bitte nicht im Haus rauchen oder dampfen.\nKEINE GÄSTE: Es ist strengstens verboten, nicht registrierte Personen ohne Zustimmung des Gastgebers mitzubringen.\nKEINE HAUSTIERE: Haustiere sind nicht gestattet.\nKEINE PARTYS: Partys oder Veranstaltungen sind nicht erlaubt. Drogenkonsum und übermäßiger Alkoholkonsum sind verboten.\nSCHÄDEN ODER DEFEKTE: Bitte melden Sie Schäden oder Störungen sofort dem Gastgeber.\nNACHTRUHE: Bitte respektieren Sie die Ruhezeiten in der Nacht (22:00 – 8:00 Uhr).\nUMWELTFREUNDLICH: Bitte schalten Sie Licht und Klimaanlage beim Verlassen aus.\nMÜLLTRENNUNG: Bitte entsorgen Sie den Müll ordnungsgemäß.",
        FR: "NE PAS FUMER : Veuillez ne pas fumer ou vapoter dans la maison.\nPAS D'INVITÉS : Il est strictement interdit de faire entrer des personnes non enregistrées sans le consentement de l'hôte.\nPAS D'ANIMAUX : Les animaux domestiques ne sont pas admis.\nPAS DE FÊTES : Les fêtes ou événements ne sont pas autorisés. L'usage de drogues et l'alcool excessif sont interdits.\nDOMMAGES : Veuillez signaler immédiatement tout dommage ou dysfonctionnement à l'hôte.\nSILENCE NOCTURNE : Veuillez respecter le silence pendant les heures nocturnes (22:00 – 8:00).\nÉCO-RESPONSABLE : Éteignez les lumières et la climatisation en sortant.\nDÉCHETS : Triez les déchets correctement.",
        ES: "NO FUMAR: Por favor, no fume ni vapee en la casa.\nNO INVITADOS: Está terminantemente prohibido introducir personas no registradas sin el consentimiento del anfitrión.\nNO MASCOTAS: No se admiten mascotas.\nNO FIESTAS: No se permiten fiestas o eventos. El uso de drogas y el consumo excesivo de alcohol están prohibidos.\nDAÑOS O AVERÍAS: Por favor, informe inmediatamente al anfitrión sobre cualquier daño.\nSILENCIO NOCTURNO: Por favor, respete el silencio en las horas nocturnas (22:00 – 8:00).\nECOLÓGICO: Apague luces y aire acondicionado al salir.\nRESIDUOS: Deseche los residuos correctamente."
      }
    },
    {
      id: "supermarkets",
      category: "local",
      icon: "shopping-cart",
      title: {
        IT: "Supermercati",
        EN: "Supermarkets",
        DE: "Supermärkte",
        FR: "Supermarchés",
        ES: "Supermercados"
      },
      description: {
        IT: "Ecco i supermercati più vicini:\n\n• EUROSPIN\nMaps: https://maps.app.goo.gl/P6BRyyHBpid5dUGS9\n\n• DOK\nMaps: https://maps.app.goo.gl/b1PJiBWDf4ANS5Dy6\n\n• COOP\nMaps: https://maps.app.goo.gl/24FzirCBR7f8zjjM9",
        EN: "Here are the nearest supermarkets:\n\n• EUROSPIN\nMaps: https://maps.app.goo.gl/P6BRyyHBpid5dUGS9\n\n• DOK\nMaps: https://maps.app.goo.gl/b1PJiBWDf4ANS5Dy6\n\n• COOP\nMaps: https://maps.app.goo.gl/24FzirCBR7f8zjjM9",
        DE: "Hier sind die nächstgelegenen Supermärkte:\n\n• EUROSPIN\nMaps: https://maps.app.goo.gl/P6BRyyHBpid5dUGS9\n\n• DOK\nMaps: https://maps.app.goo.gl/b1PJiBWDf4ANS5Dy6\n\n• COOP\nMaps: https://maps.app.goo.gl/24FzirCBR7f8zjjM9",
        FR: "Voici les supermarchés les plus proches :\n\n• EUROSPIN\nMaps: https://maps.app.goo.gl/P6BRyyHBpid5dUGS9\n\n• DOK\nMaps: https://maps.app.goo.gl/b1PJiBWDf4ANS5Dy6\n\n• COOP\nMaps: https://maps.app.goo.gl/24FzirCBR7f8zjjM9",
        ES: "Aquí están los supermercados más cercanos:\n\n• EUROSPIN\nMaps: https://maps.app.goo.gl/P6BRyyHBpid5dUGS9\n\n• DOK\nMaps: https://maps.app.goo.gl/b1PJiBWDf4ANS5Dy6\n\n• COOP\nMaps: https://maps.app.goo.gl/24FzirCBR7f8zjjM9"
      }
    },
    {
      id: "attractions",
      category: "local",
      icon: "camera",
      title: {
        IT: "Attrazioni Locali",
        EN: "Local Attractions",
        DE: "Sehenswürdigkeiten",
        FR: "Attractions Locales",
        ES: "Atracciones Locales"
      },
      description: {
        IT: "Ecco 5 attrazioni imperdibili a Bari:\n\n• Basilica San Nicola: Cuore pulsante di Bari Vecchia e capolavoro del romanico pugliese.\nMaps: https://www.google.com/maps/search/?api=1&query=Basilica+San+Nicola+Bari\n\n• Castello Normanno-Svevo: Imponente fortezza alle porte della città vecchia, oggi sede museale.\nMaps: https://www.google.com/maps/search/?api=1&query=Castello+Normanno+Svevo+Bari\n\n• Cattedrale di San Sabino: Elegante esempio di architettura romanica con la sua famosa cripta barocca.\nMaps: https://www.google.com/maps/search/?api=1&query=Cattedrale+San+Sabino+Bari\n\n• Bari Vecchia: Perdetevi tra i vicoli, dove le signore preparano ancora le orecchiette per strada (Via dell'Arco Basso).\nMaps: https://www.google.com/maps/search/?api=1&query=Strada+delle+Orecchiette+Bari\n\n• Teatro Petruzzelli: Uno dei teatri più belli e grandi d'Italia, simbolo culturale della città.\nMaps: https://www.google.com/maps/search/?api=1&query=Teatro+Petruzzelli+Bari",
        EN: "Here are 5 must-see attractions in Bari:\n\n• Basilica San Nicola: The beating heart of Bari Vecchia and a masterpiece of Apulian Romanesque architecture.\nMaps: https://www.google.com/maps/search/?api=1&query=Basilica+San+Nicola+Bari\n\n• Norman-Swabian Castle: An imposing fortress at the gates of the old city, now a museum.\nMaps: https://www.google.com/maps/search/?api=1&query=Castello+Normanno+Svevo+Bari\n\n• Cathedral of San Sabino: An elegant example of Romanesque architecture with its famous Baroque crypt.\nMaps: https://www.google.com/maps/search/?api=1&query=Cattedrale+San+Sabino+Bari\n\n• Bari Vecchia (Old Town): Get lost in the alleys, where ladies still make orecchiette pasta on the street (Via dell'Arco Basso).\nMaps: https://www.google.com/maps/search/?api=1&query=Strada+delle+Orecchiette+Bari\n\n• Teatro Petruzzelli: One of the most beautiful and largest theaters in Italy, a cultural symbol of the city.\nMaps: https://www.google.com/maps/search/?api=1&query=Teatro+Petruzzelli+Bari",
        DE: "Hier sind 5 Sehenswürdigkeiten in Bari, die Sie gesehen haben müssen:\n\n• Basilika San Nicola: Das pulsierende Herz von Bari Vecchia und ein Meisterwerk der apulischen Romanik.\nMaps: https://www.google.com/maps/search/?api=1&query=Basilica+San+Nicola+Bari\n\n• Normannisch-Staufische Burg: Eine imposante Festung vor den Toren der Altstadt, heute ein Museum.\nMaps: https://www.google.com/maps/search/?api=1&query=Castello+Normanno+Svevo+Bari\n\n• Kathedrale San Sabino: Ein elegantes Beispiel romanischer Architektur mit ihrer berühmten Barockkrypta.\nMaps: https://www.google.com/maps/search/?api=1&query=Cattedrale+San+Sabino+Bari\n\n• Bari Vecchia (Altstadt): Verlieren Sie sich in den Gassen, in denen Frauen noch immer Orecchiette auf der Straße herstellen (Via dell'Arco Basso).\nMaps: https://www.google.com/maps/search/?api=1&query=Strada+delle+Orecchiette+Bari\n\n• Teatro Petruzzelli: Eines der schönsten und größten Theater Italiens, ein kulturelles Wahrzeichen der Stadt.\nMaps: https://www.google.com/maps/search/?api=1&query=Teatro+Petruzzelli+Bari",
        FR: "Voici 5 attractions incontournables à Bari :\n\n• Basilique San Nicola : Le cœur battant de Bari Vecchia et un chef-d'œuvre de l'art roman des Pouilles.\nMaps: https://www.google.com/maps/search/?api=1&query=Basilica+San+Nicola+Bari\n\n• Château Normand-Souabe : Une imposante forteresse aux portes de la vieille ville, aujourd'hui un musée.\nMaps: https://www.google.com/maps/search/?api=1&query=Castello+Normanno+Svevo+Bari\n\n• Cathédrale de San Sabino : Un exemple élégant d'architecture romane avec sa célèbre crypte baroque.\nMaps: https://www.google.com/maps/search/?api=1&query=Cattedrale+San+Sabino+Bari\n\n• Bari Vecchia : Perdez-vous dans les ruelles où les dames préparent encore les orecchiette dans la rue (Via dell'Arco Basso).\nMaps: https://www.google.com/maps/search/?api=1&query=Strada+delle+Orecchiette+Bari\n\n• Teatro Petruzzelli : L'un des plus beaux et des plus grands théâtres d'Italie, symbole culturel de la ville.\nMaps: https://www.google.com/maps/search/?api=1&query=Teatro+Petruzzelli+Bari",
        ES: "Aquí hay 5 atracciones imperdibles en Bari:\n\n• Basílica de San Nicola: El corazón palpitante de Bari Vecchia y una obra maestra del románico de Apulia.\nMaps: https://www.google.com/maps/search/?api=1&query=Basilica+San+Nicola+Bari\n\n• Castillo Normando-Suabo: Una imponente fortaleza a las puertas de la ciudad vieja, hoy un museo.\nMaps: https://www.google.com/maps/search/?api=1&query=Castello+Normanno+Svevo+Bari\n\n• Catedral de San Sabino: Un elegante ejemplo de arquitectura románica con su famosa cripta barroca.\nMaps: https://www.google.com/maps/search/?api=1&query=Cattedrale+San+Sabino+Bari\n\n• Bari Vecchia: Piérdase en los callejones, donde las señoras todavía hacen orecchiette en la calle (Via dell'Arco Basso).\nMaps: https://www.google.com/maps/search/?api=1&query=Strada+delle+Orecchiette+Bari\n\n• Teatro Petruzzelli: Uno de los teatros más bellos y grandes de Italia, símbolo cultural de la ciudad.\nMaps: https://www.google.com/maps/search/?api=1&query=Teatro+Petruzzelli+Bari"
      }
    },
    {
      id: "beaches",
      category: "local",
      icon: "beach",
      title: {
        IT: "Spiagge",
        EN: "Beaches",
        DE: "Strände",
        FR: "Plages",
        ES: "Playas"
      },
      description: {
        IT: "Ecco le spiagge più belle di Bari e dintorni:\n\n• Pane e Pomodoro (Città): La spiaggia dei baresi, sabbiosa e facilmente raggiungibile a piedi o con il bus.\nMaps: https://www.google.com/maps/search/?api=1&query=Spiaggia+Pane+e+Pomodoro+Bari\n\n• Torre Quetta (Città): Spiaggia di ciottoli attrezzata con bar, ideale per aperitivi e sport.\nMaps: https://www.google.com/maps/search/?api=1&query=Torre+Quetta+Bari\n\n• Lido San Francesco (Città): Stabilimento balneare privato con sabbia, perfetto per famiglie.\nMaps: https://www.google.com/maps/search/?api=1&query=Lido+San+Francesco+Bari\n\n• Polignano a Mare (Fuori città): Iconica spiaggia tra le scogliere, raggiungibile in 30 minuti di treno.\nMaps: https://www.google.com/maps/search/?api=1&query=Lama+Monachile+Polignano",
        EN: "Here are the most beautiful beaches in and around Bari:\n\n• Pane e Pomodoro (City): The locals' beach, sandy and easily accessible by foot or bus.\nMaps: https://www.google.com/maps/search/?api=1&query=Spiaggia+Pane+e+Pomodoro+Bari\n\n• Torre Quetta (City): Pebble beach equipped with bars, ideal for drinks and sports.\nMaps: https://www.google.com/maps/search/?api=1&query=Torre+Quetta+Bari\n\n• Lido San Francesco (City): Private beach club with sand, perfect for families.\nMaps: https://www.google.com/maps/search/?api=1&query=Lido+San+Francesco+Bari\n\n• Polignano a Mare (Out of town): Iconic beach between cliffs, reachable in 30 minutes by train.\nMaps: https://www.google.com/maps/search/?api=1&query=Lama+Monachile+Polignano",
        DE: "Hier sind die schönsten Strände in und um Bari:\n\n• Pane e Pomodoro (Stadt): Der Strand der Einheimischen, sandig und leicht zu Fuß oder mit dem Bus erreichbar.\nMaps: https://www.google.com/maps/search/?api=1&query=Spiaggia+Pane+e+Pomodoro+Bari\n\n• Torre Quetta (Stadt): Kiesstrand mit Bars, ideal für Drinks und Sport.\nMaps: https://www.google.com/maps/search/?api=1&query=Torre+Quetta+Bari\n\n• Lido San Francesco (Stadt): Privates Strandbad mit Sand, perfekt für Familien.\nMaps: https://www.google.com/maps/search/?api=1&query=Lido+San+Francesco+Bari\n\n• Polignano a Mare (Außerhalb): Ikonischer Strand zwischen Klippen, erreichbar in 30 Minuten mit dem Zug.\nMaps: https://www.google.com/maps/search/?api=1&query=Lama+Monachile+Polignano",
        FR: "Voici les plus belles plages de Bari et ses environs :\n\n• Pane e Pomodoro (Ville) : La plage des locaux, sablonneuse et facile d'accès à pied ou en bus.\nMaps: https://www.google.com/maps/search/?api=1&query=Spiaggia+Pane+e+Pomodoro+Bari\n\n• Torre Quetta (Ville) : Plage de galets équipée de bars, idéale pour les apéritifs et le sport.\nMaps: https://www.google.com/maps/search/?api=1&query=Torre+Quetta+Bari\n\n• Lido San Francesco (Ville) : Établissement balnéaire privé avec sable, parfait pour les familles.\nMaps: https://www.google.com/maps/search/?api=1&query=Lido+San+Francesco+Bari\n\n• Polignano a Mare (Hors ville) : Plage emblématique entre les falaises, accessible en 30 minutes en train.\nMaps: https://www.google.com/maps/search/?api=1&query=Lama+Monachile+Polignano",
        ES: "Aquí están las playas más hermosas de Bari y sus alrededores:\n\n• Pane e Pomodoro (Ciudad): La playa de los locales, de arena y fácilmente accesible a pie o en autobús.\nMaps: https://www.google.com/maps/search/?api=1&query=Spiaggia+Pane+e+Pomodoro+Bari\n\n• Torre Quetta (Ciudad): Playa de guijarros equipada con bares, ideal para aperitivos y deportes.\nMaps: https://www.google.com/maps/search/?api=1&query=Torre+Quetta+Bari\n\n• Lido San Francesco (Ciudad): Balneario privado con arena, perfecto para familias.\nMaps: https://www.google.com/maps/search/?api=1&query=Lido+San+Francesco+Bari\n\n• Polignano a Mare (Fuera de la ciudad): Playa icónica entre acantilados, accesible en 30 minutes en tren.\nMaps: https://www.google.com/maps/search/?api=1&query=Lama+Monachile+Polignano"
      }
    },
    {
      id: "eat",
      category: "local",
      icon: "utensils",
      title: {
        IT: "Dove Mangiare",
        EN: "Where to Eat",
        DE: "Essen & Trinken",
        FR: "Où Manger",
        ES: "Dónde Comer"
      },
      description: {
        IT: "I nostri ristoranti preferiti a Bari:\n\n• Armonia\nMaps: https://maps.app.goo.gl/p4RbN7kvhAqVpBEN9\n\n• Lanterna Verde\nMaps: https://maps.app.goo.gl/r5NWUdN74NCfvfDJA\n\n• MastroCiccio (Corso Vittorio Emanuele II 15): locale informale con panini gourmet, pizze e piatti tipici.\nMaps: https://www.google.com/maps/search/?api=1&query=MastroCiccio+Bari\n\n• Antò Ristorante (Strada Palazzo di Città 14): cucina tipica pugliese in Bari vecchia.\nMaps: https://www.google.com/maps/search/?api=1&query=Antò+Ristorante+Bari\n\n• Radicale Restaurant (Via Nicolò Putignani 71): moderno con piatti di mare e carne rivisitati.\nMaps: https://www.google.com/maps/search/?api=1&query=Radicale+Restaurant+Bari",
        EN: "Our favorite dining spots in Bari:\n\n• Armonia\nMaps: https://maps.app.goo.gl/p4RbN7kvhAqVpBEN9\n\n• Lanterna Verde\nMaps: https://maps.app.goo.gl/r5NWUdN74NCfvfDJA\n\n• MastroCiccio: Informal spot for gourmet sandwiches and local street food.\nMaps: https://www.google.com/maps/search/?api=1&query=MastroCiccio+Bari\n\n• Antò Ristorante: Authentic Apulian flavors in the Old Town.\nMaps: https://www.google.com/maps/search/?api=1&query=Antò+Ristorante+Bari\n\n• Radicale Restaurant: Modern seafood and meat with a creative twist.\nMaps: https://www.google.com/maps/search/?api=1&query=Radicale+Restaurant+Bari",
        DE: "Unsere Lieblingsrestaurants in Bari:\n\n• Armonia\nMaps: https://maps.app.goo.gl/p4RbN7kvhAqVpBEN9\n\n• Lanterna Verde\nMaps: https://maps.app.goo.gl/r5NWUdN74NCfvfDJA\n\n• MastroCiccio: Gourmet-Sandwiches und lokale Spezialitäten.\nMaps: https://www.google.com/maps/search/?api=1&query=MastroCiccio+Bari\n\n• Antò Ristorante: Authentische apulische Küche in der Altstadt.\nMaps: https://www.google.com/maps/search/?api=1&query=Antò+Ristorante+Bari\n\n• Radicale Restaurant: Modernes Seafood und Fleischgerichte.\nMaps: https://www.google.com/maps/search/?api=1&query=Radicale+Restaurant+Bari",
        FR: "Nos restaurants préférés à Bari :\n\n• Armonia\nMaps: https://maps.app.goo.gl/p4RbN7kvhAqVpBEN9\n\n• Lanterna Verde\nMaps: https://maps.app.goo.gl/r5NWUdN74NCfvfDJA\n\n• MastroCiccio : Sandwichs gourmets et cuisine locale.\nMaps: https://www.google.com/maps/search/?api=1&query=MastroCiccio+Bari\n\n• Antò Ristorante : Saveurs authentiques des Pouilles dans la vieille ville.\nMaps: https://www.google.com/maps/search/?api=1&query=Antò+Ristorante+Bari\n\n• Radicale Restaurant : Cuisine moderne de la mer et de la terre.\nMaps: https://www.google.com/maps/search/?api=1&query=Radicale+Restaurant+Bari",
        ES: "Nuestros restaurantes favoritos en Bari:\n\n• Armonia\nMaps: https://maps.app.goo.gl/p4RbN7kvhAqVpBEN9\n\n• Lanterna Verde\nMaps: https://maps.app.goo.gl/r5NWUdN74NCfvfDJA\n\n• MastroCiccio: Bocadillos gourmet y comida local informal.\nMaps: https://www.google.com/maps/search/?api=1&query=MastroCiccio+Bari\n\n• Antò Ristorante: Cocina típica de Puglia en el casco antico.\nMaps: https://www.google.com/maps/search/?api=1&query=Antò+Ristorante+Bari\n\n• Radicale Restaurant: Cocina moderna de mar y tierra.\nMaps: https://www.google.com/maps/search/?api=1&query=Radicale+Restaurant+Bari"
      }
    },
    {
      id: "pharmacies",
      category: "local",
      icon: "pharmacy",
      title: {
        IT: "Farmacie Vicine",
        EN: "Nearby Pharmacies",
        DE: "Apotheken in der Nähe",
        FR: "Pharmacies à Proximité",
        ES: "Farmacias Cercanas"
      },
      description: {
        IT: "Ecco le farmacie più vicine:\n\n• Farmacia Violante (Corso Giuseppe Mazzini 136)\nTel: +39 080 521 2176\nMaps: https://maps.app.goo.gl/g1XmWKMJo9cHYq5i7\n\n• Farmaessere (Via Crisanzio 128)\nTel: +39 080 521 1667\nMaps: https://maps.app.goo.gl/dG1MnZWkEAKCYSVQ6\n\n• Farmacia Bocuzzi (Via Dante Alighieri 58)\nTel: +39 080 521 3465\nMaps: https://maps.app.goo.gl/EWBqTyRmQ7Q4Bp7s7\n\n• Farmacia Bellini (Via Michele Garruba 149)\nTel: +39 080 521 2785\nMaps: https://maps.app.goo.gl/6ygzZCfpLs9BTnfH6",
        EN: "Here are the nearest pharmacies:\n\n• Farmacia Violante (Corso Giuseppe Mazzini 136)\nTel: +39 080 521 2176\nMaps: https://maps.app.goo.gl/g1XmWKMJo9cHYq5i7\n\n• Farmaessere (Via Crisanzio 128)\nTel: +39 080 521 1667\nMaps: https://maps.app.goo.gl/dG1MnZWkEAKCYSVQ6\n\n• Farmacia Bocuzzi (Via Dante Alighieri 58)\nTel: +39 080 521 3465\nMaps: https://maps.app.goo.gl/EWBqTyRmQ7Q4Bp7s7\n\n• Farmacia Bellini (Via Michele Garruba 149)\nTel: +39 080 521 2785\nMaps: https://maps.app.goo.gl/6ygzZCfpLs9BTnfH6",
        DE: "Hier sind die nächstgelegenen Apotheken:\n\n• Farmacia Violante (Corso Giuseppe Mazzini 136)\nTel: +39 080 521 2176\nMaps: https://maps.app.goo.gl/g1XmWKMJo9cHYq5i7\n\n• Farmaessere (Via Crisanzio 128)\nTel: +39 080 521 1667\nMaps: https://maps.app.goo.gl/dG1MnZWkEAKCYSVQ6\n\n• Farmacia Bocuzzi (Via Dante Alighieri 58)\nTel: +39 080 521 3465\nMaps: https://maps.app.goo.gl/EWBqTyRmQ7Q4Bp7s7\n\n• Farmacia Bellini (Via Michele Garruba 149)\nTel: +39 080 521 2785\nMaps: https://maps.app.goo.gl/6ygzZCfpLs9BTnfH6",
        FR: "Voici les pharmacies les plus proches :\n\n• Farmacia Violante (Corso Giuseppe Mazzini 136)\nTel: +39 080 521 2176\nMaps: https://maps.app.goo.gl/g1XmWKMJo9cHYq5i7\n\n• Farmaessere (Via Crisanzio 128)\nTel: +39 080 521 1667\nMaps: https://maps.app.goo.gl/dG1MnZWkEAKCYSVQ6\n\n• Farmacia Bocuzzi (Via Dante Alighieri 58)\nTel: +39 080 521 3465\nMaps: https://maps.app.goo.gl/EWBqTyRmQ7Q4Bp7s7\n\n• Farmacia Bellini (Via Michele Garruba 149)\nTel: +39 080 521 2785\nMaps: https://maps.app.goo.gl/6ygzZCfpLs9BTnfH6",
        ES: "Aquí están las farmacias más cercanas:\n\n• Farmacia Violante (Corso Giuseppe Mazzini 136)\nTel: +39 080 521 2176\nMaps: https://maps.app.goo.gl/g1XmWKMJo9cHYq5i7\n\n• Farmaessere (Via Crisanzio 128)\nTel: +39 080 521 1667\nMaps: https://maps.app.goo.gl/dG1MnZWkEAKCYSVQ6\n\n• Farmacia Bocuzzi (Via Dante Alighieri 58)\nTel: +39 080 521 3465\nMaps: https://maps.app.goo.gl/EWBqTyRmQ7Q4Bp7s7\n\n• Farmacia Bellini (Via Michele Garruba 149)\nTel: +39 080 521 2785\nMaps: https://maps.app.goo.gl/6ygzZCfpLs9BTnfH6"
      }
    },
    {
      id: "hospital",
      category: "local",
      icon: "siren",
      title: {
        IT: "Ospedale e Guardia Medica",
        EN: "Hospital & Medical Guard",
        DE: "Krankenhaus & Ärztlicher Notdienst",
        FR: "Hôpital et Garde Médicale",
        ES: "Hospital y Guardia Médica"
      },
      description: {
        IT: "Per emergenze mediche:\n\n• Policlinico di Bari (Ospedale principale): Piazza Giulio Cesare 11\nMaps: https://www.google.com/maps/search/?api=1&query=Policlinico+di+Bari\n\n• Guardia Medica (Assistenza notturna e festiva): Via San Francesco d'Assisi 55\nTel: +39 080 523 5769\nMaps: https://www.google.com/maps/search/?api=1&query=Guardia+Medica+Bari",
        EN: "For medical emergencies:\n\n• Policlinico di Bari (Main Hospital): Piazza Giulio Cesare 11\nMaps: https://www.google.com/maps/search/?api=1&query=Policlinico+di+Bari\n\n• Medical Guard (Night & Holiday Assistance): Via San Francesco d'Assisi 55\nTel: +39 080 523 5769\nMaps: https://www.google.com/maps/search/?api=1&query=Guardia+Medica+Bari",
        DE: "Für medizinische Notfälle:\n\n• Policlinico di Bari (Hauptkrankenhaus): Piazza Giulio Cesare 11\nMaps: https://www.google.com/maps/search/?api=1&query=Policlinico+di+Bari\n\n• Ärztlicher Notdienst (Nachts & Feiertage): Via San Francesco d'Assisi 55\nTel: +39 080 523 5769\nMaps: https://www.google.com/maps/search/?api=1&query=Guardia+Medica+Bari",
        FR: "Pour les urgences médicales :\n\n• Policlinico di Bari (Hôpital principal) : Piazza Giulio Cesare 11\nMaps: https://www.google.com/maps/search/?api=1&query=Policlinico+di+Bari\n\n• Garde Médicale (Assistance nuit et jours fériés) : Via San Francesco d'Assisi 55\nTel: +39 080 523 5769\nMaps: https://www.google.com/maps/search/?api=1&query=Guardia+Medica+Bari",
        ES: "Para emergencias médicas:\n\n• Policlinico di Bari (Hospital principal): Piazza Giulio Cesare 11\nMaps: https://www.google.com/maps/search/?api=1&query=Policlinico+di+Bari\n\n• Guardia Médica (Asistencia nocturna y festivos): Via San Francesco d'Assisi 55\nTel: +39 080 523 5769\nMaps: https://www.google.com/maps/search/?api=1&query=Guardia+Medica+Bari"
      }
    },
    {
      id: "parking",
      category: "local",
      icon: "parking",
      title: {
        IT: "Parcheggio Saba",
        EN: "Saba Parking",
        DE: "Saba Parkplatz",
        FR: "Parking Saba",
        ES: "Aparcamiento Saba"
      },
      description: {
        IT: "Saba Parking (Guadagni)|||\n+390805214646|||\nhttps://www.sabait.it/it/parcheggio-bari/parcheggio-saba-porto?hl=it-IT&gei=QsOIaaqgOYDNwPAPpqzi4Q4&rwg_token=AFd1xnHoYadBp52oHBID7gZYbTuT8KjQ3b-DrudGJpTQu7SRoMe5yl2doMgWPvzEK9O1Q6ueMqVPq_T9RCzDYbOjNDnAsBDiRA%3D%3D|||\nhttps://maps.app.goo.gl/TC74yJSvqPSZwjkC7",
        EN: "Saba Parking (Guadagni)|||\n+390805214646|||\nhttps://www.sabait.it/it/parcheggio-bari/parcheggio-saba-porto?hl=it-IT&gei=QsOIaaqgOYDNwPAPpqzi4Q4&rwg_token=AFd1xnHoYadBp52oHBID7gZYbTuT8KjQ3b-DrudGJpTQu7SRoMe5yl2doMgWPvzEK9O1Q6ueMqVPq_T9RCzDYbOjNDnAsBDiRA%3D%3D|||\nhttps://maps.app.goo.gl/TC74yJSvqPSZwjkC7",
        DE: "Saba Parking (Guadagni)|||\n+390805214646|||\nhttps://www.sabait.it/it/parcheggio-bari/parcheggio-saba-porto?hl=it-IT&gei=QsOIaaqgOYDNwPAPpqzi4Q4&rwg_token=AFd1xnHoYadBp52oHBID7gZYbTuT8KjQ3b-DrudGJpTQu7SRoMe5yl2doMgWPvzEK9O1Q6ueMqVPq_T9RCzDYbOjNDnAsBDiRA%3D%3D|||\nhttps://maps.app.goo.gl/TC74yJSvqPSZwjkC7",
        FR: "Saba Parking (Guadagni)|||\n+390805214646|||\nhttps://www.sabait.it/it/parcheggio-bari/parcheggio-saba-porto?hl=it-IT&gei=QsOIaaqgOYDNwPAPpqzi4Q4&rwg_token=AFd1xnHoYadBp52oHBID7gZYbTuT8KjQ3b-DrudGJpTQu7SRoMe5yl2doMgWPvzEK9O1Q6ueMqVPq_T9RCzDYbOjNDnAsBDiRA%3D%3D|||\nhttps://maps.app.goo.gl/TC74yJSvqPSZwjkC7",
        ES: "Saba Parking (Guadagni)|||\n+390805214646|||\nhttps://www.sabait.it/it/parcheggio-bari/parcheggio-saba-porto?hl=it-IT&gei=QsOIaaqgOYDNwPAPpqzi4Q4&rwg_token=AFd1xnHoYadBp52oHBID7gZYbTuT8KjQ3b-DrudGJpTQu7SRoMe5yl2doMgWPvzEK9O1Q6ueMqVPq_T9RCzDYbOjNDnAsBDiRA%3D%3D|||\nhttps://maps.app.goo.gl/TC74yJSvqPSZwjkC7"
      }
    },
    {
      id: "bus",
      category: "local",
      icon: "bus",
      title: {
        IT: "Fermata Bus",
        EN: "Bus Stop",
        DE: "Bushaltestelle",
        FR: "Arrêt de Bus",
        ES: "Parada de Autobús"
      },
      description: {
        IT: "Da Aeroporto a Dimora Sorriso\nBus: Linea 16 (AMTAB)\nhttps://maps.app.goo.gl/fMh9m1A4bZ5LE32LA|||Da Stazione Centrale a Dimora Sorriso\nBus: 1, 3, 13, 16, 19, 53\nhttps://maps.app.goo.gl/6xKwwN8JZbNWjKKA7",
        EN: "From Airport to Dimora Sorriso\nBus: Line 16 (AMTAB)\nhttps://maps.app.goo.gl/fMh9m1A4bZ5LE32LA|||From Central Station to Dimora Sorriso\nBus: 1, 3, 13, 16, 19, 53\nhttps://maps.app.goo.gl/6xKwwN8JZbNWjKKA7",
        DE: "Vom Flughafen nach Dimora Sorriso\nBus: Linie 16 (AMTAB)\nhttps://maps.app.goo.gl/fMh9m1A4bZ5LE32LA|||Vom Hauptbahnhof nach Dimora Sorriso\nBus: 1, 3, 13, 16, 19, 53\nhttps://maps.app.goo.gl/6xKwwN8JZbNWjKKA7",
        FR: "De l'Aéroport à Dimora Sorriso\nBus : Ligne 16 (AMTAB)\nhttps://maps.app.goo.gl/fMh9m1A4bZ5LE32LA|||De la Gare Centrale à Dimora Sorriso\nBus : 1, 3, 13, 16, 19, 53\nhttps://maps.app.goo.gl/6xKwwN8JZbNWjKKA7",
        ES: "Del Aeropuerto a Dimora Sorriso\nAutobús: Línea 16 (AMTAB)\nhttps://maps.app.goo.gl/fMh9m1A4bZ5LE32LA|||De la Estación Central a Dimora Sorriso\nAutobús: 1, 3, 13, 16, 19, 53\nhttps://maps.app.goo.gl/6xKwwN8JZbNWjKKA7"
      }
    },
    {
      id: "taxi",
      category: "local",
      icon: "taxi",
      title: {
        IT: "Taxi",
        EN: "Taxi",
        DE: "Taxi",
        FR: "Taxi",
        ES: "Taxi"
      },
      description: {
        IT: "Chiama un taxi",
        EN: "Call a taxi",
        DE: "Taxi rufen",
        FR: "Appeler un taxi",
        ES: "Llamar a un taxi"
      }
    },
    {
      id: "emergency",
      category: "local",
      icon: "siren",
      title: {
        IT: "Emergenza",
        EN: "Emergency",
        DE: "Notfall",
        FR: "Urgence",
        ES: "Emergencia"
      },
      description: {
        IT: "Numeri di emergenza",
        EN: "Emergency numbers",
        DE: "Notrufnummern",
        FR: "Numéros d'urgence",
        ES: "Números de emergencia"
      }
    }
  ]
};