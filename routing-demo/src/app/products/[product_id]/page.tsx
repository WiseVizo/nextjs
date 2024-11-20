export default async function ProductID({params}: {params: {product_id: string}}){
const { product_id } = await params
return <h1>Product ID: {product_id}</h1>
}
