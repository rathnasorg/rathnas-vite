import { FC } from 'react';

export interface NotFoundProps {
}

const NotFound: FC = (props: NotFoundProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
      <p className="text-lg">The page you are looking for does not exist. {JSON.stringify(props)}</p>
    </div>
  );
}
export default NotFound;