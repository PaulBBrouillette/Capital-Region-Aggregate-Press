import createClient from "@sanity/client"

export const client = createClient({
    projectId: "xw4897mg",
    dataset: "production",
    useCdn: true,
    apiVersion: "2024-10-19"
})

export default client