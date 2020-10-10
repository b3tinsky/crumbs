import React, { Component } from "react";
import { Header, Grid, Container } from "semantic-ui-react";
import styles from "./styles.module.scss";
import Product from "./Components/Product";
export class Home extends Component {
  render() {
    return (
      <div className={styles.homeBg}>
        <Header block style={{ backgroundColor: "black" }}>
          <h1
            className={styles.header}
            style={{ fontFamily: "'Shrikhand', cursive" }}
          >
            Menu
          </h1>
        </Header>
        <Container>
          <p className={styles.instrucciones}>
            Pedidos al <span style={{ color: "black" }}>8180798541</span>. 1 Dia
            de anticipo. <br></br>(Hacer click en imagen para ver precios)
          </p>
        </Container>
        <Grid container stackable columns={2} style={{ paddingTop: "3%" }}>
          <Grid.Column>
            <Product
              price={"$200"}
              name={"Basque Burnt Cheesecake"}
              image={require("./Images/BasqueCheesecake.jpg")}
            />
            <Product
              price={"Proximamente"}
              name={"Eclair"}
              image={require("./Images/Eclair.jpg")}
            />
          </Grid.Column>
          <Grid.Column>
            <Product
              price={"Proximamente"}
              name={"Rol de Canela"}
              image={require("./Images/CinnamonRoll.jpg")}
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Home;
