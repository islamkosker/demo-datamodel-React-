import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react"
import "@aws-amplify/ui-react/styles.css";
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
    <ThemeProvider>
    <View className="App">
      <Card>
        
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>

 <ScrollToTop />
 <BaseOptionChartStyle />
 <Router />
</ThemeProvider>

  );
}

export default withAuthenticator(App)
