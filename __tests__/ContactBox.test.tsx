import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactBox from "@/components/ContactBox";

describe("ContactBox", () => {
  beforeEach(() => {
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

  it("submits to Web3Forms and shows a success message", async () => {
    const user = userEvent.setup();
    render(<ContactBox />);
    await user.type(screen.getByLabelText(/nome/i), "Mario");
    await user.type(screen.getByLabelText(/email/i), "mario@test.it");
    await user.type(screen.getByLabelText(/messaggio/i), "Ciao Chiara");
    await user.click(screen.getByRole("button", { name: /invia/i }));

    await waitFor(() =>
      expect(screen.getByText(/grazie/i)).toBeInTheDocument(),
    );
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
    await user.type(screen.getByLabelText(/nome/i), "Mario");
    await user.type(screen.getByLabelText(/email/i), "mario@test.it");
    await user.type(screen.getByLabelText(/messaggio/i), "Ciao");
    await user.click(screen.getByRole("button", { name: /invia/i }));

    await waitFor(() =>
      expect(screen.getByText(/riprova/i)).toBeInTheDocument(),
    );
  });
});
