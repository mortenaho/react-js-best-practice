import React from 'react'
import {
    CardMeta,
    CardHeader,
    CardDescription,
    CardContent,
    Card,
    Icon,
    Image,
    Button,
} from 'semantic-ui-react'

import './product.css'

import IProduct from '../Interfaces/iproduct'
 
import { PatternFormat } from 'react-number-format';
function Prodoct({ data }: { data: IProduct }) {
    return (
        <Card fluid key={data.productId}>
            <Image className='product-image' size='medium' rounded src={data.imageUrl} wrapped ui={false} />
            <CardContent>
                <CardHeader>{data.productName}</CardHeader>
                <CardMeta>Joined in 2016</CardMeta>
                <CardDescription>
                    {data.description}
                </CardDescription>
            </CardContent>
            <CardContent extra>
                <Button primary>
                    <PatternFormat value={data.price.toString()} format="###,###" />;   تومان
                </Button>
            </CardContent>
        </Card>
    )
}

export default Prodoct