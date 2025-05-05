const fs = require("fs");
const sanityClient = require("@sanity/client");

const client = sanityClient({
    projectId: "xw4897mg",
    dataset: "production",
    useCdn: true,
    apiVersion: "2024-10-19"
});

async function generateRoutes() {
  try {
    const posts = await client.fetch(`*[_type == "post"]{ "slug": slug.current }`);
    const routes = ["/", ...posts.map(post => `/post/${post.slug}`)];
    console.log("Generated routes:", routes);

    const pkg = require("./package.json");
    pkg.reactSnap = pkg.reactSnap || {};
    pkg.reactSnap.include = routes;

    fs.writeFileSync("package.json", JSON.stringify(pkg, null, 2));
    console.log("Routes injected into package.json for react-snap.");
  } catch (error) {
    console.error("Failed to generate routes:", error);
  }
}

generateRoutes();