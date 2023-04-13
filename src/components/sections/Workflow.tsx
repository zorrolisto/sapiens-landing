export default function Workflow() {
  return (
    <div className="mt-10 flex flex-wrap justify-between gap-5 px-5">
      <div className="circle flex h-32 w-32 items-center justify-center rounded-full border-2 border-primary">
        <p className="font-medium">1. Evaluación</p>
      </div>
      <div className="circle mt-12 flex h-32 w-32 items-center justify-center rounded-full border-2 border-primary">
        <p className="font-medium">2. Planificación</p>
      </div>
      <div className="circle mt-[-3rem] flex h-32 w-32 items-center justify-center rounded-full border-2 border-primary">
        <p className="font-medium">3. Ejecución</p>
      </div>
      <div className="circle flex h-32 w-32 items-center justify-center rounded-full border-2 border-primary">
        <p className="font-medium">4. Entrega</p>
      </div>
    </div>
  );
}
