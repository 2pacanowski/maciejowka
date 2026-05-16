/* ═══════════════════════════════════════════
   Willa Maciejówka — Main Script
═══════════════════════════════════════════ */

/* ─── Translation dictionary ───────────── */
const translations = {
  en: {
    'meta.title': 'Willa Maciejówka | Historic Mountain Villa in Central Zakopane',
    'meta.desc':  'Book Willa Maciejówka directly and save 10–20%. A historic 1901 Góral villa, National Register of Monuments, steps from Krupówki. Ideal for families and groups. Dogs welcome.',

    'nav.villa':       'Villa',
    'nav.amenities':   'Amenities',
    'nav.location':    'Location',
    'nav.activities':  'Activities',
    'nav.reviews':     'Reviews',
    'nav.book':        'Book Direct',

    'hero.eyebrow':  'A century of stories since 1901',
    'hero.subtitle': 'Discover a century-old villa in the heart of Zakopane - steps from Krupówki, in a peaceful residential street. Perfect for families and groups of friends.',
    'hero.reviews':  '5/5 Airbnb · 10/10 Booking.com',
    'hero.sleeps':   'Sleeps 9',
    'hero.entire':   'Entire villa',
    'hero.bookBtn':  'Book Direct — No Fees',
    'hero.exploreBtn': 'Explore the Villa',
    'hero.saving':   'Save 10%–20% vs. Airbnb or Booking.com',

    'usp1.title': 'A Listed Historic Monument',
    'usp1.desc':  'Built in 1901 and listed on Poland\'s National Register of Monuments, Maciejówka is a rare, living example of authentic Zakopane-style architecture — hand-carved larch, painted gables, and over 120 years of Góral craftsmanship.',
    'usp2.title': 'Prime Central Location',
    'usp2.desc':  'Równień Krupowa meadow and the Krupówki promenade are a short stroll away, yet Sienkiewicza street stays peacefully quiet — the best of both worlds.',
    'usp3.title': 'Exclusively Yours',
    'usp3.desc':  'No shared spaces, no strangers. The entire villa — all four bedrooms, sunny conservatory, and garden — is reserved for your family or group alone.',
    'usp4.title': 'Direct Booking Savings',
    'usp4.desc':  'Book without a middleman. Save 10–20% compared to Airbnb or Booking.com prices, with flexible cancellation and personal support from the owner.',

    'about.eyebrow': 'The Villa',
    'about.title':   'Where Mountain Tradition<br/><em>Meets Modern Comfort</em>',
    'about.lead':    'Built in 1901 and listed on Poland\'s National Register of Monuments, Willa Maciejówka stands on ul. Sienkiewicza — one of Zakopane\'s most sought-after central streets. The original larch-log structure, hand-notched by local Góral craftsmen, has been carefully restored and fitted with every modern comfort while preserving its historic character.',
    'about.body1':   'The ground floor welcomes you with a spacious hall leading to two comfortable bedrooms, each with a large double bed, and a full bathroom. A fully-equipped kitchen flows into a sunny conservatory with a generous dining table — the heart of every family gathering. Outside, a private garden offers a quiet retreat just moments from Zakopane\'s vibrant centre.',
    'about.body2':   'Upstairs, a cosy living room is the perfect place to unwind. Two bedrooms continue the villa\'s folk-art character, both featuring traditional triangular windows that flood the rooms with mountain light. The master bedroom enjoys a private en-suite, while the second bedroom — with a double bed and an additional single — is ideal for families with young children. A shared bathroom serves the rest of the floor. Dogs are welcome.',
    'about.stat1': 'm² living space',
    'about.stat2': 'bedrooms',
    'about.stat3': 'guests max',
    'about.stat4': 'bathrooms',

    'gallery.eyebrow': 'Gallery',
    'gallery.title':   'Life Inside<br/><em>Maciejówka</em>',
    'gallery.cap1': 'Mountain facade in fresh snow',
    'gallery.cap2': 'Sunny conservatory & dining',
    'gallery.cap3': 'Traditional Góral living room',
    'gallery.cap4': "Chef's kitchen",
    'gallery.cap5': 'Master suite',
    'gallery.cap6': 'The view from your terrace',

    'amenities.eyebrow':     'Included in Every Stay',
    'amenities.title':       'Everything You<br/><em>Could Need</em>',
    'amenities.kitchen':     'Fully Equipped Large Kitchen',
    'amenities.conservatory':'Sunny Conservatory & Dining Table',
    'amenities.bedrooms':    '4 Spacious Bedrooms with Double Beds',
    'amenities.bathrooms':   '3 Full Bathrooms',
    'amenities.coffee':      'Coffee Machine with Capsules',
    'amenities.dishwasher':  'Dishwasher & Washing Machine',
    'amenities.tv':          'Smart TV',
    'amenities.wifi':        'High-Speed WiFi',
    'amenities.parking':     'Private Parking (up to 3 cars)',
    'amenities.linen':       'Luxury Linen & Towels',
    'amenities.cosmetics':   'Cosmetics — Soap, Shampoo, Conditioner & Vanity Kits',
    'amenities.hairdryer':   'Hairdryers in Every Bathroom',
    'amenities.water':       'Complimentary Water in Every Bedroom',
    'amenities.pets':        'Pets Welcome',

    'location.eyebrow': 'Location',
    'location.title':   'At the Heart of<br/><em>Zakopane</em>',
    'location.lead':    'Willa Maciejówka sits on ul. Sienkiewicza 18 — a peaceful, tree-lined residential street right in the centre of Zakopane. Równień Krupowa and the famous Krupówki promenade are just a short walk away, while the neighbourhood itself stays wonderfully quiet.',
    'loc.d1': 'Równień Krupowa meadow',      'loc.t1': '3 min walk',
    'loc.d2': 'Krupówki Promenade',          'loc.t2': '5 min walk',
    'loc.d3': 'Kasprowy Wierch Cable Car',   'loc.t3': '15 min by car',
    'loc.d4': 'Nosal Ski Slopes',            'loc.t4': '10 min drive',
    'loc.d5': 'Termy Zakopane Thermal Baths','loc.t5': '8 min drive',
    'loc.d6': 'Morskie Oko Trailhead',       'loc.t6': '25 min drive',
    'loc.d7': 'Kraków Airport (KRK)',        'loc.t7': '1 h 45 min drive',

    'activities.eyebrow':   'All Year Round',
    'activities.title':     'Things To Do<br/><em>in Zakopane</em>',
    'activities.intro':     'From powder slopes to alpine meadows — Zakopane\'s calendar is full year-round.',
    'activities.winterBtn': 'Winter',
    'activities.summerBtn': 'Summer',

    'reviews.eyebrow':     'Guest Voices',
    'reviews.title':       'What Our Guests<br/><em>Remember Most</em>',
    'reviews.airbnbMeta':  '8 reviews',
    'reviews.guestFav':    '★ Guest Favourite',
    'reviews.bookingMeta': '3 reviews',
    'reviews.top10':       'Willa Maciejówka is in the top 10% of highest rated properties in Zakopane according to Airbnb.',
    'reviews.sourceDirect': 'Direct',

    'faq.eyebrow': 'FAQ',
    'faq.title':   'Good Questions<br/><em>Deserve Honest Answers</em>',
    'faq.q1': 'How do I book directly?',
    'faq.a1': 'Use the Book Direct button on this page to check availability and complete your booking in seconds via our secure reservation system — no middlemen, no platform fees, just us.',
    'faq.q2': 'What is your cancellation policy?',
    'faq.a2': 'Cancellations more than 30 days before check-in receive a full refund. 14–30 days: 50% refund. Under 14 days: no refund, but we\'ll do our best to re-let the dates and refund the recovered amount. We strongly recommend travel insurance.',
    'faq.q3': 'Is the villa suitable for young children?',
    'faq.a3': 'Absolutely. We have travel cots and highchairs available on request, and all stair-edges are safety-netted. The central location means families can walk to Krupówki, Równień Krupowa, and Zakopane\'s main attractions with ease. Many of our most enthusiastic repeat guests are families with young children.',
    'faq.q4': 'Are pets welcome?',
    'faq.a4': 'Yes — up to two well-behaved dogs are welcome at no extra charge. We just ask that dogs aren\'t left unattended indoors and aren\'t allowed on furniture. Please mention your pets when booking.',
    'faq.q5': 'What are check-in and check-out times?',
    'faq.a5': 'Check-in is from 15:00 and check-out by 11:00. Early check-in or late check-out can often be arranged subject to availability — just ask. We offer a contactless key-safe system so you\'re never tied to our schedule.',
    'faq.q6': 'Is there parking and how do we get there?',
    'faq.a6': 'Private gated parking for up to 3 cars is included. By car from Kraków: 100 km via the S7 motorway, about 1 hr 45 min. Alternatively, PKP trains run to Zakopane from Warsaw (under 4 hours) and coaches run frequently from Kraków. We\'re happy to help arrange airport transfers — just ask.',
    'faq.q7': 'Can we host a celebration?',
    'faq.a7': 'Small private celebrations (birthdays, anniversaries, corporate retreats) for registered guests are welcome. We ask for prior notice and request that the number of guests does not exceed 12 on any given evening. We\'re not able to host open-invitation parties, to ensure a peaceful environment for neighbours.',

    'contact.eyebrow':          'Get in Touch',
    'contact.title':            'Questions?<br/><em>We\'re Here for You.</em>',
    'contact.body':             'Planning a visit or curious about availability? Have a question about the villa, the area, or anything else? Drop us a message and we\'ll reply within 4 hours.',
    'contact.whatsapp':         'WhatsApp',
    'contact.bookPrompt':       'Ready to book? Use our instant reservation system:',
    'contact.bookBtn':          'Check Availability & Book',
    'contact.formTitle':        'Send Us a Message',
    'contact.firstName':        'First Name',
    'contact.lastName':         'Last Name',
    'contact.email':            'Email Address',
    'contact.phone':            'Phone / WhatsApp',
    'contact.message':          'Your Message',
    'contact.messagePlaceholder': 'Questions about the villa, dates you\'re considering, anything at all — we\'d love to hear from you.',
    'contact.send':             'Send Message',
    'contact.sending':          'Sending…',
    'contact.note':             'We reply within 4 hours · Your details are never shared',
    'contact.successTitle':     'Message Received!',
    'contact.successBody':      'Thank you for getting in touch — we\'ll reply within 4 hours.',

    'trust.t1': 'Secure Payments',       'trust.d1': 'Bank transfer or Stripe — fully protected',
    'trust.t2': '5★ Airbnb · 10/10 Booking.com', 'trust.d2': 'Top 10% of properties in Zakopane',
    'trust.t3': 'Personal Host',         'trust.d3': 'You speak directly with the owner — always',
    'trust.t4': 'Instant Confirmation',  'trust.d4': 'No waiting — availability confirmed same day',

    'footer.brand':        'A family-owned highland retreat in the heart of Zakopane. Crafted for guests who value authenticity, comfort, and nature.',
    'footer.linksTitle':   'Quick Links',
    'footer.lVilla':       'The Villa',
    'footer.lGallery':     'Gallery',
    'footer.lAmenities':   'Amenities',
    'footer.lLocation':    'Location',
    'footer.lActivities':  'Activities',
    'footer.lReviews':     'Reviews',
    'footer.lContact':     'Contact',
    'footer.contactTitle': 'Contact',
    'footer.copy':         '© 2025 Willa Maciejówka. All rights reserved.',
    'footer.privacy':      'Privacy Policy',
    'footer.terms':        'Terms & Conditions',

    'sticky.cta': 'Book Direct — Save up to 20%',
  },

  pl: {
    'meta.title': 'Willa Maciejówka | Historyczna Willa Górska w Centrum Zakopanego',
    'meta.desc':  'Zarezerwuj Willę Maciejówkę bezpośrednio i zaoszczędź 10–20%. Zabytkowa willa z 1901 r., wpisana do Rejestru Zabytków, kilka kroków od Krupówek. Idealna dla rodzin i grup. Psy mile widziane.',

    'nav.villa':       'Willa',
    'nav.amenities':   'Udogodnienia',
    'nav.location':    'Lokalizacja',
    'nav.activities':  'Atrakcje',
    'nav.reviews':     'Opinie',
    'nav.book':        'Rezerwuj bezpośrednio',

    'hero.eyebrow':  'ul. Sienkiewicza 18 · Zakopane · Tatry',
    'hero.subtitle': 'Zabytkowy budynek góralski w centrum Zakopanego — kilka kroków od Krupówek, na spokojnej ulicy mieszkalnej. Idealny dla rodzin i grup przyjaciół. Psy mile widziane.',
    'hero.reviews':  '5/5 Airbnb · 10/10 Booking.com',
    'hero.sleeps':   'Do 9 osób',
    'hero.entire':   'Cała willa',
    'hero.bookBtn':  'Rezerwuj bezpośrednio — bez opłat',
    'hero.exploreBtn': 'Poznaj Willę',
    'hero.saving':   'Zaoszczędź 10%–20% vs. Airbnb lub Booking.com',

    'usp1.title': 'Zabytek na liście MKiDN',
    'usp1.desc':  'Wybudowana w 1901 roku i wpisana do Narodowego Rejestru Zabytków Polski, Maciejówka to rzadki, żywy przykład autentycznej architektury zakopiańskiej — rzeźbione drewno modrzewiowe, zdobione szczyty i ponad 120 lat góralskiego rzemiosła.',
    'usp2.title': 'Doskonała lokalizacja w centrum',
    'usp2.desc':  'Łąka Równień Krupowa i promenada Krupówki są w zasięgu krótkiego spaceru, a ul. Sienkiewicza pozostaje przyjemnie cicha — najlepsze z obu światów.',
    'usp3.title': 'Tylko dla Ciebie',
    'usp3.desc':  'Żadnych wspólnych przestrzeni, żadnych obcych. Cała willa — cztery sypialnie, słoneczna weranda i ogród — zarezerwowana wyłącznie dla Ciebie i Twoich bliskich.',
    'usp4.title': 'Oszczędności przy rezerwacji bezpośredniej',
    'usp4.desc':  'Zarezerwuj bez pośrednika. Zaoszczędź 10–20% w porównaniu z cenami na Airbnb lub Booking.com — z elastyczną polityką anulowania i bezpośrednim kontaktem z właścicielem.',

    'about.eyebrow': 'Willa',
    'about.title':   'Gdzie górska tradycja<br/><em>spotyka nowoczesny komfort</em>',
    'about.lead':    'Zbudowana w 1901 roku i wpisana do Narodowego Rejestru Zabytków Polski, Willa Maciejówka stoi przy ul. Sienkiewicza — jednej z najbardziej pożądanych ulic w centrum Zakopanego. Oryginalna konstrukcja z bali modrzewiowych, wykonana przez miejscowych górali, została starannie odrestaurowana i wyposażona we wszystkie nowoczesne udogodnienia.',
    'about.body1':   'Parter otwiera się na salon z antresolą, ozdobiony tradycyjnymi góralskimi detalami. W pełni wyposażona, duża kuchnia prowadzi do słonecznej werandy z dużym stołem — sercem każdego rodzinnego spotkania. Na zewnątrz prywatny ogród zaprasza do odpoczynku kilka kroków od centrum Zakopanego.',
    'about.body2':   'Na piętrze cztery sypialnie — każda z dużymi łóżkami dwuosobowymi, luksusową pościelą i góralskimi detalami — mogą przyjąć do dziewięciu gości. Trzy łazienki gwarantują komfort wszystkich. Idealna dla rodzin z dziećmi i grup przyjaciół — psy są serdecznie mile widziane.',
    'about.stat1': 'm² powierzchni',
    'about.stat2': 'sypialnie',
    'about.stat3': 'gości max',
    'about.stat4': 'łazienki',

    'gallery.eyebrow': 'Galeria',
    'gallery.title':   'Życie w<br/><em>Maciejówce</em>',
    'gallery.cap1': 'Fasada willi pod świeżym śniegiem',
    'gallery.cap2': 'Słoneczna weranda i jadalnia',
    'gallery.cap3': 'Tradycyjny salon góralski',
    'gallery.cap4': 'Kuchnia szefa kuchni',
    'gallery.cap5': 'Sypialnia główna',
    'gallery.cap6': 'Widok z tarasu',

    'amenities.eyebrow':     'W cenie każdego pobytu',
    'amenities.title':       'Wszystko, czego<br/><em>potrzebujesz</em>',
    'amenities.kitchen':     'Duża w pełni wyposażona kuchnia',
    'amenities.conservatory':'Słoneczna weranda z dużym stołem',
    'amenities.bedrooms':    '4 przestronne sypialnie z łóżkami dwuosobowymi',
    'amenities.bathrooms':   '3 pełne łazienki',
    'amenities.coffee':      'Ekspres do kawy z kapsułkami',
    'amenities.dishwasher':  'Zmywarka i pralka',
    'amenities.tv':          'Smart TV',
    'amenities.wifi':        'Szybkie WiFi',
    'amenities.parking':     'Parking prywatny (do 3 aut)',
    'amenities.linen':       'Luksusowa pościel i ręczniki',
    'amenities.cosmetics':   'Kosmetyki — mydło, szampon, odżywka i zestawy kosmetyczne',
    'amenities.hairdryer':   'Suszarki do włosów w każdej łazience',
    'amenities.water':       'Bezpłatna woda w każdej sypialni',
    'amenities.pets':        'Psy mile widziane',

    'location.eyebrow': 'Lokalizacja',
    'location.title':   'W sercu<br/><em>Zakopanego</em>',
    'location.lead':    'Willa Maciejówka stoi przy ul. Sienkiewicza 18 — spokojnej, zadrzewionej ulicy mieszkalnej w samym centrum Zakopanego. Łąka Równień Krupowa i słynna promenada Krupówki są tuż za rogiem, a sama ulica pozostaje przyjemnie cicha.',
    'loc.d1': 'Łąka Równień Krupowa',     'loc.t1': '3 min pieszo',
    'loc.d2': 'Promenada Krupówki',        'loc.t2': '5 min pieszo',
    'loc.d3': 'Kolejka na Kasprowy Wierch','loc.t3': '15 min samochodem',
    'loc.d4': 'Stoki narciarskie Nosal',   'loc.t4': '10 min samochodem',
    'loc.d5': 'Termy Zakopane',            'loc.t5': '8 min samochodem',
    'loc.d6': 'Szlak na Morskie Oko',      'loc.t6': '25 min samochodem',
    'loc.d7': 'Lotnisko Kraków (KRK)',     'loc.t7': '1 godz. 45 min samochodem',

    'activities.eyebrow':   'Przez cały rok',
    'activities.title':     'Atrakcje<br/><em>Zakopanego</em>',
    'activities.intro':     'Od zaśnieżonych stoków po alpejskie łąki — kalendarz Zakopanego jest pełen atrakcji przez okrągły rok.',
    'activities.winterBtn': 'Zima',
    'activities.summerBtn': 'Lato',

    'reviews.eyebrow':     'Głosy Gości',
    'reviews.title':       'Co nasi goście<br/><em>pamiętają najlepiej</em>',
    'reviews.airbnbMeta':  '8 opinii',
    'reviews.guestFav':    '★ Ulubione przez Gości',
    'reviews.bookingMeta': '3 opinie',
    'reviews.top10':       'Willa Maciejówka należy do 10% najwyżej ocenianych obiektów w Zakopanem według Airbnb.',
    'reviews.sourceDirect': 'Bezpośrednio',

    'faq.eyebrow': 'FAQ',
    'faq.title':   'Dobre pytania<br/><em>zasługują na szczere odpowiedzi</em>',
    'faq.q1': 'Jak zarezerwować bezpośrednio?',
    'faq.a1': 'Kliknij przycisk „Rezerwuj bezpośrednio" na tej stronie — sprawdzisz dostępność i sfinalizujesz rezerwację w kilka sekund przez nasz bezpieczny system. Bez pośredników, bez prowizji.',
    'faq.q2': 'Jaka jest polityka anulowania?',
    'faq.a2': 'Anulowanie ponad 30 dni przed przyjazdem — pełny zwrot. 14–30 dni — 50% zwrotu. Poniżej 14 dni — brak zwrotu, jednak dołożymy wszelkich starań, aby ponownie wynająć obiekt i zwrócić odzyskane środki. Zalecamy wykupienie ubezpieczenia podróżnego.',
    'faq.q3': 'Czy willa nadaje się dla małych dzieci?',
    'faq.a3': 'Oczywiście. Na prośbę udostępniamy łóżeczko turystyczne i krzesełko do karmienia. Wszystkie krawędzie schodów są zabezpieczone. Centralna lokalizacja umożliwia rodzinom spacer na Krupówki i Równień Krupową. Wielu naszych stałych gości przyjeżdża z małymi dziećmi.',
    'faq.q4': 'Czy psy są mile widziane?',
    'faq.a4': 'Tak — do dwóch spokojnych psów jest mile widzianych bez dodatkowych opłat. Prosimy jedynie, by psy nie zostawały same w domu i nie wchodziły na meble. Przy rezerwacji prosimy o wspomnienie o zwierzętach.',
    'faq.q5': 'Jakie są godziny zameldowania i wymeldowania?',
    'faq.a5': 'Zameldowanie od 15:00, wymeldowanie do 11:00. Wcześniejsze zameldowanie lub późniejsze wymeldowanie można zwykle uzgodnić w zależności od dostępności. Oferujemy bezdotykowy system sejfu na klucz, więc nigdy nie jesteś uzależniony od naszego harmonogramu.',
    'faq.q6': 'Czy jest parking i jak do nas dojechać?',
    'faq.a6': 'W cenie jest strzeżony parking dla do 3 samochodów. Samochodem z Krakowa: 100 km drogą S7, ok. 1 godz. 45 min. Pociągami PKP z Warszawy (poniżej 4 godz.) lub autobusami z Krakowa. Chętnie pomożemy zorganizować transport z lotniska — wystarczy zapytać.',
    'faq.q7': 'Czy możemy zorganizować uroczystość?',
    'faq.a7': 'Małe prywatne uroczystości (urodziny, rocznice, wyjazdy firmowe) dla zarejestrowanych gości są mile widziane po wcześniejszym uzgodnieniu. Prosimy, by liczba gości wieczorem nie przekraczała 12 osób. Ze względu na spokój sąsiadów nie organizujemy imprez z otwartymi zaproszeniami.',

    'contact.eyebrow':          'Skontaktuj się',
    'contact.title':            'Pytania?<br/><em>Jesteśmy do dyspozycji.</em>',
    'contact.body':             'Planujesz wizytę lub masz pytania dotyczące dostępności? Napisz do nas — odpowiemy w ciągu 4 godzin.',
    'contact.whatsapp':         'WhatsApp',
    'contact.bookPrompt':       'Gotowy do rezerwacji? Skorzystaj z naszego systemu:',
    'contact.bookBtn':          'Sprawdź dostępność i rezerwuj',
    'contact.formTitle':        'Napisz do nas',
    'contact.firstName':        'Imię',
    'contact.lastName':         'Nazwisko',
    'contact.email':            'Adres e-mail',
    'contact.phone':            'Telefon / WhatsApp',
    'contact.message':          'Twoja wiadomość',
    'contact.messagePlaceholder': 'Pytania o willę, planowane daty, cokolwiek — chętnie odpowiemy.',
    'contact.send':             'Wyślij wiadomość',
    'contact.sending':          'Wysyłanie…',
    'contact.note':             'Odpowiadamy w ciągu 4 godzin · Twoje dane są bezpieczne',
    'contact.successTitle':     'Wiadomość otrzymana!',
    'contact.successBody':      'Dziękujemy za kontakt — odpowiemy w ciągu 4 godzin.',

    'trust.t1': 'Bezpieczne płatności',    'trust.d1': 'Przelew bankowy lub Stripe — w pełni chronione',
    'trust.t2': '5★ Airbnb · 10/10 Booking.com', 'trust.d2': 'Top 10% obiektów w Zakopanem',
    'trust.t3': 'Kontakt z właścicielem', 'trust.d3': 'Rozmawiasz bezpośrednio z właścicielem — zawsze',
    'trust.t4': 'Błyskawiczne potwierdzenie', 'trust.d4': 'Bez czekania — dostępność potwierdzona tego samego dnia',

    'footer.brand':        'Rodzinna górska rezydencja w sercu Zakopanego. Stworzona dla gości ceniących autentyczność, komfort i przyrodę.',
    'footer.linksTitle':   'Szybkie linki',
    'footer.lVilla':       'Willa',
    'footer.lGallery':     'Galeria',
    'footer.lAmenities':   'Udogodnienia',
    'footer.lLocation':    'Lokalizacja',
    'footer.lActivities':  'Atrakcje',
    'footer.lReviews':     'Opinie',
    'footer.lContact':     'Kontakt',
    'footer.contactTitle': 'Kontakt',
    'footer.copy':         '© 2025 Willa Maciejówka. Wszelkie prawa zastrzeżone.',
    'footer.privacy':      'Polityka prywatności',
    'footer.terms':        'Regulamin',

    'sticky.cta': 'Rezerwuj bezpośrednio — oszczędź do 20%',
  }
};

