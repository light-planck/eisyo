import { FileRoute } from "@tanstack/react-router";

export const Route = new FileRoute("/players/").createRoute({
	component: Players,
});

function Players() {
	return (
		<div>
			<h1>人物一覧</h1>
		</div>
	);
}
