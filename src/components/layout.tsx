
import { FC, ReactNode } from 'react';

export interface LayoutProps {
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
  footer?: string;
  [key: string]: any;
}

const Layout: FC<LayoutProps> = (props: LayoutProps) => {
  return (
    <div className={`flex flex-col items-center min-h-screen ${props.className}`} {...props}>
      {props.title && <h1 className="text-4xl font-bold mb-4">{props.title}</h1>}
      {props.description && <p className="text-lg">{props.description}</p>}
      {props.children}
      {props.footer && <footer className="mt-4 text-center">
        <p>{props.footer}</p>
      </footer>}
    </div>
  );
}

export default Layout;