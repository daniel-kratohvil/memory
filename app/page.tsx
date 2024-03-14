import Image from 'next/image';
import { symbols } from './helpers/cards';
import Card from './components/card';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <Image src="/memory-logo.png" alt="Memory Game" className="w-full max-w-48" width={100} height={24} priority />
      <div className="grid grid-cols-5 gap-5 my-8">
        <Card symbol={symbols[0]} />
        <Card symbol={symbols[0]} />
        <Card symbol={symbols[1]} />
        <Card symbol={symbols[1]} />
        <Card symbol={symbols[2]} />
        <Card symbol={symbols[2]} />
        <Card symbol={symbols[3]} />
        <Card symbol={symbols[3]} />
        <Card symbol={symbols[4]} />
        <Card symbol={symbols[4]} />
        <Card symbol={symbols[5]} />
        <Card symbol={symbols[5]} />
        <Card symbol={symbols[6]} />
        <Card symbol={symbols[6]} />
        <Card symbol={symbols[7]} />
        <Card symbol={symbols[7]} />
        <Card symbol={symbols[8]} />
        <Card symbol={symbols[8]} />
        <Card symbol={symbols[9]} />
        <Card symbol={symbols[9]} />
      </div>
      <button className="bg-fuchsia-600 text-white px-6 py-2 rounded-md">RESTART</button>
    </main>
  );
}
