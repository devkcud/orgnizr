import TaskCard from "./TaskCard";

function SampleNotes(): JSX.Element {
  return (
    <>
      <TaskCard title="Hello" done={false} priority={1} />
      <TaskCard title="World" done={true} priority={2} dueTo={Date.now()} description="Lorem ipsum sit dolor amet" />
      <TaskCard title="Hello 2" done={false} priority={3} dueTo={Date.now()} />
      <TaskCard title="World 2" done={true} priority={4} description="lorem ipsum" />
    </>
  );
}

export default SampleNotes;
