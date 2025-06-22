interface NoResultsProps {
  data: {title: string; message: string; resolution: string};
}

export default function NoResults({data}: NoResultsProps) {
  return (
    <div>
      <p>{data.title}</p>
      <p>
        {data.message}
        {data.resolution}
      </p>
    </div>
  );
}
