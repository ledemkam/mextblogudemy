
type ParamsProgs = {
  params : {
    id: string;
  };
}

export default function Categoriespage({params}: ParamsProgs) {
  const { id } = params;
  return (
    <div>categoriespage {id}</div>
  )
}