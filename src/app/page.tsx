const getData = async () => {
  const res = await fetch("http://httpbin.org/uuid", {
    next: { revalidate: 600, tags: ["uuid"] },
  });
  if (!res.ok) {
    throw new Error("Falha ao buscar dados");
  }
  const data = await res.json();
  return {
    ...data,
    requestTime: new Date().toLocaleDateString("pt-BR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }),
  };
};



import ButtonResetCache from "@/components/button";
import myAction from "./actions";

export default async function Home() {
  const data = await getData();

 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <pre>{JSON.stringify(data)}</pre>

      <form action={myAction}>
        <button type="submit">reset cache with server actions</button>
      </form>

      <ButtonResetCache />
    </main>
  );
}
