export const metadata = {
  title: "Items",
};

export default function Layout({ children, modal }: any) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}
