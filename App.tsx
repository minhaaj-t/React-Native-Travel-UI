import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCard';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import Slider from './components/Slider';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Slider />
        <FlatCard />
        <ElevatedCard />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
