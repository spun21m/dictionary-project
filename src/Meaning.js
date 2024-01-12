import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>

        <div className="definition">{props.meaning.definition}</div>
        <div className="example">{props.meaning.example}</div>

        <Synonyms synonyms={props.meaning.synonyms} />
      </section>
    </div>
  );
}
