/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import Posts from './components/Posts';

const queryClient = new QueryClient();

if (__DEV__) {
  import('react-query-native-devtools').then(({ addPlugin }) => {
    addPlugin({ queryClient });
  });
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView>
        <Posts />
      </SafeAreaView>
    </QueryClientProvider>
  );
}

export default App;
