const kitchenItems = {
  english: [
    { icon: "🥄", name: "Spoon", use: "Used for eating, mixing, and adding ingredients." },
    { icon: "🔪", name: "Knife", use: "Used for cutting vegetables and fruits." },
    { icon: "🍳", name: "Pan", use: "Used for frying and cooking curry." },
    { icon: "🥘", name: "Pressure Cooker", use: "Used for cooking rice and dal quickly." },
    { icon: "🧃", name: "Mixer", use: "Used for grinding chutney, masala, and juice." },
    { icon: "🍽️", name: "Plate", use: "Used for serving food." }
  ],
  telugu: [
    { icon: "🥄", name: "చెంచా", use: "తినడానికి, కలపడానికి ఉపయోగిస్తారు." },
    { icon: "🔪", name: "కత్తి", use: "కూరగాయలు, పండ్లు కోయడానికి ఉపయోగిస్తారు." },
    { icon: "🍳", name: "పాన్", use: "వేపడానికి మరియు కూర వండడానికి ఉపయోగిస్తారు." },
    { icon: "🥘", name: "ప్రెజర్ కుకర్", use: "అన్నం, పప్పు త్వరగా వండడానికి ఉపయోగిస్తారు." },
    { icon: "🧃", name: "మిక్సర్", use: "చట్నీ, మసాలా గ్రైండ్ చేయడానికి ఉపయోగిస్తారు." },
    { icon: "🍽️", name: "ప్లేట్", use: "ఆహారం సర్వ్ చేయడానికి ఉపయోగిస్తారు." }
  ],
  hindi: [
    { icon: "🥄", name: "चम्मच", use: "खाने और सामग्री मिलाने के लिए उपयोग होता है." },
    { icon: "🔪", name: "चाकू", use: "सब्जियां और फल काटने के लिए उपयोग होता है." },
    { icon: "🍳", name: "पैन", use: "फ्राई करने और करी बनाने के लिए उपयोग होता है." },
    { icon: "🥘", name: "प्रेशर कुकर", use: "चावल और दाल जल्दी पकाने के लिए उपयोग होता है." },
    { icon: "🧃", name: "मिक्सर", use: "चटनी और मसाला पीसने के लिए उपयोग होता है." },
    { icon: "🍽️", name: "प्लेट", use: "खाना परोसने के लिए उपयोग होती है." }
  ]
};

function KitchenGuide({ language }) {
  const title = {
    english: "Kitchen Guide",
    telugu: "వంటగది గైడ్",
    hindi: "किचन गाइड"
  };

  const items = kitchenItems[language] || kitchenItems.english;

  return (
    <main className="page">
      <h1>{title[language] || title.english}</h1>

      <div className="guide-grid">
        {items.map((item, index) => (
          <div className="guide-card" key={index}>
            <span>{item.icon}</span>
            <h3>{item.name}</h3>
            <p>{item.use}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default KitchenGuide;