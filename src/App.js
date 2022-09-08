import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
  Authenticator,
} from "@aws-amplify/ui-react"
import { Auth } from "aws-amplify";
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';


// ----------------------------------------------------------------------



;

 function App({signOut}) {
  return (
  
    <ThemeProvider >

 <ScrollToTop />
 <BaseOptionChartStyle />
 <Router />
</ThemeProvider>

  );
}


export default (App);