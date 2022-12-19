/* eslint-disable react/react-in-jsx-scope */
import {FlatList, Text} from 'react-native';
import {useQuery} from 'react-query';

const getPosts = () =>
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .catch(() => console.error('something went wrong'));

const Posts = () => {
  const query: Record<string, any> = useQuery('posts', getPosts);

  return (
    <>
      {query.data && (
        <FlatList
          data={query.data}
          renderItem={({item}) => (
            <Text style={{padding: 24}}>{item.title}</Text>
          )}
        />
      )}
      {!query.data && <Text>:( fuuu</Text>}
    </>
  );
};

export default Posts;
