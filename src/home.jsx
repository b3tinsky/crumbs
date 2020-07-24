import React, { Component } from "react";
import {
  Header,
  Grid,
  Card,
  Image,
  Reveal,
  Container
} from "semantic-ui-react";
import styles from "./styles.module.scss";
import BCC from './Images/BasqueCheesecake.jpg'
import BCCP from './Images/BasqueCheesecakePiece.jpg'
export class Home extends Component {
  render() {
    return (
      <div>
        {/* <h1 className={styles.header} style={{ fontFamily: "'Pacifico', cursive" }}>Crumbs</h1>
                <h1 className={styles.header} style={{ fontFamily: "'Fugaz One', cursive" }}>Crumbs</h1>
                <h1 className={styles.header} style={{ fontFamily: "'Knewave', cursive" }}>Crumbs</h1> */}
        {/* <h1
          className={styles.header}
          style={{ fontFamily: "'Shrikhand', cursive" }}
        >
          Crumbs
        </h1> */}
        <Header block>
          <h1
            className={styles.header}
            style={{ fontFamily: "'Shrikhand', cursive" }}
          >
            Crumbs
          </h1>
        </Header>
        <Container>
            <p className={styles.instrucciones}>
                    Si algo se te antoja, mandame un mensaje a <span style={{ color: 'black'}}>8180798541</span> diciendome que te gustaria que te prepare, y tu direccion para que te lo lleve ;)
                    Por el momento solo acepto pagos en efectivo.
            </p>
        </Container>
        
        <Grid container stackable columns={1} style={{paddingTop: '3%'}}>
          <Grid.Column>
            <Card fluid>
              <Reveal animated="move" className={styles.revealBackground}>
                <Reveal.Content visible>
                  <Image src={BCC} />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <h1 className={styles.price}>$ 199</h1>
                </Reveal.Content>
              </Reveal>
              <Card.Content>
                <Card.Header textAlign="center">
                  <h1 className={styles.cardHeader}>Basque Burnt Cheesecake</h1>
                </Card.Header>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Home;
