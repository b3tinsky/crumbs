import React, { Component } from "react";
import { Header, Grid, Container } from "semantic-ui-react";
import styles from "./styles.module.scss";
import Product from './Components/Product';
export class Home extends Component {
  render() {
    return (
      <div>
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
                    (Hacer click en imagen para ver precios)
            </p>
        </Container>
        
        <Grid container stackable columns={2} style={{paddingTop: '3%'}}>
          <Grid.Column>
            <Product price={'$199'} name={'Basque Burnt Cheesecake'} image={require('./Images/BasqueCheesecake.jpg')} />
            <Product price={'Proximamente'} name={'Eclair'} image={require('./Images/Eclair.jpg')} />
          </Grid.Column>
          <Grid.Column>
            <Product price={'Proximamente'} name={'Rol de Canela'} image={require('./Images/CinnamonRoll.jpg')} />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Home;
