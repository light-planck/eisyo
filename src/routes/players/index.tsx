import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/players/")({
	component: Players,
});

function Players() {
	return (
		<div>
			<h1>人物一覧</h1>
		</div>
	);
}
