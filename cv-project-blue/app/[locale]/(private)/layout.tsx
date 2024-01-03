type PrivateLayoutProps = {
  children: React.ReactNode;
};

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default PrivateLayout;
