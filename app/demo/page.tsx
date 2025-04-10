// app/demo/page.tsx (forces runtime SSR)
export const dynamic = "force-dynamic"; // tells Next.js to NOT statically pre-render

export default async function Demo() {
    console.log("Runtime server-side log of demo page!..................................");
    return <h1>This is Demo Page</h1>;
}
