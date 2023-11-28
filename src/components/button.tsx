"use client";

import { FormEvent } from "react";

const resetCache = async () => {
  const search = new URLSearchParams();
  search.set("tag", "uuid");
  const res = await fetch("/api/revalidate?" + search.toString());
  if (!res.ok) {
    throw new Error("Falha ao buscar dados");
  }
  const data = await res.json();
  return data;
};

const ButtonResetCache: React.FC = () => {
  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    try {
        resetCache();
        alert('success')
        location.reload()
        
    } catch (error) {
        alert('error')
    }
  };
  return (
    <form onSubmit={handleClick}>
      <button type="submit">reset cache with api route</button>
    </form>
  );
};

export default ButtonResetCache;
