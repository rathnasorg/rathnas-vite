import { FC } from 'react';
import { Link } from 'wouter';
import Layout from '../components/layout';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';

export interface HomeProps {
}

const Home: FC = (props: HomeProps) => {
  return (
    <Layout title='Home' description='Welcome to rathnas vite template' footer='© 2025 Rathnas'>
      <div className="flex flex-col items-center min-h-screen">
        <p className="hidden">{JSON.stringify(props)} </p>
        <Card className="mt-4 px-4">
          <CardHeader>First card</CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardContent>
            <CardDescription>
              This is a description of the card. It can contain any content you want.
            </CardDescription>
          </CardContent>
          <CardFooter className='flex justify-center'>Footer</CardFooter>
          <CardAction>
            <Link href="/about" className="bg-blue-500 text-white px-4 py-2 rounded">
              About
            </Link>
          </CardAction>
        </Card>
      </div>
    </Layout>
  );
}

export default Home;