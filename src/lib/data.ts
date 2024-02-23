'use server';

import prisma from './prismadb';
import { unstable_noStore as noStore, revalidatePath } from 'next/cache';

// Fetchs for users data
export async function fetchUserById(id: string) {
  noStore();
  try {
    const user = await prisma.userGame.findUnique({
      where: {
        id,
      },
    });
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function fetchUserByEmail(email: string) {
  noStore();
  try {
    const user = await prisma.userGame.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function fetchUsers() {
  noStore();
  try {
    const users = await prisma.userGame.findMany();
    return users;
  } catch (error) {
    console.error('Failed to fetch users:', error);
    throw new Error('Failed to fetch users.');
  }
}

// Fetchs for video games data
export async function fetchVideoGames() {
  try {
    const videoGames = await prisma.videoGame.findMany();
    return videoGames;
  } catch (error) {
    console.error("Failed to fetch video games:", error);
    throw new Error("Failed to fetch video games.");
  }
}

export async function fetchVideoGameById(id: string) {
  try {
    const videoGame = await prisma.videoGame.findUnique({
      where: {
        id,
      },
    });
    return videoGame;
  } catch (error) {
    console.error("Failed to fetch video game:", error);
    throw new Error("Failed to fetch video game.");
  }
}

// Fetch video games data with search query
export async function fetchFilteredVideoGames(query: string) {
  try {
    const videoGames = await prisma.videoGame.findMany({
      where: {
        OR: [
          { title: { contains: query } },
          { description: { contains: query } },
        ],
      },
    });
    return videoGames;
  } catch (error) {
    console.error("Failed to fetch video games:", error);
    throw new Error("Failed to fetch video games.");
  }
}

// Fetch video games by platform
export async function fetchVideoGamesByPlatform(platform: string) {
  try {
    const videoGames = await prisma.videoGame.findMany({
      where: {
        Platforms: {
          has: platform,
        },
      },
    });
    return videoGames;
  } catch (error) {
    console.error("Failed to fetch video games:", error);
    throw new Error("Failed to fetch video games.");
  }
}

export async function deleteVideoGame(id: string) {
  try {
    const videoGame = await prisma.videoGame.findUnique({
      where: {
        id,
      },
    });

    if (!videoGame) {
      throw new Error("Video game not found.");
    }

    // Check again right before deleting
    const videoGameToDelete = await prisma.videoGame.findUnique({
      where: {
        id,
      },
    });

    if (!videoGameToDelete) {
      throw new Error("Video game not found.");
    }

    await prisma.videoGame.delete({
      where: {
        id,
      },
    });

    revalidatePath("dashboard/profile/video-games");
  } catch (error) {
    console.error("Failed to delete video game:", error);
    throw new Error("Failed to delete video game.");
  }
}