/* ─── Activities content ───────────────── */
const activitiesData = {
  en: {
    winter: [
      { icon: '🎿', title: 'Skiing & Snowboarding', desc: 'Kasprowy Wierch (1,985 m), Nosal and Harenda offer runs for every level. Ski season typically December–March, with slopes just minutes away by car.' },
      { icon: '🛷', title: 'Tobogganing on Gubałówka', desc: "Poland's most iconic toboggan run descends from Gubałówka with sweeping Tatra views. Lifts and sled rentals available on site — fun for all ages." },
      { icon: '🌊', title: 'Thermal Baths', desc: 'Termy Zakopane\'s geothermal pools are just 8 minutes away — the perfect warm-up after a day on the mountain, with indoor and outdoor pools, slides and saunas.' },
      { icon: '❄️', title: 'Winter Walks & Ice Rinks', desc: 'Illuminated promenades, frozen mountain ponds and snow-dusted forests create a magical winter atmosphere perfect for leisurely evening strolls.' },
      { icon: '🧀', title: 'Highland Cuisine & Mulled Wine', desc: 'Warm up with oscypek smoked cheese, żurek soup, bigos stew, and mulled wine at the Krupówki restaurants — just a 5-minute walk from the villa.' },
      { icon: '🐴', title: 'Sleigh Rides', desc: 'Horse-drawn sleighs gliding through snow-covered forest clearings and mountain roads — a unique Góral winter tradition beloved by guests of all ages.' },
    ],
    summer: [
      { icon: '🥾', title: 'Hiking in Tatra National Park', desc: 'Over 275 km of marked trails — from gentle valley walks around Dolina Białego to demanding summit ascents of Świnica (2,301 m). Trailheads are minutes away.' },
      { icon: '🏔️', title: 'Morskie Oko Lake', desc: "Poland's most beautiful mountain lake at 1,395 m altitude. A stunning 10 km return walk through the Roztoka valley — 25 minutes by car from the villa." },
      { icon: '🚡', title: 'Kasprowy Wierch Cable Car', desc: 'Ride to 1,985 m for panoramic views across three mountain ranges. In summer the summit offers breathtaking high-alpine scenery accessible to the whole family.' },
      { icon: '🚵', title: 'Mountain Biking', desc: 'Dedicated MTB trails along the Gubałówka ridge and throughout the Podhale region, ranging from family-friendly gravel paths to technical singletrack.' },
      { icon: '🌊', title: 'Wild Swimming', desc: 'Crystal-clear glacial streams and mountain lakes around Zakopane offer refreshing wild swimming spots — a highlight of any summer stay.' },
      { icon: '🎻', title: 'Góral Culture & Folk Festivals', desc: 'Live highland music and folk dancing on Równień Krupowa (3 min walk), plus the International Festival of Highlander Folklore each August.' },
    ]
  },
  pl: {
    winter: [
      { icon: '🎿', title: 'Narciarstwo i snowboard', desc: 'Kasprowy Wierch (1985 m n.p.m.), Nosal i Harenda oferują trasy dla każdego poziomu. Sezon narciarski trwa zazwyczaj od grudnia do marca — stoki są kilka minut samochodem.' },
      { icon: '🛷', title: 'Sanki na Gubałówce', desc: 'Najsłynniejszy tor saneczkowy w Polsce schodzi z Gubałówki z panoramą Tatr w tle. Wyciągi i wypożyczalnia sanek na miejscu — świetna zabawa dla całej rodziny.' },
      { icon: '🌊', title: 'Termy Zakopane', desc: 'Geotermalne baseny Term Zakopane są zaledwie 8 minut samochodem — idealne miejsce na rozgrzanie po dniu na stoku. Baseny wewnętrzne i zewnętrzne, zjeżdżalnie i sauny.' },
      { icon: '❄️', title: 'Zimowe spacery i lodowiska', desc: 'Oświetlone promenady, zamarznięte górskie stawy i ośnieżone lasy tworzą magiczną zimową atmosferę, idealną do wieczornych spacerów.' },
      { icon: '🧀', title: 'Góralska kuchnia i grzane wino', desc: 'Rozgrzej się oscypkiem, żurkiem, bigosem i grzanym winem w restauracjach na Krupówkach — zaledwie 5 minut spaceru od willi.' },
      { icon: '🐴', title: 'Kuligi', desc: 'Kulig zaprzężony w konie przez zaśnieżone polany i górskie drogi — wyjątkowa góralska tradycja ukochana przez gości w każdym wieku.' },
    ],
    summer: [
      { icon: '🥾', title: 'Piesze wędrówki po TPN', desc: 'Ponad 275 km oznakowanych szlaków — od spokojnych spacerów dolinami po wymagające wejścia na Świnicę (2301 m). Wejścia na szlaki są kilka minut od willi.' },
      { icon: '🏔️', title: 'Morskie Oko', desc: 'Najpiękniejsze górskie jezioro w Polsce na wys. 1395 m. Wspaniały 10 km spacer przez Dolinę Roztoki — 25 minut samochodem od willi.' },
      { icon: '🚡', title: 'Kolejka na Kasprowy Wierch', desc: 'Jedź na 1985 m n.p.m. po panoramiczny widok na trzy pasma górskie. Latem szczyt oferuje zapierające dech widoki dostępne dla całej rodziny.' },
      { icon: '🚵', title: 'Kolarstwo górskie', desc: 'Dedykowane trasy MTB wzdłuż grzbietu Gubałówki i w całym regionie Podhala — od rodzinnych dróg żwirowych po techniczny singletrack.' },
      { icon: '🌊', title: 'Kąpiele w górskich potokach', desc: 'Krystalicznie czyste górskie potoki i jeziora wokół Zakopanego oferują orzeźwiające kąpiele — jeden z letnim hitów w okolicy.' },
      { icon: '🎻', title: 'Kultura góralska i festiwale', desc: 'Żywa muzyka góralska i tańce na Równi Krupowej (3 min spacerem), a w sierpniu Międzynarodowy Festiwal Folkloru Ziem Górskich.' },
    ]
  }
};

