import React, { useEffect, useState } from 'react';
import { Grid, GridColumn, GridRow, Segment } from 'semantic-ui-react';
import GetProducts from '../../services/product-service';
import Prodoct from '../../components/product';

function Home() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        GetProducts().then(response => {
            console.log(response.data)
            setProducts(response.data)
        })
    }, []);

    return (
        <Grid  columns={3} >
            <GridRow  >
                {products != null && products.map((prodcut, index) => {
                    return (<GridColumn  className='mb-10'  tablet={6} computer={4} mobile={12}>
                            <Prodoct data={prodcut} />
                    </GridColumn>)
                })}
            </GridRow>


        </Grid>
    );
}

export default Home;