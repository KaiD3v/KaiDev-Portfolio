import emailjs from "@emailjs/browser";

import { motion as m } from "framer-motion";
import { useState } from "react";

const EmailSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailSend, setEmailSend] = useState("");
  const [message, setMessage] = useState("");
  const [monitorEmailShipment, setMonitorEmailShipment] = useState("");

  const handelSendEmail = async (e) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      setEmailSend("Preencha todos os campos!");
      setMonitorEmailShipment("error");
      return;
    }

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        "service_n4tz3te",
        "template_vcv1hpm",
        templateParams,
        "EnhX-oOCHeYE88ttm"
      )
      .then((res) => {
        setEmailSend("E-Mail enviado com sucesso!");
        setMonitorEmailShipment("success");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) =>
        setEmailSend("Ocorreu um erro, tente novamente mais tarde.")
      );
  };

  return (
    <m.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      id="contact"
      className="contact-container"
    >
      <header>
        <h2>Contato</h2>
      </header>
      <main>
        <form onSubmit={handelSendEmail}>
          <label>
            <span>Nome</span>
            <input
              required
              type="text"
              placeholder="Seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name || ""}
            />
          </label>
          <label>
            <span>E-Mail</span>
            <input
              required
              type="email"
              placeholder="Seu E-Mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email || ""}
            />
          </label>
          <label>
            <span>Mensagem</span>
            <textarea
              required
              placeholder="Sua Mensagem"
              onChange={(e) => setMessage(e.target.value)}
              value={message || ""}
            />
          </label>
          <div
            className={`email-send ${
              monitorEmailShipment === "success"
                ? "success"
                : monitorEmailShipment === "error"
                ? "error"
                : ""
            }`}
          >
            {emailSend}
          </div>
          <button type="submit">Enviar</button>
        </form>
      </main>
    </m.section>
  );
};

export default EmailSection;
