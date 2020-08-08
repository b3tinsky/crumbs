import React from "react";
import { Card, Image, Reveal } from "semantic-ui-react";
import styles from "../styles.module.scss";

const Product = ({price, name, image}) => {
  return (
    <Card fluid>
      <Reveal animated="move" className={styles.revealBackground}>
        <Reveal.Content visible>
          <Image src={image} />
        </Reveal.Content>
        <Reveal.Content hidden>
          <h1 className={styles.price}>{price}</h1>
        </Reveal.Content>
      </Reveal>
      <Card.Content>
        <Card.Header textAlign="center" >
          <h1 className={styles.cardHeader}>{name}</h1>
        </Card.Header>
      </Card.Content>
    </Card>
  );
};

export default Product;