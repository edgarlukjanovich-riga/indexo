interface Props {
  message: string;
}

export default function ErrorAlert({ message }: Props) {
  return <div className="alert alert-danger">{message}</div>;
}
