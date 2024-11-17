async function review({params}:{params: {reviewId: string, product_id: string}}){
   
    const { reviewId, product_id } = await params
    return <h1>Review {reviewId} of product {product_id}</h1>
}

export default review