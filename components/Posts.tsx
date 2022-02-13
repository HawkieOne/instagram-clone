import faker from '@faker-js/faker';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import Post from './Post';
import Stories from './Stories';

export default function Posts() {

    const [posts, setPosts] = useState<Array<any>>([]);

    useEffect(() => 
        onSnapshot(query(collection(db, 'posts'),  orderBy('timestamp', 'desc')), 
        (snapshot) => {
            setPosts(snapshot.docs);
    }), [db])

  return (
      <div>
          {
              posts.map((post => (
                  <Post 
                    key={post.id}
                    id={post.id}
                    username={post.data().username}
                    userImg={post.data().profileImg}
                    img={post.data().image}
                    caption={post.data().caption}
                  />
              )))
          }
      </div>
  );
}
