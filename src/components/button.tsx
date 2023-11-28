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

import React from "react";

const ButtonResetCache: React.FC = () => {
    const handleClick = (e: React.FormEvent) => {
        e.preventDefault();
        try {
            resetCache();
            alert('success');
            location.reload();
        } catch (error) {
            alert('error');
        }
    };

    return (
        <form onSubmit={handleClick}>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all"
            >
                Reset Cache with API Route
            </button>
        </form>
    );
};

export default ButtonResetCache;
