"use client";

import { useState } from "react";

const players = [
  {
    id: 1,
    name: "近藤 健介",
    team: "福岡ソフトバンクホークス",
    position: "外野手",
  },
  {
    id: 2,
    name: "柳田 悠岐",
    team: "福岡ソフトバンクホークス",
    position: "外野手",
  },
  {
    id: 3,
    name: "栗原 陵矢",
    team: "福岡ソフトバンクホークス",
    position: "三塁手",
  },
];

export default function Home() {
  const [currentPlayer, setCurrentPlayer] = useState(players[0]);
  const [selectedPlayers, setSelectedPlayers] = useState<typeof players>([]);

  const nextPlayer = () => {
    const randomIndex = Math.floor(Math.random() * players.length);
    setCurrentPlayer(players[randomIndex]);
  };

  const takePlayer = () => {
    setSelectedPlayers([...selectedPlayers, currentPlayer]);
    nextPlayer();
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="mb-10 text-center text-3xl font-bold">
          野球チームメーカー
        </h1>

        <div className="mx-auto max-w-md rounded-2xl bg-slate-900 p-8 shadow-xl">
          <p className="mb-2 text-sm text-slate-400">
            {currentPlayer.team}
          </p>

          <h2 className="text-3xl font-bold">
            {currentPlayer.name}
          </h2>

          <p className="mt-3 text-lg text-slate-300">
            {currentPlayer.position}
          </p>

          <div className="mt-8 flex gap-4">
            <button
              onClick={nextPlayer}
              className="flex-1 rounded-xl bg-slate-700 px-5 py-3 font-bold hover:bg-slate-600"
            >
              見送る
            </button>

            <button
              onClick={takePlayer}
              className="flex-1 rounded-xl bg-blue-600 px-5 py-3 font-bold hover:bg-blue-500"
            >
              取る
            </button>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="mb-4 text-xl font-bold">
            獲得選手 {selectedPlayers.length}人
          </h2>

          <div className="space-y-2">
            {selectedPlayers.map((player, index) => (
              <div
                key={`${player.id}-${index}`}
                className="rounded-lg bg-slate-900 px-4 py-3"
              >
                {player.name} / {player.position}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}