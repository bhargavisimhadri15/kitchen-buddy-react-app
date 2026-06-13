function FAQ({ language }) {
  const text = {
    english: {
      title: "Frequently Asked Questions",
      q1: "What is Kitchen Buddy?",
      a1: "Kitchen Buddy is a React.js recipe app that helps users learn and manage recipes.",
      q2: "Does it need internet?",
      a2: "Recipe data works offline using local JSON and localStorage. YouTube videos need internet.",
      q3: "Can I upload my own dish?",
      a3: "Yes, you can upload, edit, delete, and save your own recipes.",
      q4: "Which languages are supported?",
      a4: "Kitchen Buddy supports English, Telugu, and Hindi.",
      q5: "Is backend required?",
      a5: "No backend is required. This project uses localStorage for user recipes."
    },
    telugu: {
      title: "తరచుగా అడిగే ప్రశ్నలు",
      q1: "Kitchen Buddy అంటే ఏమిటి?",
      a1: "Kitchen Buddy అనేది React.js వంటకాల యాప్.",
      q2: "ఇంటర్నెట్ అవసరమా?",
      a2: "వంటకాల డేటా ఆఫ్‌లైన్‌లో పని చేస్తుంది. YouTube వీడియోలకు ఇంటర్నెట్ అవసరం.",
      q3: "నా వంటకం అప్లోడ్ చేయవచ్చా?",
      a3: "అవును, మీరు మీ వంటకాన్ని అప్లోడ్, ఎడిట్, డిలీట్ చేయవచ్చు.",
      q4: "ఏ భాషలు ఉన్నాయి?",
      a4: "English, Telugu, Hindi భాషలు ఉన్నాయి.",
      q5: "Backend అవసరమా?",
      a5: "లేదు. User recipes కోసం localStorage ఉపయోగించబడింది."
    },
    hindi: {
      title: "अक्सर पूछे जाने वाले प्रश्न",
      q1: "Kitchen Buddy क्या है?",
      a1: "Kitchen Buddy एक React.js recipe app है।",
      q2: "क्या इंटरनेट चाहिए?",
      a2: "Recipe data offline चलता है। YouTube videos के लिए internet चाहिए।",
      q3: "क्या मैं अपनी dish upload कर सकता हूँ?",
      a3: "हाँ, आप recipes upload, edit और delete कर सकते हैं।",
      q4: "कौन सी languages supported हैं?",
      a4: "English, Telugu और Hindi supported हैं।",
      q5: "क्या backend चाहिए?",
      a5: "नहीं। यह app user recipes के लिए localStorage use करता है।"
    }
  };

  const t = text[language] || text.english;

  const faqs = [
    { q: t.q1, a: t.a1 },
    { q: t.q2, a: t.a2 },
    { q: t.q3, a: t.a3 },
    { q: t.q4, a: t.a4 },
    { q: t.q5, a: t.a5 }
  ];

  return (
    <main className="faq-page">
      <section className="faq-hero">
        <h1>❓ {t.title}</h1>
      </section>

      <section className="faq-container">
        {faqs.map((faq, index) => (
          <div className="faq-card" key={index}>
            <h3>{faq.q}</h3>
            <p>{faq.a}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default FAQ;