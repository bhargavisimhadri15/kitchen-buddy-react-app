import { useState } from "react";

function Contact({ language }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const text = {
    english: {
      title: "Contact Us",
      subtitle: "Have questions or suggestions? We'd love to hear from you.",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      button: "Send Message",
      success: "Message Submitted Successfully!"
    },

    telugu: {
      title: "మమ్మల్ని సంప్రదించండి",
      subtitle: "మీ ప్రశ్నలు లేదా సూచనలు మాకు తెలియజేయండి.",
      name: "మీ పేరు",
      email: "మీ ఇమెయిల్",
      message: "మీ సందేశం",
      button: "సందేశం పంపండి",
      success: "సందేశం విజయవంతంగా పంపబడింది!"
    },

    hindi: {
      title: "संपर्क करें",
      subtitle: "अपने प्रश्न और सुझाव हमारे साथ साझा करें।",
      name: "आपका नाम",
      email: "आपका ईमेल",
      message: "आपका संदेश",
      button: "संदेश भेजें",
      success: "संदेश सफलतापूर्वक भेजा गया!"
    }
  };

  const t = text[language] || text.english;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(t.success);

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>📧 {t.title}</h1>
        <p>{t.subtitle}</p>
      </section>

      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder={t.name}
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder={t.email}
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            rows="6"
            name="message"
            placeholder={t.message}
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">
            {t.button}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;