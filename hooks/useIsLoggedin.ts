import { useEffect, useState } from 'react';
import { auth } from '@/firebase'; 
import { onAuthStateChanged, User } from 'firebase/auth';

const useIsLoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setIsLoggedIn(!!user); 
            setLoading(false);
        });

        return () => unsubscribe(); 
    }, []);

    return { isLoggedIn, loading, user };
};

export default useIsLoggedIn;
