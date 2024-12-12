import notFound from "../../not-found"
import notFoundBlog from "./not-found";


export async function generateMetadata({ params }) {
    const { blogId } = await params;
    return {
        title: `blog: ${blogId}`
    }
}

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