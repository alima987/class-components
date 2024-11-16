import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth";


export default async function ProtectedPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <p>Доступ запрещён. Авторизуйтесь!</p>;
  }

  return <div>Добро пожаловать, {session?.user?.name}!</div>;
}
