import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactBox from "@/components/ContactBox";

const { pushMock } = vi.hoisted(() => ({ pushMock: vi.fn() }));

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: pushMock }),
}));

// Stub hCaptcha: a button that "solves" it by calling onVerify.
vi.mock("@hcaptcha/react-hcaptcha", async () => {
  const React = await import("react");
  const HCaptchaMock = React.forwardRef(function HCaptchaMock(
    props: { onVerify?: (token: string) => void },
    ref,
  ) {
    React.useImperativeHandle(ref, () => ({ resetCaptcha: () => {} }));
    return (
      <button type="button" onClick={() => props.onVerify?.("test-token")}>
        solve-captcha
      </button>
    );
  });
  return { default: HCaptchaMock };
});

async function fillForm(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText(/nome/i), "Mario");
  await user.type(screen.getByLabelText(/email/i), "mario@test.it");
  await user.type(screen.getByLabelText(/messaggio/i), "Ciao Chiara");
}

describe("ContactBox", () => {
  beforeEach(() => {
    pushMock.mockClear();
    vi.stubGlobal(
      "fetch",
      vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ success: true }),
        }),
      ) as unknown as typeof fetch,
    );
    vi.stubEnv("NEXT_PUBLIC_WEB3FORMS_KEY", "test-key");
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.unstubAllEnvs();
  });

  it("renders name, email and message fields", () => {
    render(<ContactBox />);
    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/messaggio/i)).toBeInTheDocument();
  });

  it("blocks submit until the captcha is solved", async () => {
    const user = userEvent.setup();
    render(<ContactBox />);
    await fillForm(user);
    await user.click(screen.getByRole("button", { name: /invia/i }));

    expect(screen.getByText(/verifica anti-spam/i)).toBeInTheDocument();
    expect(fetch).not.toHaveBeenCalled();
  });

  it("submits to Web3Forms and redirects to /thank-you on success", async () => {
    const user = userEvent.setup();
    render(<ContactBox />);
    await fillForm(user);
    await user.click(screen.getByText("solve-captcha"));
    await user.click(screen.getByRole("button", { name: /invia/i }));

    await waitFor(() => expect(pushMock).toHaveBeenCalledWith("/thank-you"));
    expect(fetch).toHaveBeenCalledWith(
      "https://api.web3forms.com/submit",
      expect.objectContaining({ method: "POST" }),
    );
  });

  it("shows an error message when the API rejects", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ success: false }),
        }),
      ) as unknown as typeof fetch,
    );
    const user = userEvent.setup();
    render(<ContactBox />);
    await fillForm(user);
    await user.click(screen.getByText("solve-captcha"));
    await user.click(screen.getByRole("button", { name: /invia/i }));

    await waitFor(() =>
      expect(screen.getByText(/riprova/i)).toBeInTheDocument(),
    );
    expect(pushMock).not.toHaveBeenCalled();
  });
});
