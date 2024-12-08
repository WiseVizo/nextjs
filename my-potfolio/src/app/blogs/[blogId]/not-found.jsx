export default async function notFoundBlog(params){
    const {blogId} = await params
    return(<h2 className="h1">
        blogId {blogId} not found
    </h2>)
}