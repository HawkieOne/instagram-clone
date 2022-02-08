import faker from '@faker-js/faker';
import React, { useEffect, useState } from 'react';
import Post from './Post';
import Stories from './Stories';

const posts = [
    {
        id: '123',
        username: 'hawkie',
        userImg: 'https:///links.papareact.com/3ke',
        img: 'https:///links.papareact.com/3ke',
        caption: 'This is dope!',
    },
    {
        id: '123',
        username: 'hawkie',
        userImg: 'https:///links.papareact.com/3ke',
        img: 'https:///links.papareact.com/3ke',
        caption: 'This is dope!',
    },
];

export default function Posts() {

    const [posts, setPosts] = useState<Array<any>>([]);

    useEffect(() => {
        const posts : object[] = [...Array(20)].map((_, i) => ({ 
            ...faker.helpers.contextualCard(),
            id: i,
        }));
        console.log(posts);
        setPosts(posts);
    }, [])

  return (
      <div>
          {
              posts.map((post => (
                  <Post 
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.avatar}
                    img={post.avatar}
                    caption={post.company.catchPhrase}
                  />
              )))
          }
      </div>
  );
}
