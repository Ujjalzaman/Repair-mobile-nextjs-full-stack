'use client';

import { isLoggedIn } from '@/service/auth.service';
import { Button, Result } from 'antd';
import { useRouter } from 'next/navigation';
const ErrorPage = () => {
  const router = useRouter();

  if (typeof window !== 'undefined') {
    const isUserLoggedIn = isLoggedIn();

    if (!isUserLoggedIn) {
      router.push('/login');
    }
  }

  return (
    <div style={{ height: '60vh' }}>
      <div className='mt-5'>
        <Result
          status="warning"
          title="There are some problems with your operation."
          extra={
            <Button type="primary" key="console">
              Go Console
            </Button>
          }
        />
      </div>
    </div>
  )
}

export default ErrorPage;