import React from 'react'
import {
    CardMeta,
    CardHeader,
    CardDescription,
    CardContent,
    Card,
    Icon,
    Image,
} from 'semantic-ui-react'
 import './product.css'
 
import IProduct from '../Interfaces/iproduct'

 function Prodoct({data}:{data:IProduct}){
    return (
        <Card fluid key={data.productId}>
            <Image  className='product-image' size='medium' rounded src={data.imageUrl} wrapped ui={false} />
            <CardContent>
                <CardHeader>{data.productName}</CardHeader>
                <CardMeta>Joined in 2016</CardMeta>
                <CardDescription>
                    {data.description}
                </CardDescription>
            </CardContent>
            <CardContent extra>
                <a>
                    <Icon name='user' />
                    10 Friends
                </a>
            </CardContent>
        </Card>
    )
}

export default Prodoct