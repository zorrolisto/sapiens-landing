const CircleWorkflow = ({
  text,
  margin = "",
}: {
  text: string;
  margin?: string;
}) => {
  return (
    <div
      className={`${margin} circle flex h-32 w-32 items-center justify-center rounded-full`}
    >
      <p className="font-medium">{text}</p>
    </div>
  );
};

export default function Workflow() {
  return (
    <div className="mt-10 flex flex-wrap justify-evenly gap-5 px-5">
      <CircleWorkflow text="1. Evaluación" />
      <CircleWorkflow text="2. Planificación" margin="mt-12" />
      <CircleWorkflow text="3. Ejecución" margin="mt-[-3rem]" />
      <CircleWorkflow text="4. Entrega" />
    </div>
  );
}
