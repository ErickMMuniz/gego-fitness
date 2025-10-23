import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';

const IndexScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'Gego Fitness by Erick' }} />
      <SafeAreaView style={{ flex: 1}}>
      <Text className='center'> Content is in safe area.</Text>
    </SafeAreaView>
    </>
  );
}

export default IndexScreen