/* ─── State ─────────────────────────────── */
let currentLang    = localStorage.getItem('lang') || 'en';
let currentSeason  = 'winter';

/* ─── Apply language ───────────────────── */
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang);

  const t = translations[lang];

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // HTML content (headings with <em> etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });

  // Re-render activities with new language
  renderActivities(lang, currentSeason);

  // Update document title
  if (t['meta.title']) document.title = t['meta.title'];
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && t['meta.desc']) metaDesc.setAttribute('content', t['meta.desc']);
}

/* ─── Render activity cards ────────────── */
function renderActivities(lang, season) {
  const grid = document.getElementById('activitiesGrid');
  if (!grid) return;

  const items = activitiesData[lang]?.[season] || activitiesData.en[season];

  grid.innerHTML = items.map(item => `
    <div class="activity-card">
      <div class="activity-icon">${item.icon}</div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </div>
  `).join('');

  // Re-observe newly rendered cards for reveal animation
  grid.querySelectorAll('.activity-card').forEach((card, i) => {
    card.classList.add('reveal');
    card.dataset.delay = i * 80;
    revealObserver.observe(card);
  });
}

/* ─── Activity tabs ────────────────────── */
function initActivityTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentSeason = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('tab-btn--active'));
      btn.classList.add('tab-btn--active');
      renderActivities(currentLang, currentSeason);
    });
  });
}

