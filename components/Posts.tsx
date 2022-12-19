import React, { FC } from 'react';
import { FlatList, Text } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { useQuery } from 'react-query';

const getPosts = () =>
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .catch(err => console.error(err));

const Posts: FC = () => {
  const { data } = useQuery('posts', getPosts);
  const padding = { padding: 24 };
  console.log('hello!');
  return (
    <>
      <Header>Hello</Header>
      {data && (
        <FlatList
          data={data}
          renderItem={({ item }) => <Text style={padding}>{item.title}</Text>}
        />
      )}
    </>
  );
};

export default Posts;
