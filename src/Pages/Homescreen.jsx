import React from "react";
import CategoryCard from "../Components/CategoryCard";
import ContactForm from "../Components/ContactForm";

const Homescreen = () => {
  const cardCategories = [
    {
      id: "1",
      title: "Homme",
      description: "La mode pour les hommes",
      image: "../../assets/img/9782811618124-T.jpg",
    },
    {
      id: "2",
      title: "Femme",
      description: "La mode pour les femmes",
      image: "./assets/img/9782811618124-T.jpg",
    },
    {
      id: "3",
      title: "Enfant",
      description: "La mode pour eux",
      image: "./assets/img/9782811618124-T.jpg",
    },
    {
      id: "4",
      title: `Baby`,
      description: "La mode pour eux aussi",
      image: "./assets/img/9782811618124-T.jpg",
    },
  ];

  return (
    <div>
      <h1>La boutique de Benoît Marlière</h1>
      <div className="row">
        {cardCategories.map((card) => (
          <CategoryCard
            card={card}
            title={card.title}
            description={card.description}
            image={card.image}
            key={card.id}
          />
        ))}
        <ContactForm />
      </div>
    </div>
  );
};

export default Homescreen;
