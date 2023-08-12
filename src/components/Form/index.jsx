import { useRef, useState } from "react";
import { Form, Button } from "./styled";
import { Main } from "../../styles/globalStyles";
import { useForm, ValidationError } from "@formspree/react";

export function MyForm() {
  const form = useRef();
  const [state, handleSubmit] = useForm("xnqkpddq");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function submitForm() {
    if (state.succeeded) {
      setName("");
      setEmail("");
      setMessage("");
    }
  }

  return (
    <Main>
      <h1>Entre em Contato Comigo</h1>
      <Form ref={form} onSubmit={handleSubmit}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Darlan Bomfim"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="name@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">Mensagem</label>
        <textarea
          name="message"
          id="message"
          placeholder="Mensagem"
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <Button type="submit" disabled={state.submitting} onClick={submitForm}>
          Enviar
        </Button>
      </Form>
    </Main>
  );
}
