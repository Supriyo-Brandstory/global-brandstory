import { notFound } from "next/navigation";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';
const STRAPI_TOKEN = process.env.STRAPI_PROD_API_TOKEN;

export async function fetchStrapi(endpoint, options = {}) {
    const res = await fetch(`${STRAPI_URL}/api/${endpoint}`, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${STRAPI_TOKEN}`,
            'Content-Type': 'application/json',
        },
        // Enable ISR or revalidation
        next: { revalidate: 0 },
        cache: 'no-store',
    });
    if (!res.ok) {
        const errorData = await res.json();
        console.error("Strapi Error Details:", errorData.error);
        notFound();
        // throw new Error(`Failed to fetch Strapi data: ${res.statusText}`);
    }
    return await res.json();
}