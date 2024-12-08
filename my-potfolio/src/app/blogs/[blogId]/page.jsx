import notFound from "../../not-found"
import notFoundBlog from "./not-found";
export default async function blogPage({params}){
    const {blogId} = await params
    if (isNaN(blogId)) {
        return notFound();
    }
    if (blogId>10){
        return notFoundBlog({"blogId": blogId})
    }

    return (<div>
        <h2 className="h1">blog id : {blogId}</h2>
    </div>)
}