import { fetchVideoGameById } from '@/lib/data';
import Image from 'next/image';

export default async function VideoGameDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const videoGame = await fetchVideoGameById(params.id);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-3xl px-4 py-8">
        <div className="bg-white overflow-hidden shadow-lg rounded-xl">
          <div className="flex">
            <div className="flex-shrink-0 w-64 h-64">
              <Image
                src={videoGame?.image || 'https://via.placeholder.com/200'}
                alt={'Image of the video game ' + videoGame?.title}
                width={256}
                height={256}
                className="object-cover rounded-l-xl"
              />
            </div>
            <div className="flex-grow px-6 py-4">
              <h1 className="mb-4 text-3xl font-bold">{videoGame?.title}</h1>
              <h2 className="mb-2 text-xl font-semibold">Video Game Details</h2>
              <p className="mb-4 text-gray-700">{videoGame?.description}</p>
              <p>{videoGame?.Platforms} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
