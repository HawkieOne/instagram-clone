import React, { useEffect, useState } from 'react';
import faker from "@faker-js/faker";
import Story from './Story';
import { useSession } from 'next-auth/react';

export default function Stories() {

    const [suggestions, setSuggestions] = useState<Array<any>>([]);
    const { data: session } = useSession();

    useEffect(() => {
        const suggestions : object[] = [...Array(20)].map((_, i) => ({ 
            ...faker.helpers.contextualCard(),
            id: i,
        }));
        setSuggestions(suggestions);
    }, [])

    function getProfile(profile : any) { // make sure all required component's inputs/Props keys&types match
        return {
            img: profile.avatar,
            username: profile.username
        }
      }
        

    return (
        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm
                        overflow-x-scroll scrollbar-thin scrollbar-thumb-black">

            {session && (
                <Story  
                    img={session?.user?.image}
                    username={session?.user?.username!}
                />
            )}

            {suggestions.map((profile) => (
                <Story 
                    key={profile.id}  
                    img={profile.avatar} 
                    username={profile.username}
                />
            ))}
        </div>
    );
}
