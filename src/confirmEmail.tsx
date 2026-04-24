import { useEffect, useState } from "react";

type Status = "loading" | "success" | "error";

export default function VerifyEmail() {
  const [status, setStatus] = useState<Status>("loading");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const verify = async () => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get("token");

      if (!token) {
        setStatus("error");
        setMessage("Токен отсутствует");
        return;
      }

      try {
        const response = await fetch(
          `https://localhost:7193/User/verify-email?token=${encodeURIComponent(token)}`,
          {
            method: "POST",
          }
        );

        const text = await response.text();

        if (response.ok) {
          setStatus("success");
          setMessage(text || "Email подтверждён");
        } else {
          setStatus("error");
          setMessage(text || "Ошибка подтверждения");
        }
      } catch (error) {
        setStatus("error");
        setMessage("Ошибка соединения с сервером");
      }
    };

    verify();
  }, []);

  if (status === "loading") {
    return <div>Подтверждаем email...</div>;
  }

  if (status === "success") {
    return (
      <div>
        <h2>✅ Успешно</h2>
        <p>{message}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>❌ Ошибка</h2>
      <p>{message}</p>
    </div>
  );
}