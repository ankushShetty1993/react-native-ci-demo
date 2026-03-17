import React, {useState, useMemo, useCallback} from 'react';
import {View, Text, FlatList, Button, StyleSheet} from 'react-native';

const Item = React.memo(({item}) => {
  console.log('Rendering:', item.id);
  return <Text>{item.name}</Text>;
});

const App = () => {
  const [count, setCount] = useState(0);
  console.log("test");
  const data = useMemo(() => {
    return new Array(1000).fill(0).map((_, i) => ({
      id: i.toString(),
      name: `Item ${i}`,
    }));
  }, []);

  const renderItem = useCallback(({item}) => {
    return <Item item={item} />;
  }, []);

  return (
    <>
      <Button title="Update" onPress={() => setCount(count + 1)} />

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
  },
});
