import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import KontaktContent from '@/app/kontakt/KontaktContent';
import React from 'react';

// --- module mocks -------------------------------------------------------

vi.mock('@/components/Header', () => ({ Header: () => null }));
vi.mock('@/components/Footer', () => ({ Footer: () => null }));
vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) =>
    React.createElement('a', { href }, children),
}));
vi.mock('motion/react', () => ({
  motion: new Proxy({} as Record<string, unknown>, {
    get(_t, tag: string) {
      return function MotionStub({
        children,
        initial: _i,
        animate: _a,
        transition: _tr,
        ...rest
      }: React.PropsWithChildren<Record<string, unknown>>) {
        return React.createElement(tag, rest, children);
      };
    },
  }),
}));

// --- helpers ------------------------------------------------------------

function fillForm(user: ReturnType<typeof userEvent.setup>) {
  return async () => {
    await user.type(screen.getByLabelText(/Name/i), 'Max Mustermann');
    await user.type(screen.getByLabelText(/E-Mail/i), 'max@beispiel.de');
    await user.type(screen.getByLabelText(/Ihr Anliegen/i), 'Das ist ein längeres Anliegen mit ausreichend Text.');
  };
}

beforeEach(() => {
  vi.restoreAllMocks();
  global.fetch = vi.fn();
});

// --- tests --------------------------------------------------------------

describe('KontaktContent – form rendering', () => {
  it('renders all form fields', () => {
    render(<KontaktContent />);
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/E-Mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Unternehmen/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mitarbeiteranzahl/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Ihr Anliegen/i)).toBeInTheDocument();
  });

  it('renders the submit button', () => {
    render(<KontaktContent />);
    expect(
      screen.getByRole('button', { name: /Kostenlose IT-Einschätzung anfordern/i }),
    ).toBeInTheDocument();
  });

  it('honeypot field is present but not visible to users', () => {
    const { container } = render(<KontaktContent />);
    const honeypot = container.querySelector('input[name="_gotcha"]') as HTMLInputElement;
    expect(honeypot).toBeTruthy();
    expect(honeypot.style.opacity).toBe('0');
  });
});

describe('KontaktContent – form submission', () => {
  it('shows a spinner while submitting', async () => {
    vi.mocked(global.fetch).mockReturnValue(new Promise(() => {})); // never resolves
    const user = userEvent.setup();
    render(<KontaktContent />);
    await fillForm(user)();
    await user.click(screen.getByRole('button', { name: /Kostenlose IT-Einschätzung anfordern/i }));

    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled();
  });

  it('shows the success screen after a successful API response', async () => {
    vi.mocked(global.fetch).mockResolvedValue(
      new Response(JSON.stringify({ ok: true }), { status: 200 }),
    );
    const user = userEvent.setup();
    render(<KontaktContent />);
    await fillForm(user)();
    await user.click(screen.getByRole('button', { name: /Kostenlose IT-Einschätzung anfordern/i }));

    expect(await screen.findByText(/Anfrage gesendet/i)).toBeInTheDocument();
  });

  it('shows error message when API returns an error', async () => {
    vi.mocked(global.fetch).mockResolvedValue(
      new Response(
        JSON.stringify({ error: 'Versandfehler. Bitte versuchen Sie es erneut.' }),
        { status: 500 },
      ),
    );
    const user = userEvent.setup();
    render(<KontaktContent />);
    await fillForm(user)();
    await user.click(screen.getByRole('button', { name: /Kostenlose IT-Einschätzung anfordern/i }));

    expect(await screen.findByText(/Versandfehler/i)).toBeInTheDocument();
  });

  it('shows network error message when fetch throws', async () => {
    vi.mocked(global.fetch).mockRejectedValue(new TypeError('Network error'));
    const user = userEvent.setup();
    render(<KontaktContent />);
    await fillForm(user)();
    await user.click(screen.getByRole('button', { name: /Kostenlose IT-Einschätzung anfordern/i }));

    expect(await screen.findByText(/Netzwerkfehler/i)).toBeInTheDocument();
  });

  it('"Weitere Nachricht senden" resets the form', async () => {
    vi.mocked(global.fetch).mockResolvedValue(
      new Response(JSON.stringify({ ok: true }), { status: 200 }),
    );
    const user = userEvent.setup();
    render(<KontaktContent />);
    await fillForm(user)();
    await user.click(screen.getByRole('button', { name: /Kostenlose IT-Einschätzung anfordern/i }));

    await screen.findByText(/Anfrage gesendet/i);
    await user.click(screen.getByRole('button', { name: /Weitere Nachricht senden/i }));

    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
  });
});
