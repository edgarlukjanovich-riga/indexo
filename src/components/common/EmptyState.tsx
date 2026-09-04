interface Props {
  message: string;
}

export default function EmptyState({ message }: Props) {
  return <p className="text-muted text-center py-5">{message}</p>;
}
