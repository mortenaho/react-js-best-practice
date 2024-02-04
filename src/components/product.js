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

function Prodoct ({data}){
    return (
        <Card fluid key={data.productId}>
            <Image src={data.imageUrl} wrapped ui={false} />
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