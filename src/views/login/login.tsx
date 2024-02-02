import * as React from "react";
import { Button, Card, CardContent, CardDescription, CardHeader, CardMeta, Checkbox, Container, Form, FormField, Grid, GridColumn, GridRow, Icon, Image } from "semantic-ui-react";
import '../login/login.css'

export default function Login() {
   return (
       
         <Grid verticalAlign='middle'  columns={4} className="h-100 bg-banafsh" padded>
            <GridRow centered >
               <GridColumn width={4} >
                  <Card fluid>
                     <CardContent>
                        <Form>
                           <FormField>
                              <label>نام کاربری</label>
                              <input placeholder='نام کاربری' />
                           </FormField>
                           <FormField>
                              <label>کلمه عیور</label>
                              <input placeholder='کلمه عبور' />
                           </FormField>
                           <FormField>
                              <Checkbox label='مرا به خاطر بسپار' />
                           </FormField>
                           <Button type='submit'>ورود</Button>
                        </Form>
                     </CardContent>
                  </Card>
               </GridColumn>
            </GridRow>
         </Grid>
 
   );
}