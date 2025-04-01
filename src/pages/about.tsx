import { FC } from 'react';

export interface AboutProps {
}

const About: FC = (props: AboutProps) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">About</h1>
      <p className="mb-4">This is simple vite template. {JSON.stringify(props)}</p>
    </div>
  );
}
export default About;