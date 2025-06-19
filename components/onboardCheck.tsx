'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Store } from '@tauri-apps/plugin-store';

export default function OnboardCheck({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkOnboarding() {
      const store = await Store.load('settings.dat');
      const hasOnboarded = (await store.get('hasOnboarded')) || false;

      if (!hasOnboarded) {
        router.replace('/onboard');
      } else {
      }

      setLoading(false);
    }

    checkOnboarding();
  }, [router]);

  if (loading) {
    return null;
  }

  // This technically won’t be shown because of redirect, but just in case:
  return <>{children}</>;
}
