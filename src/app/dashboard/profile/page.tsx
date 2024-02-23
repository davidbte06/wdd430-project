import { auth } from "../../../../auth";
import Link from "next/link";

export default async function ProfilePage() {
  // Obtener el usuario actual en sesión
  const user = await auth();
  // User return this output: {user:{ name: 'John Doe', email:'johndoe@gmail.com'}, expires: '2023-03-01'}
  console.log(user);
  const userEmail = user?.user?.email as string;

  // Utilizar los datos del usuario para mostrar en el perfil
  console.log(user);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="mt-8 text-center">
          {user ? (
            user.user ? (
              <h1 className="text-2xl font-bold">Welcome {user.user.name}</h1>
            ) : (
              <h1 className="text-2xl font-bold">Welcome {userEmail}</h1>
            )
          ) : (
            <h1 className="text-2xl font-bold">Welcome</h1>
          )}
          {user ? (
            <h2 className="text-lg mt-2">
              Your email is {user.user ? user.user.email : userEmail}
            </h2>
          ) : (
            <h2 className="text-lg mt-2">Your email is {userEmail}</h2>
          )}
          <Link
            href="/dashboard"
            className="block mt-4 text-blue-500 hover:underline"
          >
            Go to dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
