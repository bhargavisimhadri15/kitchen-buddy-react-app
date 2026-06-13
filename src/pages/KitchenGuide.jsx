function KitchenGuide({ language }) {
  const text = {
    english: {
      title: "Kitchen Guide",
      subtitle: "Learn basic kitchen items, cooking methods, measurements, and safety tips."
    },
    telugu: {
      title: "వంటగది గైడ్",
      subtitle: "వంటగది వస్తువులు, వంట పద్ధతులు, కొలతలు మరియు భద్రతా చిట్కాలను నేర్చుకోండి."
    },
    hindi: {
      title: "किचन गाइड",
      subtitle: "किचन आइटम, कुकिंग मेथड, माप और सुरक्षा टिप्स सीखें।"
    }
  };

  const guides = {
    english: [
      { icon: "🥄", title: "Spoon", desc: "Used for eating, mixing, and adding ingredients." },
      { icon: "🔪", title: "Knife", desc: "Used for cutting vegetables and fruits carefully." },
      { icon: "🍳", title: "Pan", desc: "Used for frying, roasting, and cooking curries." },
      { icon: "🥘", title: "Pressure Cooker", desc: "Used for cooking rice, dal, and vegetables quickly." },
      { icon: "🧃", title: "Mixer", desc: "Used for grinding chutney, masala, and shakes." },
      { icon: "📏", title: "Measurements", desc: "1 cup = 240 ml, 1 tbsp = 15 ml, 1 tsp = 5 ml." },
      { icon: "🔥", title: "Safety Tips", desc: "Use low flame first and keep water away from hot oil." },
      { icon: "🧂", title: "Spices", desc: "Salt, chilli, turmeric, cumin, and coriander add flavor." }
    ],

    telugu: [
      { icon: "🥄", title: "చెంచా", desc: "తినడానికి, కలపడానికి మరియు పదార్థాలు వేయడానికి ఉపయోగిస్తారు." },
      { icon: "🔪", title: "కత్తి", desc: "కూరగాయలు మరియు పండ్లు జాగ్రత్తగా కోయడానికి ఉపయోగిస్తారు." },
      { icon: "🍳", title: "పాన్", desc: "వేపడానికి, వేయించడానికి మరియు కూరలు వండడానికి ఉపయోగిస్తారు." },
      { icon: "🥘", title: "ప్రెజర్ కుకర్", desc: "అన్నం, పప్పు మరియు కూరగాయలు త్వరగా వండడానికి ఉపయోగిస్తారు." },
      { icon: "🧃", title: "మిక్సర్", desc: "చట్నీ, మసాలా మరియు షేక్‌లు గ్రైండ్ చేయడానికి ఉపయోగిస్తారు." },
      { icon: "📏", title: "కొలతలు", desc: "1 కప్పు = 240 ml, 1 టేబుల్ స్పూన్ = 15 ml, 1 టీ స్పూన్ = 5 ml." },
      { icon: "🔥", title: "భద్రతా చిట్కాలు", desc: "ముందుగా తక్కువ మంట ఉపయోగించండి మరియు వేడి నూనెకు నీరు దూరంగా ఉంచండి." },
      { icon: "🧂", title: "మసాలాలు", desc: "ఉప్పు, కారం, పసుపు, జీలకర్ర మరియు ధనియాలు రుచిని పెంచుతాయి." }
    ],

    hindi: [
      { icon: "🥄", title: "चम्मच", desc: "खाने, मिलाने और सामग्री डालने के लिए उपयोग होता है।" },
      { icon: "🔪", title: "चाकू", desc: "सब्जियां और फल सावधानी से काटने के लिए उपयोग होता है।" },
      { icon: "🍳", title: "पैन", desc: "फ्राई, रोस्ट और करी पकाने के लिए उपयोग होता है।" },
      { icon: "🥘", title: "प्रेशर कुकर", desc: "चावल, दाल और सब्जियां जल्दी पकाने के लिए उपयोग होता है।" },
      { icon: "🧃", title: "मिक्सर", desc: "चटनी, मसाला और शेक पीसने के लिए उपयोग होता है।" },
      { icon: "📏", title: "माप", desc: "1 कप = 240 ml, 1 tbsp = 15 ml, 1 tsp = 5 ml." },
      { icon: "🔥", title: "सुरक्षा टिप्स", desc: "पहले धीमी आंच रखें और गरम तेल से पानी दूर रखें।" },
      { icon: "🧂", title: "मसाले", desc: "नमक, मिर्च, हल्दी, जीरा और धनिया स्वाद बढ़ाते हैं।" }
    ]
  };

  const t = text[language] || text.english;
  const guideItems = guides[language] || guides.english;

  return (
    <main className="guide-page">
      <section className="guide-hero">
        <span className="guide-badge">📚 Kitchen Buddy</span>
        <h1>{t.title}</h1>
        <p>{t.subtitle}</p>
      </section>

      <section className="guide-grid">
        {guideItems.map((item, index) => (
          <div className="guide-card" key={index}>
            <span>{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default KitchenGuide;