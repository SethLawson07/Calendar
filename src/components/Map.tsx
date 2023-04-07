import React from "react";
import { Container } from "react-bootstrap";

function Map() {
  const mapHtml =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2731.6574597996214!2d-71.28676568487836!3d46.79135365192987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb896e05475c2ff%3A0x9d356c46d4cce2b6!2s2323%20Rue%20Galvani%2C%20Qu%C3%A9bec%2C%20QC%20G1N%204H7%2C%20Canada!5e0!3m2!1sfr!2stg!4v1680875967824!5m2!1sfr!2stg" width="100%" height="300" style="border:0;" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

  return (
    <Container fluid className="p-0 h-100 my-2">
      <div className="w-100 h-100" dangerouslySetInnerHTML={{ __html: mapHtml }} />
    </Container>
  );
}

export default Map;
