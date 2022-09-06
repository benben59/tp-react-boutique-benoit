function ContactForm() {
  return (
    <>
      <form className="p-5 bg-dark">
        <div className="mb-3">
          <input
            name="fullName"
            type="text"
            className="form-control"
            placeholder="Nom, prénom"
          />
        </div>
        <div className="mb-3">
          <input
          name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="adress@email.com"
          />
        </div>
        <div className="mb-3">
          <input
            name="topic"
            type="text"
            className="form-control"
            placeholder="Sujet"
          />
        </div>
        <h6 className="text-white">Contactez Nous...</h6>
        <div className="mb-3">
          <input
            name="message"
            type="text"
            className="form-control"
            placeholder="Votre message"
          />
        </div>
        <button className="btn btn-primary">Envoyer</button>
      </form>
    </>
  );
}

export default ContactForm;
