interface Props {
  children: string;
}
function Message({ children }: Props) {
  const name = children;
  if (name) return <h1>Hello {name}</h1>;
  return <h1>Fuck</h1>;
}

export default Message;
