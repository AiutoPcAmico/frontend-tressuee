import { useParams } from "react-router-dom";

function ProductDetail() {
  const params = useParams();

  console.log(params);
  return <div>Id Trovato: {params.id}</div>;
}

export { ProductDetail };
