// src/tests/Home.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import Home from "../Pages/Home";
import useWeatherFetch from "../Hooks/useWeatherFetch";
import { MemoryRouter } from "reacst-router-dom";
import type { ForecastItem } from "../Types/ForecastItem";

vi.mock("../Hooks/useWeatherFetch");

const mockData: ForecastItem[] = [
  {
    city: { name: "Baku", picture: "baku.png" },
    date: "2025-09-04T00:00:00+00:00",
    temp: 25,
    tempType: "C",
  },
];

let refetchMock: () => void;

beforeEach(() => {
  refetchMock = vi.fn();
});

afterEach(() => {
  vi.clearAllMocks();
});

describe("Home Component", () => {
  it("renders loader when loading", () => {
    (useWeatherFetch as unknown as vi.Mock).mockReturnValue({
      data: undefined,
      isLoading: true,
      error: null,
      refetch: refetchMock,
    });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("renders error message when error occurs", () => {
    (useWeatherFetch as unknown as vi.Mock).mockReturnValue({
      data: undefined,
      isLoading: false,
      error: "Fetch error",
      refetch: refetchMock,
    });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText(/fetch error/i)).toBeInTheDocument();
  });

  it("renders city cards when data is available", () => {
    (useWeatherFetch as unknown as vi.Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
      error: null,
      refetch: refetchMock,
    });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText(/Baku/i)).toBeInTheDocument();
  });

  it("calls refetch when refresh button is clicked", () => {
    (useWeatherFetch as unknown as vi.Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
      error: null,
      refetch: refetchMock,
    });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText(/refresh/i));
    expect(refetchMock).toHaveBeenCalled();
  });
});
