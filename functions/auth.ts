// functions/auth.ts
export async function onRequestGet({ request }: { request: Request }): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  if (!code) {
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=repo`;
    return Response.redirect(githubAuthUrl, 302);
  }

  const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { Accept: "application/json" },
    body: new URLSearchParams({
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: REDIRECT_URI,
    }),
  });

  const tokenJson = await tokenRes.json();

  return new Response(JSON.stringify(tokenJson), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

const GITHUB_CLIENT_ID = "Ov23liIN8EtYxQQBa8Td";
const GITHUB_CLIENT_SECRET = "b590102ed5519feefc15ef0dc24e8737aab6de04";
const REDIRECT_URI = "https://jnc-template.pages.dev/api/auth/callback";
