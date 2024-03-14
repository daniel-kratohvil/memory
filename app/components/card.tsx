import type { MouseEventHandler } from 'react';

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  symbol: string;
};

export default function Card({ onClick, symbol }: Props) {
  return (
    <div className="flex justify-center items-center h-28 w-20 rounded-md border-2 border-fuchsia-600 text-5xl bg-white">
      {symbol}
    </div>
  );
}
