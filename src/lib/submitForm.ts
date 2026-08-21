const FORM_RECIPIENT =
  import.meta.env.VITE_FORM_RECIPIENT_EMAIL ?? "kushintegratedsystems@gmail.com";

type SubmitOptions = {
  subject?: string;
};

export async function submitFormToEmail(
  data: Record<string, string>,
  options: SubmitOptions = {},
): Promise<{ ok: boolean; message: string }> {
  const payload = {
    ...data,
    _subject: options.subject ?? "New message from KIS website",
    _template: "table",
    _captcha: "false",
  };

  try {
    const res = await fetch(`https://formsubmit.co/ajax/${FORM_RECIPIENT}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const json = (await res.json()) as { success?: string; message?: string };

    if (res.ok && json.success === "true") {
      return { ok: true, message: "Submitted successfully." };
    }

    return {
      ok: false,
      message: json.message ?? "Something went wrong. Please try again.",
    };
  } catch {
    return {
      ok: false,
      message: "Network error. Please check your connection and try again.",
    };
  }
}
