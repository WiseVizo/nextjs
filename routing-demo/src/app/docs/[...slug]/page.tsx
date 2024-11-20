export default async function DocsPage({params}:{params: {slug: string[]}}){
    const parameters = await params
    if (parameters.slug.length==2){
        return <h1>Reading docs feature {parameters.slug[0]} and concept {parameters.slug[1]}</h1>
    }
    else if (parameters.slug.length==3){
        return <h1>Reading docs feature {parameters.slug[0]} and concept {parameters.slug[1]} example {parameters.slug[2]}</h1>
    }
    else{
        return <h1>WoW nerd reading docs :/</h1>
    }
}