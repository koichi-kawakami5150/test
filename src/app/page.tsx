'use client';

import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { auth } from './Firebase/config';
import { useState } from 'react';

export default function Home() {
  const [user, setUser] = useState<any>(null);

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>hello warld</h1>
      
      {!user ? (
        <button
          onClick={handleGoogleSignIn}
          className="bg-white text-gray-800 px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 flex items-center gap-2"
        >
          <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
          Googleでログイン
        </button>
      ) : (
        <div className="text-center space-y-3">
          <img src={user.photoURL} alt="プロフィール画像" className="w-20 h-20 rounded-full mx-auto" />
          <div>
            <p className="font-bold text-lg">ようこそ、{user.displayName}さん！</p>
            <p className="text-gray-600">{user.email}</p>
          </div>
          <button
            onClick={handleSignOut}
            className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            ログアウト
          </button>
        </div>
      )}
    </div>
  );
}
