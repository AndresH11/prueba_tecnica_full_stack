export function ErrorMessage({ children }: { children: React.ReactNode }) {
	return <small className="block font-medium text-red-600">{children}</small>
}