/* ─── Language toggle ──────────────────── */
function initLangToggle() {
  ['langToggle', 'langToggleMobile'].forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.addEventListener('click', () => {
      applyLanguage(currentLang === 'en' ? 'pl' : 'en');
    });
  });
}

/* ─── Scroll reveal ────────────────────── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = Number(entry.target.dataset.delay || 0);
      setTimeout(() => entry.target.classList.add('visible'), delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

function assignStaggerDelays() {
  ['.usp-grid', '.amenities-grid', '.reviews-grid', '.faq-list'].forEach(sel => {
    const parent = document.querySelector(sel);
    if (!parent) return;
    parent.querySelectorAll('.reveal').forEach((el, i) => { el.dataset.delay = i * 70; });
  });
}

function initReveal() {
  assignStaggerDelays();
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

/* ─── Navbar scroll behaviour ──────────── */
const navbar   = document.getElementById('navbar');
const stickyCta = document.getElementById('stickyCta');

function handleScroll() {
  const y = window.scrollY;
  navbar.classList.toggle('scrolled', y > 60);
  stickyCta.classList.toggle('visible', y > window.innerHeight * 0.6);
}

/* ─── Mobile hamburger ─────────────────── */
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navMobile  = document.getElementById('navMobile');
  if (!hamburger) return;
  hamburger.addEventListener('click', () => {
    const open = navMobile.classList.toggle('open');
    hamburger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  document.querySelectorAll('.mobile-link').forEach(l => {
    l.addEventListener('click', () => navMobile.classList.remove('open'));
  });
}

/* ─── Smooth scroll with nav offset ────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || !href) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ─── FAQ accordion ────────────────────── */
function initFaq() {
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      document.querySelectorAll('.faq-q').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        b.nextElementSibling.classList.remove('open');
      });
      if (!open) {
        btn.setAttribute('aria-expanded', 'true');
        btn.nextElementSibling.classList.add('open');
      }
    });
  });
}

