import { GluestackUIProvider} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import Navigation from './src/navigation/Navigation';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Navigation />
    </GluestackUIProvider>
  )
};
