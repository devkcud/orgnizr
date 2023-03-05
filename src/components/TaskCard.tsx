function TaskCard(props: { title: string, description?: string | undefined, done: boolean, dueTo?: number | undefined, priority: number }): JSX.Element {
  return (
    <div>
      <h2>{props.title}</h2>
      {props.description !== undefined && <p>{props.description}</p>}
      <p>Done: {props.done ? 'Yes' : 'No'}</p>
      <p>Due To: TODO</p>
      <p>Priority: {props.priority}</p>
    </div>
  );
}

export default TaskCard;