/* ─── Contact form ─────────────────────── */
function initContactForm() {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (!validateForm(form)) return;

    const btn     = form.querySelector('[type="submit"]');
    const btnText = btn.querySelector('.btn-text');
    const loading = btn.querySelector('.btn-loading');
    btn.disabled = true;
    btnText.hidden = true;
    loading.hidden = false;

    // Simulate submission — replace with real endpoint
    await new Promise(r => setTimeout(r, 1400));

    form.hidden    = true;
    success.hidden = false;
  });

  form.querySelectorAll('input, textarea').forEach(f => {
    f.addEventListener('input', () => f.classList.remove('error'));
  });
}

function validateForm(form) {
  let valid = true;
  form.querySelectorAll('[required]').forEach(field => {
    field.classList.remove('error');
    if (!field.value.trim()) { field.classList.add('error'); valid = false; }
  });
  const email = form.querySelector('[type="email"]');
  if (email?.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    email.classList.add('error'); valid = false;
  }
  if (!valid) form.querySelector('.error')?.focus();
  return valid;
}

/* ─── Nav active link ──────────────────── */
function initNavHighlight() {
  const sections    = document.querySelectorAll('section[id]');
  const navLinks    = document.querySelectorAll('.nav-links a[href^="#"]');
  const secObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${entry.target.id}`));
      }
    });
  }, { threshold: 0.35 });
  sections.forEach(s => secObserver.observe(s));
}

/* ─── Boot ──────────────────────────────── */
window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();

document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initActivityTabs();
  initLangToggle();
  initHamburger();
  initSmoothScroll();
  initFaq();
  initContactForm();
  initNavHighlight();

  // Initial render
  applyLanguage(currentLang);
});
