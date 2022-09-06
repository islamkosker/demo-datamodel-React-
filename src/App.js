import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react"

// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';

// ----------------------------------------------------------------------



;

function App({ signOut }) {
  return (
    <ThemeProvider signOut={signOut}>
    <View className="App">
      <Card>
      <Button onClick={()=>signOut}>Sign Out</Button>
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      
    </View>

 <ScrollToTop />
 <BaseOptionChartStyle />

 <Router />
</ThemeProvider>

  );
}

export default withAuthenticator(App)
