import React, { useEffect, useState } from 'react';
import { Container, Grid, GridColumn, GridRow, Segment } from 'semantic-ui-react';
import GetProducts from '../../services/product-service';
import Prodoct from '../../components/product';
import IProduct from '../../Interfaces/iproduct';
import './home.css'

function Home() {
    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        GetProducts().then(response => {
            console.log(response.data)
            setProducts(response.data)
        })
    }, []);

    return (
        <Container fluid>
            <Grid>
                <GridRow centered verticalAlign='middle' textAlign='center' color='blue' className='top-banner'>
                    <h1>حراجی برای مهاجرت</h1>
                </GridRow>
            </Grid>
            <Grid columns={3} padded='horizontally'  >
                <GridRow  >
                    {products != null && products.map((prodcut, index) => {
                        return (<GridColumn className='mb-10' tablet={6} computer={4} mobile={12}>
                            <Prodoct data={prodcut} />
                        </GridColumn>)
                    })}
                </GridRow>
            </Grid>
        </Container>
    );
}

export default Home;