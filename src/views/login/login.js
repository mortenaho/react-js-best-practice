import * as React from "react";
import { useState } from 'react';
import { Button, ButtonGroup, ButtonOr, Card, CardContent, Checkbox, Form, FormField, Grid, GridColumn, GridRow } from "semantic-ui-react";
import '../login/login.css'
import LoginService from "../../services/login-service";
 

export default function Login() {
   const [loginloading, setLoginloading] = useState(false);
   function loginFormHandleSubmit(e) {
      // Prevent the browser from reloading the page
      e.preventDefault();
      // Read the form data
      setLoginloading(true)
      LoginService(e.target.username.value, e.target.password.value).then(response => {
         setLoginloading(false)
         if(response.data.ResponseCode==200){
            alert(response.data.ResponseMessage)
         }else{
            alert(response.data.ResponseMessage)
         }
      }).finally(() => {
         setLoginloading(false)
      }).catch((err) => {
         setLoginloading(false)
      })
   }
   return (

      <Grid verticalAlign='middle' mobile={16} tablet={4} computer={4} className="h-100 bg-banafsh" padded>
         <GridRow centered >
            <GridColumn mobile={16} tablet={8} computer={4}>
               <Card fluid>
                  <CardContent>
                     <Form onSubmit={loginFormHandleSubmit} >
                        <FormField>
                           <label>نام کاربری</label>
                           <input name="username" placeholder='نام کاربری' />
                        </FormField>
                        <FormField>
                           <label>کلمه عیور</label>
                           <input name="password" type="password" placeholder='کلمه عبور' />
                        </FormField>
                        <FormField>
                           <Checkbox label='مرا به خاطر بسپار' />
                        </FormField>

                        <ButtonGroup>
                           <Button>ثبت نام</Button>
                           <ButtonOr />
                           <Button positive loading={loginloading} active={loginloading}>ورود</Button>
                        </ButtonGroup>
                     </Form>
                  </CardContent>
               </Card>
            </GridColumn>
         </GridRow>
      </Grid>

   );
}